import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contact: Array<any>;



  constructor(private _dataService: DataService) {

         // Access the Data Service's getUsers() method we defined
         this._dataService.getUsers()
             .subscribe(res => this.contact = res);
       }
     }
