# NG2 Slider

An Simple Angular2 Slider Component

## Install

```
npm install nextzy/ng2-slider
```

## Usage

Import slider module into you application

```
import { Ng2SliderModule } from 'nextzy/ng2-slider';
```

Import Stylesheet ( with SCSS ) in `styles.scss`

```
@import 'ng2-slider/styles.scss'

...
```

Zero Configuration

```
<ng2-slider
	[max]="0"
	[min]="100"
	[model]=""
></ng2-slider>
```

## References

### Options

Opt | Type|  Default | Description
--- | --- | --- | ---
model | Model, FormControl | - | * Required
min | Number | 0 | Min value of slider
max | Number | 100 | Max value of slider


### Theme Customize



### Browser Support



## License

MIT License