import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Blog } from '../../models/blog';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
     result: any;
     constructor(private _http: Http) { }
     // using these to access the db
     getUsers() {
       return this._http.get('/api/contact')
         .map(result => this.result = result.json().data);
     }
     getBlogs() {
          return this._http.get('api/blog')
          .map(result => this.result = result.json().data)
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

}
