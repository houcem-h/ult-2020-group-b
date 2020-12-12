import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl:string = 'http://localhost:3000/api/products';

  constructor( private http: HttpClient) { }

  /**
   * Get list of all products
   */
  readAllProducts() {
    return this.http.get(this.apiUrl);
  }

  readOneProduct(id:number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  createProduct(data) {
    return this.http.post(this.apiUrl, data);
  }

  upateProduct(id, data) {
    return this.http.put(this.apiUrl + '/' + id, data);
  }

  deleteProduct(id:number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

}
