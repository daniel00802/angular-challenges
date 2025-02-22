import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  template: `
    <div>I'm a placeholder component.</div>
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
export class PlaceholderComponent {}
