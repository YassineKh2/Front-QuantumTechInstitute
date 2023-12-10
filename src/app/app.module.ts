import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversiteModule } from './universite/universite.module';
import {BackofficeModule} from "./Backoffice/backoffice.module";
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import {FrontofficeModule} from "./frontoffice/frontoffice.module";
import { BlocAddComponent } from './bloc/component/bloc-add/bloc-add.component';
import { BlocListComponent } from './bloc/component/bloc-list/bloc-list.component';
import { BlocModifyComponent } from './bloc/component/bloc-modify/bloc-modify.component';
import { ChambreAddComponent } from './chambre/component/chambre-add/chambre-add.component';
import { ChambreListComponent } from './chambre/component/chambre-list/chambre-list.component';
import { ChambreModifyComponent } from './chambre/component/chambre-modify/chambre-modify.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FrontofficeModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
