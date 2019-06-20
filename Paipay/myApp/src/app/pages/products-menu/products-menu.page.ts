import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import {EnvService} from 'src/app/services/env.service';


@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.page.html',
  styleUrls: ['./products-menu.page.scss'],
})
export class ProductsMenuPage implements OnInit {

  private categories = [];

  constructor(private http:HttpClient, private router: Router, private categoriesStorage: StorageService, private env: EnvService) { 

    this.http.get(env.API_URL +'/api/v1/categories/').subscribe((response:any[]) => {

      response.forEach(element => {
        console.log(element);
        element["name"] = element["name"].toUpperCase();
        this.categories.push(element);
      });

      console.log(this.categories)
  
    }); 

  }



  ngOnInit() {
  }
  

}
