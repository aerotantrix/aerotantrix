import { Component } from '@angular/core';
import { ContactsService } from 'src/app/shared/contacts.service';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contacts!: Contact[];

  constructor(private contactService: ContactsService) {
    this.contacts = this.contactService.getContacts();
  }

  contactClick(contact: Contact, modifier: string) {
    if (modifier === 'Gmail') {
      window.open(`mailto:${contact.tag2}`, '_blank');
    } else if (modifier === 'Instagram') {
      window.open('https://www.instagram.com/aerotantrix/', '_blank');
    } else if (modifier === 'Ketto') {
      window.open('https://ketto.org/s?id=rm-867662-7545794', '_blank');
    } else if (modifier === 'GitHub') {
      window.open('https://github.com/aerotantrix', '_blank');
    }
  }
}
