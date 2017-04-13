import { Directive, OnInit, OnChanges, Renderer, ElementRef, Input, Output, EventEmitter } from '@angular/core';

import * as Hammer from 'hammerjs';
import * as _ from 'underscore';

@Directive({
	selector: '[appSliderPicker]',
	host: {
		'(mousedown)': 'slideStart($event)',
		'(touchstart)': 'slideStart($event)'
	}
})
export class SliderPickerDirective implements OnInit {

	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() minValue: number;
	@Input() maxValue: number;
	@Input() opts: any;
	@Input() pos: number = 0;
	@Input() defaultValue: any;
	@Input() index: number;
	@Output() onChange: EventEmitter<any> = new EventEmitter();

	touch: any;
	lastX: any = 0;
	currentValue: any = 0;
	minX: any;
	maxX: any;
	parent: any;
	currentPos: any;

	constructor(private el: ElementRef) {
		this.onTouchDragHanlder = this.onTouchDragHanlder.bind(this);
	}

	ngOnInit() {
		this.touch = new Hammer(this.el.nativeElement);

		/* Init Data */
		this.parent = this.el.nativeElement.parentElement.getBoundingClientRect()
		this.currentPos = this.el.nativeElement.getBoundingClientRect()

		/* Set Default Value */
		this.setDefaultValue();
	}

	public setDefaultValue() {
		const range = this.max - this.min
		const percentage = ( this.defaultValue / range ) * 100
		const nextPos = ((percentage / 100) * this.parent.width);

		this.el.nativeElement.style.left = nextPos + "px";
	}

	slideStart(event) {
		document.ondragstart = function () { return false; };
		document.body.onselectstart = function () { return false; };

		/* Touch */
		this.touch.on("panleft panright", this.onTouchDragHanlder);
	}

	onTouchDragHanlder(event) {

		/* Calculate Next X Position */
		const xPos = event.center.x - this.parent.left;
		this.render(xPos);
	}

	calculateNextValue(nextPos) {

		const percentage = (nextPos / this.parent.width) * 100
		if(percentage < this.min) {
			return this.min;
		} else if(percentage > this.max) {
			return this.max
		} else {
			const range = this.max - this.min;
			const nextValue = (percentage / 100) * range;

			if(this.maxValue !== undefined) {
				if(nextValue < this.maxValue) {
					return nextValue;
				} else {
					return this.maxValue;
				}
			}

			if(this.minValue !== undefined) {
				if(nextValue > this.minValue) {
					return nextValue
				} else {
					return this.minValue
				}
			}
			return nextValue
		}
	}

	calculateNextPosFromValue(value) {
		return (value / 100) * this.parent.width;
	}

	render(nextPos) {

		/* Update Vale */
		const value = this.calculateNextValue(nextPos);
		const xPos = this.calculateNextPosFromValue(value);

		/* Move Picker */
		this.el.nativeElement.style.left = xPos + "px";
		this.onChange.emit({ pos: this.pos, value: value, index: this.index })
	}

}
