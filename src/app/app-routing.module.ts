import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretrizesComponent } from './diretrizes/diretrizes.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

const routes: Routes = [
  {path: 'velha', component: JogoDaVelhaComponent},
  {path: 'diretrizes', component: DiretrizesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
