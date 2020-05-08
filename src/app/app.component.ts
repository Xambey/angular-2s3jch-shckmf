import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-date-picker-format',
  template: `
    <label> Date Input:  </label>
    <nz-date-picker [(ngModel)]="dateInstance" name="dateInstance" [nzFormat]="format"></nz-date-picker>
    <br />
    <label> Date Output:  </label>
    {{dateInstance | date}}
  `,
  styles: [
    `
      nz-date-picker {
        margin: 0 8px 12px 0;
      }
    `
  ]
})
export class NzDemoDatePickerFormatComponent {
  public dateInstance = new Date()
  format = 'dd.MM.yyyy'
}
