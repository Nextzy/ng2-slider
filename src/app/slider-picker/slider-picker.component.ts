import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-picker',
  templateUrl: './slider-picker.component.html',
  styleUrls: ['./slider-picker.component.scss']
})
export class SliderPickerComponent implements OnInit {
	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() opts: any;
  constructor() { }

  ngOnInit() {
  }

}
