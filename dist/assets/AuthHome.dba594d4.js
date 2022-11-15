import{r as i,n as c,b as p,c as b,f as a,w as s,e,W as r,v as m,N as w,h as _,q as k,g as f,B as U,F as N,X as I,M as B,p as F,S as R,a as d}from"./index.cdbfdf51.js";import{_ as S}from"./AlertMessage.06ae2210.js";const C={__name:"SignIn",setup(v){const n=i({email:"my_email3@email.com",password:"123123"}),u=i(null),o=c();return(g,l)=>(p(),b(N,null,[a(e(k),{class:"form-container",ref_key:"formRef",ref:u,model:n.value,size:"medium"},{default:s(()=>[a(e(r),{label:"Email"},{default:s(()=>[a(e(m),{value:n.value.email,"onUpdate:value":l[0]||(l[0]=t=>n.value.email=t),placeholder:"Input"},null,8,["value"])]),_:1}),a(e(r),{label:"Password"},{default:s(()=>[a(e(m),{value:n.value.password,"onUpdate:value":l[1]||(l[1]=t=>n.value.password=t),type:"password",placeholder:"****","show-password-on":"click"},null,8,["value"])]),_:1}),a(e(w),{disabled:e(o).loading,loading:e(o).loading,type:"primary",block:"",secondary:"",strong:"",onClick:l[2]||(l[2]=t=>e(o).signInFirebase(n.value))},{default:s(()=>[_(" Sign In ")]),_:1},8,["disabled","loading"])]),_:1},8,["model"]),e(o).error.status?(p(),f(S,{key:0,message:e(o).error},null,8,["message"])):U("",!0)],64))}},$={__name:"SignUp",setup(v){const n=i({email:"my_email3@email.com",password:"123123",username:"secret_user",terms:!0}),u=i(null),o=c();return(g,l)=>(p(),b(N,null,[a(e(k),{class:"form-container",ref_key:"formRef",ref:u,model:n.value,size:"medium"},{default:s(()=>[a(e(r),{label:"Email"},{default:s(()=>[a(e(m),{value:n.value.email,"onUpdate:value":l[0]||(l[0]=t=>n.value.email=t),placeholder:"Email"},null,8,["value"])]),_:1}),a(e(r),{label:"Password"},{default:s(()=>[a(e(m),{value:n.value.password,"onUpdate:value":l[1]||(l[1]=t=>n.value.password=t),type:"password",placeholder:"****","show-password-on":"click"},null,8,["value"])]),_:1}),a(e(r),{label:"Username"},{default:s(()=>[a(e(m),{value:n.value.username,"onUpdate:value":l[2]||(l[2]=t=>n.value.username=t),placeholder:"Username"},null,8,["value"])]),_:1}),a(e(r),{label:"Terms"},{default:s(()=>[a(e(I),{size:"small",value:n.value.terms,"onUpdate:value":l[3]||(l[3]=t=>n.value.terms=t),style:{padding:"0 1rem 0 0"}},null,8,["value"]),a(e(B),{depth:"3",style:{"font-size":"0.7rem"}},{default:s(()=>[_("By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy. ")]),_:1})]),_:1}),a(e(w),{disabled:e(o).loading,loading:e(o).loading,type:"primary",block:"",secondary:"",strong:"",onClick:l[4]||(l[4]=t=>e(o).signUpFirebase(n.value))},{default:s(()=>[_(" Sign up ")]),_:1},8,["disabled","loading"])]),_:1},8,["model"]),e(o).error.status?(p(),f(S,{key:0,message:e(o).error},null,8,["message"])):U("",!0)],64))}},P={__name:"AuthHome",setup(v){i(0);const n=c(),u=F();return R(n,o=>{o.isLoggedIn&&u.push("/challenges")}),(o,g)=>{const l=d("n-tab-pane"),t=d("n-tabs"),y=d("n-space"),h=d("n-card"),x=d("n-layout");return p(),f(y,{vertical:""},{default:s(()=>[a(x,null,{default:s(()=>[a(h,{title:"Authentication",style:{"min-height":"90vh"}},{default:s(()=>[a(y,{justify:"center"},{default:s(()=>[a(t,{"default-value":"sign-in",animated:""},{default:s(()=>[a(l,{name:"sign-in",tab:"Sign in"},{default:s(()=>[a(C)]),_:1}),a(l,{name:"signup",tab:"Sign up"},{default:s(()=>[a($)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{P as default};