import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AgreementComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }
}
