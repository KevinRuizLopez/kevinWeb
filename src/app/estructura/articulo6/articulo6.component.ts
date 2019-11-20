import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-articulo6',
  templateUrl: './articulo6.component.html',
  styleUrls: ['./articulo6.component.css']
})
export class Articulo6Component implements OnInit {

  constructor(public info: InfoPaginaService) { }

  ngOnInit() {
  }

}
