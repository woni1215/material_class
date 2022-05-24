import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  //雙向綁定
  keyword = "";

  //計算機
  input: string = '';
  result: string = '';
  done: string = '';

  //大數
  // num1: string = "1234567891011121314151617181920";
  // num2: string = "2019181716151413121110987654321";
  num1 = '';
  num2 = '';
  arr1: number[] = []
  arr2: number[] = []
  answer: number[] = []
  constructor() { }

  ngOnInit(): void {
  }

  //計算機
  //計算答案
  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    //substr:從第0位置開始擷取，擷取(formula.length-1)個字元(如果最後一個字元為運算符號去掉)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '%' || lastKey === '+/-' || lastKey === '.') {
      formula = formula.substr(0, formula.length - 1);
    }
    console.log("Formula " + formula);
    this.result = math.evaluate(formula)
  }

  //按0-9
  pressNum(num: string) {
    if (this.input == '' && num == '0') { }
    else {
      this.input = this.input + num
      this.calcAnswer();
    }
  }

  //小數點
  pressDot(dot: string) {
    let formula = this.input;
    let n: number = 0;
    let str = formula.split("")
    //防止小數點重複出現2次
    for (let i = 0; i < formula.length; i++) {
      if (str[i] == '/' || str[i] == '*' || str[i] == '-' || str[i] == '+' || str[i] == '%')
        n = 0;
      if (str[i] == '.')
        n++;
    }
    if (n < 1) {
      this.input = formula + dot;
    }
  }

  //正負數轉換
  pressAddMinimize(am: string) {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    am = '*-1'
    if (lastKey != '/' && lastKey != '*' && lastKey != '-' && lastKey != '+' && lastKey != '%' && lastKey != '.' && this.input != '') {
      this.input = math.evaluate(formula + am);
      this.result = this.input
    }
    else {
      formula = formula.substr(0, formula.length - 1);
      this.input = math.evaluate(formula);
      this.result = this.input
    }
  }

  //減號
  pressMinimize(min: string) {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (lastKey == '.') {
      formula = formula.substr(0, formula.length - 1);
      this.input = formula + min
      this.calcAnswer();
    }
    //如果上一個字是運算符號不能再輸入運算符號
    if (lastKey != '-' && lastKey != '+') {
      this.input = formula + min
    }
  }

  //按運算符號
  pressOperator(op: string) {
    this.input = this.input + op
    this.calcAnswer();
  }

  //=鍵
  getAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (this.input == '') {
      // this.input = this.done;
    }
    else {
      this.calcAnswer();
      this.input = this.result;
      // this.done = this.result;
      // this.input = '';
      // console.log("done " + this.done);
    }
  }
  //backspace鍵
  clear() {
    this.input = this.input.substr(0, this.input.length - 1)
    this.result = this.input;
  }

  //C鍵(清空)
  allClear() {
    this.result = '';
    this.input = '';
    this.done = '';
  }

  //大數
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
    this.answer = result;
    console.info(result)
  }
}
