import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe, formatDate } from "@angular/common";
import { AllModulesService } from "../../all-modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AppConstants } from "src/app/Helpers/Constants";
import { Teacher } from "src/app/models/Teacher";
import { SubjectModel } from "src/app/models/Subjects";
import { CTSModel } from "src/app/models/CTSModel";
import { CustomRequest } from "src/app/models/CustomResponse";
import { TimeTable2, WeekSubjects } from "src/app/models/TimeTable";

@Component({
  selector: "app-timetable-add",
  templateUrl: "./timetable-add.component.html",
  styleUrls: ["./timetable-add.component.css"],
})
export class TimetableAddComponent implements OnInit {
  public addTimetableForm: FormGroup;
  allClasses: String[] = AppConstants.classes;
  sections: String[] = AppConstants.sections;
  classValue: String;
  isSaved: boolean = false;
  sectionValue: String;
  classTeacher: Teacher;
  subjects: SubjectModel[];
  ctsModel: CTSModel[] = [];
  apiCTSModel: CTSModel[] = [];
  allTeachers: Teacher[] = [];
  timeTableArray2: TimeTable2[] = [];
  state: any;

  public pipe = new DatePipe("en-US");
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private router: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {
    
   this.state = this.route.getCurrentNavigation().extras.state
    
  }

  async onSubmitClicked(){
    var ctsBody = new CustomRequest(this.ctsModel);
    console.log(this.ctsModel);
    var response = await this.srvModuleService.performRequest(AppConstants.addCTS, AppConstants.method.post, ctsBody);
      if (response[AppConstants.res.status] == 1) {
        //TODO: clear FormBuilder
        this.toastr.success("CTS added sucessfully...!", "Success");
        this.isSaved = true;
        this.getCTSforClass("no");

      }    
  }

  onFromDateChanged(i: number){
    // this.timeTableArray2[i].FromTime = formatDate(new Date(), 'HH:mm', 'en_US');
    // this.timeTableArray2[i].EndTime = formatDate(new Date(), 'HH:mm', 'en_US');
    console.log(this.timeTableArray2[i].FromTime);
  }

  async onTimeTableSubmitted(){
    var ttBody = new CustomRequest(this.timeTableArray2);
    console.log(this.timeTableArray2);
    var response = await this.srvModuleService.performRequest(AppConstants.addTimeTable, AppConstants.method.post, ttBody);
      if (response[AppConstants.res.status] == 1) {
        this.toastr.success("Time table added sucessfully...!", "Success");
      }    
  }

  ngOnInit() {
    this.classValue   = this.state.std;
    this.sectionValue = this.state.section;
    this.classTeacher = this.state.teacher;
    this.addTimetableForm = this.formBuilder.group({
      teacherId: ["", [Validators.required]],
      name: ["", [Validators.required]],
      class: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      date: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
    });
    this.getCTSforClass("yes");
    this.getAllTeachers();
    this.addRow();
    
  }

  addRow() {
    let newVal2 = new TimeTable2();
    newVal2.Std = this.classValue;
    newVal2.Section = this.sectionValue;
    newVal2.UploadedById = "Admin";
    newVal2.weekSub = [];
    var w1 = new WeekSubjects();
    var w2 = new WeekSubjects();
    var w3 = new WeekSubjects();
    var w4 = new WeekSubjects();
    var w5 = new WeekSubjects();
    var w6 = new WeekSubjects();
    w1.Week = "Monday";
    w2.Week = "Tuesday";
    w3.Week = "Wednesday";
    w4.Week = "Thursday";
    w5.Week = "Friday";
    w6.Week = "Saturday";
  
    newVal2.weekSub.push(w1);
    newVal2.weekSub.push(w2);
    newVal2.weekSub.push(w3);
    newVal2.weekSub.push(w4);
    newVal2.weekSub.push(w5);
    newVal2.weekSub.push(w6);
    this.timeTableArray2.push(newVal2);  
    this.toastr.success('New row added successfully', 'New Row');  
    return true;  
}  

deleteRow(index) {  
  if(this.timeTableArray2.length == 1) {  
    this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;  
  } else {  
      this.timeTableArray2.splice(index, 1);  
      this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;  
  }  
} 

onTimeTableSubjectChanged(event: any, index: number){
  console.log(this.timeTableArray2[index]);
}

  async getCTSforClass(from: String){
    let res = await this.srvModuleService.performRequest(AppConstants.getCTS + "?std="+this.classValue+"&section="+this.sectionValue,AppConstants.method.get, null);
    console.log(res);
    if(res[AppConstants.res.status] == 1){
      this.apiCTSModel = res[AppConstants.res.data];
      console.log("apictsmodelll", this.apiCTSModel);
      
      if(from == "yes"){
        this.getSubjects();
      }else{
        this.ctsModel = this.apiCTSModel;
        this.timeTableArray2 = [];
        this.addRow();
      }
      
    }else{
      this.apiCTSModel = [];
      
      if(from == "yes"){
        this.getSubjects();
      }
    }
  }

  getSubjectBtId(id:String){
    let sub = this.subjects.filter(e => e.Id == id);
    if(sub.length > 0){
      return sub[0].Subject;
    }
  }

  async getSubjects(){
    let res = await this.srvModuleService.performRequest(AppConstants.getSubjects,AppConstants.method.get, null);
    console.log(res);
    if(res[AppConstants.res.status] == 1){
      this.subjects = res[AppConstants.res.data];
      this.subjects = this.subjects.sort((a, b) => (a.SubjectCode < b.SubjectCode ? -1 : 1));
      this.ctsModel = [];
      for(var sub of this.subjects){
        let cts = new CTSModel();
        cts.Section = this.sectionValue;
        cts.Std = this.classValue;
        cts.SubjectId = sub.Id;
        if(this.apiCTSModel.length > 0){
            this.isSaved = true;
            let found = this.apiCTSModel.filter(e => ((e.SubjectId == sub.Id)));
            if(found.length > 0){
              cts.TID = found[0].TID;
              cts.Id = found[0].Id;
            }
        }else{
          
        }
        this.ctsModel.push(cts);
      }

    }else{
      this.subjects = null;
    }
  }

  async getAllTeachers(){
    let res = await this.srvModuleService.performRequest(AppConstants.getAllTeachers,AppConstants.method.get, null);
    console.log(res);
    if(res[AppConstants.res.status] == 1){
      this.allTeachers = res[AppConstants.res.data];
      this.allTeachers = this.allTeachers.sort((a, b) => (a.FirstName < b.FirstName ? -1 : 1));
    }else{
      this.allTeachers = [];
    }
  }

  onTeacherChanged(tid:any, ctsIndex: number){
      this.ctsModel[ctsIndex].TID = tid; 
      console.log(this.ctsModel[ctsIndex]);
  }

  // Add timetable submit call
  addTimetable() {
   
  }
}
