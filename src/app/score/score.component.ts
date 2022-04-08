import { Component, OnInit } from '@angular/core';

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
  // {position: 6, name: 'Carbon', height: 175, weight: 65},
  // {position: 7, name: 'Nitrogen', height: 150, weight: 50},
  // {position: 8, name: 'Oxygen', height: 160, weight: 55},
  // {position: 9, name: 'Fluorine', height: 180, weight: 80},
  // {position: 10, name: 'Neon', height: 165, weight: 60},
];

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'height', 'weight'];
  dataSource = ELEMENT_DATA;

}
