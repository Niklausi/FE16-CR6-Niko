import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
import { IProducts } from '../../IProducts';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  meal: IProducts = {} as  IProducts;

  id: number = 0;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['productId'];
      this.meal = products[this.id];
    })
  }

}
