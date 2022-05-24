import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
import { HttpApiService } from 'src/api/http-api.service'; //api-server
import { MatPaginator, MatPaginatorIntl, PageEvent, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.scss']
})
export class GetApiComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;//單引號中的paginator對應到html的#paginator(名稱要相同)
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private HttpApi: HttpApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllApiRequest()
  }

  totalCount: any
  PData: any//接資料的表格變數
  PDataSource = new MatTableDataSource() //宣告表格
  Col = ['id', 'userId', 'title', 'btn_edit'] //欄位

  //取得all user資料
  getAllApiRequest(): void {
    this.HttpApi.getAllAPIRequest().subscribe(res => {
      this.PData = res
      console.log(res)
      this.showData(this.PDataSource, this.PData)
    })
  }

  // 顯示資料
  showData(dataSource: any, data: any) {
    //dataSource.data = this.PData;
    dataSource.data = data;//將資料帶入
    dataSource.sort = this.sort;
    dataSource.paginator = this.paginator;
  }

  edit(userId: any, title: any) {
    this.dialog.open(EditDialogComponent, {
      data: { //JSON格式
        userId: userId,
        title: title
      }
    })
  }

}
