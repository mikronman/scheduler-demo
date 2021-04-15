import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SplitComponent } from '../split/split.component';
import { LineService } from '../../_services/line.service';
import OrderLine from '../../store/models/order-line.model';
import { Store } from '@ngrx/store';
import AppState from '../../store/models/app-state.model';
import { GetLineAction } from 'src/app/store/actions/order-line.action';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.scss']
})
export class OrderLinesComponent implements OnInit {

  orderLines: OrderLine;
  splitSchedule = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  lines$: Observable<OrderLine[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private dialog: MatDialog, private lineService: LineService, private store: Store<AppState>) {}

  openSplitDialog(i) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      line: this.orderLines[i],
    }

    const dialogRef = this.dialog.open(SplitComponent, dialogConfig);

    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.splitSchedule = data;
    });
  }

  ngOnInit(): void {
    this.lineService.getLines().pipe(takeUntil(this.destroy$)).subscribe((data: OrderLine) => {
      this.orderLines = data;
      //console.log(this.orderLines);
    })
    // this.lines$ = this.store.select(store => store.line.orderLines);
    // this.error$ = this.store.select(store => store.line.error);
    // this.store.dispatch(new GetLineAction());
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}


