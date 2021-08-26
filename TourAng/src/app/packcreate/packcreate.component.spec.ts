import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackcreateComponent } from './packcreate.component';

describe('PackcreateComponent', () => {
  let component: PackcreateComponent;
  let fixture: ComponentFixture<PackcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
