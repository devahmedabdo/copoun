import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let apiUrl = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loging(data: any) {
    return this.http.post(apiUrl + 'login', data);
  }
  signup(data: any) {
    return this.http.post(apiUrl + 'signup', data);
  }
  logout() {
    return this.http.delete(apiUrl + 'logout');
  }
  logoutAll() {
    return this.http.delete(apiUrl + 'logoutAll');
  }
}
