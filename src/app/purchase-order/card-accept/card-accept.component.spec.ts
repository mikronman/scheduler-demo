import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcceptComponent } from './card-accept.component';

describe('CardAcceptComponent', () => {
  let component: CardAcceptComponent;
  let fixture: ComponentFixture<CardAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
