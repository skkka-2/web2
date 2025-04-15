import{c as ye,e as We,u as Ie,_ as Ce,k as De,w as ze,h as Fe}from"./base-dZ-qmSrS.js";import{E as Ue,a as je}from"./el-col-CCKxvSdT.js";import{p as Ge}from"./ban1-vqR9xNQ-.js";import{s as be,a4 as Te,R as Ke,r as B,c as H,u as a,d as G,o as Ee,a as Xe,p as Ze,G as Je,g as Se,h as Y,l as O,m as R,z as ve,A as M,t as X,U as e,n as V,a5 as K,y as S,L as Z,K as me,D as F,j as ke,q as Me,F as se,a1 as Be,P as Ye,k as et,X as tt,$ as at,_ as nt,Z as rt}from"./index-BkQB3Mbp.js";import{f as lt,j as J,k as st,u as ot,E as he,l as it,e as ut}from"./index-XriZDB9e.js";import{a as ct}from"./index-eiI6xgM1.js";import{f as Ne}from"./vnode-4hzob98M.js";import"./typescript-Bp3YSIOJ.js";var ft=/\s/;function dt(t){for(var l=t.length;l--&&ft.test(t.charAt(l)););return l}var vt=/^\s+/;function mt(t){return t&&t.slice(0,dt(t)+1).replace(vt,"")}var ge=NaN,ht=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,pt=/^0o[0-7]+$/i,wt=parseInt;function pe(t){if(typeof t=="number")return t;if(lt(t))return ge;if(J(t)){var l=typeof t.valueOf=="function"?t.valueOf():t;t=J(l)?l+"":l}if(typeof t!="string")return t===0?t:+t;t=mt(t);var o=gt.test(t);return o||pt.test(t)?wt(t.slice(2),o?2:8):ht.test(t)?ge:+t}var le=function(){return st.Date.now()},_t="Expected a function",yt=Math.max,It=Math.min;function Ct(t,l,o){var n,h,c,u,r,d,w=0,I=!1,b=!1,T=!0;if(typeof t!="function")throw new TypeError(_t);l=pe(l)||0,J(o)&&(I=!!o.leading,b="maxWait"in o,c=b?yt(pe(o.maxWait)||0,l):c,T="trailing"in o?!!o.trailing:T);function _(i){var m=n,E=h;return n=h=void 0,w=i,u=t.apply(E,m),u}function k(i){return w=i,r=setTimeout(N,l),I?_(i):u}function P(i){var m=i-d,E=i-w,L=l-m;return b?It(L,c-E):L}function A(i){var m=i-d,E=i-w;return d===void 0||m>=l||m<0||b&&E>=c}function N(){var i=le();if(A(i))return $(i);r=setTimeout(N,P(i))}function $(i){return r=void 0,T&&n?_(i):(n=h=void 0,u)}function f(){r!==void 0&&clearTimeout(r),w=0,n=d=h=r=void 0}function v(){return r===void 0?u:$(le())}function y(){var i=le(),m=A(i);if(n=arguments,h=this,d=i,m){if(r===void 0)return k(d);if(b)return clearTimeout(r),r=setTimeout(N,l),_(d)}return r===void 0&&(r=setTimeout(N,l)),u}return y.cancel=f,y.flush=v,y}var bt="Expected a function";function we(t,l,o){var n=!0,h=!0;if(typeof t!="function")throw new TypeError(bt);return J(o)&&(n="leading"in o?!!o.leading:n,h="trailing"in o?!!o.trailing:h),Ct(t,l,{leading:n,maxWait:l,trailing:h})}const Tt=(t,l,o)=>Ne(t.subTree).filter(c=>{var u;return Te(c)&&((u=c.type)==null?void 0:u.name)===l&&!!c.component}).map(c=>c.component.uid).map(c=>o[c]).filter(c=>!!c),Et=(t,l)=>{const o={},n=be([]);return{children:n,addChild:u=>{o[u.uid]=u,n.value=Tt(t,l,o)},removeChild:u=>{delete o[u],n.value=n.value.filter(r=>r.uid!==u)}}},St=ye({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),kt={change:(t,l)=>[t,l].every(We)},Le=Symbol("carouselContextKey"),oe="ElCarouselItem",_e=300,Mt=(t,l,o)=>{const{children:n,addChild:h,removeChild:c}=Et(Se(),oe),u=Ke(),r=B(-1),d=B(null),w=B(!1),I=B(),b=B(0),T=B(!0),_=B(!0),k=B(!1),P=H(()=>t.arrow!=="never"&&!a($)),A=H(()=>n.value.some(s=>s.props.label.toString().length>0)),N=H(()=>t.type==="card"),$=H(()=>t.direction==="vertical"),f=H(()=>t.height!=="auto"?{height:t.height}:{height:`${b.value}px`,overflow:"hidden"}),v=we(s=>{x(s)},_e,{trailing:!0}),y=we(s=>{W(s)},_e),i=s=>T.value?r.value<=1?s<=1:s>1:!0;function m(){d.value&&(clearInterval(d.value),d.value=null)}function E(){t.interval<=0||!t.autoplay||d.value||(d.value=setInterval(()=>L(),t.interval))}const L=()=>{_.value||(k.value=!0),_.value=!1,r.value<n.value.length-1?r.value=r.value+1:t.loop?r.value=0:k.value=!1};function x(s){if(_.value||(k.value=!0),_.value=!1,Je(s)){const q=n.value.filter(z=>z.props.name===s);q.length>0&&(s=n.value.indexOf(q[0]))}if(s=Number(s),Number.isNaN(s)||s!==Math.floor(s))return;const p=n.value.length,Q=r.value;s<0?r.value=t.loop?p-1:0:s>=p?r.value=t.loop?0:p-1:r.value=s,Q===r.value&&g(Q),ue()}function g(s){n.value.forEach((p,Q)=>{p.translateItem(Q,r.value,s)})}function U(s,p){var Q,q,z,ce;const j=a(n),fe=j.length;if(fe===0||!s.states.inStage)return!1;const Qe=p+1,Re=p-1,de=fe-1,He=j[de].states.active,Pe=j[0].states.active,qe=(q=(Q=j[Qe])==null?void 0:Q.states)==null?void 0:q.active,Ve=(ce=(z=j[Re])==null?void 0:z.states)==null?void 0:ce.active;return p===de&&Pe||qe?"left":p===0&&He||Ve?"right":!1}function ee(){w.value=!0,t.pauseOnHover&&m()}function te(){w.value=!1,E()}function ae(){k.value=!1}function C(s){a($)||n.value.forEach((p,Q)=>{s===U(p,Q)&&(p.states.hover=!0)})}function ie(){a($)||n.value.forEach(s=>{s.states.hover=!1})}function D(s){s!==r.value&&(_.value||(k.value=!0)),r.value=s}function W(s){t.trigger==="hover"&&s!==r.value&&(r.value=s,_.value||(k.value=!0))}function ne(){x(r.value-1)}function Oe(){x(r.value+1)}function ue(){m(),t.pauseOnHover||E()}function Ae(s){t.height==="auto"&&(b.value=s)}function xe(){var s;const p=(s=u.default)==null?void 0:s.call(u);if(!p)return null;const q=Ne(p).filter(z=>Te(z)&&z.type.name===oe);return(q==null?void 0:q.length)===2&&t.loop&&!N.value?(T.value=!0,q):(T.value=!1,null)}G(()=>r.value,(s,p)=>{g(p),T.value&&(s=s%2,p=p%2),p>-1&&l("change",s,p)}),G(()=>t.autoplay,s=>{s?E():m()}),G(()=>t.loop,()=>{x(r.value)}),G(()=>t.interval,()=>{ue()});const re=be();return Ee(()=>{G(()=>n.value,()=>{n.value.length>0&&x(t.initialIndex)},{immediate:!0}),re.value=ct(I.value,()=>{g()}),E()}),Xe(()=>{m(),I.value&&re.value&&re.value.stop()}),Ze(Le,{root:I,isCardType:N,isVertical:$,items:n,loop:t.loop,cardScale:t.cardScale,addItem:h,removeItem:c,setActiveItem:x,setContainerHeight:Ae}),{root:I,activeIndex:r,arrowDisplay:P,hasLabel:A,hover:w,isCardType:N,isTransitioning:k,items:n,isVertical:$,containerStyle:f,isItemsTwoLength:T,handleButtonEnter:C,handleTransitionEnd:ae,handleButtonLeave:ie,handleIndicatorClick:D,handleMouseEnter:ee,handleMouseLeave:te,setActiveItem:x,prev:ne,next:Oe,PlaceholderItem:xe,isTwoLengthShow:i,throttledArrowClick:v,throttledIndicatorHover:y}},Bt="ElCarousel",Nt=Y({name:Bt}),Lt=Y({...Nt,props:St,emits:kt,setup(t,{expose:l,emit:o}){const n=t,{root:h,activeIndex:c,arrowDisplay:u,hasLabel:r,hover:d,isCardType:w,items:I,isVertical:b,containerStyle:T,handleButtonEnter:_,handleButtonLeave:k,isTransitioning:P,handleIndicatorClick:A,handleMouseEnter:N,handleMouseLeave:$,handleTransitionEnd:f,setActiveItem:v,prev:y,next:i,PlaceholderItem:m,isTwoLengthShow:E,throttledArrowClick:L,throttledIndicatorHover:x}=Mt(n,o),g=Ie("carousel"),{t:U}=ot(),ee=H(()=>{const C=[g.b(),g.m(n.direction)];return a(w)&&C.push(g.m("card")),C}),te=H(()=>{const C=[g.e("container")];return n.motionBlur&&a(P)&&I.value.length>1&&C.push(a(b)?`${g.namespace.value}-transitioning-vertical`:`${g.namespace.value}-transitioning`),C}),ae=H(()=>{const C=[g.e("indicators"),g.em("indicators",n.direction)];return a(r)&&C.push(g.em("indicators","labels")),n.indicatorPosition==="outside"&&C.push(g.em("indicators","outside")),a(b)&&C.push(g.em("indicators","right")),C});return l({activeIndex:c,setActiveItem:v,prev:y,next:i}),(C,ie)=>(O(),R("div",{ref_key:"root",ref:h,class:V(a(ee)),onMouseenter:K(a(N),["stop"]),onMouseleave:K(a($),["stop"])},[a(u)?(O(),ve(me,{key:0,name:"carousel-arrow-left",persisted:""},{default:M(()=>[X(e("button",{type:"button",class:V([a(g).e("arrow"),a(g).em("arrow","left")]),"aria-label":a(U)("el.carousel.leftArrow"),onMouseenter:D=>a(_)("left"),onMouseleave:a(k),onClick:K(D=>a(L)(a(c)-1),["stop"])},[S(a(he),null,{default:M(()=>[S(a(it))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[Z,(C.arrow==="always"||a(d))&&(n.loop||a(c)>0)]])]),_:1})):F("v-if",!0),a(u)?(O(),ve(me,{key:1,name:"carousel-arrow-right",persisted:""},{default:M(()=>[X(e("button",{type:"button",class:V([a(g).e("arrow"),a(g).em("arrow","right")]),"aria-label":a(U)("el.carousel.rightArrow"),onMouseenter:D=>a(_)("right"),onMouseleave:a(k),onClick:K(D=>a(L)(a(c)+1),["stop"])},[S(a(he),null,{default:M(()=>[S(a(ut))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[Z,(C.arrow==="always"||a(d))&&(n.loop||a(c)<a(I).length-1)]])]),_:1})):F("v-if",!0),e("div",{class:V(a(te)),style:Me(a(T)),onTransitionend:a(f)},[S(a(m)),ke(C.$slots,"default")],46,["onTransitionend"]),C.indicatorPosition!=="none"?(O(),R("ul",{key:2,class:V(a(ae))},[(O(!0),R(se,null,Be(a(I),(D,W)=>X((O(),R("li",{key:W,class:V([a(g).e("indicator"),a(g).em("indicator",C.direction),a(g).is("active",W===a(c))]),onMouseenter:ne=>a(x)(W),onClick:K(ne=>a(A)(W),["stop"])},[e("button",{class:V(a(g).e("button")),"aria-label":a(U)("el.carousel.indicator",{index:W+1})},[a(r)?(O(),R("span",{key:0},Ye(D.props.label),1)):F("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[Z,a(E)(W)]])),128))],2)):F("v-if",!0),n.motionBlur?(O(),R("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[e("defs",null,[e("filter",{id:"elCarouselHorizontal"},[e("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),e("filter",{id:"elCarouselVertical"},[e("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):F("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var $t=Ce(Lt,[["__file","carousel.vue"]]);const Ot=ye({name:{type:String,default:""},label:{type:[String,Number],default:""}}),At=t=>{const l=et(Le),o=Se(),n=B(),h=B(!1),c=B(0),u=B(1),r=B(!1),d=B(!1),w=B(!1),I=B(!1),{isCardType:b,isVertical:T,cardScale:_}=l;function k(f,v,y){const i=y-1,m=v-1,E=v+1,L=y/2;return v===0&&f===i?-1:v===i&&f===0?y:f<m&&v-f>=L?y+1:f>E&&f-v>=L?-2:f}function P(f,v){var y,i;const m=a(T)?((y=l.root.value)==null?void 0:y.offsetHeight)||0:((i=l.root.value)==null?void 0:i.offsetWidth)||0;return w.value?m*((2-_)*(f-v)+1)/4:f<v?-(1+_)*m/4:(3+_)*m/4}function A(f,v,y){const i=l.root.value;return i?((y?i.offsetHeight:i.offsetWidth)||0)*(f-v):0}const N=(f,v,y)=>{var i;const m=a(b),E=(i=l.items.value.length)!=null?i:Number.NaN,L=f===v;!m&&!De(y)&&(I.value=L||f===y),!L&&E>2&&l.loop&&(f=k(f,v,E));const x=a(T);r.value=L,m?(w.value=Math.round(Math.abs(f-v))<=1,c.value=P(f,v),u.value=a(r)?1:_):c.value=A(f,v,x),d.value=!0,L&&n.value&&l.setContainerHeight(n.value.offsetHeight)};function $(){if(l&&a(b)){const f=l.items.value.findIndex(({uid:v})=>v===o.uid);l.setActiveItem(f)}}return Ee(()=>{l.addItem({props:t,states:tt({hover:h,translate:c,scale:u,active:r,ready:d,inStage:w,animating:I}),uid:o.uid,translateItem:N})}),at(()=>{l.removeItem(o.uid)}),{carouselItemRef:n,active:r,animating:I,hover:h,inStage:w,isVertical:T,translate:c,isCardType:b,scale:u,ready:d,handleItemClick:$}},xt=Y({name:oe}),Qt=Y({...xt,props:Ot,setup(t){const l=t,o=Ie("carousel"),{carouselItemRef:n,active:h,animating:c,hover:u,inStage:r,isVertical:d,translate:w,isCardType:I,scale:b,ready:T,handleItemClick:_}=At(l),k=H(()=>[o.e("item"),o.is("active",h.value),o.is("in-stage",r.value),o.is("hover",u.value),o.is("animating",c.value),{[o.em("item","card")]:I.value,[o.em("item","card-vertical")]:I.value&&d.value}]),P=H(()=>{const N=`${`translate${a(d)?"Y":"X"}`}(${a(w)}px)`,$=`scale(${a(b)})`;return{transform:[N,$].join(" ")}});return(A,N)=>X((O(),R("div",{ref_key:"carouselItemRef",ref:n,class:V(a(k)),style:Me(a(P)),onClick:a(_)},[a(I)?X((O(),R("div",{key:0,class:V(a(o).e("mask"))},null,2)),[[Z,!a(h)]]):F("v-if",!0),ke(A.$slots,"default")],14,["onClick"])),[[Z,a(T)]])}});var $e=Ce(Qt,[["__file","carousel-item.vue"]]);const Rt=ze($t,{CarouselItem:$e}),Ht=Fe($e),Pt="/web2/assets/ban2-BREisDPJ.png",qt="/web2/assets/ban3-DLZFulja.png",Vt="/web2/assets/ban4-RC0raOIt.png",Wt={class:"block text-center"},Dt=["src"],zt={class:"content"},Ft={__name:"OnePart",setup(t){const l=[Ge,Pt,qt,Vt];return(o,n)=>{const h=Ht,c=Rt,u=je,r=Ue;return O(),R(se,null,[e("div",Wt,[S(c,{height:"500px","motion-blur":""},{default:M(()=>[(O(),R(se,null,Be(l,(d,w)=>S(h,{key:w},{default:M(()=>[e("img",{src:d,class:"car-image"},null,8,Dt)]),_:2},1024)),64))]),_:1})]),e("div",zt,[S(r,{gutter:30},{default:M(()=>[S(u,{class:"title"},{default:M(()=>n[0]||(n[0]=[rt("政策与资讯")])),_:1})]),_:1}),S(r,{gutter:40},{default:M(()=>[S(u,{class:"f-box",span:8},{default:M(()=>n[1]||(n[1]=[e("div",null,[e("p",null,"国家政策"),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.63em",height:"1em",viewBox:"0 0 640 1024"},[e("path",{fill:"#0284c7",d:"m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"})])],-1),e("a",{href:""},"教育部关于印发《2025年全国硕士研究生招生工作管理规定》的通知",-1),e("a",{href:""},"以评价改革为牵引 全面提升工程博士培养质量专业学位研究生学位论文",-1),e("a",{href:""},"关于转发工程类博士专业学位研究生学位论文与申请学位实践成果基",-1),e("a",{href:""},"关于调整高等教育阶段和高中阶段国家奖助学金政策的通知",-1),e("a",{href:""},"中共中央办公厅 国务院办公厅印发《关于加快推动博士研究生教育高质量发展的意见》",-1),e("a",{href:""},"教育部办公厅关于深入推进实施国家优秀中小学教师培养计划的通知",-1)])),_:1}),S(u,{class:"f-box",span:8},{default:M(()=>n[2]||(n[2]=[e("div",null,[e("p",null,"院校政策"),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.63em",height:"1em",viewBox:"0 0 640 1024"},[e("path",{fill:"#0284c7",d:"m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"})])],-1),e("a",{href:""},"博士招生 | 宁波诺丁汉大学2025年秋季入学博士申请指南",-1),e("a",{href:""},"杭州师范大学2025年博士研究生招生日程安排",-1),e("a",{href:""},"2025年深圳大学中外合作办学项目金融科技与风险控制硕士招生简章",-1),e("a",{href:""},"香港大学经济管理学院2025年硕士课程",-1),e("a",{href:""},"通知 | 华南理工大学EMBA项目奖学金规定发布！",-1),e("a",{href:""},"温州肯恩大学2025年研究生招生简章",-1)])),_:1}),S(u,{class:"f-box",span:8},{default:M(()=>n[3]||(n[3]=[e("div",null,[e("p",null,"专研咨询"),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.63em",height:"1em",viewBox:"0 0 640 1024"},[e("path",{fill:"#0284c7",d:"m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"})])],-1),e("a",{href:""},"重庆理工大学会计学院2025年硕士研究生招生简章",-1),e("a",{href:""},"2025年研考学情调研",-1),e("a",{href:""},"2025研考日程表",-1),e("a",{href:""},"跟着学姐走进WKU之BIOTECH姚雅琪",-1),e("a",{href:""},"内蒙古：延长2025年研考网上确认时间的公告",-1),e("a",{href:""},"关于延长青海省2025年全国硕士研究生招生考试网上确认时间的公告",-1)])),_:1})]),_:1}),S(r,{gutter:40},{default:M(()=>[S(u,{class:"f-box",span:8},{default:M(()=>n[4]||(n[4]=[e("div",null,[e("p",null,"研招访谈"),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.63em",height:"1em",viewBox:"0 0 640 1024"},[e("path",{fill:"#0284c7",d:"m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"})])],-1),e("a",{href:""},"[访谈]西北师范大学：应用伦理、新闻与传播两个专业学位类别首次招生",-1),e("a",{href:""},"[访谈]西北农林科技大学：2025年拟招专硕2540名，学硕1674名",-1),e("a",{href:""},"[访谈]河南理工大学：2025年招生政策有6点变化",-1),e("a",{href:""},"[访谈]哈尔滨音乐学院：新增音乐美学方向招生",-1),e("a",{href:""},"[访谈]长春工程学院：2025年拟招收硕士研究生243人",-1),e("a",{href:""},"[访谈]榆林学院：2025年新增6个硕士点",-1)])),_:1}),S(u,{class:"f-box",span:8},{default:M(()=>n[5]||(n[5]=[e("div",null,[e("p",null,"专硕巡展"),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.63em",height:"1em",viewBox:"0 0 640 1024"},[e("path",{fill:"#0284c7",d:"m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"})])],-1),e("a",{href:""},"【专硕巡展】工程管理：搭建工程技术与商业管理的桥梁",-1),e("a",{href:""},"【专硕巡展】建设美丽绿色中国，资源与环境专硕人才不可或缺",-1),e("a",{href:""},"【专硕巡展】生物与医药：年轻专业助力生物技术走上快车道",-1),e("a",{href:""},"【专硕巡展】中医专硕有大学问，这些“关键”谁考都得问",-1),e("a",{href:""},"【专硕巡展】公共管理专硕：推动社会和国家管理现代化的专业人才",-1),e("a",{href:""},"【专硕巡展】林业专硕：新时代“美丽中国”建设者",-1)])),_:1}),S(u,{class:"f-box",span:8},{default:M(()=>n[6]||(n[6]=[e("div",null,[e("p",null,"推荐免试"),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.63em",height:"1em",viewBox:"0 0 640 1024"},[e("path",{fill:"#0284c7",d:"m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"})])],-1),e("a",{href:""},"中国矿业大学关于做好2025年接收优秀应届本科毕业生免试攻读研究生（含直博生）工作的通知",-1),e("a",{href:""},"天津工业大学：2025年接收优秀应届本科毕业生免试攻读硕士研究生和直接攻读博士研究生办法",-1),e("a",{href:""},"扬州大学：关于做好2025年接收优秀应届本科毕业生免试攻读研究生工作的通知",-1),e("a",{href:""},"上海海事大学：2025年接收推荐免试硕士研究生办法",-1),e("a",{href:""},"哈尔滨理工大学：接收2025年推荐免试研究生预报名通知",-1),e("a",{href:""},"太原理工大学：接收2025届优秀本科毕业生免试攻读研究生工作安排",-1)])),_:1})]),_:1})])],64)}}},ea=nt(Ft,[["__scopeId","data-v-b1f9e158"]]);export{ea as default};
