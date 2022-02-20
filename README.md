# NodJs
Want to use Vanilla JS but want the jQuery fell without the bloat? NodJs is for you.
![Licence](https://img.shields.io/badge/Licence-MIT-lightgrey.svg)
![Project Status](https://img.shields.io/badge/Project%20Status-Beta-yellow.svg)
![Size Minified](https://img.shields.io/badge/Size%20(Minified)-7.8kb-brightgreen.svg)
![Size Gzipped](https://img.shields.io/badge/Size%20(Gzipped)-4.57kb-brightgreen.svg)
**This project is now in beta, make sure to test your integration with this code thoroughly before deploying**
### jQuery exists, why do I need this?
Sometimes you dont need a flamethrower to make pancakes! 

Setup
====
Clone the repository:
```
$ git clone https://github.com/nodsaibot/nodjs
```
Then just include the script!
```html
<script src="{your_assets_path}/nod.js" type="application/javascript"></script>
```

Usage
===
```javascript
$(".test") // class selector
$("#test") // id selector
$("#test").html() // html content getter
$("#test").html('works') // html content setter
$("#test").html().length // vanilla properties and methods still work
$("#select").on("change",function(e){ $("#test").html('Selected:' this.val())  }); // event listeners
``` 
Event methods
===
click,	keypress,	submit,
dblclick,	keydown,	change,
mouseenter,	keyup,	focus
mouseleave,	 	blur

### Problems?
Please consider this repo as-is, I will not give support to issues
