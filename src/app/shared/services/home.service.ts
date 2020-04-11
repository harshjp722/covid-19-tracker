import { ConfigService } from './base/config.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './base/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string;
  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
    this.baseUrl = this.config.get('apiBasePath');
   }

  getSummary(): Observable<any> {
    return this.apiService.get(this.baseUrl + 'summary');
  }

  getSummaryDummy(): Observable<any> {
    return this.apiService.get('assets/json/summary.json');
  }

}
