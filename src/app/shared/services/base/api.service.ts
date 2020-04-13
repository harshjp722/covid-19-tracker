import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(url, options?: any) {
    return this.http.get(url, options).pipe(
      map(res => res),
      catchError(err => throwError(err))
    );
  }

  post(url, postBody: any, options?: any) {
    if (options) {
      return this.http.post(url, postBody, options).pipe(
        map(res => res),
        catchError(err => throwError(err))
      );
    } else {
      return this.http.post(url, postBody).pipe(
        map(res => res),
        catchError(err => throwError(err))
      );
    }
  }

  delete(url, postBody: any) {
    return this.http.delete(url, postBody).pipe(
      map(res => res),
      catchError(err => throwError(err))
    );
  }

  put(url, putData) {
    return this.http.put(url, putData).pipe(
      map(res => res),
      catchError(err => throwError(err))
    );
  }

}
