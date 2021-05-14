import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface ProductsNode {
  name: string;
  children?: ProductsNode[];
}
const TREE_DATA: ProductsNode[] =
  [
    {
      name: 'Shoes',
      children: [
        {
          name: 'Sneakers',
          children: [
            { name: 'Puma' },
            { name: 'Nike' },
          ]
        }, {
          name: 'Running Shoes',
          children: [
            { name: 'Nike' },
            { name: 'Puma' },
          ]
        },
      ]
    },
  ];

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<ProductsNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ProductsNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ProductsNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}


