import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacci',
  pure: true,
})
export class FibonacciPipe implements PipeTransform {
  private cache: { [key: number]: number } = {};

  transform(num: number): number {
    if (num <= 0) return 0; // Handle edge cases
    if (this.cache[num]) return this.cache[num]; // Return cached value
    if (num === 1 || num === 2) return 1;

    // Calculate and cache the result
    this.cache[num] = this.fibonacci(num);
    return this.cache[num];
  }

  private fibonacci(num: number): number {
    if (num <= 0) return 0; // Handle edge cases
    if (num === 1 || num === 2) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
}
