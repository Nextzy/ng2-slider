import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'underscore';

@Component({
  selector: 'ng2-slider',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class Ng2SliderComponent implements OnInit, OnChanges {

	/* Options */
	@Input() model: any;
	@Input() defaultValue: any;
	@Input() min: any;
	@Input() max: any;
	@Input() readonly: any;
	@Input() opts: any;

	/* Default Options */
  defaultOpts = {
  	defaultValue: 50,
  	min: 0,
  	max: 100,
  	readonly: false,
	trigger: 5,
  	label: {
  		range: 10,
  		custom: '{{value}}'
  	},
	popover: {
		autohide: true
	}
  }

  sliderModel: FormControl = new FormControl();
  options: any = {}

  constructor() {
  	this.options = _.clone(this.defaultOpts);
  }

  ngOnInit() {
  	/* Initial Slider */

	this.setConfiguration()
	this.setSliderValue()
  }

  ngOnChanges() {
  	/* Detect Input() Changes */
	
  }

  setConfiguration() {
	  if(this.min !== undefined) {
		  this.options.min = this.min;
	  }

	  if(this.max !== undefined) {
		  this.options.max = this.max;
	  }

	  if(this.readonly !== undefined) {
		  this.options.readonly = this.readonly
	  }
  }

  setSliderValue() {
	  this.sliderModel.setValue(this.model.value);
  }
}
