import { getLocaleNumberSymbol } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input('chartTitle') title:string = "Compras";
  @Input('chartLabels') labels:any = ['label1','label2','label3'];
  @Input('chartData') data:any = [];
  @Input('chartType') type:ChartType = "doughnut";

  // Doughnut
  public doughnutChartLabels: Label[] = this.labels;
  public doughnutChartData: MultiDataSet = this.data;

  public doughnutChartType: ChartType = this.type;

  public colors: Color [] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ];

    
}
