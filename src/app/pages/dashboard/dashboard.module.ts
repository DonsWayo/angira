import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard.component';
import {MainSidebarComponent} from '../../main-sidebar/main-sidebar.component';
import {MainSidebarModule} from '../../main-sidebar/main-sidebar.module';
import {ToolbarModule} from '../../toolbar/toolbar.module';

@NgModule({
  declarations: [DasboardComponent],
  imports: [
    CommonModule,
    MainSidebarModule
  ]
})
export class DashboardModule { }
