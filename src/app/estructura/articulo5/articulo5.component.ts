import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-articulo5',
  templateUrl: './articulo5.component.html',
  styleUrls: ['./articulo5.component.css']
})
export class Articulo5Component implements OnInit {

  constructor(public info: InfoPaginaService) { }

  ngOnInit() {
  }

}
