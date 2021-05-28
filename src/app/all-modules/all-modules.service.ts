import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
// import { AllModulesData } from "src/assets/all-modules-data/all-modules-data";
import { id } from "src/assets/all-modules-data/id";
import { AppConstants, AppSettings } from "../Helpers/Constants";
import { ProgressService } from "../Helpers/progress.service";
import { ToastrService } from "ngx-toastr";
import { CustomResponse } from "../models/CustomResponse";

@Injectable({
  providedIn: "root",
})
export class AllModulesService {


  constructor(private toastr: ToastrService, private http: HttpClient, private progressService: ProgressService) { }

  // Handling Errors
  private handleError(error: any) {
    return throwError(error);
  }

  onResError(err: any){
    this.progressService.closeTheDialog();
    console.log("THE ERROR2 GET: ", err);
    AppSettings.isBusy = false;
    this.toastr.error(err.message);
    return new CustomResponse(0, null, err.message);
  }

  onResData(data: any){
    AppSettings.isBusy = false;
    this.progressService.closeTheDialog();
    if (data != null) {
      if (data[AppConstants.res.status] == 0) {
        this.toastr.warning(data['Error']);
      }
      return data;
    } else {
      this.toastr.warning("data is null");
      return new CustomResponse(0, null, "Data is empty")
    }
  }



  async performRequest(url: string, method: String, body: any) {
    if (method == AppConstants.method.get) {
      AppSettings.isBusy = true
      this.progressService.openDialog("Loading");
      return await this.httpGetMethod(url).then((data) => {
        return this.onResData(data);
      }).catch((err) => {
        return this.onResError(err);
      });
    }
    // post is here
    else if (method == AppConstants.method.post) {
      this.progressService.openDialog("Loading");
      return await this.httpPostMethod(url, body).then((data) => {
        return this.onResData(data);
      }).catch((err) => {
        return this.onResError(err);
      });
    }

  }

  async httpGetMethod(url: string) {
    let headerss = this.getHeaders();
    try {
        let response = await this.http.get(url).toPromise();
        if (response[AppConstants.res.status] == 1 || response[AppConstants.res.status] == 0) {
          console.log(JSON.stringify(response));
            return response;
        } else {
          return new CustomResponse(0, null, response.toString());
        }
    }
    catch (error) {
      console.log(error.message);
      return new CustomResponse(0, null, error.message);
    }
}

  async httpPostMethod(url: string, body: any) {
    let headerss = this.getHeaders();
    let bodyJson = JSON.stringify(body);
    console.log("sending body: " + bodyJson);
    try {
        let response = await this.http.post(url, bodyJson, { headers: headerss }).toPromise();
        console.log("response post: " + JSON.stringify(response));
        if (response[AppConstants.res.status] == 1 || response[AppConstants.res.status] == 0) {
            return response;
        }else {
            return new CustomResponse(0, null, response.toString());
        }
    }
    catch (error) {
      console.log("exception post: " + error.message);
      return new CustomResponse(0, null, error.message);
    }
}









  // Api Methods for All modules

  public apiurl;

  // Headers Setup
  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };



  getHeaders() {
    var headersx: HttpHeaders;
    headersx = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    return headersx;
}








  // Get Method Api
  get(type) {
    this.apiurl = `api/${type}`;
    return this.http
      .get<any[]>(this.apiurl)
      .pipe(tap(), catchError(this.handleError));
  }

  // Post Method Api
  add(user: any, type): Observable<any> {
    this.apiurl = `api/${type}`;
    user.id = null;
    return this.http
      .post<any>(this.apiurl, user, this.httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  // Update Method Api
  update(user: any, type): Observable<any> {
    this.apiurl = `api/${type}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // Delete Method Api
  delete(id: id, type): Observable<id> {
    this.apiurl = `api/${type}`;
    const url = `${this.apiurl}/${id}`;
    return this.http
      .delete<id>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
