import { Component, Input, OnInit } from '@angular/core';
import { numbers } from '@material/dialog';
import * as math from 'mathjs';

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
    this.result = math.format(eval(formula), { precision: 14 });
  }

  //按0-9
  pressNum(num: string) {
    this.input = this.input + num
    this.calcAnswer();
  }

  //小數點
  pressDot(dot: string) {
    let formula = this.input;
    let i: number = 0;
    let n: number = 0;
    let str = formula.split("")
    //防止小數點重複出現2次
    for (i = 0; i < formula.length; i++) {
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
      this.input = math.format(eval(formula + am), { precision: 14 });
      this.result = math.format(eval(formula + am), { precision: 14 });
    }
    else {
      formula = formula.substr(0, formula.length - 1);
      this.input = math.format(eval(formula + am), { precision: 14 });
      this.result = math.format(eval(formula + am), { precision: 14 });
    }
  }

  //減號
  pressMinimize(min: string) {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if(lastKey == '.'){
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
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    //如果上一個字是運算符號不能再輸入運算符號
    if(lastKey == '.'){
      formula = formula.substr(0, formula.length - 1);
      this.input = formula + op
      this.calcAnswer();
    }
    if (lastKey != '/' && lastKey != '*' && lastKey != '-' && lastKey != '+' && lastKey != '%' && lastKey != '+/-' && this.input != '') {
      this.input = formula + op
      this.calcAnswer();
    }
  }

  //=鍵
  getAnswer() {
    this.calcAnswer();
    this.done = this.result;
    this.result = '';
    this.input = '';
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
