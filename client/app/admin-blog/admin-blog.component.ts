import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { BlogComponent } from '../blog/blog.component'; // i want to reusethis but also add buttons to it (edit and delete)


@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})

export class AdminBlogComponent implements OnInit {
     myForm: FormGroup;
     constructor(fb: FormBuilder) {
          this.myForm = fb.group({
               title: ['blog Title'],
               body: ['body goes here']
          });
        }

     ngOnInit() {}

     onSubmit(value: string) {
          const content = this.myForm.value;
          console.log( 'i want to post this to api/blog: ', content);

     }



}


