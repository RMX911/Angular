import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any;
  constructor(http:HttpClient) {
      http.get<any>("https://jsonplaceholder.typicode.com/todos").subscribe(
        data => {
          this.products= data
        });
   }

   printProduct(){
     return this.products;
   }
   deleteProduct() {
    return []
  }
}

