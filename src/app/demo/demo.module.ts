import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2SliderModule } from '../app.module';
import { Ng2SliderDemoComponent } from './demo.component';

@NgModule({
  declarations: [
    Ng2SliderDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2SliderModule
  ],
  providers: [],
  bootstrap: [Ng2SliderDemoComponent]
})
export class Ng2SliderDemoModule { }
