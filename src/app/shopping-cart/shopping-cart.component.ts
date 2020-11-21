import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartContent;

  constructor() { }

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    this.cartContent = JSON.parse(localStorage.getItem('cart')) || [];
  }

}
