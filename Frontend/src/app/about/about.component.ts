import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  constructor(@Inject(DOCUMENT) private document:Document) { }
  
  
  
   goToUrl1(): void {
   this.document.location.href = 'https://github.com/ALOU19'}
    goToUrl12(): void {
     this.document.location.href = 'https://github.com/amine-selmi'}
      goToUrl3(): void {
       this.document.location.href = 'https://github.com/Youssef-Bedoui'}
        goToUrl4(): void {
         this.document.location.href = 'https://github.com/imedrahal'}
          goToUrl5(): void {
           this.document.location.href = 'https://github.com/SlimGuenidez'}

}
