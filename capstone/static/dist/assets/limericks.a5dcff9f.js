import{_ as k}from"./_commonjsHelpers.9baf49e8.js";import{$ as a}from"./jquery.dbd78d0d.js";k(()=>import("./modulepreload-polyfill.b7f2da20.js"),[]);function u(){let e=limericks,t=_(e.long,3),l=_(e.short,2);return[t[0],t[1],l[0],l[1],t[2]]}function _(e,t){let l=m(e),i=m(l),n=y(i,t),o=[];for(let r in n){let s=Math.floor(Math.random()*n[r].length),c=n[r][s];o.push(c)}return o}function m(e){let t=Object.keys(e),l=t.length,i=Math.floor(Math.random()*l),n=t[i];return e[n]}function y(e,t){let l=Object.keys(e),i=l.slice(0),n=l.length,o,r;for(;n--;)r=Math.floor((n+1)*Math.random()),o=i[r],i[r]=i[n],i[n]=o;let s=i.slice(0,t),c=[];for(let d in s){let h=s[d];c.push(e[h])}return c}let f=function(){let e=a(".limerick-body");e.empty();let t=u();for(let l in t)e.append(t[l]+"<br/>")};a(function(){f(),a("#generate-limericks").click(function(){f()})});
//# sourceMappingURL=limericks.a5dcff9f.js.map