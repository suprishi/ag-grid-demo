import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /* data;
  dataUrl =
    'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/simple/data/data.json';
  private columnDefs;
  private detailCellRendererParams;

  knDataPayload = {
    pageable: {
      pageSize: 25,
      pageNumber: 0,
    },
    polCode: 'SGSIN',
    podCode: 'JPTYO',
    polName: 'Singapore',
    podName: 'Tokyo',
    container20ft: 1,
    container40ft: 0,
    container40ftHC: 0,
    cargoReadyDate: '2019-11-08',
    includeOriginCharges: true,
    includeCustomsClearanceExport: false,
    includeDestinationCharges: false,
    includeCustomsClearanceImport: false,
    sortBy: 'CYCLOSING',
  };
  knData;
  knColumnDefs;
  knDetailCellRendererParams; */
  constructor() {}

  ngOnInit() {
    /* this.getData().subscribe(data => (this.data = data));
    this.columnDefs = [
      {
        field: 'name',
        cellRenderer: 'agGroupCellRenderer',
      },
      { field: 'account' },
      { field: 'calls' },
      {
        field: 'minutes',
        valueFormatter: 'x.toLocaleString() + "m"',
      },
    ];
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: 'callId' },
          { field: 'direction' },
          { field: 'number' },
          {
            field: 'duration',
            valueFormatter: 'x.toLocaleString() + "s"',
          },
          { field: 'switchCode' },
        ],
        onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        },
      },
      getDetailRowData: params => {
        params.successCallback(params.data.callRecords);
      },
    };

    this.getKNData().subscribe(data => this.knData = data);
    this.knColumnDefs = [
      {headerName: 'Cy Closing', field: 'cyClosingDayOfWeek'},
      {headerName: 'ETD', field: 'etdDayOfWeek' },
      {headerName: 'Via', field: 'routingVia' },
      {headerName: 'ETA', field: 'etaDayOfWeek' },
      {headerName: 'Price', field: 'price'},
      {headerName: 'Valid Until', field: 'contractExpiryDate' },
    ];
    this.knDetailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          {field: 'THB'},
          {field: 'USD'}
        ],
        onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        },
      },
      getDetailRowData: params => {
        params.successCallback(params.data.subTotalMap);
      },
    }; */
  }

  /* getData() {
    return this.http.get<any>(this.dataUrl);
  } */


}
