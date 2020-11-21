import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { products } from "../../stock";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  cartContent;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('id')];
    });
    this.loadFromLocalStorage();
  }

  addToCart(prod) {
    for (let index = 0; index < this.cartContent.length; index++) {
      if(this.cartContent[index].productName == prod.productName) {
        this.cartContent[index].quantity += 1;
        this.saveToLocalStorage();
        // alert(prod.productName + ' added to cart!');
        return;
      }
    }
    prod.quantity = 1;
    this.cartContent.push(prod)
    this.saveToLocalStorage();
    // alert(prod.productName + ' added to cart!');
  }

  saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartContent));
  }

  loadFromLocalStorage() {
    this.cartContent = JSON.parse(localStorage.getItem('cart')) || [];
  }

}
