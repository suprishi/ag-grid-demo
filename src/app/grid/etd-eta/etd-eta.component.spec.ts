import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtdEtaComponent } from './etd-eta.component';

describe('EtdEtaComponent', () => {
  let component: EtdEtaComponent;
  let fixture: ComponentFixture<EtdEtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtdEtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtdEtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
