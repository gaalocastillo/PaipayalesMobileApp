import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, NavParams} from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';
import {EnvService} from 'src/app/services/env.service';
import {StorageService} from 'src/app/services/storage.service';
@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.page.html',
  styleUrls: ['./list-fruits.page.scss'],
})
export class ListFruitsPage implements OnInit {

  private items  = []; 
  

  constructor(private http:HttpClient, private router: Router,private purchase: StorageService, private env: EnvService) { 
    
    this.http.get(env.API_URL +'/api/v1/products/Frutas').subscribe((response : any[]) => {

    response.forEach(element => {
      element["qty"] = 0;
      this.items.push(element);
    });

  });   
  
  
  }
  
 // increment product qty
  incrementQty(id:string) {

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items[i].qty += 1;
        break;
      }
    }

    console.log(this.items);
    
  }

  // decrement product qty
  decrementQty(id:string) {

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        if(this.items[i].qty < 1 ){
          this.items[i].qty = 0;
        }else{
          this.items[i].qty -= 1;
        } 
        break;
      }
    }
    console.log(this.items);
  }


  BackButtonAction(){
    
  }

  returnToMenu(){
    //[routerLink]="['/menu/products-menu']"
    this.router.navigate(['/menu/products-menu']);
  }

  makePurchase(){

    var selectedItems = [];

    this.items.forEach(element => {
      if(element.qty!==0){
        selectedItems.push(element);
      }
    });

    this.purchase.storage = selectedItems;

    this.router.navigate(['my-cart'], this.purchase.storage);

  }


  ngOnInit() {
  }




}
