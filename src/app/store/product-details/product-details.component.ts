import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { products } from "../../stock";
import { LocalStorageService } from "../../local-storage.service";
import { CartService } from "../../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  cartContent;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('id')];
    });
    this.cartContent = this.localStorageService.loadFromLocalStorage();
  }

  addToCart(prod) {
    this.cartService.addToCart(prod);
  }

}
