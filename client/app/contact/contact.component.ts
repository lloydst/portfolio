import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = [];
  public email;
  public phone;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    interface GetResponse {
      contacts: {
        email: string;
        phone: string;
        company: string;
      };
    }
    this.http.get<GetResponse>('http://localhost:3001/contact').subscribe(data => {
      this.email = data.contacts.email;
      this.phone = data.contacts.phone;

    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });

  }
}
