import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-myselection',
  templateUrl: './myselection.component.html',
  styleUrls: ['./myselection.component.css']
})
export class MyselectionComponent implements OnInit {
  constructor() { }
  arr =[]
     async ngOnInit() {
         var user_id = sessionStorage.getItem("id_user")  ;
  await  axios.post("http://localhost:3000/api/favorite/getFavorite", {user : user_id}).then(async (res)=>{
  for (let i= 0 ; i< res.data.length ;i ++){
  console.log(res.data[i].id_event)
  await axios.get(`http://localhost:3000/api/event/selectOne/${res.data[i].id_event}`).then( async reslt => {
   console.log(reslt.data)
 this.arr.push(reslt.data[0]) ;
 })
}
    })
    console.log(this.arr ,"test")
  }
  deleteFav(event:any){
   var event = event.target.id ;
   var user = sessionStorage.getItem("id_user")  ;
   axios.post("http://localhost:3000/api/favorite/deleteFavorite", {event: event , id : user }).then(res=> {
  console.log(res.data)
   console.log("Data Deleted") ;
  })
  window.location.reload()
  }
}