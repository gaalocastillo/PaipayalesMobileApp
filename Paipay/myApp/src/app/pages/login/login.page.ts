import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/authetification/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;
  private password: string;

  constructor(private activateRoute: ActivatedRoute, private authService: AuthService, public router:Router) {


   }

  ngOnInit() {
  }


  login(){
    this.authService.login(this.username, this.password);
    this.username = null;
    this.password = null;
    this.goHome();
  }

  goHome(){
    this.router.navigate(['/menu/products-menu']);
  }

}
