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
	@Input() model: any = new FormControl([20, 80]);
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
  	label: {
  		range: 10,
  		custom: '{{value}}'
  	}
  }

  example: any = {
	  min: new FormControl(0),
	  max: new FormControl(200)
  }

  options: any = {}

  constructor() {
  	this.options = _.clone(this.defaultOpts);
  }

  ngOnInit() {
  	/* Initial Slider */
  	console.log(this.options);
  }

  ngOnChanges() {
  	/* Detect Input() Changes */
	
  }
}
