import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOrganicsPage } from './list-organics.page';

const routes: Routes = [
  {
    path: '',
    component: ListOrganicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOrganicsPage]
})
export class ListOrganicsPageModule {}
