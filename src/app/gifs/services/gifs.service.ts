import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { map } from 'rxjs';
import { SearchGifsResponse, GifsSimple } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private GIPHY_KEY: string = environment.GIPHY_KEY;
  private baseUrl: string = "https://api.giphy.com/v1/gifs"
  private _history: string[] = [];

  public results: GifsSimple[] = []

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this._history.length > 0 ? this.findGifs(this.history[0]) : null;
  }

  get history() {
    return [...this._history];
  }

  findGifs(query: string) {

    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10)
      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
      .set('api_key', this.GIPHY_KEY)
      .set('q', query)
      .set('limit', 20)


    this.http.get<SearchGifsResponse>(`${this.baseUrl}/search`, { params })
      .pipe(map(res => {
        let newData: GifsSimple[] = [];
        newData = res.data.map(gif => {
          const { title, images: { downsized_medium } } = gif;
          return { title, downsized_medium }
        })
        return newData;
      }))
      .subscribe(response => this.results = response)
  }
}
