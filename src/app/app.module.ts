import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonDataComponent } from './pages/json-data/json-data.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { HtmlTableComponent } from './pages/html-table/html-table.component';
import { DataServiceService } from './data-service.service';
import { GridBasicComponent } from './pages/grid-basic/grid-basic.component';
import { GridModifiedComponent } from './pages/grid-modified/grid-modified.component';
import { CyClosingComponent } from './grid/cy-closing/cy-closing.component';
import { GridCustomizedComponent } from './pages/grid-customized/grid-customized.component';
import { EtdEtaComponent } from './grid/etd-eta/etd-eta.component';
import { PriceComponent } from './grid/price/price.component';
import { PriceBreakupSectionComponent } from './grid/price-breakup-section/price-breakup-section.component';
import { SaveButtonComponent } from './grid/save-button/save-button.component';
import { BookButtonComponent } from './grid/book-button/book-button.component';
import { GridMasterDetailComponent } from './pages/grid-master-detail/grid-master-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonDataComponent,
    HeaderComponent,
    HtmlTableComponent,
    GridBasicComponent,
    GridModifiedComponent,
    CyClosingComponent,
    GridCustomizedComponent,
    EtdEtaComponent,
    PriceComponent,
    PriceBreakupSectionComponent,
    SaveButtonComponent,
    BookButtonComponent,
    GridMasterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      CyClosingComponent,
      EtdEtaComponent,
      PriceComponent,
      SaveButtonComponent,
      BookButtonComponent,
      PriceBreakupSectionComponent
    ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
