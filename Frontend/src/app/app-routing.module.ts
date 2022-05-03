import { ContactsComponent } from './contacts/contacts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UsersComponent} from './users/users.component'
import {ProfileComponent} from './profile/profile.component'

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "home", component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'events', component: EventsComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
