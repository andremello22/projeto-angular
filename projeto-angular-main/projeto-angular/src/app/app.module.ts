import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FooterComponent } from './footer/footer.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import {MatSnackBarModule} from "@angular/material/snack-bar"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    NaoEncontradaComponent,
   
  ],
  imports: [
    BrowserModule,        
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
