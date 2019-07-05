import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // API_URL = 'http://127.0.0.1:9000';
  //API_URL = 'http://142.93.244.249:8081'; //-> esta
  API_URL = 'http://10.10.1.131:9000';




  constructor(private http: HttpClient) { }

  get_categories(){
    return this.http.get(this.API_URL + +'/api/v1/categories/');
  }
}
