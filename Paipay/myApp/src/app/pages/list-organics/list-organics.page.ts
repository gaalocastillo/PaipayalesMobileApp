import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-organics',
  templateUrl: './list-organics.page.html',
  styleUrls: ['./list-organics.page.scss'],
})
export class ListOrganicsPage implements OnInit {

  public items: Array<any>;

  constructor() { 


      this.items = [
          { img: 'assets/organics/76-02.png', name: 'Dulce de Leche', price:'1 Libra $1,00' },
          { img: 'assets/organics/77-02.png', name: 'Masa de yuca', price:'1 Libra $1,00'  },
          { img: 'assets/organics/78-02.png', name: 'Huevos',price:'1 Libra $1,00'  },
          { img: 'assets/organics/79-02.png', name: 'Mazamorra',price:'1 Libra $1,00'  },
          { img: 'assets/organics/80-02.png', name: 'Humitas',price:'1 Libra $1,00'  },
          { img: 'assets/organics/81-02.png', name: 'Yuca',price:'1 Libra $1,00' },
          { img: 'assets/organics/82-02.png', name: 'Pimiento',price:'1 Libra $1,00'  },
          { img: 'assets/organics/83-02.png', name: 'Frejol',price:'1 Libra $1,00'  },
          { img: 'assets/organics/84-02.png', name: 'Frejol',price:'1 Libra $1,00'  }
      ];

  }

  ngOnInit() {
  }

}
