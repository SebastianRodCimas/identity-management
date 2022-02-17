import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

interface AuthentificationResponse{
  status: boolean;
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  redirectUrl = '/';

  constructor() { }

  static isLoggedIn(){
    const token =  AuthentificationService.getToken();
    console.log('token=' + token);
    return !! token && ! AuthentificationService.isTokenExpired(token);
  }

  static isTokenExpired(token: string){
    /*
    try{
      const decoded = jwt_decode(token);
      return decoded.exp < Date.now() / 1000;
    }
    catch (err){
      return false;
    }
     */
    return false;
  }

  static setToken(idToken: string){
    sessionStorage.setItem('id_token', idToken);
  }

  static getToken(){
    return sessionStorage.getItem('id_token');
  }

  static logout(){
    sessionStorage.removeItem('id_token');
  }

  loginWithRole(username, password, role): Observable< AuthentificationResponse>{
    /*
    const url = `${this.authenticationUrl}/login`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.request<AuthenticationResponse>('POST', url, {
      body: {
        username,
        password,
        role
      },
      headers: HttpOptions.headers
    }).pipe(
      tap((data: AuthenticationResponse)
      => AuthenticationService.setToken(data.token))
    );
    */

    const response:  AuthentificationResponse = {status: true, message: 'HTTP 200', token: 'atoken'};
    AuthentificationService.setToken('token');
    return of(response);
  }
}
