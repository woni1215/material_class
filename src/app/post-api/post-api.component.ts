import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpApiService } from 'src/api/http-api.service';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.scss']
})
export class PostApiComponent implements OnInit {

  postData: FormGroup;
  PData: any//接資料的表格變數
  PostDataSource = new MatTableDataSource() //宣告表格
  Col = ['id', 'title', 'body', 'userId'] //欄位
  data:any = [{
    title : '',
    body : '',
    userId : '',
    id : ''
  }]
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private fb: FormBuilder,
    private HttpApi: HttpApiService,
  ) {
    this.postData = this.fb.group({
      id: '',
      title: '',
      body: '',
      userId: ''
    });
  }

  ngOnInit(): void {
    this.postData = this.fb.group({
      id: new FormControl(),
      title: new FormControl(),
      body: new FormControl(),
      userId: new FormControl()
    });
  }

  //顯示資料
  showData(dataSource: any, data: any) {
    dataSource.data = data; //將資料帶入
    // console.log(data)
    dataSource.sort = this.sort;
  }

  //新增User資料
  postAPIRequest(): void {
    let body = {
      id: this.data.id,
      title: this.data.title,
      body: this.data.body,
      userId: this.data.userId
    }
    this.HttpApi.postAPIRequest(body)
      .subscribe(Request => {
        this.PData = Request
        console.log(this.PData)
        this.showData(this.PostDataSource, [this.PData])
      })
  }

}
