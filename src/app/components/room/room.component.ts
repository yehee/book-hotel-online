import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  id = '';
  room = [];
        
  constructor(private roomService: RoomService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getRoom(this.id);
  }

  getRoom(id): void {
    console.log(id)
    this.roomService.getRoom(id).subscribe(
      (res: any[]) => {
        this.room = res['data'];
        console.log(this.room);
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
