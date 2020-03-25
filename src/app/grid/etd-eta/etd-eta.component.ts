import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-etd-eta',
  templateUrl: './etd-eta.component.html',
  styleUrls: ['./etd-eta.component.scss']
})
export class EtdEtaComponent {
  data: any;
  isHandset = false;
  constructor(private breakpointObserver: BreakpointObserver) { }

  agInit(params: any) {
    this.data = params.data;
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isHandset = result.matches;
    });
  }

}
