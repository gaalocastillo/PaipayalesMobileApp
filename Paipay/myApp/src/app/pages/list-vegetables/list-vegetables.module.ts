import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListVegetablesPage } from './list-vegetables.page';

const routes: Routes = [
  {
    path: '',
    component: ListVegetablesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListVegetablesPage]
})
export class ListVegetablesPageModule {}
