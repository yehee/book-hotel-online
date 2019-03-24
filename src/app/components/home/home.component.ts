import { Component, OnInit } from '@angular/core';
import { Room } from '../../services/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hello world'

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
