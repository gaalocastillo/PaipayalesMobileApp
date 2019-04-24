import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {

  public items  = []; 
  

  constructor(private http: HttpClient) {

    this.http.get('http://192.168.0.106:9000/api/v1/userZones/').subscribe((response : any[]) => {
    console.log(response);
    this.items = response;
    });

    //TODO: sort by name!
  
   }

  ngOnInit() {
  }

}
