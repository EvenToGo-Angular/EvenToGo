import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventsComponent } from './events/events.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProfileComponent } from './profile/profile.component';
import { FullCalendarModule } from '@fullcalendar/angular';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    UsersComponent,
    CalendarComponent,
    EventsComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    ContactsComponent,
<<<<<<< HEAD
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
=======
    ProfileComponent,
>>>>>>> 30b6fa5b9ddd76eb53163694a26e99f37a17ad5c
    ReactiveFormsModule,
  providers: [],
  bootstrap: [AppComponent],
export class :AppModule { }
)}
