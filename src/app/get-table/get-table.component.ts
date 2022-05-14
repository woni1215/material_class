import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
import { HttpApiService } from 'src/api/http-api.service'; //api-server
import { MatPaginator, MatPaginatorIntl, PageEvent, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-get-table',
  templateUrl: './get-table.component.html',
  styleUrls: ['./get-table.component.scss']
})
export class GetTableComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private HttpApi: HttpApiService,
  ) { }

  ngOnInit(): void {
    this.getAllUser()
    this.getAPIRequest()
    //this.getAllApiRequest()
    // this.postAPIRequest()
    // this.patchAPIRequest()
    // this.deleteAPIRequest()
  }
  totalCount: any
  //取得專案資料
  getAllUser(): void {
    this.HttpApi.getProjectRequest(1, 14)
      .subscribe(Request => {
        this.PData = Request.body.project
        this.totalCount = Request.body.total
        this.showData(this.PDataSource, this.PData)
        console.log(this.totalCount)
        console.log(this.PData)
        console.log(this.PDataSource)
        // this.showData(this.PDataSource, this.PData)
      })
  }

  //取得User資料
  getAPIRequest(): void {
    let id = 1
    this.HttpApi.getAPIRequest(id)
      .subscribe(Request => {
        this.PData = Request
        console.log(Request)
      })
  }

  //取得all user資料
  getAllApiRequest(): void {
    this.HttpApi.getAllAPIRequest().subscribe(res => {
      console.log(res)
    })
  }

  //新增User資料
  postAPIRequest(): void {
    let body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    this.HttpApi.postAPIRequest(body)
      .subscribe(Request => {
        console.log(Request)
      })
  }

  //修改User資料
  patchAPIRequest(): void {
    let id = 1
    let body = {
      title: 'fooooooooooo'
    }
    this.HttpApi.patchAPIRequest(id, body)
      .subscribe(Request => {
        console.log(Request)
      })
  }

  //刪除User資料
  deleteAPIRequest(): void {
    let id = 1
    this.HttpApi.deleteAPIRequest(id)
      .subscribe(Request => {
        console.log(Request)
      })
  }

  // 顯示資料
  showData(dataSource: any, data: any) {
    //dataSource.data = this.PData;
    dataSource.data = data;//將資料帶入
    dataSource.sort = this.sort;
    dataSource.paginator = this.paginator;
  }

  PDataSource = new MatTableDataSource(); //宣告表格
  Col = ['code', 'type', 'p_name'] //欄位
  PData: any//接資料的表格變數

}
