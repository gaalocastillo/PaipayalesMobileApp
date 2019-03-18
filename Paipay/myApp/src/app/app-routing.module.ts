import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'productsMenu', loadChildren: './productsMenu/productsMenu.module#ProductsMenuPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule' },
  { path: 'my-cart', loadChildren: './my-cart/my-cart.module#MyCartPageModule' },
  { path: 'fruits', loadChildren: './fruits/fruits.module#FruitsPageModule' },
  { path: 'vegetables', loadChildren: './vegetables/vegetables.module#VegetablesPageModule' },
  { path: 'organic', loadChildren: './organic/organic.module#OrganicPageModule' },
  { path: 'rice', loadChildren: './rice/rice.module#RicePageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
