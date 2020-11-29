import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  @Input() productId;
  @Output() shareEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
