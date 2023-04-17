import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RatingModule } from 'ng-starrating';

//mdb modules//
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { HeaderComponent } from './home/header/header.component';
import { AgentsSlidesComponent } from './about-us/agents-slides/agents-slides.component';
import { SwiperModule } from 'swiper/angular';
     

import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertiesHeaderComponent } from './home/properties-header/properties-header.component';
import { PropertiesFiltersComponent } from './home/properties-filters/properties-filters.component';
import { ComponentsModule } from '../components/components.module';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    PropertiesComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    AgentsSlidesComponent,
    PropertiesHeaderComponent,
    PropertiesFiltersComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    //mdb modules//
    MdbCarouselModule,
    MdbDropdownModule,
    MdbCheckboxModule,
    MdbFormsModule,
    MdbRippleModule,
    RatingModule,
    SwiperModule,
    MdbValidationModule,
   ReactiveFormsModule,
   RouterModule,
   ComponentsModule
  ],
})
export class PagesModule { }
