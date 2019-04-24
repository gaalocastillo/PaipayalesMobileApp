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

  constructor( private http: HttpClient) { 
    
    this.qty = 1;

    this.http.get('http://127.0.0.1:9000/api/v1/products/fruits').subscribe((response : any[]) => {
      console.log(response);
      this.items = response;
      });
  
  
      
    
      

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
