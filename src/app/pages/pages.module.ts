import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';

import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
    PromesasComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,     //tambien habilita el router-oulet
   // AppRoutingModule   //habiliata el router-oulet
    ComponentsModule
  ]
})
export class PagesModule { }
