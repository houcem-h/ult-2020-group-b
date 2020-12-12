import { Component, OnInit } from '@angular/core';

import { products } from "../stock";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  // productList = products;
  productList;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.readAllProducts().subscribe(
      (res) => this.productList = res
    );
  }

  shareProduct(name) {
    // code for sharing on socail media
    alert(name + ' has been shared with our friends !');
  }

}
