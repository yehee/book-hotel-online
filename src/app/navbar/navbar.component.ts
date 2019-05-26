import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active = -1;

  constructor() { }

  ngOnInit() {
    this.active = localStorage.getItem("active") == null ? -1 : +localStorage.getItem("active");
  }

  setActive(active) {
    this.active = active;
    localStorage.setItem("active", active);
    console.log(active);
  }

}
