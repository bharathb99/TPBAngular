import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackbookcreateComponent } from './packbookcreate.component';

describe('PackbookcreateComponent', () => {
  let component: PackbookcreateComponent;
  let fixture: ComponentFixture<PackbookcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackbookcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackbookcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
