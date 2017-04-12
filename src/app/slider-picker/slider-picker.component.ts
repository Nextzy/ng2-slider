import { Component, OnInit, OnChanges, Input, Renderer, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { SliderPickerDirective } from './slider-picker.directive';

import * as Hammer from 'hammerjs';
import * as _ from 'underscore';

@Component({
	selector: 'app-slider-picker',
	host: {
		'(click)': 'clickOnBar($event)'
	},
	templateUrl: './slider-picker.component.html',
	styleUrls: ['./slider-picker.component.scss']
})
export class SliderPickerComponent implements OnInit {

	@ViewChild(SliderPickerDirective) picker1;
	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() opts: any;
	@Input() model: any;


	type: any = 'single';
	parent: any;


	constructor(private el: ElementRef) {
		this.parent = this.el.nativeElement.parentElement.getBoundingClientRect()
	}

	ngOnInit() {
	}

	onChange({ pos, value }) {
		this.model.setValue(value)
	}

	clickOnBar($event) {
		const nextVal = this.calculateClickPos($event.clientX)
		this.model.setValue(nextVal)

		/* Set new picker position */
		this.picker1.setDefaultValue()
	} 

	calculateClickPos(xPos) {
		const width = this.parent.width;
		const left = this.parent.left;
		const realXPos = xPos - left;
		const percentage = (realXPos / this.parent.width) * 100
		if(percentage < this.min) {
			return this.min;
		} else if(percentage > this.max) {
			return this.max
		} else {
			const range = this.max - this.min;
			return (percentage / 100) * range
		}
	}
}
