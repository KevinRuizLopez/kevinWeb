import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoContenido } from '../interface/contenido.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoContenido = {};  
  equipo: any[] = [];

  constructor(private http: HttpClient) { 
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoContenido) =>{
      this.info = resp;
    })
  }

  private cargarEquipo(){

    this.http.get('https://myweb-c9107.firebaseio.com/contenido/contenido.json')
    .subscribe((resp: any[]) =>{
      this.equipo = resp;
      console.log(this.equipo); 
    })

  }
  
}
