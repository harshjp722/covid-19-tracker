import { Injectable } from '@angular/core';
import { ApiService } from './base/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private apiService: ApiService
  ) { }

  getWhoNews(): Observable<any> {
    const requestOptions = {
      observe: 'body',
      responseType: 'text'
    };
    return this.apiService.get('https://www.who.int/rss-feeds/news-english.xml', requestOptions);
  }
}
