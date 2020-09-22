import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {

    let params = new HttpParams()
      .append('page', '1');


    return this.http.get(`https://reqres.in/api/user`, {
      params
    }).pipe(
      map(resp => resp['data'])
    );
  }
}
