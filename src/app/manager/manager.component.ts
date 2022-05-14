import { Component, Input, OnInit } from '@angular/core';
import * as math from 'mathjs';
import { number } from 'mathjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  input: string = '';
  result: string = '';
  done: string = '';
  keyword = "";
  constructor() { }

  ngOnInit(): void {
  }

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
}
