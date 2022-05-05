import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';


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
    // const places = Observable.interval(1000)
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
    event.preventDefault()
    console.log(event.target.value);
    sessionStorage.setItem("id", event.target.value)
    location.href = "/modif";
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

  };


  currentPlaces: any = null;
  count: any;
  decreasePlaces(event: any) {
    // let token = sessionStorage.getItem("token")
    // let decode = atob(token.split('.')[1]);
    // console.log(decode);

    let id = event.target.id;
    this.currentPlaces = event.target.value;
    console.log(this.currentPlaces)
    this.count = this.currentPlaces - 1;
    console.log(id, this.currentPlaces);
    this.homeService.updatePlaces(id, this.count).subscribe((data) =>
      this.getData()
    )
  }
}



