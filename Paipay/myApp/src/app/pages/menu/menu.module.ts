import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [

  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'my-account', loadChildren: '../my-account/my-account.module#MyAccountPageModule' },
      { path: 'my-cart', loadChildren: '../my-cart/my-cart.module#MyCartPageModule'},
      { path: 'my-points', loadChildren: '../my-points/my-points.module#MyPointsPageModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
      { path: 'products-menu', loadChildren: '../products-menu/products-menu.module#ProductsMenuPageModule' }
      // { path: 'product', loadChildren: '../pages/product/product.module#ProductPageModule' }
    ]
  },
  {
    path:'',
    redirectTo:'/menu/products-menu'
  }
  

  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
