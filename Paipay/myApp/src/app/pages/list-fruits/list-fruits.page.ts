import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.page.html',
  styleUrls: ['./list-fruits.page.scss'],
})
export class ListFruitsPage implements OnInit {

  public items: Array<any>;

  constructor() { 


      this.items = [
          { img: 'assets/fruits/58-02.png', name: 'Ciruela', price:'1 Libra $1,00' },
          { img: 'assets/fruits/59-02.png', name: 'Guaba', price:'1 Libra $1,00'  },
          { img: 'assets/fruits/60-02.png', name: 'Guayaba',price:'1 Libra $1,00'  },
          { img: 'assets/fruits/61-02.png', name: 'Limón',price:'1 Libra $1,00'  },
          { img: 'assets/fruits/62-02.png', name: 'Mango paipay',price:'1 Libra $1,00'  },
          { img: 'assets/fruits/63-02.png', name: 'Naranja',price:'1 Libra $1,00' },
          { img: 'assets/fruits/64-02.png', name: 'Tamarindo',price:'1 Libra $1,00'  },
          { img: 'assets/fruits/65-02.png', name: 'Plátano verde',price:'1 Libra $1,00'  },
          { img: 'assets/fruits/66-02.png', name: 'Plátano',price:'1 Libra $1,00'  },
          { img: 'assets/fruits/67-02.png', name: 'Mango de chupar',price:'1 Libra $1,00' }
      ];
  

      

  }

  ngOnInit() {
  }

}
