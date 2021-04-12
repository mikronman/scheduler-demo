import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {

  splitLine = [
    {
      lineNumber: '0010',
      lineTitle: 'NaCl (Sodium Chloride)',
      requestedQuantity: 21000,
      unitType: 'KG',
      arrivalDate: '04/23/2021',
    }
  ]
  
  schedules: Array<ScheduleComponent> = [];

  addSchedule() {
      this.schedules.push(new ScheduleComponent());
  } 

  constructor(private dialogRef: MatDialogRef<SplitComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
