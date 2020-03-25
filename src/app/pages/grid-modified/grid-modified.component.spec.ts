import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModifiedComponent } from './grid-modified.component';

describe('GridModifiedComponent', () => {
  let component: GridModifiedComponent;
  let fixture: ComponentFixture<GridModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
