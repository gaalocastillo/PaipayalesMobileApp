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


  user = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    address: ''
  }
    

  // “name” : str,    
  // “email” : str,
  // “password” : str
  // “phoneNumber” : str,
  // “userZone” : str,
  // “address” : str,
  // “photo” : file
  // “role” : int (admin:0, client:1, delivery-man:2)


  constructor(private modalController: ModalController,
    private authService: AuthService,
    // private navCtrl: NavController,
    private alertService: AlertService, 
    private router: Router, 
    private registration: StorageService
  ) { }
  
  ngOnInit() {
  }

    

  register(form: NgForm) {



    this.registration.registrationForm = form;
    this.router.navigate(['adress'],this.registration.registrationForm);
             
  }
}