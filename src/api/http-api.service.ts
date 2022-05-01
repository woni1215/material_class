import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; //http協定
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';// RxJS 可觀察物件和運算子
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private BaseUrl: string = 'https://api.testing.eirc.app/authority/v1.0';//伺服器固定網址
  private jsonplaceholder: string = 'https://jsonplaceholder.typicode.com';//伺服器固定網址

  constructor(
    private http: HttpClient
  ) { }

  getProjectRequest(page: number, limit: number): Observable<any> {
    return this.http.get(this.BaseUrl + '/project?page=' + page + '&limit=' + limit);
  }

  //取得User資料
  getAPIRequest(id: any): Observable<any> {
    const url = `${this.jsonplaceholder}/posts/${id}`;
    return this.http.get(url);
  }

  //取得All User資料 get
  getAllAPIRequest(): Observable<any> {
    const url = `${this.jsonplaceholder}/posts`;
    return this.http.get(url);
}

  //新增User資料
  postAPIRequest(body: any): Observable<any> {
    const url = `${this.jsonplaceholder}/posts`;
    return this.http.post(url, body);
  }

  //修改User資料
  patchAPIRequest(id: any, body: any): Observable<any> {
    const url = `${this.jsonplaceholder}/posts/${id}`;
    return this.http.patch(url, body);
  }

  //刪除User資料
  deleteAPIRequest(id: any): Observable<any> {
    const url = `${this.jsonplaceholder}/posts/${id}`;
    return this.http.delete(url);
  }
}
