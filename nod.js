/* 
	NodJs v1.0.3 
  https://github.com/nodsaibot/NodJs 
*/
function $(s) {
    if (typeof s === "string" || s instanceof String) {
      return new _nodjs(...document.querySelectorAll(s))
    } else {
      return new _nodjs(s)
    }
  }
class _nodjs extends Array {
    ready(cl) {
        const isReady = this.some(e => {
        return e.readyState != null && e.readyState != "loading";
        })
        if (isReady) {
        cl()
        } else {
        this.on("DOMContentLoaded", cl)
        }
        return this
    }

    on(...a) {
        if (typeof a[1] === "function") {
        this.forEach(e => e.addEventListener(a[0], a[1]))
        } else {
        this.forEach(elem => {
            elem.addEventListener(a[0], e => {
            if (e.target.matches(a[1])) a[2](e);
            })
        })
        }
        return this
    }
    html(h){
        let rhtml='';      
        this.forEach((e) => {
        if (h)   e.innerHTML = h;
        else  rhtml += e.innerHTML;
        });  
        return h ? this : rhtml;   
        }
    text(h){
        let rtext='';      
        this.forEach((e) => {
            if (h)   e.textContent = h;
            else  rtext += e.textContent;
        });  
            return h ? this : rtext;   
        }
    next() {
        return this.map(e => e.nextElementSibling).filter(e => e != null)
    }

    prev() {
        return this.map(e => e.previousElementSibling).filter(e => e != null)
    }
    append(c){
        this.forEach(e => e.insertAdjacentHTML('beforeend',c)); return this;
        }	
    prepend(c){
        this.forEach(e => e.insertAdjacentHTML('afterbegin',c)); return this;
        }
    before(c){
            this.forEach(e => e.insertAdjacentHTML('beforebegin', c)); return this;
        }	
    after(c){
            this.forEach(e => e.insertAdjacentHTML('afterend', c)); return this;
        }	
    removeClass(c) {
        this.forEach(e => e.classList.remove(c)); return this
    }

    addClass(c) {
        this.forEach(e => e.classList.add(c)); return this
    }
    toggleClass(c) {
        this.forEach(e => e.classList.toggle(c)); return this
    }
    hide() { 
        this.forEach(e =>{ e.style['visibility'] = 'hidden';  e.style['opacity'] = 0;}); return this
    } 
    show() { 
        this.forEach(e =>{ e.style['visibility'] = 'visible';  e.style['opacity'] = 1;}); return this
    }  
    toggle() { 
        this.forEach(e =>{  if(e.style['visibility'] == 'visible'||e.style['visibility'] =='') $(e).hide(); else $(e).show() }); return this
    }  

    closest(s){
        return this.map(e => e.closest(s)).filter(e => e != null)
        } 
    css(...c) {
        const camelProp = c[0].replace(/(-[a-z])/, g => { return g.replace("-", "").toUpperCase() });
        this.forEach(e => (e.style[camelProp] = c[1])); return this
    }
    parent(){
        return this.map(e => e.parentElement).filter(e => e != null)
    }		
    val(v){
        if(v)
        { this.forEach(e => e.value=v ); return this;}
        return this[0].value;
    }	
    remove(){
        this.forEach(e => e.parentNode.removeChild(e)); return this;
    }	
    attr(...a){
        this.forEach(e =>  a[1] ? e.setAttribute(a[0],a[1]) : e.getAttribute(a[0])); return this;
    }
    each(cl){
        this.forEach((e,i) => {  cl.call(e, i, e); })       
    }
}
  
class _nodjs_promise {
    constructor(promise) {
        this.promise = promise
    }

    done(cl) {
        this.promise = this.promise.then(data => {
        cl(data)
        return data
        })
        return this
    }

    fail(cl) {
        this.promise = this.promise.catch(cl)
        return this
    }

    always(cl) {
        this.promise = this.promise.finally(cl)
        return this
    }
}
  
  
$.get = function ({ url, data = {}, success = () => {}, dataType }) {
const q = Object.entries(data)
    .map(([key, value]) => {
    return `${key}=${value}`
    })
    .join("&")

return new _nodjs_promise(
    fetch(`${url}?${q}`, {
    method: "GET",
    headers: {
        "Content-Type": dataType,
    },
    })
    .then(res => {
        if (res.ok) {
        return res.json()
        } else {
        throw new Error(res.status)
        }
    })
    .then(data => {
        success(data)
        return data
    }));
}
