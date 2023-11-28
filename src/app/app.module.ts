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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FrontofficeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
