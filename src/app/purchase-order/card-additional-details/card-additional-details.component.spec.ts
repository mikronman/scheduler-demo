import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdditionalDetailsComponent } from './card-additional-details.component';

describe('CardAdditionalDetailsComponent', () => {
  let component: CardAdditionalDetailsComponent;
  let fixture: ComponentFixture<CardAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdditionalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
