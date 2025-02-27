import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForDirective } from './for.directive';
import { Person } from './model/app.person';

@Component({
  imports: [NgFor, NgIf, ForDirective],
  selector: 'app-root',
  template: `
    <!-- <ng-container *ngIf="persons.length > 0; else emptyList">
      <div *ngFor="let person of persons">
        {{ person.name }}
      </div>
    </ng-container>
    <ng-template #emptyList>The list is empty !!</ng-template> -->
    <div *appFor="let person of persons; empty: emptyList">
      {{ person.name }}
    </div>
    <ng-template #emptyList>The list is empty !!</ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = [
    { id: 1, name: 'A', country: 'a' },
    { id: 2, name: 'B', country: 'b' },
    { id: 3, name: 'C', country: 'c' },
  ];
}
