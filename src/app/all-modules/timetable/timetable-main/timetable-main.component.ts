import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { DataTableDirective } from "angular-datatables";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { AppConstants } from "src/app/Helpers/Constants";
import { CTSModel } from "src/app/models/CTSModel";
import { SubjectModel } from "src/app/models/Subjects";
import { Teacher } from "src/app/models/Teacher";
import {  FullTimeTable, TimeTable2 } from "src/app/models/TimeTable";
import { AllModulesService } from "../../all-modules.service";

@Component({
  selector: "app-timetable-main",
  templateUrl: "./timetable-main.component.html",
  styleUrls: ["./timetable-main.component.css"],
})
export class TimetableMainComponent implements OnInit {
  
  sections: String[] = AppConstants.sections;
  classValue: String = AppConstants.defaultClass;
  sectionValue: String = AppConstants.defaultSection;
  allClasses: String[] = AppConstants.classes;
  timeTables: TimeTable2[];
  isFirstTime = true;
  fullTimeTable: FullTimeTable;
  apiCTSModel: CTSModel[];
  allTeacher: Teacher[];
  allSubjects: SubjectModel[];
  classTeacher: Teacher;
  constructor(private toastr: ToastrService, private srvModuleService: AllModulesService, private router: Router) {}

  ngOnInit() {
    this.classTeacher = new Teacher();
    this.loadData();
  }

  getSubjectBtId(id:String){
    let sub = this.allSubjects.filter(e => e.Id == id);
    if(sub.length > 0){
      return sub[0].Subject;
    }
  }

  getTeacherById(id: String){
    let sub = this.allTeacher.filter(e => e.Id == id);
    if(sub.length > 0){
      return sub[0].FirstName;
    }
  }

  getSubjectByID(id: String){
      let foundCTS = this.apiCTSModel.filter(e => e.Id == id);
      if(foundCTS.length > 0){
        let foundSub = this.allSubjects.filter(e => e.Id == foundCTS[0].SubjectId);
        if(foundSub.length > 0){
          return foundSub[0].Subject;
        }
      }
      return "NA"
  }

  // async getSubjectByID2() {
  //   for (let i = 0; i < this.timeTables.length; i++) {
  //     for (let j = 0; j < this.timeTables[i].weekSub.length; j++) {
  //       let foundCTS = this.apiCTSModel.filter(e => e.Id == this.timeTables[i].weekSub[j].CTSId);
  //       if (foundCTS.length > 0) {
  //         let foundSub = this.allSubjects.filter(e => e.Id == foundCTS[0].SubjectId);
  //         if (foundSub.length > 0) {
  //           this.timeTables[i].weekSub[j].Week = foundSub[0].Subject;
  //         }
  //       }
  //     }
  //   }

  //   return "NA"
  // }



  // Get timetable List  Api Call


  async getFullTimeTable() {
    this.fullTimeTable = null;
    this.timeTables = null;
    this.apiCTSModel = null;
    if(this.isFirstTime){
      this.allTeacher = null;
      this.allSubjects = null;
    }
    let res = await this.srvModuleService.performRequest(AppConstants.getFullTimeTable + "?isTT=true&isCTS=true&isSubject=" + this.isFirstTime +"&isTeacher=" + this.isFirstTime +"&std="+this.classValue+"&section="+this.sectionValue,AppConstants.method.get, null);
    console.log(res);
    if(res[AppConstants.res.status] == 1){
      this.fullTimeTable = res[AppConstants.res.data];

      this.timeTables = this.fullTimeTable.timeTable;
      if(this.timeTables.length == 0){
        this.timeTables = null;
      }
      this.apiCTSModel = this.fullTimeTable.ctsModel;
      if(this.isFirstTime){
        this.allTeacher = this.fullTimeTable.teacher;
        this.allSubjects = this.fullTimeTable.subjects;
        this.isFirstTime = false;
      }else{
        this.fullTimeTable.subjects = this.allSubjects;
        this.fullTimeTable.teacher = this.allTeacher;
      }
      
    }
  
  }

  onAddClicked(){
    if(this.classTeacher != null && this.timeTables == null){
      let navigationExtras: NavigationExtras = {
        queryParams: { 'std': this.classValue, 'section': this.sectionValue, 'teacher': this.classTeacher},
        fragment: 'anchor'
      };
      this.router.navigateByUrl("/timetable/timetable-add", {state: {std: this.classValue, section: this.sectionValue,teacher: this.classTeacher }});
    }else{
        if(this.classTeacher == null){
          this.router.navigateByUrl("/teachers/teachers-add");
          //this.toastr.error("Please assign class tracher for " + this.classValue + "th " + this.sectionValue);
        }else if(this.timeTables != null){
          this.router.navigateByUrl("/timetable/timetable-add");
          this.toastr.error("Already Time table present for " + this.classValue + "th " + this.sectionValue);
        }
    }
    
  }

  async getClassTeacher(){
    this.classTeacher = null;
    let res = await this.srvModuleService.performRequest(AppConstants.getCTR + "?std="+this.classValue+"&section="+this.sectionValue,AppConstants.method.get, null);
    if(res[AppConstants.res.status] == 1){
      this.classTeacher = res[AppConstants.res.data];
    }else{
      this.classTeacher = null;
    }
  }
 
  onClassChanged(alue: string){
    this.loadData();
  }

  onSectionChanged(alue: string){
    this.loadData();
  }

  onSubmitClicked(){
    this.loadData();
  }

  loadData(){
    this.getClassTeacher();
    this.getFullTimeTable();
  }

  onEditTimeTableClicked(){
    this.router.navigateByUrl("/timetable/timetable-edit", {state: {std: this.classValue, section: this.sectionValue,teacher: this.classTeacher, fullTimeTable: this.fullTimeTable, from: "time" }});
  }

  onEditCTSClicked(){
    this.router.navigateByUrl("/timetable/timetable-edit", {state: {std: this.classValue, section: this.sectionValue,teacher: this.classTeacher, fullTimeTable: this.fullTimeTable, from: "cts" }});
  }
  
  
  ngOnDestroy(): void {
    
  }
}
