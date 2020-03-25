import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { PriceBreakupSectionComponent } from '../price-breakup-section/price-breakup-section.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  params: any;
  showPriceBreakup: boolean;
  icon = 'expand_more';
  isHandset = false;
  priceBreakupExpanded = false;
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { }

  agInit(params: any) {
    this.params = params;
    this.showPriceBreakup = params.value;
    this.priceBreakupExpanded = params.node.expanded;
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isHandset = result.matches;
      this.icon = this.isHandset ? 'info' : 'expand_more';
    });
  }

  togglePriceBreakup() {
    if (this.showPriceBreakup && Object.keys(this.params.data.priceBreakUpMap).length > 0) {
      if (this.isHandset) {
        this.dialog.open(PriceBreakupSectionComponent,
          {
            maxWidth: '100%',
            width: '100%',
            height: '100%',
            panelClass: 'priceBreakupDialog',
            backdropClass: 'priceBreakupDialog',
            data: this.params.data
          });
      } else {
        this.priceBreakupExpanded = !this.priceBreakupExpanded;
        this.params.api.forEachNode((node) => {
          node.setExpanded(false);
        });
        this.params.node.setExpanded(this.priceBreakupExpanded);
      }
    }
  }

}
