import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-slide-dialog',
  templateUrl: './remove-slide-dialog.component.html',
  styleUrls: ['./remove-slide-dialog.component.scss']
})
export class RemoveSlideDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RemoveSlideDialogComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close(); // remove a dialog component
  }

}
