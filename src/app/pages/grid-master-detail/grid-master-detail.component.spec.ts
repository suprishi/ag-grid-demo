import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMasterDetailComponent } from './grid-master-detail.component';

describe('GridMasterDetailComponent', () => {
  let component: GridMasterDetailComponent;
  let fixture: ComponentFixture<GridMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
