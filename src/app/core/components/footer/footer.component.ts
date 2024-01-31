import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class FooterComponent {

  socialData = [
    {url: 'https://www.linkedin.com/in/nishadaditya/', name: 'Linkedin', img: './assets/svg/linkedin.svg'},
    {url: 'https://github.com/aditya292', name: 'Github', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}
