import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector("#theme");
  private selectorsTheme:NodeListOf<Element>;

  constructor() { 
      console.log('esta dentro del servicio');
      const thema = localStorage.getItem('href') || './assets/css/colors/default.css';
      //Al instanciar el servicio accountSetting, obtiene por defecto
      //el thema desde el LocalStorage 
      this.linkTheme.setAttribute('href', thema);
  }

  changeThema(color: string){
    //obtener la referencia de DOM href themacolor
    //const linkTheme = document.querySelector("#theme");
    //console.log(this.linkTheme);
    const nuevoThema = `./assets/css/colors/${color}.css`;
    this.linkTheme.setAttribute('href',nuevoThema);
    localStorage.setItem('href', nuevoThema)
    //console.log(nuevoThema);
    
    this.currentCursorThema(); 
  }

  
  currentCursorThema(){
    this.selectorsTheme = document.querySelectorAll(".selector");

    this.selectorsTheme.forEach( elem => {
        elem.classList.remove('working');
        const colorTheme = elem.getAttribute('data-theme');
        const elemTheme = `./assets/css/colors/${colorTheme}.css`;
        const theme = this.linkTheme.getAttribute('href');
        if(elemTheme === theme){
          elem.classList.add('working');
        }
    });

  }
}
