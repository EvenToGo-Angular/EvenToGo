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
    return this.http.post(dataUrl,event).pipe(catchError(this.handleError))
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
