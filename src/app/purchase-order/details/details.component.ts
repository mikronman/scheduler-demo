import { Component, OnInit } from "@angular/core";
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PoService } from '../../_services/po.service';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {

  poDetails = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private poService: PoService) {
  }

  ngOnInit(): void {
    this.poService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.poDetails = data;
    })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
