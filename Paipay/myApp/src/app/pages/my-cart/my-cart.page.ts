import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController,NavParams, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';
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

  constructor(private http:HttpClient, private router: Router, private purchase: StorageService, private env: EnvService,  private navCtrl: NavController) { 

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

    console.log(temporal);
    console.log(header);

   


    this.http.post(this.env.API_URL +"/api/v1/purchases/make-purchase/",temporal, header)
    .subscribe(data => {
      console.log(data);
      console.log("Queti was here!")
      this.navCtrl.navigateRoot('/confirmation');
     }, error => {
      console.log(error);
    });


  }

}
