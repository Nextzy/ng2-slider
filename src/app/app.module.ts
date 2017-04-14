import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2SliderComponent } from './app.component';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { SliderPickerComponent } from './slider-picker/slider-picker.component';
import { SliderBarDirective } from './slider-bar/slider-bar.directive';
import { SliderPickerDirective } from './slider-picker/slider-picker.directive';
import { SliderPopoverComponent } from './slider-popover/slider-popover.component';

@NgModule({
  declarations: [
    Ng2SliderComponent,
    SliderBarComponent,
    SliderPickerComponent,
    SliderBarDirective,
    SliderPickerDirective,
    SliderPopoverComponent
  ],
  exports: [
  	Ng2SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [Ng2SliderComponent]
})
export class Ng2SliderModule { }
