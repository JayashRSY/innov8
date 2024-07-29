import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getWorkData(): Observable<any> {
    const sheetName = 'Sheet1'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${environment.spreadsheetId}/values/${sheetName}?key=${environment.googleApiKey}`;
    return this.http.get(url);
  }
}
