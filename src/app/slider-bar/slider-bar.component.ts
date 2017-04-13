import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.scss']
})
export class SliderBarComponent implements OnInit {

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
	
  constructor() { }

  ngOnInit() {
  	/* Compute Label */

  	this.labels = this.getLabels();
  }

  getLabels() {
  	const range = this.opts.label.range;
  	let list = _.range(this.min, this.max, range);

  	/* Set Label Style */
  	return list.map((item: any) => {
  		return {
  			label: item,
  			value: item
  		}
  	})
  }

}