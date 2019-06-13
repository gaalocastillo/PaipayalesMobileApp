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


@Component({
  selector: 'app-adress',
  templateUrl: './adress.page.html',
  styleUrls: ['./adress.page.scss'],
})
export class AdressPage implements OnInit {

  public items = [];
  public selected = "";  
  
  
  constructor(private http: HttpClient,
    private modalController: ModalController,
    private authService: AuthService,
    private alertService: AlertService, 
    private router: Router,
    private registration: StorageService
    
    ) {


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

  selectCP(item){
    this.items[item] != this.items[item];
    this.selected = this.items[item];
  }



  register() {

    this.authService.register(this.registration.registrationForm.value.name, this.registration.registrationForm.value.email, this.registration.registrationForm.value.password, this.registration.registrationForm.value.phone,"Villa Club", this.registration.registrationForm.value.adress, '', 1 ).subscribe(
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
