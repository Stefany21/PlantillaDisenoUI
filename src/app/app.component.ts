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
  showsubMenu = false;
  

  


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
      if(option.SubMenu){
        this.showsubMenu = !this.showsubMenu;
      
      }
    }
  }  
  
  onClicksubMenuOption(option: any) {
    // option.SubMenu.forEach(x => {
    //   x.Selected = false;

    // });
        
  
  
    this.menu.forEach(x => x.Selected = false);
    if (option.Name === 'Salir') {

    } else {
      option.Selected = true;    
      this.router.navigateByUrl(option.Path);
      if(option.SubMenu){
        this.showsubMenu = !this.showsubMenu;
        option.SubMenu.forEach(x=> {
          x.Selected = false;
          if(1==1){

            option.SubMenu.Selected = true;
          }
        });
        
       
      }
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
    Selected: false,
    SubMenu: [
      {
        name: 'Datos maestros de inventario',
        icon: 'fas fa-receipt',
        url: '/items',
      },
      {
        name: 'Ordenes de Compra',
        icon: 'fas fa-sticky-note',
        url: '/purchaseorder',
      },
      {
        name: 'Entrada de mercaderia',
        icon: 'fas fa-tasks',
        url: '/goodReceipt'
      },
      {
        name: 'Devolución de mercaderia',
        icon: 'fas fa-table',
        url: '/returnGood'
      },
      {
        name: 'Entrada de inventario',
        icon: 'fas fa-indent',
        url: '/goodsReceiptInv'
      },
      {
        name: 'Salida de inventario',
        icon: 'fas fa-outdent',
        url: '/goodsIssueInv'
      }
    ]
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
    Selected: false,
    SubMenu: [
      {
        name: 'Inventario',
        icon: 'fas fa-warehouse',
        url: '/inventory',
      },
      {
        name: 'Orden de venta',
        icon: 'fas fa-shopping-cart',
        url: '/so',
      },
      {
        name: 'Cotización',
        icon: 'fas fa-cart-arrow-down',
        url: '/quotation',
      },
      {
        name: 'Consulta de artículos',
        icon: 'fas fa-tag',
        url: '/info',
      },
      {
        name: 'Facturación',
        icon: 'fas fa-receipt',
        url: '/invo',
      },
      {
        name: 'Nota de crédito',
        icon: 'fas fa-table',
        url: '/invonc',
      },
      {
        name: 'Facturación Proveedor',
        icon: 'fas fa-receipt',
        url: '/invoiceSupplier',
      },
      {
        name: 'Reimpresión',
        icon: 'fas fa-print',
        url: '/print',
      },
    ]
  },
  {
    Name: 'Salir',
    Path: '',
    Icon: 'fa fa-arrow-right',
    Selected: false 
  }
];
