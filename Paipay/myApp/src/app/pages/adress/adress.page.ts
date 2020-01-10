import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';
import { EnvService } from 'src/app/services/env.service';
import { mobiscroll } from '@mobiscroll/angular-lite';
import { element } from '@angular/core/src/render3';
//import { mobiscroll, MbscListviewOptions } from '@mobiscroll/angular-lite';



@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {

  public items = [];
  selected: "";

  
  constructor(
    
    private http: HttpClient,
    private modalController: ModalController,
    private authService: AuthService,
    private alertService: AlertService, 
    private router: Router,
    private registration: StorageService, 
    private env: EnvService


   
    
    ) {


    this.http.get(this.env.API_URL + '/api/v1/users/user-zones/').subscribe((response : any[]) => {
    console.log(response);

    response.forEach(element => {
      this.items.push(element);
    });

  });
    
    console.log(this.items);


    console.log(this.registration.registrationForm.value.name);
    console.log(this.registration.registrationForm.value.email);
    console.log(this.registration.registrationForm.value.password);
    console.log(this.registration.registrationForm.value.phone);
    console.log(this.selected);
    console.log(this.registration.registrationForm.value.adress);

  }

  ngOnInit() {
  }

  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }
        
  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
    }

  select(item){

    this.items.forEach(element => {
      if(element["name"] === item.name){
        this.selected = item.name;
      }
    });
  
    console.log(this.selected);
  }


  register() {


    console.log(this.registration.registrationForm.value.name);
    console.log(this.registration.registrationForm.value.email);
    console.log(this.registration.registrationForm.value.password);
    console.log(this.registration.registrationForm.value.phone);
    console.log(this.selected);
    console.log(this.registration.registrationForm.value.adress);


    this.authService.register(this.registration.registrationForm.value.name, this.registration.registrationForm.value.email, this.registration.registrationForm.value.password, this.registration.registrationForm.value.phone,this.selected, this.registration.registrationForm.value.adress, '', 1 ).subscribe(
      data => {
        this.authService.login(this.registration.registrationForm.value.email, this.registration.registrationForm.value.password).subscribe(
          data => {
            },
            error => {
              console.log(error);
            },
            () => {
              this.dismissRegister();
              this.router.navigate(['login']);
            }
          );
          this.alertService.presentToast(data['message']);
        },
        error => {
          console.log(error);
        },
        () => {
          
        }
      );
  
  }
  

}
