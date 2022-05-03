import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user, UserService } from '../servece/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  apiUser!: Observable<user[]>;

  constructor(private userService:UserService) {

    this.apiUser = this.userService.getUser()
   

   }

  ngOnInit(): void {}

}
