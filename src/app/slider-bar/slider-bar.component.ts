import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.css']
})
export class SliderBarComponent implements OnInit {

	@Input() min: number = 0;
	@Input() max: number = 100;
	
  constructor() { }

  ngOnInit() {
  }

}
