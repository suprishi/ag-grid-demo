import { Component, OnInit } from '@angular/core';
import { CyClosingComponent } from 'src/app/grid/cy-closing/cy-closing.component';
import { EtdEtaComponent } from 'src/app/grid/etd-eta/etd-eta.component';
import { PriceComponent } from 'src/app/grid/price/price.component';
import { SaveButtonComponent } from 'src/app/grid/save-button/save-button.component';
import { BookButtonComponent } from 'src/app/grid/book-button/book-button.component';
import { PriceBreakupSectionComponent } from 'src/app/grid/price-breakup-section/price-breakup-section.component';
import { GridOptions } from 'ag-grid-community';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-grid-master-detail',
  templateUrl: './grid-master-detail.component.html',
  styleUrls: ['./grid-master-detail.component.scss']
})
export class GridMasterDetailComponent implements OnInit {
  data;
  spinner = false;
  frameworkComponents = {
    cyClosingComponent: CyClosingComponent,
    etdViaTransitEtaComponent: EtdEtaComponent,
    bookingPriceComponent: PriceComponent,
    saveQuoteButtonComponent: SaveButtonComponent,
    bookQuoteButtonComponent: BookButtonComponent,
    priceBreakupSectionComponent: PriceBreakupSectionComponent,
  };
  columnDefs = [
    {
      field: 'cyClosingDayOfWeek',
      cellClass: 'cyClosingCell',
      width: 120,
      cellRenderer: 'cyClosingComponent',
    },
    {
      cellRenderer: 'etdViaTransitEtaComponent',
      width: 370,
      valueGetter: params => params.data,
    },
    {
      field: 'price',
      cellClass: 'priceButtonCell',
      cellRenderer: 'bookingPriceComponent',
      valueGetter: params => true,
    },
    {
      colId: 'save',
      width: 150,
      cellRenderer: 'saveQuoteButtonComponent',
      cellClass: 'saveQuoteButtonCell',
    },
    {
      colId: 'book',
      width: 150,
      cellRenderer: 'bookQuoteButtonComponent',
      cellClass: 'bookQuoteButtonCell',
    },
  ];
  gridOptions: GridOptions = {
    headerHeight: 0,
    masterDetail: true,
    frameworkComponents: this.frameworkComponents,
    domLayout: 'autoHeight',
    suppressCellSelection: true,
    suppressContextMenu: true,
    detailCellRenderer: 'priceBreakupSectionComponent',
    onGridReady: () => {
      this.spinner = false;
      if (this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    },
    onGridSizeChanged: () => {
      if (this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    },
  };
  framework = `{
    cyClosingComponent: CyClosingComponent,
    etdViaTransitEtaComponent: EtdEtaComponent,
    bookingPriceComponent: PriceComponent,
    saveQuoteButtonComponent: SaveButtonComponent,
    bookQuoteButtonComponent: BookButtonComponent,
    priceBreakupSectionComponent: PriceBreakupSectionComponent,
  }`;
  gridOptionsOutput = `{
    headerHeight: 0,
    masterDetail: true,
    frameworkComponents: this.frameworkComponents,
    domLayout: 'autoHeight',
    suppressCellSelection: true,
    suppressContextMenu: true,
    detailCellRenderer: 'priceBreakupSectionComponent',
    onGridReady: () => {
      this.spinner = false;
      if (this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    },
    onGridSizeChanged: () => {
      if (this.gridOptions.api) {
        this.gridOptions.api.sizeColumnsToFit();
      }
    },
  }`;
  html = `<ag-grid-angular
  class="ag-theme-material"
  [columnDefs]="columnDefs"
  [gridOptions]="gridOptions"
  [rowData]="data"
></ag-grid-angular>`;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.spinner = true;
    this.dataService.getKNData().subscribe(
      data => this.data = data,
    );
  }
}
