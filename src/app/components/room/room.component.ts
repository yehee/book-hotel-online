import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ReservationService} from '../../services/reservation.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  id = ''; room = []; reviews = [];
        
  constructor(private reviewService: ReviewService, private roomService: RoomService, private reservationService: ReservationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getRoom(this.id);
    this.getReviews(this.id);
  }

  getRoom(id): void {
    console.log(id)
    this.roomService.getRoom(id).subscribe(
      (res: any[]) => {
        this.room = res['data'];
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getReviews(id): void {
    this.reviewService.getReviewsPer(id).subscribe(
      (res: any[]) => {
        console.log(res);
        this.reviews = res['data'];
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
      console.log(data);
      this.router.navigate(['confirmation'], ne);
    });
  }

}
