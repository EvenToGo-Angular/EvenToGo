import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})


@Injectable({ providedIn: 'root' })


export class SignupComponent implements OnInit {
  baseURL: string = 'http://localhost:3000/';

  signupForm = this.formBuilder.group({
    email: '',
    name: '',
    password: '',
    role: '',
  });

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient,
    private route: Router
    ) {}

  ngOnInit(): void {}
  onSubmit() {
    let person = this.signupForm.value;
    this.http
      .post(this.baseURL + 'api/user/signup', person)
      // .pipe(
      //   map((response: any) => {response.json(),location.href = "/"}),
      //   catchError((e: any) => {
      //     console.log('signup' + e);
      //     return throwError(e);
      //   })
      // )
      .subscribe(()=>{this.route.navigate(['/signin'])})
  }
}
