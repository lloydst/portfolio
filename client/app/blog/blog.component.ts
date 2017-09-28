import { Component, OnInit } from '@angular/core';
import { BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

     blog: Array<any>;

     constructor(private _blogService: BlogService) {
          this._blogService.getBlogs()
          .subscribe(res => this.blog = res);
     }

}

