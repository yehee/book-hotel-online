import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  baseUrl = 'http://localhost/home/api';
  rooms: [];

  constructor(private http: HttpClient) {}

  getRoom(id): Observable<Object[]> {
    return this.http.post<any>(`${this.baseUrl}/room`, { id })
  }
}
