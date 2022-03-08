
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      
      { path: '', component: DashboardComponent , data: {titulo:'Dashboard'}},
      { path: 'progress', component: ProgressComponent, data: {titulo:'Progress'} },
      { path: 'grafica1', component: Grafica1Component, data: {titulo:'Grafica1'} },
      { path: 'account-settings', component: AccountSettingComponent, data: {titulo:'Setting'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo:'Promesas'} },
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      
      ]
   },
    

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
