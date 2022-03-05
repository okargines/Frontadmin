import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component  {


  public labels1 = ['Maquinarias', 'Tuberculos', 'Frutas'];
  public labels2 = ['Pan', 'Tortas', 'Helados'];

  public data1 = [350, 450, 100];    // // events
  public data2 = [30, 40, 100]; 

    // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }
  
    // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }

}
