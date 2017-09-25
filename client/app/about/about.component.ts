import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
     cv = [
          {name: 'Lloyd Stumpel'},
          {age: '25'},
          {more: 'more info like this (if i want to get this from a db i need ' +
          'a interface again (look at the contact component for a how to)'},
          {evenMore: 'more info'}
     ];

  constructor() { }

  ngOnInit() {
  }

}
