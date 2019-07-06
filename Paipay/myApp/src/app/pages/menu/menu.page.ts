import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterEvent } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private user: any;
  

  pages = [
    {
      title:'Mi Cuenta',
      url: '/menu/my-account',
    },
    {
      title:'Mis Compras',
      url:'/menu/my-cart',
    },
    {
      title:'Mis Puntos',
      url: '/menu/my-points',
    },
    {
      title:'Productos',
      url:'/menu/products-menu',
    },
    {
      title:'Contacto',
      url:'/menu/contact',
    }
  ];

  selectedPath = '' ;


  constructor(private router: Router, private userStorage: StorageService) { 
    this.router.events.subscribe((event: RouterEvent) =>{
      this.selectedPath = event.url;
    });

    this.user = userStorage.get_user();
    
    console.log(this.user);

  }

  ngOnInit() {
  }

}
