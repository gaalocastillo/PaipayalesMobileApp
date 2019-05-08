import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, NavParams} from '@ionic/angular';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.page.html',
  styleUrls: ['./list-fruits.page.scss'],
})
export class ListFruitsPage implements OnInit {

  private items  = []; 
  

  constructor(private http:HttpClient ) { 
    
    this.http.get('http://127.0.0.1:9000/api/v1/products/Frutas').subscribe((response : any[]) => {
    

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

  makePurchase(){

    var temporal = {"products":JSON.stringify(this.items), "totalPrice":0.50};
 

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


  ngOnInit() {
  }




}
