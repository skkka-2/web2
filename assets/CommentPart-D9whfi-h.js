import"./base-IQtL6inA.js";import{E as B,a as C}from"./el-col-BNpoTXx1.js";import{_ as H,r as o,c as $,o as M,a as V,l as p,m as z,U as e,P as f,n as r,a9 as y,z as b,A as _,y as N,a1 as E,F as I}from"./index-B9NMTRUY.js";import{r as A}from"./request-B6C0XiWV.js";import"./typescript-Bp3YSIOJ.js";import"./user-DQv1IoGs.js";const L={class:"con"},S={class:"header"},T={class:"header-content"},D={class:"name"},q={class:"time"},F={class:"content"},P={class:"footer"},U={class:"like"},R={class:"number"},Z={__name:"comment",props:{time:String,userName:String,like:Number,content:String},setup(n){const d=n,m=o(!1),l=o(!1),i=o(0),c=u=>{m.value=!0,l.value=!l.value},a=o(Number(d.time)),v=$(()=>h(a.value));function h(u){const t=Date.now(),x=Math.floor((t-u)/1e3),g=Math.floor(x/60),w=Math.floor(g/60),k=Math.floor(w/24);return k>0?`${k}天前`:w>0?`${w}小时前`:g>0?`${g}分钟前`:"刚刚"}let s;return M(()=>{s=setInterval(()=>{a.value+=1e3},1e3)}),V(()=>{clearInterval(s)}),(u,t)=>(p(),z("div",L,[e("div",S,[t[1]||(t[1]=e("div",{class:"pic"},"头像",-1)),e("div",T,[e("div",D,f(n.userName),1),e("div",q,f(v.value),1)])]),e("div",F,f(n.content),1),e("div",P,[t[4]||(t[4]=e("div",{class:"share"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.6em",height:"1.6em",viewBox:"0 0 24 24"},[e("path",{fill:"#999999",d:"m13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755"})])],-1)),e("div",{class:r(["comment",{active:m.value}]),onClick:t[0]||(t[0]=x=>c(i.value))},t[2]||(t[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.6em",height:"1.6em",viewBox:"0 0 24 24"},[e("path",{fill:"#999999",d:"M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29zm1-6v3.08L16.08 17H21V7H7v10zM3 15H1V3a2 2 0 0 1 2-2h16v2H3zm6-6h10v2H9zm0 4h8v2H9z"})],-1),e("span",{class:"number"},null,-1)]),2),e("div",U,[t[3]||(t[3]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.6em",height:"1.6em",viewBox:"0 0 24 24"},[e("path",{fill:"#999999",d:"M7.24 11v9H5.63c-.9 0-1.62-.72-1.62-1.61v-5.77c0-.89.73-1.62 1.62-1.62zM18.5 9.5h-4.78V6c0-1.1-.9-2-1.99-2h-.09c-.4 0-.76.24-.92.61L7.99 11v9h9.2c.73 0 1.35-.52 1.48-1.24l1.32-7.5c.16-.92-.54-1.76-1.48-1.76Z"})],-1)),e("span",R,f(n.like),1)])]),e("div",{class:r(["comment-list",{hidden:l.value}])},t[5]||(t[5]=[y('<p data-v-ff04bc70>评论 1</p><div class="creat" data-v-ff04bc70><div class="pic" data-v-ff04bc70>头像</div><div class="creat-content" data-v-ff04bc70></div></div><div class="replies" data-v-ff04bc70><div class="pic" data-v-ff04bc70>头像</div></div>',3)]),2)]))}},j=H(Z,[["__scopeId","data-v-ff04bc70"]]);function G(n){return A({url:"/comment",method:"post",data:n})}const J={class:"content"},K={__name:"CommentPart",setup(n){const d=o([]),m=o(null);M(async()=>{try{const c=await G({userName:"aq1"});d.value=c.data}catch(c){m.value="获取数据失败: "+c.message}}),console.log(Date.now());const l=o(!1);addEventListener("scroll",()=>{document.documentElement.scrollTop>300?l.value=!0:l.value=!1});const i=o(0);return(c,a)=>{const v=C,h=B;return p(),b(h,{gutter:6},{default:_(()=>[N(v,{lg:14,class:"left-col"},{default:_(()=>[e("div",{class:r(["nav",{fixed:l.value}])},[e("span",{class:r(["one",{light:i.value==0}]),onClick:a[0]||(a[0]=s=>i.value=0)},"热门",2),e("span",{class:r(["two",{light:i.value==1}]),onClick:a[1]||(a[1]=s=>i.value=1)},"最新",2)],2),e("div",J,[(p(!0),z(I,null,E(d.value,(s,u)=>(p(),b(j,{class:"comment",key:s.id,time:s.time,userName:s.userName,like:s.like,content:s.content},null,8,["time","userName","like","content"]))),128))])]),_:1}),N(v,{lg:4,class:"right-col"},{default:_(()=>a[2]||(a[2]=[e("ul",{class:"side"},[e("p",null,"公告栏"),e("div",{class:"side1"})],-1),e("ul",{class:"side"},[e("p",null,"智小圈"),e("div",{class:"side2"})],-1)])),_:1})]),_:1})}}},te=H(K,[["__scopeId","data-v-9fd76bad"]]);export{te as default};
