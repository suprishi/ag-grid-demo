import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonDataComponent } from './pages/json-data/json-data.component';
import { HtmlTableComponent } from './pages/html-table/html-table.component';
import { GridBasicComponent } from './pages/grid-basic/grid-basic.component';
import { GridModifiedComponent } from './pages/grid-modified/grid-modified.component';
import { GridCustomizedComponent } from './pages/grid-customized/grid-customized.component';
import { GridMasterDetailComponent } from './pages/grid-master-detail/grid-master-detail.component';


const routes: Routes = [
  { path: 'json-data', component: JsonDataComponent },
  { path: 'html-table', component: HtmlTableComponent },
  { path: 'grid-basic', component: GridBasicComponent },
  { path: 'grid-modified', component: GridModifiedComponent },
  { path: 'grid-customized', component: GridCustomizedComponent },
  { path: 'grid-master-detail', component: GridMasterDetailComponent },
  { path: '', redirectTo: '/json-data', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
