import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private _gifsService: GifsService) { }


  get history() {
    return this._gifsService.history
  }

  findGifs(query: string) {
    this._gifsService.findGifs(query)
  }

}
