import { Component, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-price-breakup-section',
  templateUrl: './price-breakup-section.component.html',
  styleUrls: ['./price-breakup-section.component.scss']
})
export class PriceBreakupSectionComponent {
  dataSource: any;
  isDialog = false;
  columnClass = 'col-sm-4';
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, private breakpointObserver: BreakpointObserver) {
    this.dataSource = data ? data : null;
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isDialog = result.matches;
    });
  }

  agInit(params: any) {
    this.dataSource = params.data;
    this.columnClass = this.getClassName(this.dataSource.priceBreakUpMap);
  }

  getClassName(priceBreakUpMap) {
    const priceBreakUpMapKeys = Object.keys(priceBreakUpMap);
    let columns = 0;
    columns = priceBreakUpMapKeys.includes('customsClearanceExport') || priceBreakUpMapKeys.includes('origin') ? ++columns : columns;
    columns = priceBreakUpMapKeys.includes('seaFreight') ? ++columns : columns;
    columns = priceBreakUpMapKeys.includes('customsClearanceImport') || priceBreakUpMapKeys.includes('destination') ? ++columns : columns;
    switch (columns) {
      case 1:
        return 'col-sm-12';
      case 2:
        return 'col-sm-6';
      case 3:
        return 'col-sm-4';
      case 4:
        return 'col-sm-3';
      case 5:
        return 'col-sm-2';
      default:
        return 'col-sm-12';
    }
  }

  priceBreakupCurrency(val) {
    return val ? val.split(' ')[0] : '';
  }

  priceBreakupValue(val) {
    const value = val ? val.split(' ')[1] : '';
    return value || value === 0
      ? parseFloat(value).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : '';
  }

}
