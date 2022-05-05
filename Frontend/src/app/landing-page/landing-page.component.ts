import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  handleSend(event: any) {
    event.preventDefault()
    alert("Message send Successfully .");
    location.href=("")
  }
}

