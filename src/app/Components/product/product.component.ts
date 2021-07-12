import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute
  ) {}
  products: Product[] = [];
  dataLoaded = false;
  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params) => {
      if (params['CategoryID']) {
        this.getProductsbyCategory(params['CategoryID']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsbyCategory(CategoryID: number) {
    this.productService
      .getProductsByCategory(CategoryID)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
      });
  }
}
