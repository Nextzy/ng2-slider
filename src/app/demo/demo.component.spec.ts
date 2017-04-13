import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SliderDemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: Ng2SliderDemoComponent;
  let fixture: ComponentFixture<Ng2SliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2SliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
