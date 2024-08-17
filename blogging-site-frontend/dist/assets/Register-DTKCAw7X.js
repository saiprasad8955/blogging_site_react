import{g as M,d as N,s as C,_ as d,r as u,e as L,f as q,j as r,h as $,k as z,l as T,m as I,n as W,o as A,u as D,a as H,b as Z,R as J,I as K,c as Q,L as X}from"./index-BAqBkSAZ.js";import{S as Y,c as ee,a as v,u as oe,C as w,F,o as re}from"./yup-eKgwrxKk.js";import{u as se,f as te,F as ae,a as ne,b as ie,T as y,L as le}from"./LoadingButton-B5wJkGza.js";import{c as U,a as ce,u as ue,b as de}from"./createSvgIcon-CL3AUfST.js";import{I as me}from"./InputAdornment-Bprjuc7I.js";import"./CircularProgress-Dg9QG7AJ.js";import"./Button-dVuWy5wV.js";function pe(e){return M("MuiFormGroup",e)}N("MuiFormGroup",["root","row","error"]);const fe=["className","row"],xe=e=>{const{classes:o,row:s,error:t}=e;return z({root:["root",s&&"row",t&&"error"]},pe,o)},he=C("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.row&&o.row]}})(({ownerState:e})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),ge=u.forwardRef(function(o,s){const t=L({props:o,name:"MuiFormGroup"}),{className:i,row:l=!1}=t,x=q(t,fe),a=se(),m=te({props:t,muiFormControl:a,states:["error"]}),p=d({},t,{row:l,error:m.error}),h=xe(p);return r.jsx(he,d({className:$(h.root,i),ownerState:p,ref:s},x))}),Re=U(r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),ve=U(r.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),we=C("span",{shouldForwardProp:T})({position:"relative",display:"flex"}),Ce=C(Re)({transform:"scale(1)"}),be=C(ve)(({theme:e,ownerState:o})=>d({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function V(e){const{checked:o=!1,classes:s={},fontSize:t}=e,i=d({},e,{checked:o});return r.jsxs(we,{className:s.root,ownerState:i,children:[r.jsx(Ce,{fontSize:t,className:s.background,ownerState:i}),r.jsx(be,{fontSize:t,className:s.dot,ownerState:i})]})}const _=u.createContext(void 0);function je(){return u.useContext(_)}function ke(e){return M("MuiRadio",e)}const G=N("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),ye=["checked","checkedIcon","color","icon","name","onChange","size","className"],Ie=e=>{const{classes:o,color:s,size:t}=e,i={root:["root",`color${I(s)}`,t!=="medium"&&`size${I(t)}`]};return d({},o,z(i,ke,o))},Se=C(Y,{shouldForwardProp:e=>T(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.size!=="medium"&&o[`size${I(s.size)}`],o[`color${I(s.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:W(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${G.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${G.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Fe(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const B=r.jsx(V,{checked:!0}),E=r.jsx(V,{}),P=u.forwardRef(function(o,s){var t,i;const l=L({props:o,name:"MuiRadio"}),{checked:x,checkedIcon:a=B,color:m="primary",icon:p=E,name:h,onChange:n,size:f="medium",className:b}=l,j=q(l,ye),k=d({},l,{color:m,size:f}),R=Ie(k),g=je();let c=x;const O=ce(n,g&&g.onChange);let S=h;return g&&(typeof c>"u"&&(c=Fe(g.value,l.value)),typeof S>"u"&&(S=g.name)),r.jsx(Se,d({type:"radio",icon:u.cloneElement(p,{fontSize:(t=E.props.fontSize)!=null?t:f}),checkedIcon:u.cloneElement(a,{fontSize:(i=B.props.fontSize)!=null?i:f}),ownerState:k,classes:R,name:S,checked:c,onChange:O,ref:s,className:$(R.root,b)},j))});function Pe(e){return M("MuiRadioGroup",e)}N("MuiRadioGroup",["root","row","error"]);const Me=["actions","children","className","defaultValue","name","onChange","value"],Ne=e=>{const{classes:o,row:s,error:t}=e;return z({root:["root",s&&"row",t&&"error"]},Pe,o)},qe=u.forwardRef(function(o,s){const{actions:t,children:i,className:l,defaultValue:x,name:a,onChange:m,value:p}=o,h=q(o,Me),n=u.useRef(null),f=Ne(o),[b,j]=ue({controlled:p,default:x,name:"RadioGroup"});u.useImperativeHandle(t,()=>({focus:()=>{let c=n.current.querySelector("input:not(:disabled):checked");c||(c=n.current.querySelector("input:not(:disabled)")),c&&c.focus()}}),[]);const k=A(s,n),R=de(a),g=u.useMemo(()=>({name:R,onChange(c){j(c.target.value),m&&m(c,c.target.value)},value:b}),[R,m,j,b]);return r.jsx(_.Provider,{value:g,children:r.jsx(ge,d({role:"radiogroup",ref:k,className:$(f.root,l)},h,{children:i}))})}),$e="/assets/register-B7TI7Lxx.jpg",ze=ee().shape({title:v().required("Title is required!"),firstname:v().required("First name is required!"),lastname:v().required("Last name is required!"),email:v().email("Email is not valid!").required("Email is required!"),password:v().matches(/^(?=.*[A-Z])/,"Password must include at least one uppercase letter.").matches(/^(?=.*[a-z])/,"Password must include at least one lowercase letter.").matches(/^(?=.*\d)/,"Password must include at least one number.").matches(/^(?=.*[@$!%*?&])/,"Password must include at least one special character.").min(8,"Password must be at least 8 characters long.").required("Password is required!")}),_e=()=>{const{register:e}=D(),o=H(),{enqueueSnackbar:s}=Z(),[t,i]=J.useState(!1),{control:l,handleSubmit:x,formState:{errors:a,isSubmitting:m}}=oe({resolver:re(ze),defaultValues:{title:"",firstname:"",lastname:"",email:"",password:""}}),p=()=>{i(!t)},h=async n=>{try{await e(n),s("Registration successful!"),o("/blog")}catch(f){console.log("🚀 ~ onSubmit ~ err:",f),s(f.error||"Something went wrong!",{variant:"error"})}};return r.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundImage:`url(${$e})`,backgroundSize:"cover",backgroundPosition:"center"},children:r.jsxs("div",{className:"w-full max-w-md bg-white rounded-lg shadow-lg p-8",children:[r.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-6",children:"REGISTER"}),r.jsxs("form",{onSubmit:x(h),className:"space-y-4",children:[r.jsxs(ae,{component:"fieldset",error:!!a.title,fullWidth:!0,required:!0,children:[r.jsx(ne,{component:"legend",children:"Title"}),r.jsx(w,{name:"title",control:l,render:({field:n})=>r.jsxs(qe,{row:!0,"aria-label":"title",...n,children:[r.jsx(F,{value:"Mr",control:r.jsx(P,{}),label:"Mr."}),r.jsx(F,{value:"Mrs",control:r.jsx(P,{}),label:"Mrs."}),r.jsx(F,{value:"Miss",control:r.jsx(P,{}),label:"Miss"})]})}),a.title&&r.jsx(ie,{children:a.title.message})]}),r.jsx(w,{name:"firstname",control:l,render:({field:n})=>r.jsx(y,{required:!0,label:"First Name",sx:{"& .MuiOutlinedInput-root":{borderRadius:"12px"}},fullWidth:!0,variant:"outlined",...n,error:!!a.firstname,helperText:a.firstname?a.firstname.message:null})}),r.jsx(w,{name:"lastname",control:l,render:({field:n})=>r.jsx(y,{required:!0,label:"Last Name",sx:{"& .MuiOutlinedInput-root":{borderRadius:"12px"}},fullWidth:!0,variant:"outlined",...n,error:!!a.lastname,helperText:a.lastname?a.lastname.message:null})}),r.jsx(w,{name:"email",control:l,render:({field:n})=>r.jsx(y,{required:!0,label:"Email",sx:{"& .MuiOutlinedInput-root":{borderRadius:"12px"}},fullWidth:!0,variant:"outlined",...n,error:!!a.email,helperText:a.email?a.email.message:null})}),r.jsx(w,{name:"password",control:l,render:({field:n})=>r.jsx(y,{required:!0,label:"Password",sx:{"& .MuiOutlinedInput-root":{borderRadius:"12px"}},fullWidth:!0,type:t?"text":"password",variant:"outlined",...n,error:!!a.password,helperText:a.password?a.password.message:null,InputProps:{endAdornment:r.jsx(me,{position:"end",children:r.jsx(K,{onClick:p,edge:"end",children:r.jsx(Q,{icon:t?"solar:eye-bold":"solar:eye-closed-bold"})})})}})}),r.jsx(le,{type:"submit",variant:"outlined",loading:m,className:"w-full",children:"Register"})]}),r.jsxs("p",{className:"text-center text-gray-600 mt-6",children:["Already have an account?"," ",r.jsx(X,{to:"/auth/login",className:"text-blue-600 hover:underline",children:"Login"})]})]})})};export{_e as default};
