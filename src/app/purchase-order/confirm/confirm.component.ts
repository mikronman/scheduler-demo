import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgreementComponent } from '../agreement/agreement.component';
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { SubmitComponent } from './submit/submit.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  openAgreementDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AgreementComponent, dialogConfig);
  }
  openAcknowledgeDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AcknowledgeComponent, dialogConfig);
  }

  openSubmitDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SubmitComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
