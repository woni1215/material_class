import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';//分頁器
import { MatSort } from '@angular/material/sort';//排序

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  height: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', height: 175, weight: 65},
  {position: 2, name: 'Helium', height: 150, weight: 50},
  {position: 3, name: 'Lithium', height: 160, weight: 55},
  {position: 4, name: 'Beryllium', height: 180, weight: 80},
  {position: 5, name: 'Boron', height: 165, weight: 60},
  {position: 6, name: 'Carbon', height: 175, weight: 65},
  {position: 7, name: 'Nitrogen', height: 150, weight: 50},
  {position: 8, name: 'Oxygen', height: 160, weight: 55},
  {position: 9, name: 'Fluorine', height: 180, weight: 80},
  {position: 10, name: 'Neon', height: 165, weight: 60},
];

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;
  constructor(private matPaginatorIntl: MatPaginatorIntl,) { }

  //table
  dataSource = new MatTableDataSource<any>();

  totalCount!: number;

  ngOnInit(): void {
    this.showData(ELEMENT_DATA);
  }

// 設定分頁器參數
setPaginator() {
  // 設定顯示筆數資訊文字
  this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `第 0 筆、共 ${length} 筆`;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    return `第 ${startIndex + 1} - ${endIndex} 筆、共 ${length} 筆`;
  };

  // 設定其他顯示資訊文字
  this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
  this.matPaginatorIntl.nextPageLabel = '下一頁';
  this.matPaginatorIntl.previousPageLabel = '上一頁';
}

  //顯示資料
  showData(data: any) {
    this.dataSource.data = data;//將資料帶入
    this.totalCount = data.length;//計算資料長度
    this.dataSource.sort = this.sort;// 設定資料排序
    this.dataSource.paginator = this.paginator;// 設定分頁器
  }
  displayedColumns: string[] = ['position', 'name', 'height', 'weight'];
  // dataSource = ELEMENT_DATA;

}
