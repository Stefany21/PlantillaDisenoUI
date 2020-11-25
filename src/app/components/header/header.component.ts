import { Component, OnInit } from '@angular/core';
import { SidebarService } from "src/app/services/sidebar.service";
import { SectionService } from "src/app/services/section.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _opened: boolean;
  dock :boolean;
  sidebarMode = 'push';
  sidebarState: boolean;
  dockState:boolean;
  constructor(private sidebarService: SidebarService,
    public sectionService: SectionService) {
    this.sidebarState = false;  
    this.dockState = true;  
    
   }

  ngOnInit(): void {
  }
  
  toggleSidebar() {
    this.sidebarState = !this.sidebarState;
    this.sidebarService.toggler.next(this.sidebarState);
  this.sidebarService.toggler.next(this.dockState);
 this.sidebarService.toggler.subscribe(toggle => this.dock = toggle);
    if(this.sidebarState){  
      console.log("if opens");    
      this.dockState = !this.dockState;      
    }
  }
}

 