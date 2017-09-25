import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent {
  internships = [
     {company: 'Poort 80', start: '19-07-2017', end: '19-12-2017'}
    ];
  constructor() { }





}

