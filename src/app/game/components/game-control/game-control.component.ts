import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { GameNumber } from 'src/app/game/interfaces/number';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  private statuses = {TO_BEGIN: 'to-begin', PLAYING: 'playing', STOPPED: 'stopped'};
  private lables = {PLAY: 'play', PAUSE: 'pause', CONTINUE: 'continue', RESET: 'reset'};
  private timer;

  controlButtonLabel: string;
  mainButtonLabel: string;
  status: string;
  incrementalNumber: number;

  @Output('emitedNumber') emitNumber = new EventEmitter<GameNumber>();
  @Output('reset') reset = new EventEmitter();
  
  constructor() {
    this.status = this.statuses.TO_BEGIN;
    this.controlButtonLabel = "Pause";
    this.mainButtonLabel = "Start";
    this.incrementalNumber = 0;
  }
  ngOnInit() { }

  onMainButtonClick() {
    if (this.status == this.statuses.TO_BEGIN) {
      this.timer = this.startTimer();
      this.status = this.statuses.PLAYING;
      this.mainButtonLabel = this.lables.RESET;
    } else if (this.status == this.statuses.STOPPED) {
      clearInterval(this.timer);
      this.reset.emit();
      this.incrementalNumber = 0;
      this.status = this.statuses.TO_BEGIN;
      this.mainButtonLabel = this.lables.PLAY;
      this.controlButtonLabel = this.lables.PAUSE;
    }
  }

  onControlButtonClick() {
    if (this.status == this.statuses.PLAYING) {
      clearInterval(this.timer);
      this.status = this.statuses.STOPPED;
      this.controlButtonLabel = this.lables.CONTINUE;
    } else if (this.status == this.statuses.STOPPED) {
      this.timer = this.startTimer();
      this.status = this.statuses.PLAYING;
      this.controlButtonLabel = this.lables.PAUSE;
    }
  }

  startTimer() {
    return setInterval(()=>{
      this.incrementalNumber += Math.random() * 10;
      this.emitNumber.emit({
        number: +this.incrementalNumber.toFixed(0)
      });
    }, 1000);
  }
}