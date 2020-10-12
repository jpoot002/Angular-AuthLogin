import { Component, OnInit } from '@angular/core';
import {ChatsService} from '../../../services/chats/chats.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  public Chatsservice:ChatsService ) { }

  ngOnInit(): void {

  }

  Ingresar( proveedor: string ){
    console.log( proveedor );
    this.Chatsservice.login();
  }

}
