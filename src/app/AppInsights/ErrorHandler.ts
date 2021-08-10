import {  
    ErrorHandler,  
    Injector,  
    Injectable  
} from '@angular/core';  
import {  
    ApplicationInsightsService  
} from './ApplicationInsightsService';  
@Injectable()  
export class ApplicationInsightsErrorHandler implements ErrorHandler {  
    constructor(private injector: Injector) {}  
    handleError(error: any): void {  
        console.log("logging the error: " , error);  
        this.injector.get < ApplicationInsightsService > (ApplicationInsightsService).logException(error);  
    }  
}  