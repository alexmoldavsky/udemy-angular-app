import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() numberRecieved = new EventEmitter<Number>();

  private timerId: NodeJS.Timer;
  private newNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.timerId = setInterval(() => {
      this.newNumber++;
      this.onGetNewNumber(this.newNumber);
    }, 1000);

  }


  onStopGame() {
    clearInterval(this.timerId);
    this.newNumber = 0;
  }

  onGetNewNumber(num: Number) {
      this.numberRecieved.emit(num);
  }

}
