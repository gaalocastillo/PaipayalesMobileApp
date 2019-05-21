import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { resolve } from 'path';
import { reject } from 'q';

 
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage:Storage, private plt:Platform) { 
    this.plt.ready().then(()=>{
      this.checkTocken();
    });
  }


  checkTocken(){   
    return new Promise((resolve,reject) => {
        this.storage.get(TOKEN_KEY).then(res => {
          if (res){
            this.authenticationState.next(true);
          }
          resolve(res);
        }).catch(error => {
          reject(error);
        });      
    });
  }

  login(username, password){
    const accessToken = btoa(username + ":" + password);
    const token = 'Bearer' + accessToken;
    return this.storage.set(TOKEN_KEY, token).then(()=>{
      this.authenticationState.next(true);
    });
  }

  logout(){
    return this.storage.remove(TOKEN_KEY).then(() =>{
      this.authenticationState.next(false);
    })
  }

  isAuthenticated(){
    return new Promise((resolve, reject) => {
      this.checkTocken().then( res => {
        resolve(this.authenticationState.value);
      }).catch(error =>{
        reject(error);
      });
    });
  }

  // register(form.value){

  // }
}
