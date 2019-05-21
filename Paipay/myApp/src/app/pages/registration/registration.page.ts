import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from 'src/services/authetification/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  data = {}

  constructor(private authService: AuthService, private router: Router) {


  }

  ngOnInit() {
  }

  register(form){

    console.log(form.value);

    this.router.navigate(['/adress'],this.data);
    // this.authService.register(form.value).subscribe((res) =>{
    //   this.router.navigateByUrl('login');
    // });
  }




}
