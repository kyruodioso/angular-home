import { Component, OnInit,Input} from '@angular/core';
import { Cart , CartItem} from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent {
  private _cart:Cart={items:[]};
  itemsQuantity=0;

  constructor(private cartService:CartService){}
  @Input()
  get cart(): Cart{
    return this._cart;
    console.log('iniciando' + this.cart)
  }

  set cart(cart:Cart){
    this._cart= cart;
    this.itemsQuantity= cart.items
    .map((item)=>item.quantity)
    .reduce((prev,curent)=> prev + curent,0);
  }

  getTotal(items: CartItem[]): number{
    return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.clearCart()
  }

}
