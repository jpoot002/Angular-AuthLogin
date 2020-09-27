import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { ChatsComponent } from './components/chats/chat/chats.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';

const routes: Routes = [
  { path: 'chats',component: ChatsComponent },
  { path: 'home',component: HomeComponent },

  {path: 'heroes/nuevo', component: HeroeComponent, canActivate: [AuthGuard]},
  {path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard]},
  { path: 'heroe/:id', component: HeroeComponent, canActivate: [AuthGuard]},
  { path: 'protegida',component: ProtegidaComponent,canActivate: [AuthGuard]  },
  { path: '**', pathMatch: 'full', redirectTo:'home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
