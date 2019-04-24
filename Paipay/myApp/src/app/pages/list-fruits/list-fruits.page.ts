import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.page.html',
  styleUrls: ['./list-fruits.page.scss'],
})
export class ListFruitsPage implements OnInit {

  public items  = []; 
  qty:any;

  constructor( ) { 
    
    this.items =[
      {name:"Ciruela", img:"assets/fruits/58-02.png" ,price:1.0, qty:1},
      {name:"Guaba", img:"assets/fruits/59-02.png" ,price:1.0, qty:1},
      {name:"Guayaba", img:"assets/fruits/60-02.png" ,price:1.0, qty:1},
      {name:"Limón", img:"assets/fruits/61-02.png" ,price:1.0, qty:1},
      {name:"Mango paipay", img:"assets/fruits/62-02.png" ,price:1.0, qty:1},
      {name:"Mango de chupar", img:"assets/fruits/67-02.png" ,price:1.0, qty:1},
      {name:"Naranja", img:"assets/fruits/63-02.png" ,price:1.0, qty:1},
      {name:"Platano verde", img:"assets/fruits/65-02.png" ,price:1.0, qty:1},
      {name:"Platano", img:"assets/fruits/66-02.png" ,price:1.0, qty:1},
      {name:"Tamarindo", img:"assets/fruits/64-02.png" ,price:1.0, qty:1}
    ];
    
  
  }


  incrementQty() {
    //console.log(this.qty+1);
    this.qty += 1;
  }
  // decrement product qty

  decrementQty() {
    
    if(this.qty-1 < 1 ){
      //console.log(‘1->’+this.qty);
      this.qty = 1;
    }else{
      this.qty -= 1;
    //console.log(‘2->’+this.qty);
    } 
  }


  

  ngOnInit() {
  }

}
