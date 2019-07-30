import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgottenpass',
  templateUrl: './forgottenpass.page.html',
  styleUrls: ['./forgottenpass.page.scss'],
})
export class ForgottenpassPage implements OnInit {

  constructor(private http: HttpClient,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService, 
    private storage: StorageService){

      


    }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  retrivePass(form:NgForm){
    
    this.authService.resetPassword(form.value.email).subscribe(
      data => {
        console.log(data);
        console.log("Enviado a la contraseña"); 
        this.alertService.presentToast("Te hemos enviado un correo electrónico para que restablezcas tu contraseña.");      
      },
      error => {
        console.log(error);
            this.alertService.presentToast("Email inválido");
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/login');
        }
      );
    }

    

  ngOnInit() {
  }

}
