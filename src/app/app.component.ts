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
   _opened = false;
  sidebarMode = 'push';
  menu = Menu;
  showsubMenu = false;
  dock = false;

  constructor(private router: Router,
    private sidebarService: SidebarService){
      this.sidebarService.toggler.subscribe(toggle => this._opened = toggle);
      //this.sidebarService.toggler.subscribe(toggle => this.dock = toggle);
  }
  openedChange($event) { }
 
  _toggleDock() {
    this.dock = !this.dock;
  }
  onClickMenuOption(option: any) {
    // console.log(option);
    this.menu.forEach(x => x.Selected = false);
    if (option.Name === 'Salir') {
    } else {
      option.Selected = true;
      this.router.navigateByUrl(option.Path);
      if(option.SubMenu){
        this.showsubMenu = !this.showsubMenu;

      // option.SubMenu.forEach(x=> {
      //     x.Selected = false;
      //     console.log("big");
      // });
    }
      
    }
  }  
  prueba(option: any){
    
    this.showsubMenu = !this.showsubMenu;
    option.Selected = !option.Selected;
    console.log(option);
    console.log("div int");

  }
  onClicksubMenuOption(option: any) {
    console.log("div afuera");
    // option.SubMenu.forEach(x=> {
    //   console.log("div afuera");
    //       x.Selected = false;
    //   });
    // console.log(option);
    // option.Selected = true;
    
    // option.SubMenu.forEach(x => {
    //   x.Selected = false;

  //   // });
  // this.menu.forEach(x => x.Selected = false);
  //   if (option.Name === 'Salir') {
  //   } else {
  //     option.Selected = true;    
  //     this.router.navigateByUrl(option.Path);
  //     if(option.SubMenu){

  //       this.showsubMenu = !this.showsubMenu;
  //       option.SubMenu.forEach(x=> {
  //         x.Selected = false;
  //         if(1==1){
  //           //x.Selected = true;
  //         //  option.SubMenu.Selected = true;
  //         }
  //       });      
       
  //     }
  //   }  
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
    Icon: 'fa fa-arrow-right',
    Selected: false 
  }
];
