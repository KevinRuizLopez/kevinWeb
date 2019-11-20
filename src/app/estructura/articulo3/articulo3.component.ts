import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-articulo3',
  templateUrl: './articulo3.component.html',
  styleUrls: ['./articulo3.component.css']
})
export class Articulo3Component implements OnInit {

  constructor(public info: InfoPaginaService) { }

  ngOnInit() {
  }

}
