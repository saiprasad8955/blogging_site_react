import{_ as a,h as y,f as P,o as R,g as T,d as W,s as B,m as S,r as b,e as k,y as E,j as M,k as H}from"./index-DHdyDlu3.js";function O(t){return typeof t=="string"}function _(t,e,n){return t===void 0||O(t)?e:a({},e,{ownerState:a({},e.ownerState,n)})}function w(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(o=>o.match(/^on[A-Z]/)&&typeof t[o]=="function"&&!e.includes(o)).forEach(o=>{n[o]=t[o]}),n}function v(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function j(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:o,externalForwardedProps:r,className:s}=t;if(!e){const f=y(n==null?void 0:n.className,s,r==null?void 0:r.className,o==null?void 0:o.className),m=a({},n==null?void 0:n.style,r==null?void 0:r.style,o==null?void 0:o.style),h=a({},n,r,o);return f.length>0&&(h.className=f),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:void 0}}const p=w(a({},r,o)),i=v(o),u=v(r),l=e(p),d=y(l==null?void 0:l.className,n==null?void 0:n.className,s,r==null?void 0:r.className,o==null?void 0:o.className),g=a({},l==null?void 0:l.style,n==null?void 0:n.style,r==null?void 0:r.style,o==null?void 0:o.style),c=a({},l,n,u,i);return d.length>0&&(c.className=d),Object.keys(g).length>0&&(c.style=g),{props:c,internalRef:l.ref}}function U(t,e,n){return typeof t=="function"?t(e,n):t}const $=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function V(t){var e;const{elementType:n,externalSlotProps:o,ownerState:r,skipResolvingSlotProps:s=!1}=t,p=P(t,$),i=s?{}:U(o,r),{props:u,internalRef:l}=j(a({},p,{externalSlotProps:i})),d=R(l,i==null?void 0:i.ref,(e=t.additionalProps)==null?void 0:e.ref);return _(n,a({},u,{ref:d}),r)}function A(t){return T("MuiTypography",t)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const D=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],F=t=>{const{align:e,gutterBottom:n,noWrap:o,paragraph:r,variant:s,classes:p}=t,i={root:["root",s,t.align!=="inherit"&&`align${S(e)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return H(i,A,p)},L=B("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${S(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>a({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=t=>Z[t]||t,q=b.forwardRef(function(e,n){const o=k({props:e,name:"MuiTypography"}),r=z(o.color),s=E(a({},o,{color:r})),{align:p="inherit",className:i,component:u,gutterBottom:l=!1,noWrap:d=!1,paragraph:g=!1,variant:c="body1",variantMapping:f=x}=s,m=P(s,D),h=a({},s,{align:p,color:r,className:i,component:u,gutterBottom:l,noWrap:d,paragraph:g,variant:c,variantMapping:f}),C=u||(g?"p":f[c]||x[c])||"span",N=F(h);return M.jsx(L,a({as:C,ref:n,ownerState:h,className:y(N.root,i)},m))});export{q as T,_ as a,w as e,O as i,j as m,U as r,V as u};
