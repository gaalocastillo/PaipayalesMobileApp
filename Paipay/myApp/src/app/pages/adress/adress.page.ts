import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {

  private items  = []; 


  constructor(private http: HttpClient) {

    this.http.get('http://localhost:9000/api/v1/userZones/').subscribe((response : any[]) => {
    console.log(response);
    this.items = response;
    });


  
   }

  ngOnInit() {
  }

}
