import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { NaviComponent } from './Components/navi/navi.component';
import { VatAddedPipe } from './Pipes/vat-added.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
