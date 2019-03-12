import { Component, OnInit } from '@angular/core';

import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'hotel';

  rooms: Room[];
  error = '';
  success = '';
        
  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomService.getAll().subscribe(
      (res: Room[]) => {
        this.rooms = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
