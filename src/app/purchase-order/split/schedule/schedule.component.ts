import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  
  @Input() scheduleIndex: any;
  @Output() delete: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    console.log(this.scheduleIndex);
  }

  deleteSchedule(value: any) {
    this.delete.emit(value);
    console.log('deleting...')
  }
}
