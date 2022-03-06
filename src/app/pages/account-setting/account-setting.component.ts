import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {

  //se sacó hacia afuera dela funcion changeThema, porque es mas optimo.


  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    //se coloco aqui pq aun no se contruye el documento.
    //porlotanto el selectorTheme es nulo.
    
    this.settingsService.currentCursorThema();

  }

  changeThema(color:string){
    //console.log(color);

    this.settingsService.changeThema(color);

  }


}
