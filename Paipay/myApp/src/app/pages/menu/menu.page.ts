import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  

  pages = [
    {
      title:'Mi Cuenta',
      url: '/menu/myAccount',
    },
    {
      title:'Mis Compras',
      url:'/menu/myCart',
    }
  ];

  selectedPath = '' ;


  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
