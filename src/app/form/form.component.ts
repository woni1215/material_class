import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.openDialog()
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
