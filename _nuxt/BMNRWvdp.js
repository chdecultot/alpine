import w from"./DKmHkso6.js";import I from"./C3NppnaT.js";import k from"./BOoR0q1q.js";import{u as v}from"./drq4vXnX.js";import{d as g,Y as A,I as S,M as n,b as a,c as r,e as o,g as i,F as C,Z as B,j as e,w as u,p as L,i as F,s as N,$ as V,X as b,l as P}from"./DVJlBCnd.js";import"./BcWussCh.js";const R=t=>(L("data-v-9864cc41"),t=t(),F(),t),T={key:0,class:"articles-list"},Y={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=R(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>v(_.path,async()=>await N(V(_.path)).sort({date:-1}).find(),"$IrfRrReaF9")),s=await s,l(),s),c=S(()=>m.value||[]);return(E,M)=>{var d;const p=w,h=I,f=k;return(d=n(c))!=null&&d.length?(a(),r("div",T,[o("div",Y,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(C,null,B(n(c).slice(1),(y,x)=>(a(),b(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),K=P(D,[["__scopeId","data-v-9864cc41"]]);export{K as default};
