import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBreakupSectionComponent } from './price-breakup-section.component';

describe('PriceBreakupSectionComponent', () => {
  let component: PriceBreakupSectionComponent;
  let fixture: ComponentFixture<PriceBreakupSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBreakupSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBreakupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
