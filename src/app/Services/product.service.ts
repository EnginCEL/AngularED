import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../Models/listResponseModel';
import { Product } from '../Models/Product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:49542/';
  constructor(private httpClient: HttpClient) {}


  getProducts():Observable<listResponseModel<Product>> {
    let newPath=this.apiUrl+"Urunler"
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }

  getProductsByCategory(CategoryID:number):Observable<listResponseModel<Product>> {
    let newPath=this.apiUrl+"ProductbyCategory/"+CategoryID;
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }
}
