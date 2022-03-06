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


  public graficos:any = {
    'grafico3': {
                'labels': ['Con frijoles','Con Natilla','Con Tocino'],
                'data': [24,30,46],
                'type': 'doughnut',
                'leyenda': 'El Pan se come con'
    },
    'grafico4': {
                'labels': ['Hombres','Mujeres'],
                'data': [2400,3000],
                'type': 'doughnut',
                'leyenda': 'Entrevistados'
    },
    
  };
  
    // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }
  
    // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }

}
