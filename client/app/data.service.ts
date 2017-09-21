import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
     result: any;
     constructor(private _http: Http) { }
     // using these to access the db
     getUsers() {
       return this._http.get('/api/contact')
         .map(result => this.result = result.json().data);
     }


}
