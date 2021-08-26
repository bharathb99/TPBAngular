import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingbillComponent } from './bookingbill.component';

describe('BookingbillComponent', () => {
  let component: BookingbillComponent;
  let fixture: ComponentFixture<BookingbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
