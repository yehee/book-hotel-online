import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = 'http://localhost/home/api/reviews';

  constructor(private http: HttpClient) { }

  getAvg() {
    return this.http.get<any[]>(`${this.baseUrl}/avg`);
  }

  getSummary() {
    return this.http.get<any[]>(`${this.baseUrl}/summ`);
  }

  getReviews() {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

}
