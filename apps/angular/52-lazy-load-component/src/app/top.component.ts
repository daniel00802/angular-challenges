import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  template: `
    <div>
      I am a very heavy, exdivensive component that should be lazy loaded.
    </div>
  `,
  styles: `
    :host {
      display: grid;
      padding: 20px;
      background-color: #f0f0f0;
      height: 50%;
    }
  `,
  standalone: true,
})
export class TopComponent {}
