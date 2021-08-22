import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AllModulesService } from "../../all-modules.service";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { Address, Student } from "src/app/models/Student";
import { AppConstants } from "src/app/Helpers/Constants";
import { CustomRequest, CustomResponse } from "src/app/models/CustomResponse";
import { HttpClient, HttpEventType, HttpRequest } from "@angular/common/http";

@Component({
  selector: "app-students-add",
  templateUrl: "./students-add.component.html",
  styleUrls: ["./students-add.component.css"],
})
export class StudentsAddComponent implements OnInit {
  @ViewChild('takeInput', {static: false})
  InputVar: ElementRef;
  public addStudentsForm: FormGroup;
  file: any;
  progress: Number;
  sections: String[] = AppConstants.sections;
  allClasses: String[] = AppConstants.classes;
  public student: Student;
  public pipe = new DatePipe("en-US");
  constructor(
    private formBuilder: FormBuilder,
    private srvModuleService: AllModulesService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.student = new Student();
    this.addStudentsForm = this.formBuilder.group({
      Name: ["", [Validators.required]],
      AdmissionNo: ["", [Validators.required]],
      Gender: ["", [Validators.required]],
      DateOfBirth: ["", [Validators.required]],
      Class: ["", [Validators.required]],
      Section: ["", [Validators.required]],
      FatherName: ["", [Validators.required]],
      MotherName: ["", [Validators.required]],
      MotherPh: ["", [Validators.required]],
      FatherPh: ["", [Validators.required]],
      TotalPaidFee: ["", [Validators.required]],
      DateOfJoining: ["", [Validators.required]],
      Email: [""],
      FatherOccupation: [""],
      MotherOccupation: [""],
      PermanentAddress: [""],
      CurrentAddress: [""],
    });
  }



  handleFileInput($event, file) {
    this.file = file;
    console.log(this.file[0].size);
    if (!this.addStudentsForm.valid) {
      this.file = file;
      this.uploadImage();
    }else{
      this.InputVar.nativeElement.value = "";
      this.toastr.warning("Please fill all mandatory fields before uploading image");
    }
    
  }

  uploadImage() {
    if (!this.addStudentsForm.valid) {
      console.log(this.file);
      if (this.file.length === 0) {
        return;
      }

      const formData = new FormData();
      var AddForm = this.addStudentsForm.value;

      let fName = AddForm.Name.replace(/\s/g, "");;
      let Adno = AddForm.AdmissionNo.trim();
      let cls = AddForm.Class.trim();
      let sec = AddForm.Section.trim();
      let fPh = AddForm.FatherPh.trim();
      let finalStr = fName + Adno + cls + sec + fPh;

      formData.append("FileData", this.file[0]);
      formData.append("FileName", finalStr.trim());
      formData.append("FileType", this.file[0].type);
      formData.append("FileFrom", "student_profile");
      console.log("key", formData.get("FileName"));


      const uploadReq = new HttpRequest('POST', AppConstants.fileUpload, formData, {
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
  async addStudents() {
    var pAdd = new Address();
    var cAdd = new Address();
    var AddForm = this.addStudentsForm.value;
    pAdd.FullAddress = AddForm.PermanentAddress;
    cAdd.FullAddress = AddForm.CurrentAddress;

    this.student.Name = AddForm.Name;
    this.student.AdmissionNo = AddForm.AdmissionNo;
    this.student.Gender = AddForm.Gender;
    this.student.DateOfBirth = AddForm.DateOfBirth;
    this.student.Class = AddForm.Class;
    this.student.Section = AddForm.Section;
    this.student.FatherName = AddForm.FatherName;
    this.student.FatherPh = AddForm.FatherPh;
    this.student.MotherName = AddForm.MotherName;
    this.student.MotherPh = AddForm.MotherPh;
    this.student.DateOfJoining = AddForm.DateOfJoining;
    this.student.TotalPaidFee = AddForm.TotalPaidFee;
    this.student.FatherOccupation = AddForm.FatherOccupation;
    this.student.MotherOccupation = AddForm.MotherOccupation;
    this.student.Email = AddForm.Email;
    this.student.CurrentAddress = cAdd
    this.student.PermanentAddress = pAdd;

    var stuBody = new CustomRequest(this.student);

    if (this.addStudentsForm.valid) {
      var response = await this.srvModuleService.performRequest(AppConstants.addStudent, AppConstants.method.post, stuBody);
      if (response[AppConstants.res.status] == 1) {
        //TODO: clear FormBuilder
        this.toastr.success("Students added sucessfully...!", "Success");
        this.router.navigateByUrl("/students/students-list")

      }
    }else{
      this.toastr.warning("Please fill all mandatory fields");
    }
  }
}
