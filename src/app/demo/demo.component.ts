import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class Ng2SliderDemoComponent implements OnInit {

  demo: any = {
    single: new FormControl(50),
    range: new FormControl([10, 90])
  }
  constructor() { }

  ngOnInit() {
  }

}
