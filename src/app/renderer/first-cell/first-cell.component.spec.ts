import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCellComponent } from './first-cell.component';

describe('FirstCellComponent', () => {
  let component: FirstCellComponent;
  let fixture: ComponentFixture<FirstCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
