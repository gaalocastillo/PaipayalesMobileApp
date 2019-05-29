import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // API_URL = 'http://127.0.0.1:9000';
  API_URL = 'http://142.93.244.249:8081';

  constructor() { }
}
