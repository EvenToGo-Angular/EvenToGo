import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormBuilder } from '@angular/forms';
import {EventsService} from '../services/events.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
   url:any = ''
   type:string=''
  constructor(private formBuilder: FormBuilder,
    private eventService :EventsService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
   
  addEventForm = this.formBuilder.group({
    title: '',
    description: '',
    date: '',
  });
  onSubmit(){
    
    let event = this.addEventForm.value
    event.image = this.url
    event.type = this.type
    console.log(event,'event')
    this.eventService.addEvent(event)
    .subscribe(()=>console.log('event added')
    )
  }
  handleTypeEvent(event:any){
    this.type = event.target.value
  }
  onFileChange(event){
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.url = reader.result;
     
    };
  }
  // onFileChange(event) {
  //   var files = event.target.files[0];
  //   console.log(files,'image from form')
  //    if (files) {
      

  //     const formData = new FormData();

  //     formData.append("thumbnail", files);

  //     const upload$ = this.http.post("http://localhost:3000/api/event/add", formData);

  //     upload$.subscribe();
  //    }
  //   //  this.createImage(files[0]);
  // }
  // // createImage(file) {
  // //   var reader = new FileReader();
  // //   var vm = this;
  // //   reader.onload = (e) => {
  // //     vm.image = e.target.result;
  // //   };
  // //   reader.readAsDataURL(file);
  // // }
}
