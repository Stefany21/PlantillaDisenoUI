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
  opened = false;
  sidebarMode = 'push';
  menu = Menu;
  showsubMenu = false;
  dock = true;

  constructor(private router: Router,
    private sidebarService: SidebarService){
     
      this.sidebarService.toggler.subscribe(toggle => this.opened = toggle);
      this.sidebarService.docked.subscribe(docked => this.dock = docked);
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
  onClicksubMenuOption(option: any){    
    this.showsubMenu = !this.showsubMenu;
    option.Selected = !option.Selected;    
  }
  
}

export const Menu = [
  {
    Name: 'Inicio',
    Path: 'home',
    Icon: 'HOME.png',
    Selected: true
  }, 
  {
    Name: 'Administración',
    Path: 'company',
    Icon: 'ADMIN.png',
    Selected: false
  },
  {
    Name: 'Socios de negocios',
    Path: '',
    Icon: 'SOCIOS.png', 
    Selected: false 
  },
  {
    Name: 'Inventario',
    Path: 'items',
    Icon: 'INVENTARIO.png',
    Selected: false,
    SubMenu: [
      {
        name: 'Datos maestros de inventario',
        icon: 'fas fa-receipt',
        Path: '/items',
        Selected: false
      },
      {
        name: 'Ordenes de Compra',
        icon: 'fas fa-sticky-note',
        Path: '/purchaseorder',
        Selected: false
      },
      {
        name: 'Entrada de mercaderia',
        icon: 'fas fa-tasks',
        Path: '/goodReceipt',
        Selected: false
      },
      {
        name: 'Devolución de mercaderia',
        icon: 'fas fa-table',
        Path: '/returnGood',
        Selected: false
      },
      {
        name: 'Entrada de inventario',
        icon: 'fas fa-indent',
        Path: '/goodsReceiptInv',
        Selected: false
      },
      {
        name: 'Salida de inventario',
        icon: 'fas fa-outdent',
        Path: '/goodsIssueInv',
        Selected: false
      }
    ]
  },
  {
    Name: 'Ventas',
    Path: 'items',
    Icon: 'VENTAS.svg',
    Selected: false
  },
  {
    Name: 'Documentos',
    Path: 'items',
    Icon: 'DOCUMENTOS.png',
    Selected: false,
    SubMenu: [
      {
        name: 'Inventario',
        icon: 'fa fa-list-ol',
        Path: 'home',
        Selected: false
      },
      {
        name: 'Orden de venta',
        icon: 'fas fa-shopping-cart',
        Path: '/so',
        Selected: false
      },
      {
        name: 'Cotización',
        icon: 'fas fa-cart-arrow-down',
        Path: '/quotation',
        Selected: false
      },
      {
        name: 'Consulta de artículos',
        icon: 'fas fa-tag',
        Path: '/info',
        Selected: false
      },
      {
        name: 'Facturación',
        icon: 'fas fa-receipt',
        Path: '/invo',
        Selected: false
      },
      {
        name: 'Nota de crédito',
        icon: 'fas fa-table',
        Path: '/invonc',
        Selected: false
      },
      {
        name: 'Facturación Proveedor',
        icon: 'fas fa-receipt',
        Path: '/invoiceSupplier',
        Selected: false
      },
      {
        name: 'Reimpresión',
        icon: 'fas fa-print',
        Path: '/print',
        Selected: false
      },
    ]
  },
  {
    Name: 'Salir',
    Path: '',
    Icon: 'SALIR.png',
    Selected: false 
  } 
];
