import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './security/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculadoraComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
