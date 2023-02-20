import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'show-results',
  templateUrl: './show-results.component.html',
  styles: [`.size-card {
    height: 100% ;
  object-fit: contain;
  }`
  ]
})
export class ShowResultsComponent {

  constructor(private _gifsService: GifsService) { }

  get results() {
    return this._gifsService.results
  }
}
