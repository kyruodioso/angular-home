import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from './pages/contact/contact.component';
import { PropertiesComponent } from "./pages/properties/properties.component";
import { CartComponent } from "./pages/cart/cart.component";

const routes: Routes= [
    {
        path:'', component:HomeComponent,
        pathMatch:'full'
    },
    {
    path: 'about-us',component: AboutUsComponent
    },{
     path: 'contact', component: ContactComponent
    },
    {
        path: 'properties',component: PropertiesComponent
    },{
    path:'cart',component: CartComponent
    },
    {
        path:'**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
    RouterModule.forRoot(routes)
    ],
    exports:[
    RouterModule
    ]
})

export class AppRoutingModule{}