import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      icono: 'mdi mdi-gauge',
      titulo: 'Principal',
      submenu: [
                    {titulo: 'Main', url: '/'},
                    {titulo: 'ProgressBar', url:'progress'},
                    {titulo: 'Grafica1',url:'grafica1'},
                    {titulo: 'Promesa',url:'promesas'},
                ]
    }
  ]
  constructor() { }
}
