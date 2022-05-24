import { AppleDialogComponent } from './apple-dialog/apple-dialog.component';
import { AddCartDialogComponent } from './add-cart-dialog/add-cart-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatDialog } from '@angular/material/dialog';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {

  // img1 = "assets\img\Apple.jpg";
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    public dialog: MatDialog
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  goods: any[] = [
    { name: 'Apple', fave: 'favorite_border' },
    { name: 'Banana', fave: 'favorite_border' },
    { name: 'Orange', fave: 'favorite_border' },
    { name: 'Pumpkin', fave: 'favorite_border' },
    { name: 'Carrots', fave: 'favorite_border' },
    { name: 'Broccoli', fave: 'favorite_border' }
  ]
  fave: string = 'favorite_border';
  pressFave(goods: string) {
    if (this.fave == 'favorite_border') {
      this.fave = 'favorite'
      console.log('fave: ' + this.fave)
    }
    else {
      this.fave = 'favorite_border'
      console.log('fave: ' + this.fave)
    }
  }

  openDialog() {
    this.dialog.open(AddCartDialogComponent);
  }
  openAppleDialog() {
    this.dialog.open(AppleDialogComponent);
  }
}
