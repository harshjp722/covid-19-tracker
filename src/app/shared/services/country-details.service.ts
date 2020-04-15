import { Injectable } from '@angular/core';
import { ApiService } from './base/api.service';
import { ConfigService } from './base/config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  baseUrl: string;
  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
    this.baseUrl = this.config.get('apiBasePath');
  }

  getCountryDetails(slug): Observable<any> {
    return this.apiService.get(this.baseUrl + 'live/country/' + slug);
  }

  getCountryDetailsDummy(): Observable<any> {
    return this.apiService.get('assets/json/country.details.json');
  }

}
