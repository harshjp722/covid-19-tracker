import { Injectable, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) { }

  load() {
    return new Promise((resolve) => {
      this.http.get('./assets/json/app.config.json')
        .subscribe(
          (data) => {
            this.config = data;
            resolve(true);
          },
          (error: any) => {
            console.error(error);
            return throwError(error);
          }
        );
    });
  }

  // Gets a value of specified property in the configuration file
  get(key: any) {
    return this.config[key];
  }
}

export function ConfigFactory(config: ConfigService) {
  return () => config.load();
}

export function init() {
  return {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [ConfigService],
      multi: true
  };
}

const ConfigModule = {
  init
};

export { ConfigModule };
