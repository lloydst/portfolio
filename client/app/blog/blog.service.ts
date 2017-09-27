import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BlogService {

     result: any;

     constructor(private _http: Http) { }
     // using these to access the db
     getBlogs() {
          // gets the json on this end point. host: /api/blog
       return this._http.get('/api/blog')
         .map(result => this.result = result.json().data);
     }
     postBlog() {
          // code here to clean up text area's and post to the api/blog endpoint
          // tslint:disable-next-line:quotemark
          return "I'm not implemented yet";
     }
}

