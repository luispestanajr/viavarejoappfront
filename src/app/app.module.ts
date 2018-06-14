import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaLocalizacoesComponent } from './lista-localizacoes/lista-localizacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLocalizacoesComponent
],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
