import { Component, OnInit } from '@angular/core';

import { products } from "../stock";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  productList = products;
  constructor() { }

  ngOnInit(): void {

  }

  shareProduct() {
    // code for sharing on socail media
    alert('Your prodcut has been shared with our friends !');
  }

}
