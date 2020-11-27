import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheBiggestObjectComponent } from './the-biggest-object/the-biggest-object.component';

@NgModule({
  declarations: [
    AppComponent,
    TheBiggestObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
