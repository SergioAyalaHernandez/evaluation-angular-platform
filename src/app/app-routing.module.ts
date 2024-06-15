import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {ExamenComponent} from "./examen/examen.component";
import {PersonCreateComponent} from "./person-create/person-create.component";
import {ExamenUnitarioComponent} from "./examen-unitario/examen-unitario.component";
import {EvaluacionComponent} from "./evaluacion/evaluacion.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {HomeBasicComponent} from "./home-basic/home-basic.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ClaseDetalleComponent} from "./clase-detalle/clase-detalle.component";
import {DashboardDataComponent} from "./components/dashboardData/dashboard.component";

const routes: Routes = [
  { path: 'examen', component: ExamenComponent, canActivate: [AuthGuard] },
  { path: 'examenUnitario/:id', component: ExamenUnitarioComponent, canActivate: [AuthGuard] },
  { path: 'evaluacion/:id', component: EvaluacionComponent, canActivate: [AuthGuard] },
  { path: 'datos', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeBasicComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardDataComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'clase-detalle/:id', component: ClaseDetalleComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
