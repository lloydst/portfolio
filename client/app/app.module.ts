import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';
import { BlogComponent } from './blog/blog.component';
import { BlogService} from './blog/blog.service';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';



@NgModule({
     declarations: [
     AppComponent,
     ProjectsComponent,
     InternshipComponent,
     ContactComponent,
     AboutComponent,
     BlogComponent,
     AdminBlogComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
     HttpModule
  ],
  providers: [
     DataService,
     BlogService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
