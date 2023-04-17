import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-properties-filters',
  templateUrl: './properties-filters.component.html',
  styleUrls: ['./properties-filters.component.scss']
})
export class PropertiesFiltersComponent {

  @Output() showTypeProperty= new EventEmitter<string>();
  @Output() showPropertyStatus= new EventEmitter<string>()

  propertiesType:string[]=['Office','House','Apartment'];

  propertiesStatus:string[]=['For Sale','For Rent', 'Open House', 'No Fees', 'Hot Offer', 'Sold'];

  onShowTypeProperty(typeProperty: string):void{
    this.showTypeProperty.emit(typeProperty)
  }

  onShowPropertyStatus(propertyStatus: string):void{
   this.showPropertyStatus.emit(propertyStatus)
  }

}
