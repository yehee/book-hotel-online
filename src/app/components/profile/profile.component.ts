import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  phone = '7789887498';
  profile = {};
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

  getLiked() {
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
  }

  getPaymentMethod() {
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
  }

  getReservation() {
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
  }

  getPaymentHistory() {
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

  getProfile() {
    this.profileService.getProfile(this.phone).subscribe(
      (res: any[]) => {
        console.log(res);
        this.profile = res['data'];
        // TODO: save it to localStorage
      },
      (err) => {
        console.error(err);
      }
    );
  }

  updateProfile(event) {
    event.preventDefault();
    const target = event.target;
    const fname = target.querySelector('#fname').value;
    const lname = target.querySelector('#lname').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const profession = target.querySelector('#profession').value;
    const address = target.querySelector('#address').value;
    const address2 = target.querySelector('#address2').value;
    const city = target.querySelector('#city').value;
    const province = target.querySelector('#province').value;
    const postalCode = target.querySelector('#postalCode').value;
    const params = {
      phone: this.phone,
      fname,
      lname,
      email,
      password,
      profession,
      address : {
        address,
        address2,
        city,
        province,
        postalCode
      }
    };
    this.profileService.updateProfile(params).subscribe(
      (res: any[]) => {
        console.log(res);
        if (res) {
          window.alert('Changes are saved successfully!');
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
    this.getLiked();
    this.getPaymentMethod();
    this.getReservation();
    this.getPaymentHistory();
  }

}
