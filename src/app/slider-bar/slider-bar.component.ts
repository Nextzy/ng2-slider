import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { SliderBarDirective } from './slider-bar.directive'
import * as _ from 'underscore';

@Component({
	selector: 'app-slider-bar',
	templateUrl: './slider-bar.component.html',
	styleUrls: ['./slider-bar.component.scss']
})
export class SliderBarComponent implements OnInit, OnChanges {

	@ViewChild(SliderBarDirective) bar: SliderBarDirective;
	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() model: any;
	@Input() opts: any;

	labels: Array<any> = [];
	style: any = {
		label: {
			"width": "100%"
		}
	}

	isInit: boolean = false;

	constructor() { }

	ngOnInit() {
		/* Compute Label */

		this.labels = this.getLabels();
		this.isInit = true;
	}

	ngOnChanges() {
		if (this.isInit) {
			this.bar.reRenderBar();
		}
	}

	getLabels() {
		const range = this.opts.label.range;
		const format = this.getDecimalFormat(this.opts.label.format);
		let list = _.range(this.min, this.max, range);

		/* Set Label Style */
		return list.map((item: any) => {
			return {
				label: this.getLabelFormat(item, format),
				value: item
			}
		})
	}

	getLabelFormat(value, format) {
		const formatValue = value.toFixed(format.fixed)
		return format.str.replace("{{number}}", formatValue)
	}

	getDecimalFormat(format) {
		const hasDecimal = format.match(/\d+\.\d+/g)
		if (hasDecimal) {
			const fixed = (hasDecimal[0].split(".")[1] || "").length
			return {
				str: format.replace(hasDecimal[0], "{{number}}"),
				fixed: fixed
			}
		}

		const hasNumber = format.match(/\d+/g)
		return {
			str: format.replace(hasNumber, "{{number}}"),
			fixed: 0
		}
	}
}