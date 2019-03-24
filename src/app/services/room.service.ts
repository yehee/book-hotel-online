import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  baseUrl = 'http://localhost/hotel';
  rooms: [];

  constructor(private http: HttpClient) {}

  getRoom(id): Observable<Object[]> {
    return this.http.post<any>(`${this.baseUrl}/room`, { id })
    // return this.http.get(`${this.baseUrl}/room`).pipe( // use the HttpClient get() method to fetch the data from the server side
    //   map((res) => {
    //     this.rooms = res['data'];
    //     return this.rooms;
    //   }),
    //   catchError(this.handleError)
    // )
  }
}
