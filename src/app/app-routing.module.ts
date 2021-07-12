import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [

  { path:"",pathMatch:'full', component:ProductComponent },
  {path:"Products", component:ProductComponent},
  { path:"Product/Category/:CategoryID", component:ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
