import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRejectComponent } from './card-reject.component';

describe('CardRejectComponent', () => {
  let component: CardRejectComponent;
  let fixture: ComponentFixture<CardRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
