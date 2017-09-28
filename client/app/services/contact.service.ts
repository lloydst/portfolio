import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
     result: any;
     constructor(private _http: Http) { }
     private blogsUrl = '/api/blog';
     // using these to access the db
     getContact() {
       return this._http.get('/api/contact')
         .map(result => this.result = result.json().data);
     }

}
