import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DasboardComponent} from './pages/dashboard/dasboard.component';

const routes: Routes = [
  { path: '', component: DasboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
