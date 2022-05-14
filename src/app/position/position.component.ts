import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

export interface PeriodicElement {
}


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {


  // num1: string = "1234567891011121314151617181920";
  // num2: string = "2019181716151413121110987654321";
  num1 = '';
  num2 = '';
  arr1: number[] = []
  arr2: number[] = []
  result: number[] = []
  constructor() { }

  ngOnInit(): void {

  }

  bigNumberMultiply(num1: string, num2: string) {
    num1 = this.num1
    num2 = this.num2
    let charArr1: string[] = num1.split('')
    let charArr2: string[] = num2.split('')
    const result: number[] = (s => { let a = []; while (s-- > 0) a.push(0); return a; })(num1.length + num2.length);
    // console.log(num1.length + num2.length)
    for (let i = 0; i < num1.length; i++) {
      this.arr1[i] = Number(charArr1[i])
      // console.log(this.arr1[i])
    }
    for (let i = 0; i < num2.length; i++) {
      this.arr2[i] = Number(charArr2[i])
      // console.log(this.arr2[i])
    }
    for (let i: number = 0; i < num1.length; i++) {
      {
        for (let j: number = 0; j < num2.length; j++) {
          {
            result[i + j + 1] += this.arr1[i] * this.arr2[j];
            // console.log('this.result[i + j + 1]:' + result[i + j + 1]);
            // console.log('this.result[i + j + 1]is ' + typeof (result[i + j + 1]));
          };
        }
      };
    }
    for (let k: number = result.length - 1; k > 0; k--) {
      {
        if (result[k] > 10) {
          result[k - 1] += (result[k] / 10 | 0);
          result[k] %= 10;
          // console.log('result[k]:' + result[k])
          // console.log('result[k-1]:' + result[k - 1])
        }
      };
    }
    //第1個數字是0 把0去掉
    if (result[0] === 0) {
      //從第0個位置刪1個數
      result.splice(0,1)
    }
    this.result = result;
    console.info(result)
  }
}
