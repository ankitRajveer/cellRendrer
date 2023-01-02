import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridOptions, GridReadyEvent, HeaderRowComp } from 'ag-grid-community';

import { Observable } from 'rxjs';
import { Communication } from './communication.service';
import { FirstCellComponent } from './renderer/first-cell/first-cell.component';
import { ModelCellComponent } from './renderer/model-cell/model-cell.component';
import { SecondCellComponent } from './renderer/second-cell/second-cell.component';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public context:any;
 isEdit:any;
 gridOptions!:GridOptions;
 constructor(private http: HttpClient,private communication:Communication) {
  this.gridOptions={
    context:{
      componentParent:this
    },
    rowData:[
      {make:"Hero",model:"sumar",price:77000 },
      {make:"TVS",model:"ronin",price:100000 },
      {make:"Honda",model:"glamour",price:100000 },
      {make:"Royal",model:"Bullet",price:300000 },
      {make:"Kawasaki",model:"Ninja",price:500000 }
    ]
  }
 }

 ngOnInit(): void {
 
 }
 getEditFlag(){
  this.communication.Editable.subscribe((val)=>{
    if(val)
    this.isEdit=true
    else
    this.isEdit=false
  });
 }

 count=1;
 addItems(){
  var newRow=[{
    make:'',
    model:'',
    price: 0,
    action:'',
    add:true
  }]
  this.agGrid.api.applyTransaction({
 
   add:newRow
 });
 console.log(this.agGrid.api.getLastDisplayedRow(),"last row")
 
 this.count++;
 }
 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
   { field: 'make',cellRenderer:SecondCellComponent,cellRendererParams:{
    isEditable: true
   }},
   { field: 'model',cellRenderer:ModelCellComponent},
   { field: 'price' },
   { field:'action', headerName:'action',cellRenderer:FirstCellComponent }
 ];

 // DefaultColDef sets props common to all Columns
 public defaultColDef: ColDef = {
   sortable: true,
   filter: true,
 };
 
 // Data that gets displayed in the grid
//  public rowData$!: Observable<any[]>;

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

//For context



 // Example load data from sever
//  onGridReady(params: GridReadyEvent) {
//    this.rowData$ = this.http
//      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
//  }

 //Refresh cells

 refCells(){
  console.log('called from rendrer');
  this.agGrid.api.refreshCells();
  //this.gridOptions.api?.refreshCells();
 }

 // Example of consuming Grid Event
 onCellClicked( e: CellClickedEvent): void {
   console.log('cellClicked', e);
 }

 // Example using Grid's API
 clearSelection(): void {
   this.agGrid.api.deselectAll();
 }

 onCellValueChanged(){
  console.log("triggered");
  
 }
}