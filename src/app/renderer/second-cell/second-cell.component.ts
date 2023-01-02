import { Component, OnInit } from '@angular/core';
import {  ICellRendererAngularComp } from 'ag-grid-angular';
import {  ICellRendererParams } from 'ag-grid-community';
import { Communication } from 'src/app/communication.service';

@Component({
  selector: 'app-second-cell',
  template: `
    <!-- <div [hidden]="cell.id != checkIndex" style="color: blue;" id={{index}} #cell>
      {{value}}
</div> -->
<div [hidden]="cell.id != checkIndex" style="color: blue;" id={{index}} #cell>
<select name="cars" [(ngModel)]="params.value" id="cars">
  <option value="xyz">XYZ</option>
  <option value="abc">ABC</option>
  <option value="maruti">Maruti</option>
</select>
</div>
<div [hidden]="!params.data.add" style="color: blue;" id={{index}} #cell>
<select name="cars" [(ngModel)]="params.value" id="cars">
  <option value="xyz">XYZ</option>
  <option value="abc">ABC</option>
  <option value="maruti">Maruti</option>
</select>
</div>
<div  style="color: green;">
      {{params.value}}
</div>
  `,
  styles: [
  ]
})
export class SecondCellComponent implements OnInit, ICellRendererAngularComp {
  isEditable:boolean=false;
  value:any;
  index:any;
  checkIndex:any;
  params!: ICellRendererParams;
  constructor(private communication:Communication) { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    this.params=params;
    this.value = params.value;
    
    this.index=params.rowIndex;
    this.communication.index.subscribe((index)=>{
     this.checkIndex=index;
    });
    
  }

  refresh(params:ICellRendererParams):boolean{
    console.log("secondcell",params,this.params.value);
    params.value=this.params.value;
    params.data.make= this.params.value;
    return true;
  }

}
