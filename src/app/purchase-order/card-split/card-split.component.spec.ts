import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSplitComponent } from './card-split.component';

describe('CardSplitComponent', () => {
  let component: CardSplitComponent;
  let fixture: ComponentFixture<CardSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
