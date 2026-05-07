import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Draw } from './draw.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawService {
  private readonly apiUrl = 'api/draws';

  constructor(private http: HttpClient) {}

  getDraws() {
    return this.http.get<Draw[]>(this.apiUrl);
  }

  save(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);  
  }
}