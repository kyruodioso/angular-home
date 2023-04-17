import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
cart: Cart={items:[{
  propertyImg: 'https://via.placeholder.com/150',
  property: 'grand Home',
  type: 'house',
  price: 150.000,
  id:1,
  quantity:2
},
{
  propertyImg: 'https://via.placeholder.com/150',
  property: 'grand Home',
  type: 'house',
  price: 150.000,
  id:2,
  quantity:3
},
{
  propertyImg: 'https://via.placeholder.com/150',
  property: 'grand Home',
  type: 'house',
  price: 150.000,
  id:3,
  quantity:4
}]};

dataSource: Array<CartItem>=[];
displayedColumns: Array<string>=[
  'propertyImg',
  'property',
  'type',
  'price',
  'total',
  'action',
]

constructor(private cartService:CartService){}

ngOnInit():void{
  this.dataSource=this.cart.items;
  this.cartService.cart.subscribe((_cart:Cart) =>{
    this.cart= _cart;
    this.dataSource= this.cart.items;
  })
}

getTotal(items: Array<CartItem>):number{
  return this.cartService.getTotal(items);
}

onClearCart():void{
  this.cartService.clearCart();
}

onRemoveFromCart(item:CartItem):void{
this.cartService.removeFromCart(item);
}

}
