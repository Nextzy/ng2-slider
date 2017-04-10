import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  	label: {
  		range: 10,
  		custom: '{{value}}'
  	}
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
