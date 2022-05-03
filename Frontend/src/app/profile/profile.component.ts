import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-profile',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  helper=new JwtHelperService()
  role:any 
  username: any;
  email: any;
  constructor() { 
    var token:any=sessionStorage.getItem('token')
    var decodetToken= this.helper.decodeToken(token)
    this.username=decodetToken.ress[0].name
    this.role=decodetToken.ress[0].role
    this.email=decodetToken.ress[0].email
    
  }

  ngOnInit(): void {
  }


 
}
