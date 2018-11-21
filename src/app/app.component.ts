import { OverlayContainer } from '@angular/material';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('square', 
      [
        state('green', style({'background-color':'green'})),
        state('red', style({'background-color': 'red'})),
        transition('green => red', animate(1000))
      ]
    )
  ]
})
export class AppComponent {
  suqareState: string;
  darkTheme = false;
  constructor(private oc: OverlayContainer){

  }
  switchTheme(dark) {
    this.darkTheme = dark;
    this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }
  onClick() {
    this.suqareState = this.suqareState === 'red' ? 'green' : 'red';
  }
}
