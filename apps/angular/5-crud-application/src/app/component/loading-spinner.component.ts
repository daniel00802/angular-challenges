import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  standalone: true, // Standalone component
  imports: [MatProgressSpinnerModule], // Import Angular Material Spinner
  template: `
    <mat-spinner diameter="200"></mat-spinner>
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.5); /* Optional: dim the background */
        padding: 20px;
        border-radius: 10px;
      }
    `,
  ],
})
export class LoadingSpinnerComponent {}
