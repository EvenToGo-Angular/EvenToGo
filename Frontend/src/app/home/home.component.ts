import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }
  events = []
  user: any = {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.homeService.getAllEvents().subscribe(
      (result: any[]) => {
        this.events = result;
        console.log(result)
      }
    )
  }

  postFavorite(event: any) {
    event.preventDefault();
    let id = event.target.value;
    sessionStorage.setItem("id_event", id);
    sessionStorage.setItem("id_user", this.user);
    location.href = "/favorite";
  }
  edit(event: any) {
  
    console.log(event.target.value);
   
  }
  delet(event: any) {
    event.preventDefault();
    console.log(event.target.value);
    let id = event.target.value;
    this.homeService.deleteEvent(id).subscribe(response => {
      this.events.filter((item) => { return item.id !== id });
      location.href = "/home";
      alert("Event Deleted successfully.")
    });
  }
  handleType(event: any, value: any) {
    event.preventDefault()
    console.log(value)
    this.homeService.getAllEvents().subscribe(
      (result: any[]) => {
        this.events = result.filter((event) => {
          return event.type == value;
        }
        )
      }
    )

  }
}

