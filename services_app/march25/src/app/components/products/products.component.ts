import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products : any;

  constructor(private _product:ProductsService) { 
    this.products=[];
  }

  ngOnInit(): void {
  }

  getProducts(){
    this.products = this._product.printProduct();
  }
  delProducts(){
    this.products = this._product.deleteProduct();
  }
  
}
