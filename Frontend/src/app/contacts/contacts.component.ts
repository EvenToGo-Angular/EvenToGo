import { ContactsService } from '../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:any =  [];
  ContactsService: any;
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(
      (result: any[]) => {
        this.contacts = result;
        console.log(result)
      }
    )

  };
  deleteContact(event: any) {
    event.preventDefault();
    console.log(event.target.value);
    let id = event.target.value;
    this.contactsService.deleteContact(id).subscribe(response => {
      this.contacts.filter((contact: { id: number; }) => { return contact.id !== id });
      location.href = "/contacts";
      alert("Contact Deleted successfully.")
    });
  }

}


