import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';
import { isEmpty } from 'rxjs/operators';
import {EnvService} from 'src/app/services/env.service';


@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.page.html',
  styleUrls: ['./products-menu.page.scss'],
})
export class ProductsMenuPage implements OnInit {

  

  constructor(private http:HttpClient, private router: Router, private categories: StorageService, private env: EnvService) { 

    this.http.get(env.API_URL +'/api/v1/categories/').subscribe(response => {

      this.categories.categories = response;
  
    }); 

  }



  ngOnInit() {
  }
  

}
