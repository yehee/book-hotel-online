import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService} from '../../services/reservation.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  id = '';
  room = [];
        
  constructor(private roomService: RoomService, private reservationService: ReservationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getRoom(this.id);
  }

  getRoom(id): void {
    console.log(id)
    this.roomService.getRoom(id).subscribe(
      (res: any[]) => {
        console.log(res);
        this.room = res['data'];
        console.log(this.room);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  reserve(event): void {
    event.preventDefault(); 
    const target = event.target;
    const checkin = target.querySelector('#checkin').value;
    const checkout = target.querySelector('#checkout').value;
    const fname = target.querySelector('#fname').value;
    const lname = target.querySelector('#lname').value;
    const phone = target.querySelector('#phone').value;
    const param = {
      checkin: checkin,
      checkout: checkout,
      fname: fname,
      lname: lname,
      phone: phone,
      room: this.id
    }
    this.reservationService.makeReservation(param).subscribe(data => {
      const ne: NavigationExtras = {
        state: {
          data: data
        }
      };
      console.log(data)
      this.router.navigate(['confirmation'], ne);
    });
  }

}
