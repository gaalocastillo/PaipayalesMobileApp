import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

	pages = [
		{
			title:'Mi Cuenta',
			url:'/menu/my-account'
		},
		{
			title:'Mis Compras',
			url:'/menu/my-cart'
		},
		{
			title:'Productos',
			url:'/menu/productsMenu'
		}
	];

	selectedPath = '';


	constructor(private router: Router){
		this.router.events.subscribe((event: RouterEvent) =>{
			this.selectedPath = event.url;
		});
	}
  	
  	ngOnInit() {
  	}

}
