import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RoomsService } from '../../services/rooms.service';

interface Date {
  checkin: string,
  checkout: string,
  size: number
}

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {
  rooms = [];

  constructor(private roomsService: RoomsService, private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      this.rooms = state.data;
      // console.log(state);
      localStorage.removeItem('rooms');
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    }
    // this.rooms = nav.extras.state ? nav.extras.state.data : this.rooms;
    // console.log(nav.extras.state ? nav.extras.state : "undefined");
  }

  ngOnInit(): void {
    this.rooms = JSON.parse(localStorage.getItem('rooms')) === null ? [] : JSON.parse(localStorage.getItem('rooms'));
  }

  ngOnDestroy(): void {
    // localStorage.removeItem('rooms');
  }

  getRooms(event): void {
    event.preventDefault(); 
    const target = event.target;
    const checkin = target.querySelector('#checkin').value;
    const checkout = target.querySelector('#checkout').value;
    const size = target.querySelector('#size').value;
    const date: Date = {
      checkin: checkin,
      checkout: checkout,
      size: size
    }
    this.roomsService.getAvailableRooms(date).subscribe(data => {
      // const extras: NavigationExtras = {
      //   state: data
      // };
      // this.router.navigate(['available'], extras);
      this.rooms = data['data'];
      console.log(data);
      localStorage.removeItem('rooms');
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
    });
  }
}
