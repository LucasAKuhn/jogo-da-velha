import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  squares:any = [];
  winner = '';
  counter = 0;
  isdraw = '';
  freshpage = true;

  constructor() { }

  ngOnInit(): void {
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isdraw = '';
    this.counter = 0;
    this.freshpage = false;
  }

}
