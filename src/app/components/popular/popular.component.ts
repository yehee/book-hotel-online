import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  rooms = [];

  constructor(private roomsService : RoomsService) { }

  ngOnInit() {
    this.getPopularRooms();
  }

  getPopularRooms() : void {
    this.roomsService.getPopularRooms().subscribe(
      (res : any[]) => {
        console.log(res);
        this.rooms = res['data'];
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
