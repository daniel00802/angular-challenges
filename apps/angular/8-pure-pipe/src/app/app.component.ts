import { DecimalPipe, LowerCasePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgFor, LowerCasePipe, DecimalPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      <p>{{ person | lowercase }} - {{ index | number }}</p>
      <!-- {{ heavyComputation(person, index) }} -->
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];

  heavyComputation(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
