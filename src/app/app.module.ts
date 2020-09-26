import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { ChatsComponent } from './components/chats/chats.component';


import { environment } from '../environments/environment';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';

import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'






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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
