import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "../local-storage.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartContent;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.cartContent = this.localStorageService.loadFromLocalStorage();
  }

}
