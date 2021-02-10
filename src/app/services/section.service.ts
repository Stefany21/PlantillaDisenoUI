import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SectionService {
  currentSection = 'Inicio';
  
  
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.defineTitleBasedOnURL(event.url);
    });
  }
  defineTitleBasedOnURL(URL: string) {
    let splitURL = URL.split('/');

    switch (splitURL[1]) {
      case '':
      case 'home':
        this.currentSection = 'Inicio';
        break;
      case 'admin':
        this.currentSection = 'Administración';
        break;
      case 'transacts':
        this.currentSection = 'Socios de Negocios';
        break;
      case 'document-states':
        this.currentSection = 'Inventario';
        break;
      case 'requirements':
        this.currentSection = 'Ventas';
        break;
        case 'requirements':
        this.currentSection = 'Documentos';
        break;
      default:
        break;
    }
  }
}
