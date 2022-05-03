import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role:any;
  constructor() {
    this.role=sessionStorage.getItem("role");
  }

  ngOnInit(): void {
  }
  handleLogout(){
    sessionStorage.clear();
  }

}
