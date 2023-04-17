import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import { Property } from 'src/app/interfaces/property.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


properties:Array<Property>| undefined;

  constructor(private cartService:CartService){}

  cols=3;
typeProperty: string | undefined;
propertyStatus: string | undefined;
arrayStatus: string[]=[]


  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum;
  }

  onShowTypeProperty(newTypeProperty: string):void{
   this.typeProperty = newTypeProperty
  }

  onShowPropertyStatus(newPropertyStatus:string): void{
    this.propertyStatus = newPropertyStatus
    this.arrayStatus.push(this.propertyStatus)
    this.arrayStatus= _.uniq(this.arrayStatus)
    console.log(this.arrayStatus)
  }

showProperties(){
  console.log('cargando los componentes')
}

ngOnInit(): void {
  this.showProperties()
}

onAddToCart(property:Property):void{
  this.cartService.addToCart({
    propertyImg: property.gallery[0].medium,
    property: property.title,
    type: property.propertyType,
    price: property.priceDollar.sale,
    id:property.id,
    quantity:0
  })
}


}
