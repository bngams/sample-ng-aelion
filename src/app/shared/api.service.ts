import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API_ERROR } from './api-error.const';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  route(path: string): string {
    return environment.apiBaseUrl + path;
  }

  error(code: number) {
    return API_ERROR.get(code);
  }

}
