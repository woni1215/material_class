import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  editForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.editForm = this.fb.group({
      title: new FormControl(),
      userId: new FormControl(),
    });
  }
  editData:any
  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: new FormControl(),
      userId: new FormControl(),
    });
    this.editData=this.data; //data是在get-table2裡edit宣告的data
  }

}
