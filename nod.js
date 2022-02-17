/* 
	NodJs v0.3 
  https://github.com/nodsaibot/NodJ 
*/
let se , njs =Element.prototype,
$ = c=>{
 se = c;
 t = document.querySelector(c);
return t;
}, t;
njs.html = h=> h ? t.innerHTML=h : t.innerHTML; 
njs.text = h=> h ? t.textContent=h : t.textContent; 
njs.hide = ()=> t.style.display = 'none'; 
njs.show = ()=> t.style.display = '';
njs.addClass = c=>{
   c.split(' ').forEach(i=>{
     t.classList.add(i); });
}	
njs.removeClass = c=> t.classList.remove(c);	
njs.toggleClass = c=> t.classList.contains(c) ? t.classList.remove(c) : t.classList.add(c); 
njs.append = c=> t.innerHTML += c; 
njs.prepend = c=> t.innerHTML = c + t.innerHTML; 
njs.before = c=> t.insertAdjacentHTML('beforebegin', c); 	
njs.after = c=> t.insertAdjacentHTML('afterend', c); 	
njs.next = ()=> t.nextElementSibling; 	
njs.previous = ()=> t.previousElementSibling; 	
njs.parent = ()=> t.parentNode; 		
njs.val = ()=> "0" in t ? t[0].value : t.value; 	
njs.remove = ()=> t.parentNode.removeChild(t); 	
njs.attr = (a,b)=> b ? t.setAttribute(a,b) : t.getAttribute(a); 
njs.on = (h,f)=> t.addEventListener(h,f); 	
njs.each = callback=>{
let _c = document.querySelectorAll(se);
for (let i=0, len=_c.length; i<len; i++)
if ( callback.call(_c[i], i, _c[i]) === false ) break;
}
$.ajax = (o)=>{
let r = new XMLHttpRequest();
r.open(o.type, o.url, true);
r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
r.onreadystatechange =  ()=> {
 if (r.readyState != 4 || r.status != 200)
  o.success(r.responseText); };
if(typeof o.data === 'object')
o.data = Object.keys(o.data).reduce((a,k)=>{a.push(k+'='+encodeURIComponent(o.data[k]));return a},[]).join('&')
r.send(o.data);
}
