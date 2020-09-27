import { Injectable } from '@angular/core';
import { AngularFirestore,  AngularFirestoreCollection} from 'angularfire2/firestore';
import {Mensaje} from'../../interface/mensaje.interface'

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chas: Mensaje[] =[];
  constructor(private Angularfirestore: AngularFirestore) { }

  Cargarmensaje(){
    this.itemsCollection = this.Angularfirestore.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges();
  }
}
