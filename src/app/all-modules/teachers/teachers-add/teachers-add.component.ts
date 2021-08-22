import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { AllModulesService } from "../../all-modules.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Address, Student } from "src/app/models/Student";
import { HttpClient, HttpEventType, HttpRequest } from "@angular/common/http";
import { AppConstants } from "src/app/Helpers/Constants";
import { CustomRequest } from "src/app/models/CustomResponse";
import { Teacher } from "src/app/models/Teacher";

@Component({
  selector: "app-teachers-add",
  templateUrl: "./teachers-add.component.html",
  styleUrls: ["./teachers-add.component.css"],
})
export class TeachersAddComponent implements OnInit {
  @ViewChild('takeInput', {static: false})
  InputVar: ElementRef;
  addTeacherForm: FormGroup;
  file: any;
  progress: Number;
  _imageUrl = "";
  public teacher: Teacher;
  public pipe = new DatePipe("en-US");
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.teacher = new Teacher();
    this.addTeacherForm = this.formBuilder.group({
      TeacherId: ["", [Validators.required]],
      Name: ["", [Validators.required]],
      Gender: ["", [Validators.required]],
      DateOfBirth: ["", [Validators.required]],
      TeacherPh: ["", [Validators.required]],
      DateOfJoining: ["", [Validators.required]],
      Qualification: ["", [Validators.required]],
      Experience: ["", [Validators.required]],
      isCTR: ["", [Validators.required]],
      isCTRClass: ["", [Validators.required]],
      isCTRSection: ["", [Validators.required]],
      Location: [""],
      FullAddress: [""],
      State: [""],
      Pin: [""],
      City: [""],
      Email: [""],
      Description: [""],
     
    });
  }



  handleFileInput($event, file) {
    if (this.addTeacherForm.valid) {
      this.file = file;
      console.log(this.file.fileData.size);
      console.log(this.file[0].size);
      // this.uploadImage();
    }else{
      this.InputVar.nativeElement.value = "";
      this.toastr.warning("Please fill all mandatory fields before uploading image");
    }
    
  }

  uploadImage() {
    if (this.addTeacherForm.valid) {
      console.log(this.file);
      if (this.file.length === 0) {
        return;
      }

      const formData = new FormData();
      var AddForm = this.addTeacherForm.value;

      let fName = AddForm.Name.replace(/\s/g, "");;
      let Adno = AddForm.TeacherId.trim();
      let fPh = AddForm.TeacherPh.trim();
      let finalStr = fName + Adno + fPh;

      formData.append("FileData", this.file[0]);
      formData.append("FileName", finalStr.trim());
      formData.append("FileType", this.file[0].type);
      formData.append("FileFrom", "teacher_profile");
      console.log("key", formData.get("FileName"));


      const uploadReq = new HttpRequest('POST', `api/FileUpload`, formData, {
        reportProgress: true,
      });

      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log(this.progress);
        }
        console.log(event);
      });
    }else{
      this.toastr.warning("Please fill all mandatory fields before uploading image");
    }

  }

  // Add students submit call
  async addTeachers() {
    var pAdd = new Address();
    var AddForm = this.addTeacherForm.value;
    pAdd.FullAddress = AddForm.FullAddress;
    pAdd.Location  = AddForm.Location;
    pAdd.State = AddForm.State;
    pAdd.City = AddForm.City;
    pAdd.Pin = AddForm.Pin;

    this.teacher.TeacherId = AddForm.TeacherId;
    this.teacher.FirstName = AddForm.Name;
    this.teacher.Gender = AddForm.Gender;
    this.teacher.DateOfBirth = AddForm.DateOfBirth;
    this.teacher.TeacherPh = AddForm.TeacherPh;
    this.teacher.DateOfJoining = AddForm.DateOfJoining;
    this.teacher.Qualification = AddForm.Qualification;
    this.teacher.Experience = AddForm.Experience;
    this.teacher.isCTR = true;
    if(this.teacher.isCTR){
      this.teacher.isCTRClass = AddForm.isCTRClass;
      this.teacher.isCTRSection = AddForm.isCTRSection;
    }
    this.teacher.PermanentAddress = pAdd
    this.teacher.ImageUrl = this._imageUrl
    this.teacher.Email = AddForm.Email;
    this.teacher.Description = AddForm.Description;

    var teacherBody = new CustomRequest(this.teacher);

    if (this.addTeacherForm.valid) {
      var response = await this.srvModuleService.performRequest(AppConstants.addTeacher, AppConstants.method.post, teacherBody);
      if (response[AppConstants.res.status] == 1) {
        //TODO: clear FormBuilder
        this.toastr.success("Teacher added sucessfully...!", "Success");

      }
    }
    else{
      this.toastr.warning("Please fill all mandatory fields before uploading image");
    }
  }
}
