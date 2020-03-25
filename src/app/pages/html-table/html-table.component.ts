import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.scss']
})
export class HtmlTableComponent implements OnInit {

  data;
  html = `<table>
      <tr>
          <th>CY Closing</th>
          <th>ETD</th>
          <th>ETA</th>
          <th>Transit Days</th>
          <th>Via</th>
          <th>Price</th>
      </tr>
      <tr *ngFor="let row of data">
          <td>{{ row.cyClosingDayOfWeek }}</td>
          <td>{{ row.etdDayOfWeek }}</td>
          <td>{{ row.etaDayOfWeek }}</td>
          <td>{{ row.transitTime }}</td>
          <td>{{ row.routingVia }}</td>
          <td>USD {{ row.price }}</td>
    </tr>
  </table>`;
  spinner = false;
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.spinner = true;
    this.dataService.getKNData().subscribe(
      data => this.data = data,
      e => this.spinner = false,
      () => this.spinner = false
    );
  }

}
