import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import {StorageService} from 'src/app/services/storage.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
    

  constructor(private modalController: ModalController,
    private authService: AuthService,
    // private navCtrl: NavController,
    private alertService: AlertService, 
    private router: Router, 
    private registration: StorageService,
  ) { }
  
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

  register(form: NgForm) {

    this.registration.registrationForm = form;
    this.router.navigate(['adress'],this.registration.registrationForm);
             
  }
}