# NG2 Slider

An Simple Angular2 Slider Component

## Install

```
npm install ng2-slider
```

## Usage

Import slider module into you application

```
import { Ng2SliderModule } from 'ng2-slider';
```

Import Stylesheet ( with SCSS ) in `styles.scss`

```
@import 'ng2-slider/styles.scss'

...
```

Add Component and Configuration

```
<ng2-slider
	[max]="0"
	[min]="100"
	[model]="slider"
></ng2-slider>
```

## References

### Options

Opt | Type|  Default | Description
--- | --- | --- | ---
model | FormControl | - | * Required
min | Number | 0 | Min value of slider
max | Number | 100 | Max value of slider
defaultValue |  Number | 0 | Default Value of Slider
readonly | Boolean | false | Readonly Flag
opts | Object | - | Configuration by Object

Options References

Opt | Type | Default | Description
--- | --- | --- | ---
min | Number | 0 | Min value of slider
max | Number | 100 | Max value of slider
defaultValue |  Number | 0 | Default Value of Slider
readonly | Boolean | false | Readonly Flag
opts | Object | - | Configuration by Object

* Note that options by attr is more priority than options by object

### Browser Support



## License

MIT License