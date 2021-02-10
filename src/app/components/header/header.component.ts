import { Component, OnInit } from '@angular/core';
import { SidebarService } from "src/app/services/sidebar.service";
import { SectionService } from "src/app/services/section.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebarMode = 'push';
  sidebarState: boolean;
  dockState: boolean;
  constructor(private sidebarService: SidebarService,
    public sectionService: SectionService) {
    this.sidebarState = false;
    this.dockState = true;

  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarState = !this.sidebarState;
    this.dockState = !this.dockState;
    this.sidebarService.toggler.next(this.sidebarState);
    this.sidebarService.docked.next(this.dockState);
  }
}

