import{n as U,p as S,r as i,u as k,o as A,a as s,e as a,b as p,g as c,w as n,f as e,q as I,h as _,s as o,v,A as L,x as h,y as P,z as R,N as B,B as F}from"./index.910e6f05.js";import{_ as G}from"./AlertMessage.785e0605.js";const H={__name:"AddChallenge",setup(V){const b=U();S();const w=i(null),r=k(),t=i({question:null,description:null,duration:10,answers:["1","2","3"],difficulty:null,code:"const x = 1;",correct:null}),y=i({question:{required:!0,trigger:["blur"],message:"Please input the question"},description:{required:!0,trigger:["blur"],message:"Please input the description"},language:{required:!0,trigger:["blur"],message:"Please input the language"},correct:{required:!0,trigger:["blur"],message:"Please input the correct answer"},code:{required:!0,trigger:["blur"],message:"Please input the code"}});return A(()=>{}),(z,u)=>{const x=s("n-text"),d=s("n-space"),g=s("n-select"),N=s("n-slider"),q=s("n-code"),C=s("n-grid"),m=s("n-card"),f=s("n-layout");return a(b).isLoggedIn?(p(),c(d,{key:0,vertical:""},{default:n(()=>[e(f,null,{default:n(()=>[e(m,{title:"Add New Challenge"},{default:n(()=>[e(a(I),{class:"form-admin",ref_key:"formRef",ref:w,model:t.value,"label-placement":"top",rules:y.value},{default:n(()=>[e(d,{vertical:"",style:{"margin-bottom":"2rem"}},{default:n(()=>[e(x,{type:"warning"},{default:n(()=>[_(" Fill in the data to create a new challenge")]),_:1})]),_:1}),e(C,{span:24,"x-gap":24},{default:n(()=>[e(a(o),{span:12,label:"Question",path:"question"},{default:n(()=>[e(a(v),{value:t.value.question,"onUpdate:value":u[0]||(u[0]=l=>t.value.question=l),placeholder:"Challenge question."},null,8,["value"])]),_:1}),e(a(o),{span:12,label:"Description",path:"description"},{default:n(()=>[e(a(v),{value:t.value.description,"onUpdate:value":u[1]||(u[1]=l=>t.value.description=l),placeholder:"What is the input type of the algorithm."},null,8,["value"])]),_:1}),e(a(o),{span:12,label:"Select the language",path:"language"},{default:n(()=>[e(g,{value:t.value.language,"onUpdate:value":u[2]||(u[2]=l=>t.value.language=l),placeholder:"Select the Language",options:a(L).map(l=>({label:l.name,value:l.name}))},null,8,["value","options"])]),_:1}),e(a(o),{span:12,label:"Select the difficulty (min=1, max=10)",path:"difficulty"},{default:n(()=>[e(a(h),{"default-value":1,min:1,max:10,style:{width:"100%"},value:t.value.difficulty,"onUpdate:value":u[3]||(u[3]=l=>t.value.difficulty=l),clearable:""},null,8,["value"])]),_:1}),e(a(o),{span:12,label:"How long will the challenge last",path:"duration"},{default:n(()=>[e(d,{min:10,max:999,vertical:"",style:{width:"100%"}},{default:n(()=>[e(N,{value:t.value.duration,"onUpdate:value":u[4]||(u[4]=l=>t.value.duration=l),step:1},null,8,["value"]),e(a(h),{"default-value":10,min:10,max:100,value:t.value.duration,"onUpdate:value":u[5]||(u[5]=l=>t.value.duration=l)},null,8,["value"])]),_:1})]),_:1}),e(a(o),{span:12,label:"Select the right answer",path:"correct"},{default:n(()=>[e(g,{value:t.value.correct,"onUpdate:value":u[6]||(u[6]=l=>t.value.correct=l),placeholder:"Select the Language",options:t.value.answers.map(l=>({label:l,value:l}))},null,8,["value","options"])]),_:1}),e(a(o),{span:12,label:"Add the alternatives here",path:"answers"},{default:n(()=>[e(a(P),{value:t.value.answers,"onUpdate:value":u[7]||(u[7]=l=>t.value.answers=l),placeholder:"Please type here",min:3,max:5},null,8,["value"])]),_:1}),e(a(o),{span:12,label:"Insert the code here",path:"code"},{default:n(()=>[e(a(v),{value:t.value.code,"onUpdate:value":u[8]||(u[8]=l=>t.value.code=l),placeholder:"Insert the code here .....",type:"textarea",autosize:{minRows:4,maxRows:20}},null,8,["value"])]),_:1}),e(a(o),{span:24,label:"Code Live Preview",path:"liveCode"},{default:n(()=>[e(d,{style:{overflow:"auto",width:"100%"},class:"code-container",s:""},{default:n(()=>[e(q,{class:"code",code:t.value.code,language:t.value.language},null,8,["code","language"])]),_:1})]),_:1}),e(a(R),{span:24},{default:n(()=>[e(a(B),{disabled:a(r).loading,loading:a(r).loading,type:"primary",strong:"",onClick:u[9]||(u[9]=l=>a(r)._postNewChallenge(t.value))},{default:n(()=>[_(" Add new Challenge ")]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),a(r).error.status?(p(),c(G,{key:0,message:a(r).error},null,8,["message"])):F("",!0)]),_:1})]),_:1})]),_:1})):(p(),c(d,{key:1,vertical:""},{default:n(()=>[e(f,null,{default:n(()=>[e(m,{title:"You must have permission to access this page"})]),_:1})]),_:1}))}}};export{H as default};
