import { Component } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent {
  params: any;
  status: string;
  constructor() { }

  agInit(params: any) {
    this.params = params;
    this.status = params.value;
  }

}
