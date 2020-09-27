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

  constructor(public Chatsservice:ChatsService) {
    this.Chatsservice.Cargarmensaje().subscribe
    ((Mensaje:any[])=>{console.log(Mensaje)});

  }

  ngOnInit(): void {
  }

  Enviarmensaje(){
    console.log(this.Mensaje);
  }

}
