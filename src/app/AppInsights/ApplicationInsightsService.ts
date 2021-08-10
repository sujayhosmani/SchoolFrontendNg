import {  
    Injectable  
} from '@angular/core';  
import {  
    ApplicationInsights,  
    IExceptionTelemetry,  
    DistributedTracingModes  
} from '@microsoft/applicationinsights-web';  
import {  
    Router,  
    NavigationEnd  
} from '@angular/router';  
import {  
    filter  
} from 'rxjs/operators';  
@Injectable({  
    providedIn: 'root',  
})  
export class ApplicationInsightsService {  
    private appInsights: ApplicationInsights;  
    constructor(private router: Router) {  
        this.appInsights = new ApplicationInsights({  
            config: {  
                instrumentationKey: "14c0c034-c9a6-4fe8-9b15-edde2becea53"  
            }  
        });  
        this.appInsights.loadAppInsights();  
        this.loadCustomTelemetryProperties();  
        this.createRouterSubscription();  
    }  
    setUserId(userId: string) {  
        this.appInsights.setAuthenticatedUserContext(userId);  
    }  
    clearUserId() {  
        this.appInsights.clearAuthenticatedUserContext();  
    }  
    logPageView(name ? : string, uri ? : string) {  
        this.appInsights.trackPageView({  
            name,  
            uri  
        });  
    }  
    logException(error: Error) {  
        let exception: IExceptionTelemetry = {  
            exception: error  
        };  
        this.appInsights.trackException(exception);  
    }  
    private loadCustomTelemetryProperties() {  
        this.appInsights.addTelemetryInitializer(envelope => {  
            var item = envelope.baseData;  
            item.properties = item.properties || {};  
            item.properties["ApplicationPlatform"] = "Web";  
            item.properties["ApplicationName"] = "ApplicationName";  
        });  
    }  
    private createRouterSubscription() {  
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {  
            this.logPageView(null, event.urlAfterRedirects);  
        });  
    }  
}  