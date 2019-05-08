import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AdressPage } from './adress.page';

const routes: Routes = [
  {
    path: '',
    component: AdressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MbscModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdressPage]
})
export class AdressPageModule {


}