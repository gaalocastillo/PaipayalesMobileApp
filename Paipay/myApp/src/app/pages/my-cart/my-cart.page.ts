import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {PurchaseServiceService} from 'src/services/purchase/purchase-service.service';
import { isEmpty } from 'rxjs/operators';

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

  constructor(private http:HttpClient, private router: Router, private purchase: PurchaseServiceService) { 

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
      headers: new HttpHeaders().set('Authorization','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOSIsImV4cCI6MTU1NzMyNjU2OSwidXNlcm5hbWUiOiJkZWxpdmVyeTRAaG90bWFpbC5jb20iLCJlbWFpbCI6ImRlbGl2ZXJ5NEBob3RtYWlsLmNvbSJ9.XmaWrwYVA1ThyG22dQdyWYa9QFnLXZipW-fi1mebrFQ' )
    }

    console.log(temporal);
    console.log(header);


    this.http.post("http://127.0.0.1:9000/api/v1/purchases/make-purchase/",temporal, header)
    .subscribe(data => {
      console.log(data);
     }, error => {
      console.log(error);
  
    });

  }

}
