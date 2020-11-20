import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggler: Subject<boolean>;
  constructor() {
    this.toggler = new Subject();
   }
}
