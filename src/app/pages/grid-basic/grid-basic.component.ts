import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-grid-basic',
  templateUrl: './grid-basic.component.html',
  styleUrls: ['./grid-basic.component.scss']
})
export class GridBasicComponent implements OnInit {

  data;
  spinner = false;
  columnDefs;
  html = `<ag-grid-angular
      style="height: 500px;"
      class="ag-theme-material"
      [columnDefs]="columnDefs"
      [rowData]="data"
  ></ag-grid-angular>`;
  license = `
import { LicenseManager } from 'ag-grid-enterprise';
.
.
.
LicenseManager.setLicenseKey('your_license_here');

`;
appModule = `import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    .
    .
    imports: [
    AgGridModule.withComponents([]),
    ]
})`;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.spinner = true;
    this.dataService.getKNData().subscribe(
      data => {
        this.data = data;
        this.initializeGrid();
      },
      e => this.spinner = false,
      () => this.spinner = false
    );
  }

  initializeGrid() {
    this.columnDefs = [
      {headerName: 'Cy Closing', field: 'cyClosingDayOfWeek'},
      {headerName: 'ETD', field: 'etdDayOfWeek' },
      {headerName: 'ETA', field: 'etaDayOfWeek' },
      {headerName: 'Transit Days', field: 'transitTime' },
      {headerName: 'Via', field: 'routingVia' },
      {headerName: 'Price', field: 'price'},
      {headerName: 'Valid Until', field: 'contractExpiryDate' },
    ];
  }

}
