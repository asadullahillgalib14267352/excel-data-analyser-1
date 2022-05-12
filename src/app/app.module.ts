import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AnalysisHttpHandler } from './excel-data-analyser/data-analysis/service-api/analysis-http.handler';
import { HttpHandler } from './excel-data-analyser/data-analysis/service-api/http.handler';
import { HttpClientModule } from '@angular/common/http';
import { CriteriaAddService } from './excel-data-analyser/data-analysis/criteria/services/criteria-add.service';
import { CriteriaViewService } from './excel-data-analyser/data-analysis/criteria/services/criteria-view.service';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { PaginationModule } from './common/pagination/pagination.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    PaginationModule

  ],
  providers: [
    AnalysisHttpHandler,
    CriteriaAddService, 
    CriteriaViewService,
    HttpHandler,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5500}}
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
