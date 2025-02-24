import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-field',
  template: `
    <mat-form-field>
      <input
        placeholder="Add one member to the list"
        matInput
        type="text"
        [(ngModel)]="label"
        (keydown)="handleKey($event)" />
    </mat-form-field>
  `,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @Input() names: string[] = [];
  label = '';

  handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.names?.unshift(this.label);
      this.label = '';
    }
  }
}
