import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ToolbarModule} from '../toolbar/toolbar.module';

@NgModule({
  declarations: [MainSidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatButtonToggleModule,
    ToolbarModule
  ],
  exports: [MainSidebarComponent]
})
export class MainSidebarModule { }
