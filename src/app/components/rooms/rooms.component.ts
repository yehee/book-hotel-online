import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RoomsService } from '../../services/rooms.service';

interface Date {
  checkin: string,
  checkout: string,
  size: number
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})

export class RoomsComponent implements OnInit {
  rooms = [];

  constructor(private roomsService: RoomsService, private router: Router) {}

  ngOnInit(): void {}

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
      const extras: NavigationExtras = {
        state: data
      };
      this.router.navigate(['available'], extras);
    });
  }
}
