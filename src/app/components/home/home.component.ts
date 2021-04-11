import { Component, OnInit } from '@angular/core';
import { Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


interface Country {
  id?: number;
  name: string; 
  area: number;
  population: number;
}
const COUNTRIES: Country[] = [
  {
    name: 'Maria',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Fresya',  
    area: 640679,
    population: 64979548
  },
  {
    name: 'Mora',  
    area: 357114,
    population: 82114224
  },
  {
    name: 'Mario',   
    area: 92090,
    population: 10329506
  },
  {
    name: 'Mari',   
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Mena',  
    area: 331212,
    population: 95540800
  },
 
];
export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}



@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  
  page = 1;
  pageSize = 2;
  collectionSize = COUNTRIES.length;
  countries: Country[];

  constructor() {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  refreshCountries() {
    console.log(this.pageSize);
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  countries1 = COUNTRIES;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {
console.log("sort");
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries1 = COUNTRIES;
    } else {
      this.countries1 = [...COUNTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
