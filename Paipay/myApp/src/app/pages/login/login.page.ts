import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegistrationPage } from '../registration/registration.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private email: string;
  private password: string;
  

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService, 
    private storage: PurchaseService,
  ) { }

  ngOnInit() {
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegistrationPage
    });
    return await registerModal.present();
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        console.log(data);
        console.log("Logged");
        this.storage.token = data["access-token"]
        this.alertService.presentToast("Logged In");
        console.log(this.storage.token);
      },
      error => {
        console.log(error);
        this.alertService.presentToast("Usuario o contraseña incorrecta");
      },
      () => {
        this.dismissLogin();
        console.log(this.storage.storage);
        this.navCtrl.navigateRoot('/menu/products-menu');
      }
    );
  }
}