import{q as d,r,h as t,m as o,T as g,V as u,R as l}from"./index-Dvg3NUbG.js";import{B as a}from"./Button-TJpGj9Sz.js";const c=e=>t(u,o(e,{get color(){return e.backgroundColor},get borderRadius(){return e.radius},get style(){var n;return[e.style,r.Container.tones[(n=e.tone)!=null?n:r.tone],r.Container.base]},forwardStates:!0})),s=e=>{const n=d(()=>{var i;return(i=e.tone)!=null?i:r.tone});return t(c,o(e,{get height(){return e.height||r.Text.base.lineHeight},get tone(){return n()},get style(){return e.style},get children(){return t(g,{get color(){return e.textColor},get lineHeight(){return(e.height||r.Text.base.lineHeight)+2},get style(){return[r.Text.tones[n()],r.Text.base]},get children(){return e.title}})}}))},f=()=>{function e(i,h){this.states.toggle("disabled")}const n={display:"flex",justifyContent:"flexStart",width:1500,height:300,color:0,gap:26,y:400};return[t(l,{x:100,y:200,gap:5,style:n,get children(){return[t(s,{children:"HD"}),t(s,{children:"PG13"}),t(s,{children:"NC17"}),t(g,{fontSize:30,children:"I like bananas"}),t(s,{children:"DOLBY"})]}}),t(l,{x:100,gap:40,style:n,get children(){return[t(a,{autofocus:!0,onEnter:e,children:"TV Shows"}),t(a,{states:{active:!0,disabled:!1},children:"Movies"}),t(a,{states:"active",children:"Sports"}),t(a,{states:"disabled",children:"News"})]}})]};export{f as default};
//# sourceMappingURL=Buttons-B-iK6Vfo.js.map
