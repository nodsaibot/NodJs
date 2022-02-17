# NodJs
Want to use Vanilla JS but want the jQuery fell without the bloat? NodJs is for you.

Setup
====
Just include the script on header or footer<br>
<script src="/nod.js"></script>


Usage
===
$(".test") // class selector<br>
$("#test") // id selector<br>
$("#test").html() // html content getter<br>
$("#test").html('works') // html content setter<br>
$("#test").html().length // vanilla properties and methods still work<br>
$("#select").on("change",function(e){ $("#test").html('Selected:' this.val())  }); // event listeners

Event methods
===
click,	keypress,	submit,
dblclick,	keydown,	change,
mouseenter,	keyup,	focus
mouseleave,	 	blur
