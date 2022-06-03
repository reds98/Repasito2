import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPrincipalComponent,
    HomeComponent,
    InfoComponent,
    TarjetaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
