import { Component } from '@angular/core';

@Component({
  selector: 'app-cy-closing',
  templateUrl: './cy-closing.component.html',
  styleUrls: ['./cy-closing.component.scss']
})
export class CyClosingComponent {
  cyClosing: any;
  constructor() { }

  agInit(params: any) {
    this.cyClosing = params.value;
  }

}
