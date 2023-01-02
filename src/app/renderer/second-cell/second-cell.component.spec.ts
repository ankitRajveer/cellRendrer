import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCellComponent } from './second-cell.component';

describe('SecondCellComponent', () => {
  let component: SecondCellComponent;
  let fixture: ComponentFixture<SecondCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
