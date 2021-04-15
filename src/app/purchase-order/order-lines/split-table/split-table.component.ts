import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SplitTable } from '../../../_models/splitTable.model';
import { SplitComponent } from '../../split/split.component';

const SPLIT_DATA: SplitTable[] = [
  {schedule: 1, confirmedQuantity: 10000, expectedArrivalDate: '04/3/2021', expectedShipDate: '04/1/2021'},
  {schedule: 2, confirmedQuantity: 6000, expectedArrivalDate: '04/3/2021', expectedShipDate: '04/1/2021'},
  {schedule: 3, confirmedQuantity: 5000, expectedArrivalDate: '04/3/2021', expectedShipDate: '04/1/2021'},
];

@Component({
  selector: 'app-split-table',
  templateUrl: './split-table.component.html',
  styleUrls: ['./split-table.component.scss']
})
export class SplitTableComponent implements OnInit {

  total = 21000;
  unit = "KGM";
  displayedColumns: string[] = ['schedule', 'confirmedQuantity', 'expectedArrivalDate', 'expectedShipDate'];
  dataSource = SPLIT_DATA;

  constructor(private dialog: MatDialog) { }

  openSplitDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SplitComponent, dialogConfig);
  }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

}
