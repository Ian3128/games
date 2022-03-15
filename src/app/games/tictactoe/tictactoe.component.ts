import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  status: boolean = false;
  status2: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}