import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './estructura/header/header.component';
import { NavigationComponent } from './estructura/navigation/navigation.component';
import { GeneralComponent } from './estructura/general/general.component';
import { Articulo1Component } from './estructura/articulo1/articulo1.component';


const app_routers: Routes = [
    {path: '', component: GeneralComponent },
    {path: 'header', component: HeaderComponent },
    {path: 'principal', component: NavigationComponent},
    {path: 'articulo', component: Articulo1Component}, 
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