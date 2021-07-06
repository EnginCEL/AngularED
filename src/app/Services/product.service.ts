import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../Models/listResponseModel';
import { Product } from '../Models/Product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:49542/Urunler';
  constructor(private httpClient: HttpClient) {}


  getProducts():Observable<listResponseModel<Product>> {
    return this.httpClient.get<listResponseModel<Product>>(this.apiUrl);
  }
}
