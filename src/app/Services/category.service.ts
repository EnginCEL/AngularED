import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';
import { listResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'http://localhost:49542/Kategoriler';
  constructor(private httpClient:HttpClient) { }

  GetCategories():Observable<listResponseModel<Category>>{

    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl);
  }
}
