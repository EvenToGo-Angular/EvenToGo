import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  url: any = '';
  type: string = '';
  types:['Cultural,']
  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventsService,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {}

  addEventForm = this.formBuilder.group({
    title: '',
    description: '',
    date: '',
  });
  onSubmit() {
    let event = this.addEventForm.value;
    event.image = this.url;
    event.type = this.type;
    console.log(event, 'event');
    this.eventService
      .addEvent(event)
      .subscribe(() => this.route.navigate(['/home']));
  }
  handleTypeEvent(event: any) {
    this.type = event.target.value;
  }
  onFileChange(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.url = reader.result;
      console.log(this.url)
    };
  }
}
