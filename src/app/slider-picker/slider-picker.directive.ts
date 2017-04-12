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
export class SliderPickerDirective implements OnInit, OnChanges {

	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() opts: any;
	@Input() pos: number = 0;
	@Input() defaultValue: any;
	@Output() onChange: EventEmitter<any> = new EventEmitter();

	touch: any;
	lastX: any = 0;
	currentValue: any = 0;
	minX: any;
	maxX: any;
	parent: any;
	currentPos: any;

	constructor(private renderer: Renderer, private el: ElementRef) {
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

	ngOnChanges() {
		/* Detect Changes */

		// Todo -> Window Size Changes

	}

	setDefaultValue() {
		const range = this.max - this.min
		const percentage = ( this.defaultValue.value / range ) * 100
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
			return (percentage / 100) * range
		}
	}

	calculateNextPos(nextPos) {

		const right = this.parent.width;
		if(nextPos < this.parent.left) {
			return 0;
		} else if(nextPos > right) {
			return right
		} else {
			return nextPos
		}
	}

	render(nextPos) {

		/* Update Vale */
		const value = this.calculateNextValue(nextPos);
		const xPos = this.calculateNextPos(nextPos);

		/* Move Picker */
		this.el.nativeElement.style.left = xPos + "px";
		this.onChange.emit({ pos: this.pos, value: value })
	}

}
