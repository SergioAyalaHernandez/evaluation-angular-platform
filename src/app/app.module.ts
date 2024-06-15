import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExamenComponent} from './examen/examen.component';
import {ClasesComponent} from './clases/clases.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CommonModule} from "@angular/common";
import {PersonCreateComponent} from './person-create/person-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {AsideComponent} from './aside/aside.component';
import {HistoriaComponent} from './historia/historia.component';
import {FooterComponent} from './footer/footer.component';
import {ExamenUnitarioComponent} from './examen-unitario/examen-unitario.component';
import {EvaluacionComponent} from './evaluacion/evaluacion.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CookieService} from "ngx-cookie-service";
import {AuthGuard} from "./auth.guard";
import { HomeBasicComponent } from './home-basic/home-basic.component';
import {AuthInterceptorInterceptor} from "./auth-interceptor.interceptor";
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FirmaComponent } from './firma/firma.component';
import { BackgroundComponent } from './background/background.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ClaseDetalleComponent } from './clase-detalle/clase-detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DashboardDataComponent} from "./components/dashboardData/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    ExamenComponent,
    ClasesComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    NavbarComponent,
    PersonCreateComponent,
    HomeComponent,
    AsideComponent,
    HistoriaComponent,
    FooterComponent,
    ExamenUnitarioComponent,
    EvaluacionComponent,
    DashboardComponent,
    HomeBasicComponent,
    NotFoundComponent,
    FirmaComponent,
    BackgroundComponent,
    ErrorDialogComponent,
    ClaseDetalleComponent,
    DashboardDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
