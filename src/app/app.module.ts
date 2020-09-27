import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './services/auth.guard';
import { ChatsComponent } from './components/chats/chat/chats.component';


import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';

import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ChatsService }from './services/chats/chats.service'
import { AuthService } from './services/auth.service';
import { HeroesService }from './services/heroes/heroes.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtegidaComponent,
    HomeComponent,
    ChatsComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

  ],
  providers: [ChatsService,
              AuthService,
              HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
