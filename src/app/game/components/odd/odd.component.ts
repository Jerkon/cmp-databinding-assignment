import { Component, OnInit, Input } from '@angular/core';
import { GameNumber } from 'src/app/game/interfaces/number';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})

export class OddComponent implements OnInit {
  @Input('odd') odd: GameNumber;

  constructor() { }
  ngOnInit() { }
}