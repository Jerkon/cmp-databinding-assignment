import { Component } from '@angular/core';
import { GameNumber } from './game/interfaces/number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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