import { Component, } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent {
     blogs;
     constructor(private dataService: DataService) {
          this.blogs = dataService.getBlogs();
       }

}
