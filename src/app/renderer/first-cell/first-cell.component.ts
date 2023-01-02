import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Communication } from 'src/app/communication.service';

@Component({
  selector: 'app-first-cell',
  template: `
    <div>
      <button type="button" class="b" value="Edit" (click)="onEditClick()">
        {{ editButtonText }}
      </button>
      &nbsp;
      <button type="button" class="btn btn-info" (click)="onDeleteClick()" value="">
        {{ deleteButtonText }}
      </button>
    </div>
  `,
  styles: [],
})
export class FirstCellComponent implements OnInit, ICellRendererAngularComp {
  editButtonText = 'Edit';
  deleteButtonText = 'Delete';
  Index: number = 0;
  params!: ICellRendererParams;
  constructor(private communication: Communication) {}

  ngOnInit(): void {}

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    console.log(params, 'ac');
    if(params.data.add){
      this.editButtonText = 'Save';
      this.deleteButtonText = 'Cancel';
    }
    this.params = params;
    this.Index = params.rowIndex;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    // set value into cell again
    this.params=params;
    
    console.log('refresh called',params);

    return true;
  }

  onEditClick() {
    if (this.editButtonText == 'Edit') {
      this.editButtonText = 'Save';
      this.deleteButtonText = 'Cancel';
      this.communication.Editable.next(true);
      this.communication.index.next(this.Index);
    } else {
     // this.params.context.componentParent.refCells();
     this.params.api.refreshCells({force:true});
     console.log(this.params);
     
      this.communication.Editable.next(false);
      this.communication.index.next(-1);
      this.editButtonText = 'Edit';
      this.deleteButtonText = 'Delete';
      console.log(this.params);
    }
  }

  onDeleteClick() {
    if ((this.deleteButtonText = 'Cancel' && this.params.data.add)) {
      
     this.params.api.applyTransaction({
      remove:[{id:3}]
     });
    } else {
      this.editButtonText = 'Edit';
      this.deleteButtonText = 'Delete';
      this.communication.index.next(-1);
      this.communication.Editable.next(false);
      console.log(this.params);
    }
  }
}
