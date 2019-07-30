import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, NavParams} from '@ionic/angular';
import {EnvService} from 'src/app/services/env.service';
import {StorageService} from 'src/app/services/storage.service';
// import { isNgTemplate } from '@angular/compiler';
// import { LoadingController } from '@ionic/angular';
// import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  private items  = []; 
  private categoriesOptions = [];


  constructor(private http:HttpClient, private router: Router,private purchase: StorageService, private env: EnvService, private navCtrl: NavController ) { 
    
    
    this.http.get(this.env.API_URL +'/api/v1/products/' + this.purchase.selectedCategory["name"]).subscribe((response : any[]) => {
      response.forEach(element => {
      element["qty"] = 0;
      this.items.push(element);
      });

    }); 

    this.http.get(this.env.API_URL  +'/api/v1/categories/').subscribe((res: any[])=>{
      res.forEach(element =>{
        if(element["name"] !== this.purchase.selectedCategory["name"].toLowerCase()){
         this.categoriesOptions.push(element); 
        }
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

  continueBuying(){
    
    this.router.navigate(['menu/products-menu']);
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

  selectedCategory(category:String){

    this.categoriesOptions.forEach(element => {
      if(element["name"] == category){
        this.purchase.selectedCategory = element;
      }
    });

    //this.router.onSameUrlNavigation='reload';
    console.log(this.purchase.selectedCategory);

  }

  ngOnInit() {

  }





}
