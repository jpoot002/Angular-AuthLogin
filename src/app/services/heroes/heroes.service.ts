import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from 'src/app/models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-c35c9.firebaseio.com';

  constructor(private http: HttpClient) { }

  Crearheroe( Heroemodel: HeroeModel ) {
    return this.http.post(`${ this.url }/heroes.json`, Heroemodel)
    .pipe(
      map( (resp: any) => {
        Heroemodel.id = resp.name;
        return Heroemodel;
      })
    );
  }

  Actualizarheroe( Heroemodel: HeroeModel ) {
    const heroeTemp = {
      ...Heroemodel
    };
    delete heroeTemp.id;
    return this.http.put(`${ this.url }/heroes/${ Heroemodel.id }.json`, heroeTemp);
  }

  Getheroes() {
    return this.http.get(`${ this.url }/heroes.json`)
    .pipe(
      map( this.Creararreglo ),
      delay(1000)
    );
  }

  getHeroe( id: string ) {
    return this.http.get(`${ this.url }/heroes/${ id }.json`);
  }

  Borrarheroe( id: string ) {
    return this.http.delete(`${ this.url }/heroes/${ id }.json`);
  }

  private Creararreglo( Heroesobj: object ) {
    const Heroes: HeroeModel[] = [];
    if(Heroesobj==null){return [];}

    Object.keys( Heroesobj ).forEach( key => {
      const Heroe: HeroeModel = Heroesobj[key];
      Heroe.id = key;
      Heroes.push( Heroe );
    });

    return Heroes;
  }




}
