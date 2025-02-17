import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingSpinnerService {
  // Signal to control the visibility of the loading spinner
  isLoading = signal(false);

  // Method to show the spinner
  show() {
    this.isLoading.set(true);
  }

  // Method to hide the spinner
  hide() {
    this.isLoading.set(false);
  }
}
