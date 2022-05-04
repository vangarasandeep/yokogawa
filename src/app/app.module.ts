import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivewellsComponent } from './modules/activewells/activewells.component';
import { AllwellsComponent } from './modules/allwells/allwells.component';
import { ReportComponent } from './modules/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivewellsComponent,
    AllwellsComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
