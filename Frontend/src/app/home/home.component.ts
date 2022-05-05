import { HomeService } from '../services/home.service';
import { Component, OnInit } from '@angular/core';
import axios from "axios"
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
   // 432
    event.preventDefault();
    let id = event.target.value;
    console.log(event)
  //  location.href = "/favorite";
    var id_user = sessionStorage.getItem("id_user")
    var obj = { user_id : id_user +" "+event.path[2].id }
    axios.post("http://localhost:3000/api/favorite/addfav" ,obj).then(res=> {
if(res.data=="Done"){
console.log("Event Added")

}
else 
{console.log("error") ;

}



})

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

  }
}

