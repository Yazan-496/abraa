(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2353,2929],{85568:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-dashboard/my-store/add-product/main",function(){return a(2976)}])},41907:function(e,l,a){"use strict";a.d(l,{Z:function(){return o}});var t=a(85893),n=a(41664),s=a.n(n),r=a(11163),i=a(37039);function o(e){var l;let{href:a,locale:n,children:o,queryProps:d}=e,c=(0,r.useRouter)(),[u]=(0,i.cQ)(),h=(null==c?void 0:null===(l=c.query)||void 0===l?void 0:l.lang)||null,v=d||null;return null!==h&&null!==v?(0,t.jsx)(s(),{legacyBehavior:!0,href:{pathname:a,query:{queryProps:d,lang:h}},children:o}):null!==h&&null===v?(0,t.jsx)(s(),{legacyBehavior:!0,href:{pathname:a,query:{lang:h}},children:o}):null===h&&null!==v?(0,t.jsx)(s(),{legacyBehavior:!0,href:{pathname:a,query:{propsQuery:v}},children:o}):(0,t.jsx)(s(),{legacyBehavior:!0,href:{pathname:a},children:o})}},60141:function(e,l,a){"use strict";var t=a(85893),n=a(25675),s=a.n(n);let r=e=>{let{children:l,src:a,width:n,height:r,alt:i,unoptimized:o,...d}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s(),{loading:void 0,unoptimized:!0,alt:i,width:n||10,height:r||10,src:a||"",children:l})})};l.Z=r},44052:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return r}});var t=a(85893),n=a(67294),s=a(50304);function r(e){let[l,a]=(0,n.useState)([]),[r,i]=(0,n.useState)([]),[o,d]=(0,n.useState)(null),[c,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{v(o)},[o]),(0,n.useEffect)(()=>{var l;(null===(l=e.categoryArray)||void 0===l?void 0:l.length)>0?u(!1):u(!0)},[e]);let h=[];(0,n.useEffect)(()=>{var l;(null===(l=e.categoryArray)||void 0===l?void 0:l.length)>0&&(h=e.categoryArray.sort(function(e,l){var a,t,n=null===(a=e.category_translations[0])||void 0===a?void 0:a.category_name.toUpperCase(),s=null===(t=l.category_translations[0])||void 0===t?void 0:t.category_name.toUpperCase();return n<s?-1:n>s?1:0})),i(h)},[e]);let v=e=>{u(!0),null!==e&&(0,s.M6)(e,e=>{var l,t,n;setTimeout(()=>{u(!1)},4e3),a((null==e?void 0:null===(l=e.categories)||void 0===l?void 0:null===(t=l.data)||void 0===t?void 0:t.length)>0?null==e?void 0:null===(n=e.categories)||void 0===n?void 0:n.data:null)},e=>{setTimeout(()=>{u(!1)},2e3),console.log(e,"err")}),setTimeout(()=>{u(!1)},1e3)};return(0,n.useEffect)(()=>{console.log(r,"propsArraySortState")},[r]),(0,n.useEffect)(()=>{console.log(o,"searchValue")},[o]),(0,n.useEffect)(()=>{console.log(c,"loading")},[c]),(0,t.jsx)("div",{className:"content",id:"content",children:(0,t.jsxs)("div",{"data-reactroot":!0,className:"modal-content category-modals",style:{color:"black"},children:[(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,t.jsx)("h4",{className:"modal-title",id:"myModalLabel",children:"List New Product"})]}),(0,t.jsxs)("div",{className:"modal-body",children:[(0,t.jsxs)("div",{className:"input-group search",children:[(0,t.jsx)("input",{type:"text",id:"search_keyval",className:"form-control",onChange:e=>d(e.target.value?e.target.value:null),placeholder:"Please type here what you want to sell",style:{minHeight:50}}),(0,t.jsx)("span",{className:"input-group-addon",onClick:()=>v(o),children:(0,t.jsxs)("a",{href:"#",children:[" ",(0,t.jsx)("i",{className:"fa fa-search"})]})})]}),(0,t.jsx)("div",{className:"selectcattxt simpleor"}),(0,t.jsxs)("div",{className:"selectcattxt",style:{marginBottom:8},children:[" ","Please Select From Below Categories"]}),c?(0,t.jsx)("div",{className:"spinner15-wrapper",children:(0,t.jsx)("div",{className:"spinner14"})}):(0,t.jsx)("div",{className:"search-results",children:r.length>0&&!o?(0,t.jsx)("ul",{children:null==r?void 0:r.map(l=>{var a;return(0,t.jsx)("li",{onClick:()=>{e.handleSelectCategory(l),d(null)},children:(0,t.jsx)("a",{href:"#",id:null==l?void 0:l.id,style:{color:"black"},children:null===(a=null==l?void 0:l.category_translations[0])||void 0===a?void 0:a.category_name})},null==l?void 0:l.id)})}):null!==l?(0,t.jsx)("ul",{children:null==l?void 0:l.map(l=>{var a;return(0,t.jsx)("li",{onClick:()=>{e.handleSelectCategory(l),d(null)},children:(0,t.jsx)("a",{href:"#",id:null==l?void 0:l.id,style:{color:"black"},children:null===(a=null==l?void 0:l.category_translations[0])||void 0===a?void 0:a.category_name})},null==l?void 0:l.id)})}):null===l?(0,t.jsx)("div",{className:"spinner15-wrapper",children:(0,t.jsx)("div",{className:"",children:" No Data Found"})}):(0,t.jsx)("div",{className:"spinner15-wrapper"})}),(0,t.jsx)("div",{children:(0,t.jsxs)("button",{onClick:()=>e.handleMain(!0),style:{color:"#1180b0"},className:"btn btn-simple btn-sm",children:[(0,t.jsx)("i",{style:{color:"#1180b0"},id:"backmainbtn",className:"fa fa-arrow-left"})," Back to Main"]})})]})]})})}},2976:function(e,l,a){"use strict";a.r(l);var t=a(85893),n=a(67294),s=a(50319),r=a(11163),i=a(31172),o=a(44052),d=a(50304),c=a(39447);let u=()=>{var e;let[l,a]=(0,n.useState)(null),[u,h]=(0,n.useState)(""),[v,m]=(0,n.useState)(!0),[g,y]=(0,n.useState)(null),[f,p]=(0,n.useState)([]),[x,j]=(0,n.useState)([]),[N,_]=(0,n.useState)([]),[S,b]=(0,n.useState)([]),[w,C]=(0,n.useState)(!1),[k,E]=(0,n.useState)(!1),[B,M]=(0,n.useState)(!1),[A,P]=(0,n.useState)(!1),[T,q]=(0,n.useState)(!1);(0,r.useRouter)();let[F]=(0,s.D)(c.zN);(0,n.useEffect)(()=>{(0,d.QQ)(e=>{b(e)})},[]);let Q=e=>{E(!1),M(!1),m(!0),C(!1),j([]),p([])},z=e=>{let l=(null==e?void 0:e.id)||void 0;(0,d.e_)(l,l=>{var a,t;(null==l?void 0:l.length)>0?(x.push(null==e?void 0:e.id),_(l),f.push(null===(a=null==e?void 0:e.category_translations[0])||void 0===a?void 0:a.category_name),E(!0)):(C(!0),M(!0),x.push(null==e?void 0:e.id),f.push(null===(t=null==e?void 0:e.category_translations[0])||void 0===t?void 0:t.category_name))},e=>{})};return(0,t.jsx)(t.Fragment,{children:!v||w||(null==S?void 0:null===(e=S.data)||void 0===e?void 0:e.length)===0||k?k&&0!==N.length&&!B?(0,t.jsxs)("div",{className:"content",id:"content",children:[" ",(0,t.jsx)(o.default,{categoryArray:N,handleSelectCategory:e=>z(e),handleMain:e=>Q(e)})," "]}):B?(0,t.jsx)(i.default,{handleMain:e=>Q(e),categoriesId:x,categories:S,categoriesNames:f}):null:(0,t.jsxs)("div",{className:"content",id:"content",children:[" ",(0,t.jsx)(o.default,{categoryArray:S,handleSelectCategory:e=>z(e),handleMain:e=>Q(e)})," "]})})};l.default=u}},function(e){e.O(0,[260,1664,5675,5077,7536,3945,5154,3157,3135,8484,1172,9774,2888,179],function(){return e(e.s=85568)}),_N_E=e.O()}]);