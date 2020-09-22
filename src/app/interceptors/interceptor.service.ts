import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept')

    const headers = new HttpHeaders({
      'token-users': '648364378463846'
    })


    const reqClone = req.clone({ headers })

    return next.handle(reqClone).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    console.warn('handleError', err)
    return throwError("error :(")
  }


}
