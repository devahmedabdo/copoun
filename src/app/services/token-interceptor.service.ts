
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  /**
 * 1) ng g s/services nameosservice (tokenInterceptor)
 * 
 * 2) app.module 
 *  import HTTP_INTERCEPTORS
 *  go to providers
 * 
 *  {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
 */
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //getProfile --> httpRequest (req) old request before token
    let token = localStorage.getItem('token');

    // clone --> copy of request and now i will add token
    // new req --> request after token
    let newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(newReq);
  }
}
