import{g as S,d as L,q as N,s as P,_ as u,t as U,v as g,r as D,e as M,f as I,j as e,h as A,k as E,i as _,u as z,a as O,w as T,x as q,L as H,I as v}from"./index-BAqBkSAZ.js";import{u as X,C as V,d as W,a as F}from"./Cancel-D_DmAh7R.js";import{r as k}from"./createSvgIcon-CHOX59dG.js";import{B as K,C as G}from"./CircularProgress-Dg9QG7AJ.js";import{B as J}from"./Button-dVuWy5wV.js";import"./createSvgIcon-CL3AUfST.js";function Q(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Y(t){return parseFloat(t)}function Z(t){return S("MuiSkeleton",t)}L("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ee=["animation","className","component","height","style","variant","width"];let x=t=>t,j,y,C,w;const te=t=>{const{classes:a,variant:r,animation:i,hasChildren:o,width:n,height:d}=t;return E({root:["root",r,i,o&&"withChildren",o&&!n&&"fitContent",o&&!d&&"heightAuto"]},Z,a)},ae=N(j||(j=x`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),se=N(y||(y=x`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),re=P("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const r=Q(t.shape.borderRadius)||"px",i=Y(t.shape.borderRadius);return u({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:U(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(C||(C=x`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),ae),({ownerState:t,theme:a})=>t.animation==="wave"&&g(w||(w=x`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),se,(a.vars||a).palette.action.hover)),ie=D.forwardRef(function(a,r){const i=M({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:d="span",height:c,style:p,variant:h="text",width:s}=i,l=I(i,ee),f=u({},i,{animation:o,component:d,variant:h,hasChildren:!!l.children}),B=te(f);return e.jsx(re,u({as:d,ref:r,className:A(B.root,n),ownerState:f},l,{style:u({width:s,height:c},p)}))});var m={},oe=_;Object.defineProperty(m,"__esModule",{value:!0});var R=m.default=void 0,ne=oe(k()),le=e;R=m.default=(0,ne.default)((0,le.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");var b={},de=_;Object.defineProperty(b,"__esModule",{value:!0});var $=b.default=void 0,ce=de(k()),he=e;$=b.default=(0,ce.default)((0,he.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const ge=()=>{let{user:t}=z();const a=O(),r=`${T.blog.list}?authorId=${t==null?void 0:t._id}`,{data:i,isLoading:o}=X(r,q),n=o===!1?i.data:[],d=()=>{a("/blog/add")},c=()=>{},p=s=>{console.log("🚀 ~ handleUpdate ~ blog:",s),a("/blog/update",{state:s})},h=({text:s,maxLength:l})=>s.length>l?`${s.substring(0,l)}...`:s;return e.jsxs("div",{children:[e.jsx(K,{sx:{color:"#fff",zIndex:s=>s.zIndex.drawer+1},open:o,children:e.jsx(G,{color:"inherit"})}),e.jsxs("div",{className:"Heading mx-12 flex justify-between items-center",children:[e.jsx("h1",{className:" m-2 p-2  text-slate-800 font-extrabold text-6xl",children:"Blog List"}),e.jsx("div",{children:e.jsx(J,{variant:"contained",onClick:d,sx:{borderRadius:"10px"},color:"success",children:"Add Blog"})})]}),n.length&&e.jsx("div",{className:"p-4 my-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800",children:e.jsxs("p",{className:"font-medium text-lg",children:["NOTE: ",e.jsx("span",{className:"font-semibold",children:"Click on the title to view blog."})]})}),e.jsx("div",{className:" p-10 m-2  border-amber-500",children:o?e.jsx(ie,{animation:"wave",variant:"rectangular",style:{width:"100%",height:"200px"}}):e.jsxs("table",{className:"table-auto text-left border-collapse bg-white shadow-md w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-200 text-gray-700 uppercase text-sm",children:[e.jsx("th",{className:"px-4 py-2 border-b",children:"#"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Title"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Body"}),e.jsx("th",{className:"px-4 py-2 border-b text-center",children:"Category"}),e.jsx("th",{className:"px-4 py-2 border-b text-center",children:"Status"}),e.jsx("th",{className:"px-4 py-2 border-b",children:"Actions"})]})}),e.jsx("tbody",{children:n.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:"text-center py-4 text-gray-600",children:"No blogs available! Please click on ADD BLOG to create."})}):n.map((s,l)=>e.jsxs("tr",{className:"hover:bg-gray-100",children:[e.jsx("td",{className:"px-4 py-2 border-b",children:l+1}),e.jsx("td",{className:"px-4 py-2 border-b font-bold hover:text-blue-400 hover:cursor-pointer",children:e.jsx(H,{to:`/blog/${s._id}`,children:s.title})}),e.jsx("td",{className:"px-4 py-2 border-b",children:e.jsx(h,{text:s.body,maxLength:30})}),e.jsx("td",{className:"px-4 py-2 border-b text-center",children:e.jsx(h,{text:s.category,maxLength:30})}),e.jsx("td",{className:"px-4 py-2 border-b text-center",children:e.jsx(V,{label:s.isPublished?"PUBLISHED":"NOT PUBLISHED",color:s.isPublished?"success":"error",icon:s.isPublished?e.jsx(W,{style:{color:"white"}}):e.jsx(F,{style:{color:"white"}}),className:`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-bold shadow-md ${s.isPublished?"bg-green-500":"bg-red-500"}`})}),e.jsxs("td",{className:"px-4 py-2 border-b",children:[e.jsx(v,{onClick:()=>p(s),color:"success",children:e.jsx(R,{})}),e.jsx(v,{onClick:()=>c(s._id),color:"error",children:e.jsx($,{})})]})]},s._id))})]})})]})};export{ge as default};
