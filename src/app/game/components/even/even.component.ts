import { Component, OnInit, Input } from '@angular/core';
import { GameNumber } from 'src/app/game/interfaces/number';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})

export class EvenComponent implements OnInit {
  @Input() even: GameNumber;

  constructor() { }
  ngOnInit() { }
}