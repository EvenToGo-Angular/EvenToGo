import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css'],
})
export class UpdateEventComponent implements OnInit {
  public eventId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventsService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  url: any = '';
  type: string = '';
  event:any
  date:any=''
  types:any =['Cultural','Entertainment','Social','Religious']

  updateEventForm = this.formBuilder.group({
    title: '',
    description: '',
    date: '',
    type: '',
    image:''
  });

  selectedType: any = this.types[0]
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.eventId = param.get('eventId')
    })
    if(this.eventId){
      this.eventService.getEvent(this.eventId).subscribe(data=>{
        this.event = data[0]
        this.date= this.event.date
        this.date=this.date.split(" ")[0]
        this.updateEventForm.controls['title'].setValue(this.event.title)
        this.updateEventForm.controls['description'].setValue(this.event.description)
        this.updateEventForm.controls['date'].setValue(this.event.date)
        this.updateEventForm.controls['type'].setValue(this.event.type)
        this.updateEventForm.controls['image'].setValue(this.event.image)
        console.log(this.updateEventForm.controls['image'].value)
      })
      
      
    }

  }
  onSubmit() {
    let event = this.updateEventForm.value;
    // event.image = this.url;
    
    console.log(event, 'event');
   
    this.eventService
      .updateEvent(event,this.event.id)
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
      console.log(this.url);
    };
  }
}
