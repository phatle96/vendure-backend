import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  Dialog,
  DialogButtonConfig,
  SharedModule,
} from '@vendure/admin-ui/core';


@Component({
  selector: 'custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss'],
  standalone: true,
  imports: [SharedModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDialog implements Dialog<any> {
  subject: string = ''
  message: string = ''

  resolveWith: (result?: any) => void;
  title = 'Enter Message';
  body = 'body';
  translationVars = {};
  buttons: Array<DialogButtonConfig<any>> = [
    { label: 'Send', type: 'primary', returnValue: true },
    { label: 'Cancel', type: 'secondary', returnValue: false }
  ];

  onClick(value: boolean) {
    if (value) {
      console.log(this.message)
      this.resolveWith(this.message)
    } else {
      console.log('cancel')
      this.resolveWith(false)
    }
  }
}