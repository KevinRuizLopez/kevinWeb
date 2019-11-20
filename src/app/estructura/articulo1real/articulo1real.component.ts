import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoContenido } from 'src/app/interface/contenido.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo1real',
  templateUrl: './articulo1real.component.html',
  styleUrls: ['./articulo1real.component.css']
})
export class Articulo1realComponent implements OnInit {

  constructor(public info: InfoPaginaService, public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
