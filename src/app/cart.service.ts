import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartContent;
  constructor(private localStorageService: LocalStorageService) {
    this.cartContent = this.localStorageService.loadFromLocalStorage();
  }

  addToCart(product) {
    for (let index = 0; index < this.cartContent.length; index++) {
      if(this.cartContent[index].productName == product.productName) {
        this.cartContent[index].quantity += 1;
        this.localStorageService.saveToLocalStorage(this.cartContent);
        alert(product.productName + ' added to cart!');
        return;
      }
    }
    product.quantity = 1;
    this.cartContent.push(product)
    this.localStorageService.saveToLocalStorage(this.cartContent);
    alert(product.productName + ' added to cart!');
  }
}
