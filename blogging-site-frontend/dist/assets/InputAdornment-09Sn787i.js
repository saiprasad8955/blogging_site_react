import{d as y,g as C,s as I,_ as c,r as f,e as A,f as j,j as a,h as L,m,k as z}from"./index-DHdyDlu3.js";import{u as R,c as T}from"./LoadingButton-B4qyUBYv.js";import{T as _}from"./Typography-DdDW4wBC.js";function $(e){return C("MuiInputAdornment",e)}const b=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const F=["children","className","component","disablePointerEvents","disableTypography","position","variant"],M=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${m(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},N=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:o,position:s,size:r,variant:l}=e,d={root:["root",n&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return z(d,$,t)},U=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:M})(({theme:e,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${b.positionStart}&:not(.${b.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),D=f.forwardRef(function(t,n){const o=A({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:v}=o,E=j(o,F),i=R()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),P=N(h);return a.jsx(T.Provider,{value:null,children:a.jsx(U,c({as:l,ownerState:h,className:L(P.root,r),ref:n},E,{children:typeof s=="string"&&!x?a.jsx(_,{color:"text.secondary",children:s}):a.jsxs(f.Fragment,{children:[u==="start"?g||(g=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});export{D as I};
