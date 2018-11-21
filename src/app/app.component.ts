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
        state('green', style({'background-color':'green', 'height':'100px', 'transform':'translateY(-100%)'})),
        state('red', style({'background-color': 'red', 'height':'100px', 'transform':'translateY(100%)'})),
        transition('green => red', animate('5s ease-in')),
        transition('red => green', animate('8s ease-out'))
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
