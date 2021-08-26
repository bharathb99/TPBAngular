import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackeditComponent } from './packedit.component';

describe('PackeditComponent', () => {
  let component: PackeditComponent;
  let fixture: ComponentFixture<PackeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
