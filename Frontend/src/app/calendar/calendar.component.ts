import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import axios from 'axios';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick,
    eventClick:this.handleEventClick,
    events: []
  };
  constructor() { }

  ngOnInit(): void {
    axios.get("http://localhost:3000/api/event/selectAll").then((result) => {
      console.log(result.data);
      let events  = []

      for (let i=0 ; i< result.data.length ; i++){

         console.log(result.data[i].date,"from db")

            let string = new Date(result.data[i].date)
            console.log(string,'after change');
            

        let event = {
          title: result.data[i].title, 
          start: string, 
          id : result.data[i].id,
          url: result.data[i].description, 
          groupId: result.data[i].type
        }

        events.push(event)

      }

      this.calendarOptions.events = events

      console.log(this.calendarOptions.events)
    });
  }
  handleDateClick(arg:any)  {
    alert('date click! ' + arg.toDateString)
  }
  handleEventClick(clickInfo: any) {

    clickInfo.jsEvent.preventDefault();

    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {

      axios.delete("http://localhost:3000/api/event/delete/"+clickInfo.event.id).then((result) => {
        console.log(result.data);
      });

      clickInfo.event.remove()
    }

    }
}
