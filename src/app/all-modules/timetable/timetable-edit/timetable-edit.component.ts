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
import { FullTimeTable, TimeTable2, WeekSubjects } from "src/app/models/TimeTable";

@Component({
  selector: "app-timetable-edit",
  templateUrl: "./timetable-edit.component.html",
  styleUrls: ["./timetable-edit.component.css"],
})
export class TimetableEditComponent implements OnInit {
  public addTimetableForm: FormGroup;
  allClasses: String[] = AppConstants.classes;
  sections: String[] = AppConstants.sections;
  classValue: String;
  fullTimeTable: FullTimeTable;
  from: String = "";
  sectionValue: String;
  classTeacher: Teacher;
  allSubjects: SubjectModel[];
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

  getSubjectById(id:String){
    let sub = this.allSubjects.filter(e => e.Id == id);
    if(sub.length > 0){
      return sub[0].Subject;
    }
  }

  async onTimeTableSubmitted(){
    var ttBody = new CustomRequest(this.timeTableArray2);
    console.log(this.timeTableArray2);
    var response = await this.srvModuleService.performRequest(AppConstants.addTimeTable, AppConstants.method.post, ttBody);
      if (response[AppConstants.res.status] == 1) {
        this.toastr.success("Time table added sucessfully...!", "Success");
        this.route.navigateByUrl("/timetable/timetable-main");
      }    
  }

  onTeacherChanged(tid:any, ctsIndex: number){
    this.apiCTSModel[ctsIndex].TID = tid; 
    console.log(this.apiCTSModel[ctsIndex]);
}

async onSubmitClicked(){
  var ctsBody = new CustomRequest(this.apiCTSModel);
  console.log(this.apiCTSModel);
  var response = await this.srvModuleService.performRequest(AppConstants.addCTS, AppConstants.method.post, ctsBody);
    if (response[AppConstants.res.status] == 1) {
      //TODO: clear FormBuilder
      this.toastr.success("CTS added sucessfully...!", "Success");
      // window.history = - 1;
    }    
}


  ngOnInit() {
    this.classValue   = this.state.std;
    this.sectionValue = this.state.section;
    this.classTeacher = this.state.teacher;
    this.fullTimeTable = this.state.fullTimeTable;
    this.allTeachers = this.fullTimeTable.teacher;
    this.allSubjects = this.fullTimeTable.subjects;
    this.apiCTSModel = this.fullTimeTable.ctsModel;
    this.timeTableArray2 = this.fullTimeTable.timeTable;
    this.from = this.state.from;
    console.log(this.allTeachers);
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


}
