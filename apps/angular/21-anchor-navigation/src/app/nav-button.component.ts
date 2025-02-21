/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-button',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a [routerLink]="routerLink" [fragment]="fragment">
      <ng-content></ng-content>
    </a>
  `,
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
})
export class NavButtonComponent {
  @Input() routerLink: string | any[] = ''; // Default value to avoid errors
  @Input() fragment?: string; // Default value
}
