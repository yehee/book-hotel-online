import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'http://localhost/home/api';

  constructor(private http: HttpClient) { }

  getLiked(params) {
    return this.http.post<any[]>(`${this.baseUrl}/liked`, { params });
  }

  getPaymentMethod(params) {
    return this.http.post<any[]>(`${this.baseUrl}/payment-method`, { params });
  }

  getProfile(params) {
    return this.http.post<any[]>(`${this.baseUrl}/profile/get`, { params });
  }

  getReservation(params) {
    return this.http.post<any[]>(`${this.baseUrl}/my-reservations`, { params });
  }

  getPaymentHistory(params) {
    return this.http.post<any[]>(`${this.baseUrl}/payment-history`, { params });
  }

  updateProfile(params) {
    return this.http.post<any[]>(`${this.baseUrl}/profile/update`, { params });
  }
}
