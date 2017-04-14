import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng2-slider-popover',
  templateUrl: './slider-popover.component.html',
  styleUrls: ['./slider-popover.component.scss']
})
export class SliderPopoverComponent implements OnInit {

  @Input() value: any = 0;
  @Input() opts: any;
  constructor() { }

  ngOnInit() {
  }

}
