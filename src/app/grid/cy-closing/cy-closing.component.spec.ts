import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyClosingComponent } from './cy-closing.component';

describe('CyClosingComponent', () => {
  let component: CyClosingComponent;
  let fixture: ComponentFixture<CyClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
