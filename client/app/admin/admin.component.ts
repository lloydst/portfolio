import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
     blog: FormGroup;

  constructor(
          private _http: Http,
          private fb: FormBuilder ) {
                this.createForm();
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

}
