import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCustomizedComponent } from './grid-customized.component';

describe('GridCustomizedComponent', () => {
  let component: GridCustomizedComponent;
  let fixture: ComponentFixture<GridCustomizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCustomizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
