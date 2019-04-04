import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {

  public items: Array<any>;


  constructor() {

      this.items = [
      {name:"Casa Laguna"},
      {name:"Compostela"},
      {name:"La Joya"},
      {name:"La Rioja"},
      {name:"Plaza Madeira"},
      {name:"Sta. María Casa Grande"}
    ];
  
   }

  ngOnInit() {
  }

}
