import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-articulo4',
  templateUrl: './articulo4.component.html',
  styleUrls: ['./articulo4.component.css']
})
export class Articulo4Component implements OnInit {

  constructor(public info: InfoPaginaService) { }

  ngOnInit() {
  }

}
