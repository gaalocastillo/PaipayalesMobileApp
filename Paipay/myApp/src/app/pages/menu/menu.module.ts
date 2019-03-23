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
      { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule'},
      { path: 'my-cart', loadChildren: './my-cart/my-cart.module#MyCartPageModule'},
      { path: 'products-menu', loadChildren: './pages/products-menu/products-menu.module#ProductsMenuPageModule' },
      { path: 'fruits', loadChildren: './fruits/fruits.module#FruitsPageModule' },
      { path: 'vegetables', loadChildren: './pages/vegetables/vegetables.module#VegetablesPageModule' },
      { path: 'organics', loadChildren: './pages/organics/organics.module#OrganicsPageModule' },
      { path: 'rices', loadChildren: './pages/rices/rices.module#RicesPageModule' }
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
