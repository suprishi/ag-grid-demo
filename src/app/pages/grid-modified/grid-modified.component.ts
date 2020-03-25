import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-grid-modified',
  templateUrl: './grid-modified.component.html',
  styleUrls: ['./grid-modified.component.scss'],
})
export class GridModifiedComponent implements OnInit {
  data;
  spinner = false;
  columnDefs = [
    { headerName: 'Cy Closing', field: 'cyClosingDayOfWeek' },
    { headerName: 'ETD', field: 'etdDayOfWeek' },
    { headerName: 'ETA', field: 'etaDayOfWeek' },
    { headerName: 'Transit Days', field: 'transitTime' },
    { headerName: 'Via', field: 'routingVia' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Valid Until', field: 'contractExpiryDate' },
  ];
  gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    suppressCellSelection: true,
    suppressContextMenu: true,
    columnDefs: this.columnDefs,
    onGridReady: () => {
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
  gridOptionsOutput = `{
    domLayout: 'autoHeight',
    suppressCellSelection: true,
    suppressContextMenu: true,
    columnDefs: this.columnDefs,
    onGridReady: () => {
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
      e => (this.spinner = false),
      () => (this.spinner = false),
    );
  }

}
