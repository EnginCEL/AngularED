import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
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
}
