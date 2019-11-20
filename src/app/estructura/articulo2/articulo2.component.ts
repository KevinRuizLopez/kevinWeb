import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-articulo2',
  templateUrl: './articulo2.component.html',
  styleUrls: ['./articulo2.component.css']
})
export class Articulo2Component implements OnInit {

  constructor(public info: InfoPaginaService) { }

  ngOnInit() {
  }

}
