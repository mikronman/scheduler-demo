import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SplitComponent } from '../split/split.component';
import { LineService } from '../../_services/line.service';
import OrderLine from '../../store/models/order-line.model';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.scss']
})
export class OrderLinesComponent implements OnInit {

  orderLines: any = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dialog: MatDialog, private lineService: LineService) {}

  openSplitDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SplitComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.lineService.getLines().pipe(takeUntil(this.destroy$)).subscribe((data: OrderLine) => {
      this.orderLines = data;
    })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
