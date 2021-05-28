import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { AppConstants } from "src/app/Helpers/Constants";
import { CustomRequest } from "src/app/models/CustomResponse";
import { AllModulesService } from "../../all-modules.service";

@Component({
  selector: "app-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.css"],
})
export class SubjectsListComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: true })
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public lstSubjects: any[];
  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit() {
    this.loadSubjects();
    this.dtOptions = {
      "searching": true,
      pageLength: 10,
      dom: "lrtip",
    };
  }

  async loadSubjects() {
    let Users = await this.srvModuleService.performRequest(AppConstants.getSubjects,AppConstants.method.get, null);
    console.log(Users);
    if(Users[AppConstants.res.data] != null){
      this.lstSubjects = Users[AppConstants.res.data];
      this.dtTrigger.next();
    }
    console.log(Users);
  }

  async onDelete(index: number){
    console.log(index);
    var subjectBody = new CustomRequest(this.lstSubjects[index]);
    let Users = await this.srvModuleService.performRequest(AppConstants.deleteSubject,AppConstants.method.post, subjectBody);
    if(Users[AppConstants.res.data] != null){
      this.lstSubjects.splice(index, 1);
      // this.dtTrigger.next();
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
