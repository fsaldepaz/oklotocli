import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Draw } from './draw.model';

@Injectable({
  providedIn: 'root',
})
export class DrawService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'api/draws';

  getDraws() {
    return this.http.get<Draw[]>(this.apiUrl);
  }
}