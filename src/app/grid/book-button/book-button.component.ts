import { Component } from '@angular/core';

@Component({
  selector: 'app-book-button',
  templateUrl: './book-button.component.html',
  styleUrls: ['./book-button.component.scss']
})
export class BookButtonComponent {
  params: any;
  constructor() { }

  agInit(params: any) {
    this.params = params;
  }

}
