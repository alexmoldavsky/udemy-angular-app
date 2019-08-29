import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  numbers: Number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onNumberRecieved(num: Number) {
    this.numbers.push(num);
  }

}
