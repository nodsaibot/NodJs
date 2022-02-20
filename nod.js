/* 
	NodJs v0.3 
  https://github.com/nodsaibot/NodJ 
*/
let se, t, _njs = Element.prototype,
$ = function(c){
  se = c;
  t = njs_qs(c);
  return t;
},
njs_qs = c => (document.querySelectorAll(c).length>1) ? document.querySelectorAll(c) : document.querySelector(c);
	_njs.html = function(h){
    if(h) this.innerHTML=h; return h ?  this : this.innerHTML;
	}
	_njs.text = function(h){
    if(h) this.textContent=h; return h ?  this : this.textContent;				
	}
	_njs.hide = function(){
		this.style.display = 'none'; return this;
	}
	_njs.show = function(){
		this.style.display = ''; return this;
	}
	_njs.addClass = function(c){
			var array = c.split(' ');
			var el = this;
		    array.forEach(function(i){
		      el.classList.add(i); }); return this;
	}	
	_njs.removeClass = function(c){
		  this.classList.remove(c);  return this;
	}	
	_njs.toggleClass = function(c){
    this.classList.toggle(c);
		return this;
	}
	_njs.append = function(c){
		this.innerHTML += c; return this;
	}	
	_njs.prepend = function(c){
		this.innerHTML = c + this.innerHTML; return this;
	}
	_njs.before = function(c){
		 this.insertAdjacentHTML('beforebegin', c); return this;
	}	
	_njs.after = function(c){
		 this.insertAdjacentHTML('afterend', c); return this;
	}	
	_njs.next = function(){
		return  this.nextElementSibling;  
	}	
	_njs.previous = function(){
		return  this.previousElementSibling; 
	}	
	_njs.parent = function(){
		return  this.parentNode;
	}		
	_njs.val = function(h){
		return h ? this.value=h : this.value;
	}	
	_njs.remove = function(){
		this.parentNode.removeChild(this); return this;
	}	
	_njs.attr = function(a,b){
		return b ? this.setAttribute(a,b) : this.getAttribute(a);	
	}
	_njs.on = function(h,f){
		return this.addEventListener(h,f);
	}	
	_njs.each = function(callback){
		var $obj = nodjs_qs(se);
		for (var i=0, len=$obj.length; i<len; i++)
    if ( callback.call($obj[i], i, $obj[i]) === false ) break;
	}
	$.ajax = function(o){
		var r = new XMLHttpRequest();
		r.open(o.type, o.url, true);
		r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		r.onreadystatechange = function () {
		  if (r.readyState != 4 || r.status != 200)
		   o.success(r.responseText); };
		if(typeof o.data === 'object')
		o.data = Object.keys(o.data).reduce(function(a,k){a.push(k+'='+encodeURIComponent(o.data[k]));return a},[]).join('&')
		r.send(o.data);
	}	
