import { Component } from '@angular/core';
import { GameNumber } from './interfaces/number';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  private evens: Array<GameNumber> = [];
  private odds: Array<GameNumber> = [];

  fireNumber(dataEvent: GameNumber) {
    if (this.checkEven(dataEvent.number)) {
      this.evens.push({
        number: dataEvent.number
      });
    } else {
      this.odds.push({
        number: dataEvent.number
      });
    }
  }

  onReset() {
    this.evens = [];
    this.odds = [];
  }

  checkEven(number: number) {
    return number % 2 == 0;
  }
}