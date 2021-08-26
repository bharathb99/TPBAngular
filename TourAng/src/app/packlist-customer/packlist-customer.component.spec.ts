import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacklistCustomerComponent } from './packlist-customer.component';

describe('PacklistCustomerComponent', () => {
  let component: PacklistCustomerComponent;
  let fixture: ComponentFixture<PacklistCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacklistCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacklistCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
