import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  title = 'Lloyd Stumpel\'s Portfolio';


  constructor() {}

  ngOnInit() {

      }
}

