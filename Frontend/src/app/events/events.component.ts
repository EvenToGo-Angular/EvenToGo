import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormBuilder } from '@angular/forms';
import {EventsService} from '../services/events.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,
    private eventService :EventsService) { }

  ngOnInit(): void {
  }
  
  addEventForm = this.formBuilder.group({
    title: '',
    description: '',
    type:'',
    date: '',
    image: '',
  });
  onSubmit(){
    let event = this.addEventForm.value
    this.eventService.addEvent(event)
    .subscribe(()=>console.log('event added')
    )
  }
}
