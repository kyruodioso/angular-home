import { Component, OnInit } from '@angular/core';
import { Cart } from './interfaces/cart.interface';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'house-Kit';
  cart:Cart= {items:[]};

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart)=>{
      this.cart=_cart;
    })
  }
}
