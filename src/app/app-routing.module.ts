import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroUsuarioComponent} from "./cadastro/cadastro-usuario/cadastro.usuario.component";
import {CadastroPeixeComponent} from "./cadastro/cadastro-peixe/cadastro.peixe.component";
import {CadastroTanqueComponent} from "./cadastro/cadastro-tanque/cadastro.tanque.component";

const routes: Routes = [
  {path:"cadastro-usuario", component: CadastroUsuarioComponent },
  {path:"cadastro-peixe", component: CadastroPeixeComponent },
  {path:"cadastro-tanque", component: CadastroTanqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

