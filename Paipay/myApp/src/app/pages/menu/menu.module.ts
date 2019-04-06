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
      { path: 'products-menu', loadChildren: '../products-menu/products-menu.module#ProductsMenuPageModule' },
      { path: 'fruits', loadChildren: '../fruits/fruits.module#FruitsPageModule' },
  { path: 'vegetables', loadChildren: '../vegetables/vegetables.module#VegetablesPageModule' },
  { path: 'organics', loadChildren: '../organics/organics.module#OrganicsPageModule' },
  { path: 'rices', loadChildren: '../rices/rices.module#RicesPageModule' }
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
