import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from'../../../services/heroes/heroes.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes:HeroeModel[]=[]
  Cargando:boolean=false;

  constructor(private heroeservice:HeroesService) { }

  ngOnInit(): void {
    this.Cargando=true;
    this.heroeservice.Getheroes()
    .subscribe( resp=>{
      this.Heroes= resp;
      this.Cargando=false;
    })
  }

  Borrarheroe( heroe: HeroeModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ heroe.nombre }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.Heroes.splice(i, 1);
        this.heroeservice.Borrarheroe( heroe.id ).subscribe();
      }
    });
  }

}
