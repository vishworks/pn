import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-modaldialog',
  standalone: true,
  imports: [ MatDialogActions, MatDialogContent],
  templateUrl: './modaldialog.component.html',
  styleUrl: './modaldialog.component.scss'
})
export class ModaldialogComponent {

  @HostListener ('window: message', ['$event'])
  onMessage(event: any) {
    console.log(event);
    alert("\"" + event.data + "\" captured inside Legacy App");

  }

  constructor () {

  }
}
