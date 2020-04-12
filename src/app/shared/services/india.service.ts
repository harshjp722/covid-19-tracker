import { ConfigService } from './base/config.service';
import { Injectable } from '@angular/core';
import { ApiService } from './base/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiaService {
  baseUrl: string;
  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
    this.baseUrl = this.config.get('indiaApiBasePath');
  }

  getSummary(): Observable<any> {
    return this.apiService.get(this.baseUrl + 'data.json');
  }
}
