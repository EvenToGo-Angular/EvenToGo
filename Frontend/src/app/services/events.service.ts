import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private serverUrl: string =`http://localhost:3000/api/event`

  constructor(private http : HttpClient) { }

  //add event
  public addEvent(event:any){
    let dataUrl: string = `${this.serverUrl}/add`;
    return this.http.post(dataUrl,event,{responseType: 'text' }).pipe(catchError(this.handleError))
  }

  // update event by id
  public updateEvent(event:any,eventId:string){
    let dataUrl: string = `${this.serverUrl}/modif/${eventId}`;
    return this.http.put(dataUrl,event).pipe(catchError(this.handleError))
  }

  // get event by id
  public getEvent(eventId:any){
    let dataUrl: string = `${this.serverUrl}/selectOne/${eventId}`;
    return this.http.get(dataUrl).pipe(catchError(this.handleError))
  }

  //Error handling
  public handleError(error:HttpErrorResponse){
    let errorMessage: string= '';
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage = `Error : ${error.error.message}`
    } else {
      errorMessage = `Status : ${error.status} \n Message:${error.message}`
    }
    return throwError(errorMessage)
  }

}
