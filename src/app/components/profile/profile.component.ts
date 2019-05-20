import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  phone = '7789887498';
  liked = [];
  creditcards = [];
  reservations = [];
  payments = [];

  constructor(private profileService: ProfileService) {
    this.liked = localStorage.getItem('liked') == null ? [] : JSON.parse(localStorage.getItem('liked'));
    this.creditcards = localStorage.getItem('creditcards') == null ? [] : JSON.parse(localStorage.getItem('creditcards'));
    this.reservations = localStorage.getItem('reservations') == null ? [] : JSON.parse(localStorage.getItem('reservations'));
    this.payments = localStorage.getItem('payments') == null ? [] : JSON.parse(localStorage.getItem('payments'));
  }

  ngOnInit() {
    this.profileService.getLiked(this.phone).subscribe(
      (res: any[]) => {
        // console.log(res);
        this.liked = res['data'];
        // console.log(this.liked);
        localStorage.removeItem('liked');
        localStorage.setItem('liked', JSON.stringify(this.liked));
      },
      (err) => {
        console.error(err);
      }
    );
    this.profileService.getPaymentMethod(this.phone).subscribe(
      (res: any[]) => {
        console.log(res);
        this.creditcards = res['data'];
        console.log(this.creditcards);
        localStorage.removeItem('creditcards');
        localStorage.setItem('creditcards', JSON.stringify(this.creditcards));
      },
      (err) => {
        console.error(err);
      }
    );
    this.profileService.getReservation(this.phone).subscribe(
      (res: any[]) => {
        console.log(res);
        this.reservations = res['data'];
        console.log(this.reservations);
        localStorage.removeItem('reservations');
        localStorage.setItem('reservations', JSON.stringify(this.reservations));
      },
      (err) => {
        console.error(err);
      }
    );
    this.profileService.getPaymentHistory(this.phone).subscribe(
      (res: any[]) => {
        console.log(res);
        this.payments = res['data'];
        console.log(this.payments);
        localStorage.removeItem('payments');
        localStorage.setItem('payments', JSON.stringify(this.payments));
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
