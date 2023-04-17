import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NabvarComponent } from './nabvar/nabvar.component';
import { FooterComponent } from './footer/footer.component';
import { PropertiesCardsComponent } from './properties-cards/properties-cards.component';

//mdbmodules//
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';




@NgModule({
  declarations: [
    NabvarComponent,
    FooterComponent,
    PropertiesCardsComponent
  ],
  imports: [
    CommonModule,
    //mdbmodules//
    MdbCollapseModule,
    RouterModule,
    MdbCarouselModule,
    MdbDropdownModule

  ],
  exports:[
    NabvarComponent,
    FooterComponent,
    PropertiesCardsComponent
  ]
})
export class ComponentsModule { }
