import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ShowResultsComponent } from './show-results/show-results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ShowResultsComponent
  ],
  exports: [GifsPageComponent],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
