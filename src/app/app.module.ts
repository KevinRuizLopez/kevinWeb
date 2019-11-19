import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './estructura/body/body.component';
import { HeaderComponent } from './estructura/header/header.component';
import { NavigationComponent } from './estructura/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './estructura/general/general.component';
import { Articulo1Component } from './estructura/articulo1/articulo1.component';
import { Articulo2Component } from './estructura/articulo2/articulo2.component';
import { Articulo3Component } from './estructura/articulo3/articulo3.component';
import { Articulo4Component } from './estructura/articulo4/articulo4.component';
import { Articulo5Component } from './estructura/articulo5/articulo5.component';
import { Articulo6Component } from './estructura/articulo6/articulo6.component';

import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    NavigationComponent,
    GeneralComponent,
    Articulo1Component,
    Articulo2Component,
    Articulo3Component,
    Articulo4Component,
    Articulo5Component,
    Articulo6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
