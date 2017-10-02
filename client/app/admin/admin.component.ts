import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { Http } from '@angular/http';
import { BlogService} from '../services/blog.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
     blog: FormGroup;
     blogs: Array<any>;




  constructor(
          private _http: Http,
          private fb: FormBuilder,
          private _blogService: BlogService ) {
                this.createForm();
                this._blogService.getBlogs()
                .subscribe(res => this.blogs = res);
     }
     createForm() {
          this.blog = this.fb.group({
               title: '',
               body: '',
          });
     }

     post() {
          const content = this.blog.value;
          this._http.post('/api/blog', content).subscribe(content);
     }
     delete() {
          const content = this.blog.value;
          this._http.delete('/api/blog/_id', content).subscribe(content);
          console.log('delete called');

     }
     edit() {
          const content = this.blog.value;
          this._http.put('/api/blog', content).subscribe(content);
          console.log('edit called');

     }

}
