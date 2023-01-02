import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class Communication{

    Editable = new Subject<boolean>();
   index = new Subject<number>();
    add= new Subject<boolean>();
    reset= new Subject<boolean>();
}