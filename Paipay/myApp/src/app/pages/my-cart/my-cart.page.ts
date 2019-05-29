import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {PurchaseService} from 'src/app/services/purchase.service';
import { isEmpty } from 'rxjs/operators';
import {EnvService} from 'src/app/services/env.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  public items  = []; 
  private shippingFee = 1.50;
  private subTotalPrice = 0;
  private totalPrice =0;

  constructor(private http:HttpClient, private router: Router, private purchase: PurchaseService, private env: EnvService) { 

    this.items = this.purchase.storage;
  

    if(!(this.items.length === 0) || !(this.purchase.storage.length==0)){
      
      this.items.forEach(element => {
        this.subTotalPrice += (element.price * element.qty);
      });
      
      if(this.subTotalPrice >= 10){
        this.shippingFee = 0;
      }

      this.totalPrice = this.subTotalPrice + this.shippingFee;
   
    }else{
      this.shippingFee = 0;
    }

  }

  ngOnInit() {
  }


  makePurchase(){

    

    var temporal = {"products":JSON.stringify(this.items), "totalPrice":this.totalPrice};
 

    var header = {
      headers: new HttpHeaders().set('Authorization',this.purchase.token)
    }

    // var header = {
    //   headers: new HttpHeaders().set('Authorization','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTkiLCJlbWFpbCI6ImNsaWVudDFAaG90bWFpbC5jb20iLCJ1c2VybmFtZSI6ImNsaWVudDFAaG90bWFpbC5jb20iLCJleHAiOjE1NTg5Nzg5ODh9.fPdBmDFQNJKomk8mp91iNaQRIv9f6U3qjfT5ArS8HcY' )
    // }


    console.log(temporal);
    console.log(header);


    this.http.post(this.env.API_URL +"/api/v1/purchases/make-purchase/",temporal, header)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
  
    });

  }

}
