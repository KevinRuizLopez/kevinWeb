import { Component, OnInit } from '@angular/core';
import { InfoContenido } from 'src/app/interface/contenido.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-articulo1',
  templateUrl: './articulo1.component.html',
  styleUrls: ['./articulo1.component.css']
})
export class Articulo1Component implements OnInit {


  constructor( public info: InfoPaginaService ) { 
  }

  ngOnInit() {
  }

}
