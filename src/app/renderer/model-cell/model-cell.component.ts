import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Communication } from 'src/app/communication.service';

@Component({
  selector: 'app-model-cell',
  template: `
    <!-- <div [hidden]="model.id != checkIndex" style="color: blue;" id={{index}} #model>
      {{value}}
</div> -->
<div [hidden]="model.id != checkIndex" style="color: blue;" id={{index}} #model>
<select name="cars" id="cars" [(ngModel)]="params.value">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
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
export class ModelCellComponent implements OnInit, ICellRendererAngularComp {

  value:any;
  index:any;
  input:any;
  checkIndex:any;
  params!: ICellRendererParams;
  constructor(private communication:Communication) { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    console.log(params)
    this.params = params
    this.value=params.value;
    // params.value=this.input;
    // console.log(this.input);
    this.index=params.rowIndex;
    this.communication.index.subscribe((index)=>{
      this.checkIndex=index;
     });

  }

  refresh(params: ICellRendererParams): boolean {
     
    
    params.value= this.params.value;
    params.data.model=this.params.value;
    console.log("model rendrer",params);
    
    return true;
  }

  


}
