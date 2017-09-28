import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BlogService {
     url = 'api/blog';
     result: any;

     constructor(private _http: Http) { }
     // using these to access the db
     getBlogs() {
     // gets the json on this end point. host: /api/blog
     return this._http.get(this.url)
          .map(result => this.result = result.json().data);
     }

}

