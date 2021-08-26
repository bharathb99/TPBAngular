import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackadminComponent } from './packadmin.component';

describe('PackadminComponent', () => {
  let component: PackadminComponent;
  let fixture: ComponentFixture<PackadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
