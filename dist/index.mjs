var u=Object.defineProperty;var o=(r,e)=>u(r,"name",{value:e,configurable:!0});function d(r){const e=r.renderer.rules.image;r.renderer.rules.image=(a,n,c,g,l)=>{const[s,f,t]=a[n].attrs,i="id-"+performance.now().toString().replace(/\./gi,"");return console.log("ID:",i),t?`<figure><img src="${s[1]}" alt="${f[1]}" id="${i}"><figcaption aria-describedby="${i}">${t[1]}</figcaption></figure>`:e(a,n,c,g,l)}}o(d,"markdownItCaption");export{d as default};