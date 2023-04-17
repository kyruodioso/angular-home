import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-properties-header',
  templateUrl: './properties-header.component.html',
  styleUrls: ['./properties-header.component.scss']
})
export class PropertiesHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort='desc';
  itemsShowCount= 8;

  onSortUpdated(newSort: string):void{
    this.sort= newSort;
  }
  onItemsUpdated(count:number):void{
   this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number):void{
  this.columnsCountChange.emit(colsNum)
  }

}
