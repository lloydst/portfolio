import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contact: Array<any>;



  constructor(private contactService: ContactService) {

         // Access the Data Service's getUsers() method we defined
         this.contactService.getContact()
             .subscribe(res => this.contact = res);
       }
     }
