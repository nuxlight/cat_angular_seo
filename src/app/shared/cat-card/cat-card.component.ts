import { Cat } from './../../core/entities/cat.entity';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat | undefined;
  constructor() {}

  ngOnInit(): void {}
}
