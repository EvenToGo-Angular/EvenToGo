import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  isLogin: boolean = false;
  dataReceived: any;

  helper = new JwtHelperService();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    let person = this.checkoutForm.value;

    this.http
      .post(this.baseURL + 'api/user/signin', person)
      .subscribe((response) => {
        this.dataReceived = response;
        // console.log(this.dataReceived)
        sessionStorage.setItem('token', this.dataReceived.token);
        sessionStorage.setItem('role', this.dataReceived.role);

        var decodetToken = this.helper.decodeToken(this.dataReceived.token);
        console.log(decodetToken);
        this.isLogin = true;
        this.route.navigate(['/home']);
      });
  }
}
