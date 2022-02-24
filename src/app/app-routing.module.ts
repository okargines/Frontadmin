
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes  = [
  //PagesRoutingModule
  //AuthRoutingModule
  //path: '/dashboard'  PagesRounting
  //path: '/auth'       AuthRounting
  //path: '/medicos'    MedicoRounting
  //path: '/compras'    ComprasRounting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  //tiene que estar 1ro
  { path: '**', component: NopagefoundComponent },

 
] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
