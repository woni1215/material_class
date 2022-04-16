import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';// RxJS 可觀察物件和運算子

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private BaseUrl: string = 'https://api.testing.eirc.app/authority/v1.0';//伺服器固定網址

  constructor(
    private http: HttpClient
  ) { }

  getProjectRequest(page: number, limit: number): Observable<any> {

    return this.http.get(this.BaseUrl + '/project?page=' + page + '&limit=' + limit);
  }

}
