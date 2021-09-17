import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  currentCategory: Category;
  Categories: Category[] = [];
  dataLoaded = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories() {
    this.categoryService.GetCategories().subscribe((response) => {
      this.Categories = response.data;
      
      this.dataLoaded = true;
    });

  }

  setCurrentCategory(category: Category) {

    this.currentCategory = category;
    
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {

      return "list-group-item active"
    }
    else {

      return "list-group-item"

    }
  }
  
  GetAllCategoryClass(){

    if(!this.currentCategory){

      return "list-group-item active"
    }
    else
    {return  "list-group-item"}
  }

   

}
