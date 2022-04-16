import { Component, OnInit,ViewChild } from '@angular/core';
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
    private HttpApi:HttpApiService,
  ) { }

  ngOnInit(): void {
    this.getAllUser()
  }
totalCount:any
//取得專案資料
getAllUser(): void {
  this.HttpApi.getProjectRequest(1,14)
  .subscribe(Request => {
      this.PData = Request.body.project
      this.totalCount = Request.body.total
      console.log(this.totalCount)
      this.showData(this.PDataSource,this.PData)
  })
}

// 顯示資料
showData(dataSource:any,data: any) {
  dataSource.data = data;//將資料帶入
  dataSource.sort = this.sort;
dataSource.paginator = this.paginator;
}

  PDataSource = new MatTableDataSource(); //宣告表格
  Col=['code','type','p_name'] //欄位
  PData:any//接資料的表格變數

}
