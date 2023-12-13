import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact.types';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContactsFromAPi();
  }

  getContactsFromAPi() {
    debugger;

    this.contactService.getContacts().subscribe(resp => {
      resp.users.forEach(user => {
        this.contacts.push({ firstName: user.firstName, email: user.email });
      }
      );
    
    })
  }

  addContact(newContact: Contact) {
    this.contacts.push(newContact);
  }
}
