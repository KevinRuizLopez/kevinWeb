import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoContenido } from '../interface/contenido.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoContenido = {};  
  cargando: boolean = true;

  equipo: InfoContenido[] = [];
  titulo: string[] = [];
  subtitulo: string[] = [];
  img:  string[] = [];
  cod:  string[] = [];
  parrafo:  string[] = [];


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
    .subscribe((resp: InfoContenido[]) =>{
      this.equipo = resp;
      for(var i=0;i<6;i++){
        this.titulo[i] = this.equipo[i].titulo;
        this.subtitulo[i] = this.equipo[i].subtitulo;
        this.img[i] = this.equipo[i].img;
        this.cod[i] = this.equipo[i].cod;
        this.parrafo[i] = this.equipo[i].parrafo;
      }
      this.cargando = false;
      console.log(this.equipo); 
    })
  }

  // public recorrerEquipo( ){
  //  var i = 0;
  //  for(i<this.equipo.length){
  //    this.titulo[i] = this.equipo[i].titulo;
  //  }
  // }
  
}
