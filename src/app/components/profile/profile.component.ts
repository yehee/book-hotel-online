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
  // rooms = [];

  constructor(private profileService: ProfileService) {
    this.liked = localStorage.getItem('liked') == null ? [] : JSON.parse(localStorage.getItem('liked'));
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
  }

}
