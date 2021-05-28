import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AppConstants } from "src/app/Helpers/Constants";
import { AllModulesService } from "../../all-modules.service";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.css"],
})
export class StudentsListComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstStudents: any[];
  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit() {
    this.loadStudents();
    this.dtOptions = {
      "searching": true,
      pageLength: 10,
      dom: "lrtip",
    };
  }

  async loadStudents() {
    let Users = await this.srvModuleService.performRequest(AppConstants.getAllStudents,AppConstants.method.get, null);
    console.log(Users);
    if(Users[AppConstants.res.status] == 1){
      this.lstStudents = Users[AppConstants.res.data];
      this.dtTrigger.next();
    }
    console.log(Users);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
