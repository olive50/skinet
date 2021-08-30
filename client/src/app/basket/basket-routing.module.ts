import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketModule } from './basket.module';

const routes: Routes = [
  {path: '', component: BasketComponent},
 // {path: ':id', component: ProductDetailsComponent, data:{breadcrumb:{alias : 'productDetails'}}},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class BasketRoutingModule { }
