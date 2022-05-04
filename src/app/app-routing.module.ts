import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllwellsComponent } from './modules/allwells/allwells.component';
import { ActivewellsComponent } from './modules/activewells/activewells.component';
import { ReportComponent } from './modules/report/report.component';

const routes: Routes = [
  {path: 'ActiveWells', component:ActivewellsComponent},
  {path: 'AllWells', component:AllwellsComponent},
  {path: 'Report', component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
