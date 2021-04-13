import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SplitComponent } from '../split/split.component';
import { LineService } from '../../_services/line.service';

@Component({
  selector: 'app-order-lines',
  templateUrl: './order-lines.component.html',
  styleUrls: ['./order-lines.component.scss']
})
export class OrderLinesComponent implements OnInit {

  // Data Placeholder
  // orderLines = [
  //   {
  //     lineNumber: '0010',
  //     lineTitle: "NaCi (Sodium Chloride)",
  //     description: "Table Salt, 100KG Tanks",
  //     shipToName: "Amsterdam",
  //     shipToAddress: "1234 Tulip Lane",
  //     shipToCity: "Ludwigshafen",
  //     shipToProvince: "DE",
  //     shipToZip: 12345,
  //     supplierProductId: 12123812837,
  //     upcNumber: 12123817394,
  //     contractNumber: 230812837443,
  //     salesOrderNumber: '',
  //     additionalDetails: [
  //       {
  //         productGradeDescription: 'Corax N 339',
  //         specification: 12345343,
  //         issue: '003',
  //         producer: 'Orion Engineer',
  //         transportMethod: 'Road',
  //         incoTerms: 'CPT',
  //         unloadingPoint: 'Amsterdam',
  //         shipToContact: 'Alan Dowl',
  //         contactPhone: '(770) 444-4444',
  //         contactFax: '(770) 444-4444',
  //       }
  //     ],
  //     quantity: [
  //       {
  //         unitType: 'KGM',
  //         ordered: 21000,
  //         confirmed: 21000
  //       }
  //     ],
  //     arrivalDate: [
  //       {
  //         requested: '04/22/2021',
  //         confirmed: '04/22/2021'
  //       }
  //     ],
  //     price: [
  //       {
  //         requested: [
  //           {
  //             currency: 'USD',
  //             unitType: 'KGM',
  //             unitQuantity: 2,
  //             pricePerUnit: 80
  //           }
  //        ],
  //        confirmed: [
  //           {
  //             currency: 'USD',
  //             unitType: 'KGM',
  //             unitQuantity: 2,
  //             pricePerUnit: 80
  //           }
  //         ]
  //       }
  //     ]
  //   },
  // ];
  orderLines = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private dialog: MatDialog, private lineService: LineService) {}

  openSplitDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SplitComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.lineService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.orderLines = data;
      console.log(this.orderLines);
    })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
