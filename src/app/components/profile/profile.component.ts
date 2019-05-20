import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  rooms = [];

  constructor() {
    this.rooms = [
    {
      roomnum: 110,
      nobeds: 3,
      price: 175
    },
    {
      roomnum: 110,
      nobeds: 3,
      price: 175
    },
    {
      roomnum: 110,
      nobeds: 3,
      price: 175
    },
    {
      roomnum: 110,
      nobeds: 3,
      price: 175
    }]
  }

  ngOnInit() {
  }

}
