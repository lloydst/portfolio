import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent} from './about/about.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: 'projects', component: ProjectsComponent},
  { path: 'internship', component: InternshipComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: '', component: AboutComponent},
  { path: '*', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

