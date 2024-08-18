import{j as a,d as _,g as q,s as F,l as Y,m as I,_ as f,n as ee,r as b,e as U,f as K,h as A,k as H,y as te,z as P,A as M,B as oe,b as re,a as se,x as T,v as E}from"./index-DHdyDlu3.js";import{S as ne,c as ie,a as k,u as ae,C as D,F as ce,o as le}from"./yup-UNGvYt9Y.js";import{C as ue}from"./custom-breadcrumbs-B_aJ8Kc6.js";import{u as de}from"./Modal-DLq5pqQc.js";import{c as W}from"./createSvgIcon-Cpc0-o0B.js";import{L as pe,T as me}from"./LoadingButton-B4qyUBYv.js";import"./useControlled-7reWmhn_.js";import"./Typography-DdDW4wBC.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-C_tGqz7b.js";import"./Popover-CBOAH3aF.js";import"./Button-BKsD_Tdd.js";const xe=W(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),fe=W(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ge=W(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function he(e){return q("MuiCheckbox",e)}const N=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),be=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ve=e=>{const{classes:t,indeterminate:s,color:o,size:r}=e,n={root:["root",s&&"indeterminate",`color${I(o)}`,`size${I(r)}`]},c=H(n,he,t);return f({},t,c)},ye=F(ne,{shouldForwardProp:e=>Y(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.indeterminate&&t.indeterminate,t[`size${I(s.size)}`],s.color!=="default"&&t[`color${I(s.color)}`]]}})(({theme:e,ownerState:t})=>f({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ee(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${N.checked}, &.${N.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${N.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ke=a.jsx(fe,{}),$e=a.jsx(xe,{}),Ce=a.jsx(ge,{}),Se=b.forwardRef(function(t,s){var o,r;const n=U({props:t,name:"MuiCheckbox"}),{checkedIcon:c=ke,color:l="primary",icon:d=$e,indeterminate:u=!1,indeterminateIcon:i=Ce,inputProps:m,size:p="medium",className:x}=n,y=K(n,be),j=u?i:d,w=u?i:c,h=f({},n,{color:l,indeterminate:u,size:p}),B=ve(h);return a.jsx(ye,f({type:"checkbox",inputProps:f({"data-indeterminate":u},m),icon:b.cloneElement(j,{fontSize:(o=j.props.fontSize)!=null?o:p}),checkedIcon:b.cloneElement(w,{fontSize:(r=w.props.fontSize)!=null?r:p}),ownerState:h,ref:s,className:A(B.root,x)},y,{classes:B}))}),L=b.createContext();function je(e){return q("MuiGrid",e)}const we=[0,1,2,3,4,5,6,7,8,9,10],Be=["column-reverse","column","row-reverse","row"],ze=["nowrap","wrap-reverse","wrap"],$=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=_("MuiGrid",["root","container","item","zeroMinWidth",...we.map(e=>`spacing-xs-${e}`),...Be.map(e=>`direction-xs-${e}`),...ze.map(e=>`wrap-xs-${e}`),...$.map(e=>`grid-xs-${e}`),...$.map(e=>`grid-sm-${e}`),...$.map(e=>`grid-md-${e}`),...$.map(e=>`grid-lg-${e}`),...$.map(e=>`grid-xl-${e}`)]),Ie=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function Pe({theme:e,ownerState:t}){let s;return e.breakpoints.keys.reduce((o,r)=>{let n={};if(t[r]&&(s=t[r]),!s)return o;if(s===!0)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(s==="auto")n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=P({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof c=="object"?c[r]:c;if(l==null)return o;const d=`${Math.round(s/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const i=e.spacing(t.columnSpacing);if(i!=="0px"){const m=`calc(${d} + ${v(i)})`;u={flexBasis:m,maxWidth:m}}}n=f({flexBasis:d,flexGrow:0,maxWidth:d},u)}return e.breakpoints.values[r]===0?Object.assign(o,n):o[e.breakpoints.up(r)]=n,o},{})}function Ne({theme:e,ownerState:t}){const s=P({values:t.direction,breakpoints:e.breakpoints.values});return M({theme:e},s,o=>{const r={flexDirection:o};return o.indexOf("column")===0&&(r[`& > .${S.item}`]={maxWidth:"none"}),r})}function Z({breakpoints:e,values:t}){let s="";Object.keys(t).forEach(r=>{s===""&&t[r]!==0&&(s=r)});const o=Object.keys(e).sort((r,n)=>e[r]-e[n]);return o.slice(0,o.indexOf(s))}function Me({theme:e,ownerState:t}){const{container:s,rowSpacing:o}=t;let r={};if(s&&o!==0){const n=P({values:o,breakpoints:e.breakpoints.values});let c;typeof n=="object"&&(c=Z({breakpoints:e.breakpoints.values,values:n})),r=M({theme:e},n,(l,d)=>{var u;const i=e.spacing(l);return i!=="0px"?{marginTop:`-${v(i)}`,[`& > .${S.item}`]:{paddingTop:v(i)}}:(u=c)!=null&&u.includes(d)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}})}return r}function We({theme:e,ownerState:t}){const{container:s,columnSpacing:o}=t;let r={};if(s&&o!==0){const n=P({values:o,breakpoints:e.breakpoints.values});let c;typeof n=="object"&&(c=Z({breakpoints:e.breakpoints.values,values:n})),r=M({theme:e},n,(l,d)=>{var u;const i=e.spacing(l);return i!=="0px"?{width:`calc(100% + ${v(i)})`,marginLeft:`-${v(i)}`,[`& > .${S.item}`]:{paddingLeft:v(i)}}:(u=c)!=null&&u.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}})}return r}function Ge(e,t,s={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[s[`spacing-xs-${String(e)}`]];const o=[];return t.forEach(r=>{const n=e[r];Number(n)>0&&o.push(s[`spacing-${r}-${String(n)}`])}),o}const Ve=F("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{container:o,direction:r,item:n,spacing:c,wrap:l,zeroMinWidth:d,breakpoints:u}=s;let i=[];o&&(i=Ge(c,u,t));const m=[];return u.forEach(p=>{const x=s[p];x&&m.push(t[`grid-${p}-${String(x)}`])}),[t.root,o&&t.container,n&&t.item,d&&t.zeroMinWidth,...i,r!=="row"&&t[`direction-xs-${String(r)}`],l!=="wrap"&&t[`wrap-xs-${String(l)}`],...m]}})(({ownerState:e})=>f({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Ne,Me,We,Pe);function Re(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const s=[];return t.forEach(o=>{const r=e[o];if(Number(r)>0){const n=`spacing-${o}-${String(r)}`;s.push(n)}}),s}const Oe=e=>{const{classes:t,container:s,direction:o,item:r,spacing:n,wrap:c,zeroMinWidth:l,breakpoints:d}=e;let u=[];s&&(u=Re(n,d));const i=[];d.forEach(p=>{const x=e[p];x&&i.push(`grid-${p}-${String(x)}`)});const m={root:["root",s&&"container",r&&"item",l&&"zeroMinWidth",...u,o!=="row"&&`direction-xs-${String(o)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...i]};return H(m,je,t)},g=b.forwardRef(function(t,s){const o=U({props:t,name:"MuiGrid"}),{breakpoints:r}=de(),n=te(o),{className:c,columns:l,columnSpacing:d,component:u="div",container:i=!1,direction:m="row",item:p=!1,rowSpacing:x,spacing:y=0,wrap:j="wrap",zeroMinWidth:w=!1}=n,h=K(n,Ie),B=x||y,J=d||y,Q=b.useContext(L),G=i?l||12:Q,V={},R=f({},h);r.keys.forEach(z=>{h[z]!=null&&(V[z]=h[z],delete R[z])});const O=f({},n,{columns:G,container:i,direction:m,item:p,rowSpacing:B,columnSpacing:J,wrap:j,zeroMinWidth:w,spacing:y},V,{breakpoints:r.keys}),X=Oe(O);return a.jsx(L.Provider,{value:G,children:a.jsx(Ve,f({ownerState:O,className:A(X.root,c),as:u,ref:s},R))})}),Te=ie().shape({title:k().required("Title is required"),tags:k(),category:k().required("Category is required"),subcategory:k(),body:k().required("Body is required")}),C=({name:e,control:t,label:s,defaultValue:o,...r})=>a.jsx(D,{name:e,control:t,defaultValue:o,render:({field:n,fieldState:{error:c}})=>a.jsx(me,{...n,sx:{"& .MuiOutlinedInput-root":{borderRadius:"12px"}},label:s,fullWidth:!0,error:!!c,helperText:c?c.message:"",...r})}),Qe=()=>{const{state:e}=oe(),{enqueueSnackbar:t}=re(),s=se();let o,r;e?(r=e._id,o="edit"):o="add";const n={title:e?e.title:"",tags:e?e.tags.join(","):"",category:e?e.category:"",subcategory:e?e.subcategory.join(","):"",body:e?e.body:"",isPublished:e?e.isPublished:!1},{handleSubmit:c,control:l,formState:{isSubmitting:d}}=ae({resolver:le(Te),defaultValues:n}),u=async i=>{const m=o==="add"?E.blog.add:`${E.blog.update}/${r}`;try{const p={title:i.title,tags:i.tags.split(","),category:i.category,subcategory:i.subcategory.split(","),body:i.body,isPublished:i.isPublished};(o==="add"?await T.post(m,p):await T.put(m,p)).data.status&&(t(o==="add"?"Blog added successfully!":"Blog updated successfully!"),s("/blog"))}catch(p){t(p.error||"Something went wrong!",{variant:"error"})}};return a.jsxs("div",{className:"h-screen",children:[a.jsx("div",{className:"blog-page-header ",children:a.jsx(ue,{heading:o==="add"?"Create Blog":"Update Blog",links:[{name:"Home",href:"/home"},{name:"Blog",href:"/blog"},{name:o==="add"?"Create":"Update"}],sx:{mb:{xs:3,md:5}}})}),a.jsxs(g,{className:"blog-form flex items-center",spacing:2,sx:{mt:3},container:!0,children:[a.jsx(g,{item:!0,xs:12,md:6,children:a.jsx(C,{name:"title",control:l,label:"Title",required:!0})}),a.jsx(g,{item:!0,xs:12,md:6,children:a.jsx(C,{name:"tags",control:l,label:"Tags"})}),a.jsx(g,{item:!0,xs:12,md:6,children:a.jsx(C,{name:"category",control:l,label:"Category",required:!0})}),a.jsx(g,{item:!0,xs:12,md:6,children:a.jsx(C,{name:"subcategory",control:l,label:"Subcategory"})}),a.jsx(g,{item:!0,xs:12,children:a.jsx(C,{name:"body",required:!0,control:l,label:"Body",multiline:!0,rows:6})}),a.jsx(g,{item:!0,xs:12,md:12,lg:12,children:a.jsx(D,{name:"isPublished",control:l,defaultValue:n.isPublished,render:({field:i})=>a.jsx(ce,{control:a.jsx(Se,{...i,checked:i.value,color:"primary"}),label:"Do you want to publish this blog?"})})}),a.jsx(g,{item:!0,xs:12,sx:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:a.jsx(pe,{fullWidth:!0,color:"success",onClick:c(u),variant:"contained",sx:{borderRadius:"10px",width:"150px"},loading:d,children:o==="add"?"ADD BLOG":"UPDATE BLOG"})})]})]})};export{Qe as default};