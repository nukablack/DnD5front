import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CaracteristicasComponent} from './caracteristicas/caracteristicas.component';

@NgModule({
  declarations: [
    AppComponent,
    CaracteristicasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
