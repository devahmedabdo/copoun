import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UsersResponse } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CouponsResponse } from '../interfaces/coupon';
let apiUrl = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getAllUser(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(apiUrl + 'users');
  }
  getUser(email: any): Observable<any> {
    return this.http.get<any>(apiUrl + 'searchuser', email);
  }
  getAllCoupons(type: string): Observable<CouponsResponse> {
    return this.http.get<CouponsResponse>(apiUrl + type);
  }
  addCoupons(data: any) {
    return this.http.post(apiUrl + 'coupon', data);
  }
  downloadData() {
    return this.http.get(apiUrl + 'exportdata');
  }

  constructor(private http: HttpClient) {}
}
