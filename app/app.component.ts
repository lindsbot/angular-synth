
import { isAsciiLetter } from '@angular/compiler/src/chars';
import { Component } from '@angular/core';

import { CHIMES_1 } from './chimes.data';

@Component({
  selector: 'angular-synth',
  template: `
    <div>
      <ul>
        <li *ngFor="let chime of chimes">
          <div [ngStyle]="{
            'background-color': chime.color
          }">
          {{chime.note}}
          </div>
        </li>
      </ul>
    </div>
  `,
})

export class AppComponent  {
  name = 'Angular';
  chimes = CHIMES_1;
}

