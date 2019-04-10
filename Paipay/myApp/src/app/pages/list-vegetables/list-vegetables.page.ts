import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-vegetables',
  templateUrl: './list-vegetables.page.html',
  styleUrls: ['./list-vegetables.page.scss'],
})
export class ListVegetablesPage implements OnInit {

  public items: Array<any>;

  constructor() { 


      this.items = [
          { img: 'assets/vegetables/68-02.png', name: 'Frejol de palo', price:'1 Libra $1,00' },
          { img: 'assets/vegetables/69-02.png', name: 'Maíz', price:'1 Libra $1,00'  },
          { img: 'assets/vegetables/70-02.png', name: 'Tomate',price:'1 Libra $1,00'  },
          { img: 'assets/vegetables/71-02.png', name: 'Verdura',price:'1 Libra $1,00'  },
          { img: 'assets/vegetables/72-02.png', name: 'Camote',price:'1 Libra $1,00'  },
          { img: 'assets/vegetables/73-02.png', name: 'Yuca',price:'1 Libra $1,00' },
          { img: 'assets/vegetables/74-02.png', name: 'Pimiento',price:'1 Libra $1,00'  },
          { img: 'assets/vegetables/75-02.png', name: 'Frejol',price:'1 Libra $1,00'  }
      ];
  

      

  }

  ngOnInit() {
  }

}
