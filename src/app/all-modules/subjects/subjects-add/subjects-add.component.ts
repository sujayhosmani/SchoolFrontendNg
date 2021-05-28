import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { AllModulesService } from "../../all-modules.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SubjectModel } from "src/app/models/Subjects";
import { CustomRequest } from "src/app/models/CustomResponse";
import { AppConstants } from "src/app/Helpers/Constants";

@Component({
  selector: "app-subjects-add",
  templateUrl: "./subjects-add.component.html",
  styleUrls: ["./subjects-add.component.css"],
})
export class SubjectsAddComponent implements OnInit {
  public addSubjectsForm: FormGroup;
  public url = "subjectsList";
  public subject: SubjectModel;
  public pipe = new DatePipe("en-US");
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Add subjects form validation
    this.subject = new SubjectModel();
    this.addSubjectsForm = this.formBuilder.group({
      SubjectCode: ["", [Validators.required]],
      Subject: ["", [Validators.required]],
    });
  }

  // Add subjects submit call
  async addSubjects() {
    this.subject.Subject = this.addSubjectsForm.value.Subject;
    this.subject.SubjectCode = this.addSubjectsForm.value.SubjectCode

    var subjectBody = new CustomRequest(this.subject);
    console.log(this.subject);
    if (this.addSubjectsForm.valid) {
      var response = await this.srvModuleService.performRequest(AppConstants.addSubject, AppConstants.method.post, subjectBody);
      if (response[AppConstants.res.status] == 1) {
        //TODO: clear FormBuilder
        this.toastr.success("Students added sucessfully...!", "Success");
        this.addSubjectsForm.reset();

      }
    }
  }
}
