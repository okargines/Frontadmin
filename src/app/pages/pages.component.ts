import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function customInitFunction();
  
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {
    //se colocó aqui porque ya esta construido el menu..
    customInitFunction();
  }

}
