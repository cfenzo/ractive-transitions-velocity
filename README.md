# Ractive.js velocity transition plugin

This plugin let you use [Velocity.js](http://velocityjs.org") to make [Ractive.js](http://ractivejs.org) transitions, with full support for all of Velocity.js' [properties](http://julian.com/research/velocity/#properties) and [options](http://julian.com/research/velocity/#easing) (except complete, which is used by the plugin itself)
And if you add the <a href="http://julian.com/research/velocity/#uiPack">Velocity.js UI Pack</a> aling with Velocity.js (optional, but recommended), all the packaged effects will be readily available as transitions too.

[See the demo here.](http://cfenzo.github.io/ractive-transitions-velocity)

*Find more Ractive.js plugins at [docs.ractivejs.org/latest/plugins](http://docs.ractivejs.org/latest/plugins)*

## Usage

Include this file on your page below [Ractive](http://ractivejs.org), [jQuery](http://jquery.com), [velocity](http://velocityjs.org) and (optional) [velocity.ui](http://julian.com/research/velocity/#uiPack) e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/jquery.js'></script>
<script src='lib/jquery.velocity.js'></script>
<script src='lib/velocity.ui.js'></script>
<script src='lib/ractive-transitions-velocity.js'></script>
```

Or, if you're using a module loader, require this module after jquery, velocity and (optional) velocity.ui:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'ractive-transitions-velocity' );
```

You can then roll your own transitions using a [properties](http://julian.com/research/velocity/#properties) object and (optional) [options](http://julian.com/research/velocity/#easing) object or duration in ms 
```html
<p intro="velocity:{opacity:[ 1, 0 ]},1000">intro="velocity:{opacity:[ 1, 0 ]},1000"</p>
<p intro="velocity:{translateX: [ 0, [3], 500 ],opacity:[ 1, [8], 0 ]},{duration:1000,loop:2}">intro="velocity:{translateX: [ 0, [3], 500 ],opacity:[ 1, [8], 0 ]},{duration:1000,loop:2}"</p>
````

If you add the [UI Pack](http://julian.com/research/velocity/#uiPack), you can use the provided effects by their name instead of the properties object
```html
<p intro="velocity:'transition.flipBounceXIn',{duration:3000}">intro="velocity:'transition.flipBounceXIn',{duration:3000}"</p>
<p intro="velocity:'transition.fadeIn',4000">intro="velocity:'transition.fadeIn',4000"</p>
```

***Bonus*** IF the UI Pack is added, all effects will be available as Ractive transitions directly
```html
<p intro="transition.whirlIn">intro="transition.whirlIn"</p>
<p intro="transition.bounceLeftIn:3000">intro="transition.bounceLeftIn:3000"</p>
```

***NOTE!*** The `complete` option is not available, as it is overwritten by the transition internals

## Credits

[@julianshapiro](https://github.com/julianshapiro) for creating [Velocity.js](http://velocityjs.org)

[@Rich-Harris](https://github.com/Rich-Harris) for creating [Ractive.js](http://ractivejs.org)


## License

Licensed MIT (c) 2014 Jens Anders Bakke. (https://twitter.com/cfenzo)

Created with the [Ractive.js plugin template](https://github.com/ractivejs/plugin-template) for Grunt.
