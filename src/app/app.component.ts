import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService} from '../app/services/sidebar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClvsPlantillaDisenoUI';
   _opened: boolean = false;
  sidebarMode = 'push';
  menu = Menu;


  constructor(private router: Router,
    private sidebarService: SidebarService){
      this.sidebarService.toggler.subscribe(toggle => this._opened = toggle);
  }
  openedChange($event) { }
 

  onClickMenuOption(option: any) {
    this.menu.forEach(x => x.Selected = false);
    if (option.Name === 'Salir') {

    } else {
      option.Selected = true;
      this.router.navigateByUrl(option.Path);
    }
  }
}

export const Menu = [
  {
    Name: 'Inicio',
    Path: 'home',
    Icon: 'fa fa-home',
    Selected: true
  },
  {
    Name: 'Administración',
    Path: 'company',
    Icon: 'fa fa-cogs',
    Selected: false
  },
  {
    Name: 'Socios de negocios',
    Path: 'businesspartner',
    Icon: 'fas fa-users',
    Selected: false
  },
  {
    Name: 'Inventario',
    Path: 'items',
    Icon: 'fas fa-list',
    Selected: false
  },
  {
    Name: 'Ventas',
    Path: 'items',
    Icon: 'fa fa-cart-plus',
    Selected: false
  },
  {
    Name: 'Documentos',
    Path: 'items',
    Icon: 'fa fa-file',
    Selected: false
  },
  {
    Name: 'Salir',
    Path: '',
    Icon: 'fa fa-arrow-right',
    Selected: false 
  }
];
