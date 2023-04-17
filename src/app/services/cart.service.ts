import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../interfaces/cart.interface";

@Injectable({providedIn:'root'})
export class CartService{
cart= new BehaviorSubject<Cart>({items:[]})

  constructor(){
  }
  
  addToCart(item:CartItem):void{
    const items= [... this.cart.value.items];
    const itemInCart = items.find((_item)=> _item.id === item.id);
    if(itemInCart){
      itemInCart.property
    }else{
      items.push(item)

    }
    this.cart.next({items:items})
    console.log(this.cart.value)
  }

  getTotal(items: CartItem[]):number{
    return items
    .map((item)=> item.price * item.quantity)
    .reduce((prev,curent)=>prev + curent, 0)
  }

  clearCart():void{
   this.cart.next({items:[]})
   console.log('cart cleaned')
  }

  removeFromCart(item:CartItem):void{
  const filteredItems=  this.cart.value.items.filter(
      (_item)=>_item.id !== item.id
    );
    this.cart.next({items:filteredItems});
  }
}