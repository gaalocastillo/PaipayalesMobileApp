import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  public items  = []; 
  qty:any;

  constructor() { 

    this.items =[
      {name:"Ciruela", img:"assets/fruits/58-02.png" ,price:1.0, qty:1},
      {name:"Arroz con Leche", img:"assets/organics/76-02.png" ,price:1.0, qty:1},
      {name:"Mermelada de mango", img:"assets/organics/84-02.png" ,price:1.0, qty:1}
    ];
    

  }

  ngOnInit() {
  }

}
