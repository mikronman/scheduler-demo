import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTableComponent } from './split-table.component';

describe('SplitTableComponent', () => {
  let component: SplitTableComponent;
  let fixture: ComponentFixture<SplitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
