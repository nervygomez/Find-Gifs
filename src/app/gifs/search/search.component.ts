import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtFind') txtFind!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) { }

  find() {
    const valor = this.txtFind.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }
    this._gifsService.findGifs(valor);

    this.txtFind.nativeElement.value = '';
  }
}
