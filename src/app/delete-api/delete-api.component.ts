import { Component, OnInit } from '@angular/core';
import { HttpApiService } from 'src/api/http-api.service';
import { MatTableDataSource } from '@angular/material/table'; //表格套件
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  templateUrl: './delete-api.component.html',
  styleUrls: ['./delete-api.component.scss']
})
export class DeleteApiComponent implements OnInit {

  data: any = [{
    title: '',
    body: '',
    userId: '',
    id: ''
  }]
  DataSource = new MatTableDataSource()
  PData: any;
  Col = ['id', 'title', 'body', 'userId']
  deleteData: FormGroup
  constructor(
    private HttpApi: HttpApiService,
    private fb: FormBuilder
  ) {
    this.deleteData = this.fb.group({})
  }

  ngOnInit(): void {
    this.deleteData = this.fb.group({
      id: new FormControl(),
      title: new FormControl(),
      body: new FormControl(),
      userId: new FormControl()
    })
  }

  //顯示資料
  showData(dataSource: any, data: any) {
    dataSource.data = data; //將資料帶入
  }

  //刪除User資料
  deleteAPIRequest(): void {
    let id = this.data.id
    this.HttpApi.deleteAPIRequest(id)
      .subscribe(Request => {
        console.log(Request)
        this.PData = Request
        this.showData(this.DataSource, [this.PData])
      })
  }
}
