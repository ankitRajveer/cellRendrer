import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCellComponent } from './model-cell.component';

describe('ModelCellComponent', () => {
  let component: ModelCellComponent;
  let fixture: ComponentFixture<ModelCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
