import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public categories: any;
  public registrationForm: any;
  public storage: any;
  public token: any;

  constructor() { }
}
