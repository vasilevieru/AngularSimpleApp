import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = ['Item1', 'Item2', 'Item3'];
  constructor() { }

  ngOnInit(): void {
  }

}
