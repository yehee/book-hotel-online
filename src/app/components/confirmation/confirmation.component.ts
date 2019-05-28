import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  rid = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state;
    this.rid = state ? state.data.data.rid : this.rid;
  }

  ngOnInit() { //redirects the page in n seconds
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);  //5s
  }
}
