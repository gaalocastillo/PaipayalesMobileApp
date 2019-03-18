import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule'},
      { path: 'my-cart', loadChildren: './my-cart/my-cart.module#MyCartPageModule'},
      { path: 'productsMenu', loadChildren: './productsMenu/productsMenu.module#ProductsMenuPageModule'},
      { path: 'fruits', loadChildren: './fruits/fruits.module#FruitsPageModule' },
      { path: 'vegetables', loadChildren: './vegetables/vegetables.module#VegetablesPageModule' },
      { path: 'organic', loadChildren: './organic/organic.module#OrganicPageModule' },
      { path: 'rice', loadChildren: './rice/rice.module#RicePageModule' }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/productsMenu' 
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
