import { Injectable } from '@angular/core';


import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public router: Router) {
        console.log("in interseptor");
     }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("in interseptor");
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log("interseptor:" , event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log("interseptor:" , error);
                return throwError(error);
            }));
    }
}