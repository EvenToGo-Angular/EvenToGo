import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
@Injectable({ providedIn: 'root' })
export class SigninComponent implements OnInit {
  baseURL: string = 'http://localhost:3000/';

  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    let person = this.checkoutForm.value;

    this.http
      .post(this.baseURL + 'api/user/signin', person)
      // .pipe(
      //   map((response: any) => response.json()),
      //   catchError((e: any) => {
      //     console.log('ojhjghioufgiohghjioh' + e);
      //     return throwError(e);
      //   })
      // )

      .subscribe(()=>{this.route.navigate(['/'])})  }
}
