import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreComponent } from '../explore/explore.component';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  onKeydown(event) {
    this.router.navigate([event.target.value]);
  }

  /*buscador(idbuscador){
    const abuscar = document.getElementById(idbuscador).nodeValue;
    this.router.navigate([abuscar]);
  }*/
}
