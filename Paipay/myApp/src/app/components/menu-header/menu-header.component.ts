import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {

  constructor(private navCtrl:NavController) { }

  goBack(){
    this.navCtrl.back();
  }

  ngOnInit() {}

}
