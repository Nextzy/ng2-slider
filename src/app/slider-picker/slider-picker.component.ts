import { Component, OnInit, OnChanges, Input, Renderer, ElementRef, Output, EventEmitter } from '@angular/core';

import * as Hammer from 'hammerjs';
import * as _ from 'underscore';

@Component({
	selector: 'app-slider-picker',
	templateUrl: './slider-picker.component.html',
	styleUrls: ['./slider-picker.component.scss']
})
export class SliderPickerComponent implements OnInit {
	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() opts: any;
	@Input() model: any;


	type: any = 'single';


	constructor() {
	}

	ngOnInit() {
	}

	onChange({ pos, value }) {
		this.model.setValue(value)
	}
}
