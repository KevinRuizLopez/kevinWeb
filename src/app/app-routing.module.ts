import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './estructura/header/header.component';
import { NavigationComponent } from './estructura/navigation/navigation.component';
import { GeneralComponent } from './estructura/general/general.component';
import { Articulo1Component } from './estructura/articulo1/articulo1.component';
import { Articulo1realComponent } from './estructura/articulo1real/articulo1real.component';
import { Articulo2Component } from './estructura/articulo2/articulo2.component';
import { Articulo3Component } from './estructura/articulo3/articulo3.component';
import { Articulo4Component } from './estructura/articulo4/articulo4.component';
import { Articulo5Component } from './estructura/articulo5/articulo5.component';
import { Articulo6Component } from './estructura/articulo6/articulo6.component';


const app_routers: Routes = [
    {path: '', component: GeneralComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'principal', component: NavigationComponent},
    {path: 'articulo', component: Articulo1Component}, 
    {path: 'articulo1',component: Articulo1realComponent},
    {path: 'articulo2',component: Articulo2Component},
    {path: 'articulo3',component: Articulo3Component},
    {path: 'articulo4',component: Articulo4Component},
    {path: 'articulo5',component: Articulo5Component},
    {path: 'articulo6',component: Articulo6Component},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routers)
    ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}