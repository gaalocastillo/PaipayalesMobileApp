import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule' },
  { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'forgottenpass', loadChildren: './pages/forgottenpass/forgottenpass.module#ForgottenpassPageModule' },
  { path: 'products-menu', loadChildren: './pages/products-menu/products-menu.module#ProductsMenuPageModule' },
  { path: 'my-account', loadChildren: './pages/my-account/my-account.module#MyAccountPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'my-cart', loadChildren: './pages/my-cart/my-cart.module#MyCartPageModule' },
  { path: 'fruits', loadChildren: './pages/fruits/fruits.module#FruitsPageModule' },
  { path: 'vegetables', loadChildren: './pages/vegetables/vegetables.module#VegetablesPageModule' },
  { path: 'organics', loadChildren: './pages/organics/organics.module#OrganicsPageModule' },
  { path: 'rices', loadChildren: './pages/rices/rices.module#RicesPageModule' },
  { path: 'my-points', loadChildren: './pages/my-points/my-points.module#MyPointsPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'email-send', loadChildren: './pages/email-send/email-send.module#EmailSendPageModule' },
  { path: 'adress', loadChildren: './pages/adress/adress.module#AdressPageModule' },
  { path: 'balance', loadChildren: './pages/balance/balance.module#BalancePageModule' },
  { path: 'list-fruits', loadChildren: './pages/list-fruits/list-fruits.module#ListFruitsPageModule' },
  { path: 'order', loadChildren: './pages/order/order.module#OrderPageModule' },
  { path: 'list-vegetables', loadChildren: './pages/list-vegetables/list-vegetables.module#ListVegetablesPageModule' },
  { path: 'list-organics', loadChildren: './pages/list-organics/list-organics.module#ListOrganicsPageModule' },
  { path: 'list-rices', loadChildren: './pages/list-rices/list-rices.module#ListRicesPageModule' },
  { path: 'confirmation', loadChildren: './pages/confirmation/confirmation.module#ConfirmationPageModule' },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
