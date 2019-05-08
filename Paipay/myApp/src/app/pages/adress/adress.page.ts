import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {

  public items = [];
  public selected = "";
  
  

  constructor(private http: HttpClient) {

    this.http.get('http://127.0.0.1:9000/api/v1/users/user-zones/').subscribe((response : any[]) => {
    console.log(response);

    response.forEach(element => {
      element["selected"] = false;
      this.items.push(element);
    });

  });
    
    console.log(this.items);

   }




  ngOnInit() {
  }

}
