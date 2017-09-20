import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit  {
  assignment = [
    {id: 'rekenmachine Javascript:', link: 'something that opens js calc either in this area or a link'},
    {id: 'rekenmachine Jquery:', link: 'something that opens Jquery calc either in this area or a link'},
    {id: 'rekenmachine Angularjs:', link: 'something that opens Angularjs calc either in this area or a link'},
    {id: 'Hangman:', link: 'something that opens Hangman either in this area or a link'},
    {id: 'Bomberman:', link: 'something that opens Bomberman man either in this area or a link'}
  ];
  constructor() { }



  ngOnInit() {

  }

}

