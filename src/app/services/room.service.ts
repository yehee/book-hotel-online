import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl = 'http://localhost/hotel';
  rooms: Room[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Room[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe( // use the HttpClient get() method to fetch the data from the server side
      map((res) => {
        this.rooms = res['data'];
        return this.rooms;
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
