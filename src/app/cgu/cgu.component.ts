import { Component, OnInit } from '@angular/core';
import { Faq } from './entities/faq.entity';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.component.html',
  styleUrls: ['./cgu.component.scss'],
})
export class CguComponent implements OnInit {
  faqs: Faq[] = [
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Sed ultrices nibh vitae urna elementum, et mattis enim rutrum. Donec venenatis risus nisi, nec dapibus felis tempor in. Integer bibendum congue dictum. Mauris dapibus fringilla convallis.',
    },
    {
      title: 'Maecenas cursus tortor a dui sollicitudin',
      text: 'Praesent vel nulla a nulla congue vestibulum eu quis dolor. Morbi ac aliquet enim, a feugiat justo. Vivamus efficitur egestas quam at dapibus.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
