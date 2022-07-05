import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
import { IProducts } from '../../IProducts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    meals: IProducts [] = products;

    // addToCart(id:number){
    //   this.orderService.addToCart(products[id]);

    // }

  
  constructor() { }

  ngOnInit(): void {
  }

}
