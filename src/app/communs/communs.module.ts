import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {SideBarComponent} from "./sidebar/sidebar.component";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent,
  ],
  exports: [
    NavbarComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class CommunsModule { }
