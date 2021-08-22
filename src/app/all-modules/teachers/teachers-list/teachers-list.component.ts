import { Component, OnInit, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AppConstants } from "src/app/Helpers/Constants";
import { AllModulesService } from "../../all-modules.service";

@Component({
  selector: "app-teachers-list",
  templateUrl: "./teachers-list.component.html",
  styleUrls: ["./teachers-list.component.css"],
})
export class TeachersListComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstTeachers: any[];
  dummy: String;
  public url: any = "teachersList";
  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit() {
    this.loadTeachers();
    this.dtOptions = {
      "searching": true,
      pageLength: 10,
      dom: "lrtip",
    };
  }
  // Get teachers List  Api Call
    async loadTeachers() {
      let Users = await this.srvModuleService.performRequest(AppConstants.getAllTeachers,AppConstants.method.get, null);
      console.log(Users);
      if(Users[AppConstants.res.status] == 1){
        this.lstTeachers = Users[AppConstants.res.data];
        this.dtTrigger.next();
      }
      console.log(Users);
    }
  
    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }
}
