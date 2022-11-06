import{b as u,g as r,w as n,f as l,e as a,K as x,h as y,t as w,I as B,r as g,a as b,p as P,c as S,F as U,d as $,L as q,M as D,N,u as I,n as T,O as V,P as A,o as L,Q as R,B as E}from"./index.910e6f05.js";import{_ as F}from"./AlertMessage.785e0605.js";const z={__name:"ChallengeHeader",props:["id","question","difficulty","language","timer"],setup(t){return(e,i)=>(u(),r(a(B),{style:{padding:"2rem 0"}},{default:n(()=>[l(a(x),{depth:"3"},{default:n(()=>[y("ID # "+w(t.id),1)]),_:1}),l(a(x),{type:"warning"},{default:n(()=>{var s;return[y("Difficulty # "+w((s=t.difficulty)!=null?s:0),1)]}),_:1}),l(a(x),{type:"error"},{default:n(()=>[y("Timer # "+w(t.timer?t.timer:0)+" tenth of a second",1)]),_:1})]),_:1}))}},M={__name:"ChallengeCode",props:{language:String,code:String},setup(t){return g(0),(e,i)=>{const s=b("n-code"),m=b("n-space");return u(),r(m,{class:"code-container"},{default:n(()=>[l(s,{class:"code",code:t.code,language:t.language},null,8,["code","language"])]),_:1})}}},O={__name:"ChallengeForm",props:["alternatives","isPlaying"],emits:["event"],setup(t,{emit:e}){const i=P(),s=g(null),m=g(!1),o=g({alternative:""}),c=v=>s.value=v.target.value,f=v=>{m.value=!0,e("event",o)};return(v,h)=>{const C=b("n-button-group");return u(),r(a(B),{vertical:"",style:{margin:"1rem 0"}},{default:n(()=>[(u(!0),S(U,null,$(t.alternatives,(d,_)=>(u(),r(a(q),{key:_,disabled:!t.isPlaying,value:o.value.alternative,"onUpdate:value":p=>o.value.alternative=p,class:"challenge-alternatives"},{default:n(()=>[l(a(D),{class:"challenge-alternative",checked:s.value===d,value:d,name:"form-alternatives",onChange:c},{default:n(()=>[y(w(d),1)]),_:2},1032,["checked","value"])]),_:2},1032,["disabled","value","onUpdate:value"]))),128)),l(C,{style:{display:"flex","justify-content":"space-between","margin-top":"1rem"}},{default:n(()=>[l(a(N),{size:"large",disabled:m.value||!t.isPlaying,type:"primary",onClick:h[0]||(h[0]=d=>f(o.value))},{default:n(()=>[y(" SAVE ")]),_:1},8,["disabled"]),l(a(N),{disabled:t.isPlaying,size:"large",onClick:h[1]||(h[1]=()=>a(i).go(-1))},{default:n(()=>[y("Back")]),_:1},8,["disabled"])]),_:1})]),_:1})}}},G={__name:"ChallengeById",setup(t){const e=I(),i=T(),s=V(),m=P(),o=g(!0),c=g(10),f=g({type:"",message:""}),v=()=>{c.value>0&&e.challenge&&o.value?setTimeout(()=>{c.value--,v()},1e3):c.value<=0&&(o.value=!1,c.value=0,f.value={type:"error",message:"The time is over."})};A(e,C=>{}),L(()=>{s.params&&e._getChallengeById(s.params.cid),i.isLoggedIn||m.push("/auth"),c.value=e.challenge.duration,v()}),R(()=>{e.resetChallenge()});const h=C=>{o.value=!1;const d=C.value,_=c.value,p=d.alternative===e.challenge.correct,k={uid:i.user.uid,cid:e.challenge.id,correct:p,points:p?_*e.challenge.difficulty:0};f.value={type:k.correct?"success":"error",message:k.correct?`Congratulations, you got the answer right. You got ${k.points} points.`:"Sorry but the answer is incorrect. You got 0 points"},i.saveUserAnswer(k)};return(C,d)=>{const _=b("n-card"),p=b("n-space");return u(),r(p,{vertical:""},{default:n(()=>[a(e).challenge?(u(),r(_,{key:0,title:a(e).challenge.question},{default:n(()=>[l(z,{id:a(e).challenge.id,question:a(e).challenge.question,difficulty:a(e).challenge.difficulty,timer:c.value},null,8,["id","question","difficulty","timer"]),l(M,{language:a(e).challenge.language,code:a(e).challenge.code},null,8,["language","code"]),l(O,{onEventOnce:h,alternatives:a(e).challenge.answers,isPlaying:o.value},null,8,["alternatives","isPlaying"]),f.value.message?(u(),r(F,{key:0,message:f.value},null,8,["message"])):E("",!0)]),_:1},8,["title"])):(u(),r(_,{key:1,title:"Challenge not found!"}))]),_:1})}}};export{G as default};