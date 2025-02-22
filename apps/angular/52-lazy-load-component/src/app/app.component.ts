import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component'; // Adjust the path as necessary
import { TopComponent } from './top.component'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="h-screen bg-gray-500">
      @defer (when topLoaded()) {
        <app-top></app-top>
      } @placeholder {
        <app-placeholder></app-placeholder>
      }
      <!-- <ng-container *ngIf="topLoaded(); else placeholder">
        <app-top></app-top>
      </ng-container>
      <ng-template #placeholder>
        <app-placeholder></app-placeholder>
      </ng-template> -->
      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="handleClick()">
        Load Top
      </button>
    </div>
  `,
  imports: [TopComponent, PlaceholderComponent, CommonModule],
})
export class AppComponent {
  topLoaded = signal(false);

  handleClick(): void {
    this.topLoaded.set(true);
  }
}
