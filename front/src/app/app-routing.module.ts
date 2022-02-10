import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './security/auth-guard';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'login',
  component: LoginComponent
},
{
  path: 'calculadora',
  component: CalculadoraComponent,
  canActivate: [AuthGuard]
},
{
  path: '**',
  redirectTo: 'login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
