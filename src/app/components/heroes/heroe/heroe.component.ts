import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { HeroeModel} from '../../../models/heroe.model'
import { HeroesService } from'../../../services/heroes/heroes.service'
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  Heroemodel:HeroeModel = new HeroeModel();

  constructor(private heroeservice:HeroesService,
              private ActivationRoutee:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.ActivationRoutee.snapshot.paramMap.get('id');
    if ( id !== 'nuevo' ) {
      this.heroeservice.getHeroe( id )
        .subscribe( (resp: HeroeModel) => {
          this.Heroemodel = resp;
          this.Heroemodel.id = id;
        });
    }
  }

  GuardarForm( form: NgForm ) {

    if ( form.invalid ) {
      this.Swalsolotexto('Formulario no válido','error')
      return;
    }

    if(this.Heroemodel.id){
      this.Swalsolotexto('Heroe actualizado','success')
      this.heroeservice.Actualizarheroe(this.Heroemodel)
      .subscribe(reo=> {});
    }
    else{
      this.Swalsolotexto('Nuevo heroe','success')
      this.heroeservice.Crearheroe(this.Heroemodel)
    .subscribe(reo=> {});
    }

  }

  Swalsolotexto(Textoswal:string,Iconsswal:any){

    Swal.fire({
      icon: Iconsswal,
      title: Textoswal,
    });

  }

}
