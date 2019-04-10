import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-rices',
  templateUrl: './list-rices.page.html',
  styleUrls: ['./list-rices.page.scss'],
})
export class ListRicesPage implements OnInit {

  public items: Array<any>;
  
  constructor() { 


    this.items = [
        { img: 'assets/organics/76-02.png', name: 'Frejol de palo', price:'1 Libra $1,00' },
        { img: 'assets/organics/77-02.png', name: 'Maíz', price:'1 Libra $1,00'  },
        { img: 'assets/organics/78-02.png', name: 'Tomate',price:'1 Libra $1,00'  },
        { img: 'assets/organics/79-02.png', name: 'Verdura',price:'1 Libra $1,00'  },
        { img: 'assets/organics/80-02.png', name: 'Camote',price:'1 Libra $1,00'  },
        { img: 'assets/organics/81-02.png', name: 'Yuca',price:'1 Libra $1,00' },
        { img: 'assets/organics/82-02.png', name: 'Pimiento',price:'1 Libra $1,00'  },
        { img: 'assets/organics/83-02.png', name: 'Frejol',price:'1 Libra $1,00'  },
        { img: 'assets/organics/84-02.png', name: 'Frejol',price:'1 Libra $1,00'  }
    ];

}

  ngOnInit() {
  }

}
