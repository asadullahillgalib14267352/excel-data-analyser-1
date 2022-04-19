import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem, SelectItem} from "primeng/api";
import {ThemePalette} from "@angular/material/core";
import {EmpDetails, TableType} from "./domain/data-analysis.domain";

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css']
})
export class DataAnalysisComponent implements OnInit {

  value!: any;
  items!: MenuItem[];
  activeItem!: MenuItem;
  tableType: SelectItem[] = TableType;
  details: EmpDetails[]=[];
  loading: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.items = [
      {label: 'Grid Views', icon: 'pi pi-fw pi-th-large'},
      {label: 'Pivot views', icon: 'pi pi-fw pi-sort-amount-up'},
      {label: 'Chart Views', icon: 'pi pi-fw pi-chart-bar'},
      {label: 'Custom Queries', icon: 'pi pi-fw pi-key'}
    ];
    this.activeItem = this.items[0];
   this.details= [
      { name: 'Galib', age: 29,address:'gsdhasdshg', email: 'abcd&nnnc.com' },
      { name: 'Arif', age: 28,address:'gsgs' , email: 'sfsf&nnnc.com' },
      { name: 'Rakib', age: 27,address:'gsdtw363hasdshg' , email: 'uyuf&nnnc.com' },
      { name: 'Hannan', age: 26,address:'gsdhe455asdshg' , email: 'abacd&nnnadfc.com' },


    ];
  }

  navigateToDataMapping(){
    this.router.navigate(['dataMapping'], { relativeTo: this.route });
  }
  navigateToDataIngestion(){
    this.router.navigate(['']);
  }

}
