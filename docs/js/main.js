!function(){const i=["title",".garden_layout__header",".garden_layout__main",".garden_layout__toc"];let r=new URL(location);async function n(t){const e=await fetch(t);var n=await e.text();const a=(new DOMParser).parseFromString(n,"text/html");for(const o of i)document.querySelector(o).innerHTML=a.querySelector(o).innerHTML;r=t,window.scrollTo(0,0)}document.addEventListener("click",async t=>{if("A"===t.target.tagName){const e=new URL(t.target.href);e.origin===location.origin&&e.pathname.startsWith("/garden/")&&e.pathname!==location.pathname&&(t.preventDefault(),await n(e),history.pushState(null,document.querySelector("title").innerHTML,e),gtag("event","page_view",{page_location:document.location.href,page_title:document.title}))}}),window.onpopstate=async()=>{new URL(location).pathname!==r.pathname&&await n(new URL(location))}}();