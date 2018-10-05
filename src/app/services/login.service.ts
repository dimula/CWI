import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { LoginRequest } from '../models/loginRequest';
import { LoginResponse } from '../models/loginResponse';
import { CASES, Case, CASES_RESPONSE } from '../models/casesMock';

const httpOptions ={
  headers: new HttpHeaders ({
    //'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

const commonnUrl: string = `http://localhost/meiwi/`;
const loginUrl: string = commonnUrl + `api/auth/qics`;
//const casesUrl: string = commonnUrl + `api/cases?ActiveScreen=0`;
//const loginUrl: string = `api/auth/qics`;
const casesUrl: string = `api/cases`;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(loginUrl, loginRequest, httpOptions);
    //return of(new LoginResponse());
  }

  test(): Observable<Case[]>{ 
    return of(CASES);
    //return this.http.get(casesUrl);
  }
}
