import { Component, OnInit } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {ChatsService} from '../../../services/chats/chats.service'
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  Mensaje: string = "";
  elemento: any;

  constructor(public Chatsservice:ChatsService) {
    this.Chatsservice.Cargarmensaje().subscribe( ()=>{
      this.elemento.scrollTop = this.elemento.scrollHeight;
  });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  Enviarmensaje(){
      if( this.Mensaje.length === 0 ){
      return;
    }

    this.Chatsservice.Agregarmensaje( this.Mensaje )
            .then( ()=>this.Mensaje = "" )
            .catch( (err)=>console.error('Error al enviar',  err ) );
  }

}
