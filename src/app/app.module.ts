import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { DiretrizesComponent } from './diretrizes/diretrizes.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent,
    DiretrizesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
