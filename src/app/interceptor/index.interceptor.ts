import { HTTP_INTERCEPTORS , HttpClientModule} from '@angular/common/http';
import { HttpConfigInterceptor } from './httpconfig.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
];