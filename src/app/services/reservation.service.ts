import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  baseUrl = 'http://localhost/home/api';

  constructor(private http: HttpClient) { }

  makeReservation(params) {
    return this.http.post<any[]>(`${this.baseUrl}/reservation`, { params });
  }

  getStatistics() {
    return this.http.get<any[]>(`${this.baseUrl}/statistics`);
  }
}
