import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public categories: any;
  public registrationForm: any;
  public selectedCategory: any;
  public storage: any;
  public token: any;
  private user:any;

  constructor() { }


  set_user(user:any){
    this.user = user;  
  }

  get_user(){
    return this.user;
  }

  


}
