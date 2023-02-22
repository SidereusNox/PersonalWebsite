import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.css']
})
export class AppWelcomeComponent implements OnInit {

  line1 : string = '';
  line2 : string = '';
  line3 : string = '';
  constructor() { }

  ngOnInit(): void {
    this.type();
  }

  type() : void {
    const hiText : string = 'Hi! My name is';
    const nameText : string = 'Philipp Bolliger!';
    const titleText : string = 'Software Engineer'
    const delay : number = 60;

    for (let i = 0; i < hiText.length; i++) {
      setTimeout(() => {
        this.line1 = this.line1 + hiText[i];
      }, i*delay);
    }

    for (let i = 0; i < nameText.length; i++) {
      setTimeout(() => {
        this.line2 = this.line2 + nameText[i];
      }, delay*hiText.length + delay*i)
    }

    for(let i = 0; i < titleText.length; i++){
      setTimeout(() => {
        this.line3 = this.line3 + titleText[i];
      }, delay*(hiText.length + nameText.length + i));
    }
  }
}