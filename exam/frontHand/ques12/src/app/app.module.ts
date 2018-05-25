import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneRJTComponent } from './one-rjt/one-rjt.component';
import { TwoRJTComponent } from './two-rjt/two-rjt.component';
import { ThreeRJTComponent } from './three-rjt/three-rjt.component';
import { FourRJTComponent } from './four-rjt/four-rjt.component';

@NgModule({
  declarations: [
    AppComponent,
    OneRJTComponent,
    TwoRJTComponent,
    ThreeRJTComponent,
    FourRJTComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
