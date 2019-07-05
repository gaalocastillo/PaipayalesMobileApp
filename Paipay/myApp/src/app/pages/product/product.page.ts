import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, NavParams} from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';
import {EnvService} from 'src/app/services/env.service';
import {StorageService} from 'src/app/services/storage.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private items  = []; 
  private categoriesOptions = [];
  private category: any;

  constructor(private http:HttpClient, private router: Router,private purchase: StorageService, private env: EnvService) { 
    
    this.http.get(env.API_URL +'/api/v1/products/' + this.purchase.selectedCategory["name"]).subscribe((response : any[]) => {
      response.forEach(element => {
      element["qty"] = 0;
      this.items.push(element);
      });

    }); 
    
    this.env.get_categories().subscribe((res: any[])=>{
      res.forEach(element =>{
        if(element["name"] !== this.purchase.selectedCategory["name"].toLowerCase()){
         this.categoriesOptions.push(element); 
        }
      });
    });
    
    this.category = this.purchase.selectedCategory;
  
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
    this.router.navigate(['/menu/products-menu'], this.purchase.storage);
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
