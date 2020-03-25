import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.scss']
})
export class JsonDataComponent implements OnInit {

  data;
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
