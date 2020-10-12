import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection} from 'angularfire2/firestore';
import { Mensaje } from'../../interface/mensaje.interface'
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] =[];
  public usuario: any = {};

  constructor(private Angularfirestore: AngularFirestore,
  public afAuth: AngularFireAuth,
  private router:Router) {

  this.afAuth.authState.subscribe( user => {
    console.log( 'Estado del usuario: ', user );
    if( !user ){
      return;
    }
    this.usuario.nombre = user.displayName;
    this.usuario.uid = user.uid
    console.log( 'El usuario: ', this.usuario );
  })

}

  login( ) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    /**new firebase.auth.GoogleAuthProvider() */

  }

  logout() {
    this.usuario={};
    this.afAuth.auth.signOut();
  }

  Cargarmensaje(){
    this.itemsCollection = this.Angularfirestore.collection<Mensaje>('chats',ref => ref.orderBy('fecha','desc').limit(10));

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
                          this.chats = [];

                          for ( let mensaje of mensajes ){
                            this.chats.unshift( mensaje );
                          }
                          return this.chats;


      })
    )
  }

  Agregarmensaje( texto: string ){

    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre:  this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add( mensaje );

  }

}
