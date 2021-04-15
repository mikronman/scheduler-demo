import { Component, ComponentFactoryResolver, Inject, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {

  @ViewChild('scheduleContainer', {read: ViewContainerRef}) scheduleContainer: ViewContainerRef;
  scheduleComponents = [];
  scheduleComponentClass = ScheduleComponent;

  line: any = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialogRef: MatDialogRef<SplitComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { 
      this.line = data.line;
    }

    addScheduleComponent (componentClass: Type<any>) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
      const component = this.scheduleContainer.createComponent(componentFactory);
      this.scheduleComponents.push(component);
      let scheduleIndex = this.scheduleComponents.indexOf(component);
      console.log(scheduleIndex);
      return scheduleIndex;
    }
    removeScheduleComponent(componentClass: Type<any>) {
      console.log('remove');
      const component = this.scheduleComponents.find((component) => component.instance instanceof componentClass);
      const componentIndex = this.scheduleComponents.indexOf(component);
      if (componentIndex !== -1) {
        this.scheduleContainer.remove(this.scheduleContainer.indexOf(component));
        this.scheduleComponents.splice(componentIndex, 1);
      }
    }

    test() {console.log('test')}

    ngOnInit(): void {
    }

    save() {
      this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }

}
