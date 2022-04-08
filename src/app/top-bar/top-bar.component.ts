import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})


export class TopBarComponent implements OnInit {



  ngOnInit(): void {
    this.arrayValue()
    // this.openDialog()
  }
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogComponent);
  }

  name="123"
  //JSON
  menuItem:any []=[
    {content : "登記",router : "form"},
    {content : "調查頁面",router : "survey"}
  ]

  menuItem_content = ["登記","調查頁面"]
  menuItem_router = ["form","survey"]
  // array:any[] = ["資管二甲","C109118138","李宜蓁"]

  arrayValue(){
    for(let i in this.menuItem){
      console.log(this.menuItem[i].content)
      console.log(this.menuItem[i].router)
    }
  }
}

    // for(let i in this.menuItem_content){
    //   console.log("陣列位址",i)
    //   console.log(this.menuItem_content[i])
    // }

    // for(let i in this.menuItem_router){
    //   console.log("陣列位址",i)
    //   console.log(this.menuItem_router[i])
    // }
