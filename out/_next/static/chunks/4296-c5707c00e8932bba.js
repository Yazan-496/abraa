(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4296],{60141:function(e,a,s){"use strict";var l=s(85893),n=s(25675),t=s.n(n);let r=e=>{let{children:a,src:s,width:n,height:r,alt:i,unoptimized:o,...c}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t(),{loading:void 0,unoptimized:!0,alt:i,width:n||10,height:r||10,src:s||"",children:a})})};a.Z=r},31873:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return o}});var l=s(85893),n=s(67294),t=s(50304),r=s(60141),i=s(66893);function o(){let[e,a]=(0,n.useState)(!0),[s,o]=(0,n.useState)([]),[c,d]=(0,n.useState)([]),[m,u]=(0,n.useState)("Syria"),[p,h]=(0,n.useState)(null),[x,f]=(0,n.useState)(null),[v,j]=(0,n.useState)(null),[b,y]=(0,n.useState)(null),[g,N]=(0,n.useState)(null),[w,S]=(0,n.useState)(null),[O,E]=(0,n.useState)(null),[C,k]=(0,n.useState)(null),[T,A]=(0,n.useState)(null),[I,_]=(0,n.useState)(null),[z,R]=(0,n.useState)(null),[L,B]=(0,n.useState)(null),[P,W]=(0,n.useState)(!0),D=()=>{w==O?(R("green"),B("matching"),W(!0)):(R("red"),W(!1),B("not matching"))};(0,n.useEffect)(()=>{A(document.getElementById("password").value),_(document.getElementById("confirm_password").value),B(document.getElementById("message").innerHTML),R(document.getElementById("message").style.color)},[L]),(0,n.useEffect)(()=>{var e,a,s,l,n;(0,t.ox)(e=>{d(e)},e=>{(0,i.N)("".concat(e.data.message),"error")}),h(null===(e=JSON.parse(localStorage.getItem("USER_DATA_STORAGE")))||void 0===e?void 0:null===(a=e.userData)||void 0===a?void 0:null===(s=a.data)||void 0===s?void 0:s.access_token),f(null===(l=JSON.parse(localStorage.getItem("USER_DATA_STORAGE")))||void 0===l?void 0:null===(n=l.userData)||void 0===n?void 0:n.data)},[]),(0,n.useEffect)(()=>{null!==p&&(0,t.Ai)(p,e=>{f(null==e?void 0:e.data)},e=>{})},[p]);let M=e=>{u(e.target.value),(0,t.MC)({country:e.target.value},e=>{o(e)},e=>{(0,i.N)("".concat(e.data.message),"error")})},F=()=>{!0===P&&(0,t.mi)({token:p,userData:{...x,first_name:v,last_name:b,password:w,confirm_password:O}},()=>{})};return(0,l.jsx)("div",{className:"content",id:"content",children:(0,l.jsx)("div",{"data-reactroot":!0,className:"container-fluid",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",id:"cardTotal",children:[(0,l.jsxs)("ul",{className:"nav nav-tabs",children:[(0,l.jsx)("li",{className:!0===e?"active":"",children:(0,l.jsx)("a",{onClick:()=>a(!0),style:{color:!0===e?"#617083":"",fontWeight:!0===e?"bold":"",cursor:!0===e?"default":"",borderBottom:!0===e?"3px solid #faca0c":" "},"data-toggle":"tab","aria-expanded":!0===e?"true":"false",children:"PERSONAL"})}),(0,l.jsx)("li",{className:!1===e?"active":"",children:(0,l.jsx)("a",{onClick:()=>a(!1),style:{color:!1===e?"#617083":"",fontWeight:!1===e?"bold":"",cursor:!1===e?"default":"",borderBottom:!1===e?"3px solid #faca0c":" "},"data-toggle":"tab","aria-expanded":!1===e?"true":"false",children:"SECURITY"})})]}),(0,l.jsxs)("div",{className:"tab-content card",style:{border:"none",background:"#ffffff2b"},children:[(0,l.jsx)("div",{id:"security",className:!1===e?"tab-pane card-content fade active in ":"tab-pane card-content fade",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h4",{children:"CONTACT INFORMATION CONFIRMATION"}),(0,l.jsxs)("p",{children:["This information adds an extra layer of security for you. It allows you to enable the Enhanced Security system and ensures that you are the only individual able to use your account.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"If you want to license your products on the Abraa.com Marketplace, please make sure your contact information is up to date. This information allows us to reach out when you have a pending sale or when we need additional information regarding one of your products.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"We will never disclose, sell, or publish your phone number or email address. All information will be securely stored and will be used only for matters regarding formal communications from Abraa."]})]}),(0,l.jsxs)("div",{className:"col-md-12 mt-29",children:[(0,l.jsx)("div",{className:"form-items",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:" form-group col-md-5",children:[(0,l.jsx)("label",{children:"EMAIL"}),(0,l.jsxs)("div",{className:"input-with-btn",children:[(0,l.jsx)("div",{className:"input",children:(0,l.jsx)("input",{type:"text",name:"email",defaultValue:null==x?void 0:x.email,id:"emails",className:"form-control",placeholder:"EMAIL","aria-label":"..."})}),(0,l.jsx)("div",{className:"button",children:(0,l.jsx)("button",{className:"btn btn-success btn-fill",children:"Confirm"})})]})]}),(0,l.jsxs)("div",{className:"form-group col-md-5",children:[(0,l.jsx)("label",{children:"NAME OF YOUR COMPANY / STORE"}),(0,l.jsxs)("div",{className:"input-with-btn",children:[(0,l.jsx)("div",{className:"input",children:(0,l.jsx)("input",{defaultValue:null==x?void 0:x.company,type:"text",name:"cname",id:"cnames",className:"form-control",placeholder:"Company Name","aria-label":"..."})}),(0,l.jsx)("div",{className:"button",children:(0,l.jsx)("button",{className:"btn btn-success btn-fill",children:"Confirm"})})]})]}),(0,l.jsx)("div",{className:"form-group col-md-12",style:{minHeight:20},children:(0,l.jsx)("div",{className:"input-with-btn",children:(0,l.jsx)("div",{className:"button"})})}),(0,l.jsx)("div",{className:"form-group col-md-12 new_mails",children:(0,l.jsx)("div",{className:"header"})})]})}),(0,l.jsxs)("div",{className:"form-items",children:[(0,l.jsx)("div",{className:"header",children:(0,l.jsx)("p",{className:"title",children:"CHANGE PASSWORD"})}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:" form-group col-md-6",children:[(0,l.jsx)("label",{children:"NEW PASSWORD"}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"password",name:"password",id:"password",defaultValue:w,className:"form-control",placeholder:"NEW PASSWORD","aria-label":"...",onChange:e=>{S(e.target.value)}})})]}),(0,l.jsxs)("div",{className:" form-group col-md-6",children:[(0,l.jsx)("label",{children:"CONFIRM PASSWORD"}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{type:"password",name:"confirm_password",id:"confirm_password",defaultValue:O,className:"form-control",placeholder:"CONFIRM PASSWORD","aria-label":"...",onKeyUp:D,onChange:e=>E(e.target.value)})})]})]}),null!==T||null!==I?(0,l.jsx)("span",{style:{color:z,fontSize:"x-large"},id:"message",children:L}):(0,l.jsx)("div",{id:"message"})]})]})]})}),(0,l.jsx)("div",{id:"personal",className:!0===e?"tab-pane card-content fade active in ":"tab-pane card-content fade",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-md-6 paddingLeft0",children:[(0,l.jsx)("h4",{style:{marginTop:"25px",color:"#333333",marginBottom:"5px",fontWeight:"normal",fontSize:"14px",textTransform:"capitalize",fontFamily:"Inter"},className:"personal-label",children:"INFORMATION"}),(0,l.jsx)("div",{style:{border:"none !important"},className:"card",children:(0,l.jsxs)("div",{style:{margin:0,marginTop:10,border:0,padding:0,verticalAlign:"baseline",backgroundColor:"transparent",fontSize:"100%"},className:"card-body",children:[(0,l.jsx)("a",{href:"https://www.abraa.com//plans",className:"sm-font",children:"Upgrade"}),(0,l.jsx)("p",{children:"Your account type is basic"})]})}),(0,l.jsxs)("div",{style:{marginBottom:"17px"},className:" form-group",children:[(0,l.jsx)("label",{id:"fnamesLabel",className:"personal-label",children:"First Name"}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{style:{display:"block",fontSize:"14px"},type:"text",defaultValue:null==x?void 0:x.first_name,id:"fnames",name:"fnames",className:"form-control",placeholder:"Your name",onChange:e=>j(e.target.value)})}),(0,l.jsx)("div",{id:"fnamesError",className:"error font-red"})]}),(0,l.jsxs)("div",{style:{marginBottom:"17px"},className:" form-group ",children:[(0,l.jsx)("label",{id:"lnamesLabel",className:"personal-label",children:"Last Name"}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{style:{display:"block",fontSize:"14px"},type:"text",id:"lnames",name:"lnames",defaultValue:null==x?void 0:x.last_name,className:"form-control",placeholder:"Your Surname","aria-label":"...",onChange:e=>y(e.target.value)})}),(0,l.jsx)("div",{id:"lnamesError",className:"error font-red"})]}),(0,l.jsxs)("div",{style:{marginBottom:"17px"},className:" form-group ",children:[(0,l.jsx)("label",{className:"personal-label",children:"Country"}),(0,l.jsxs)("select",{id:"extended_country",name:"extended_country",className:"form-control","data-error":"#phone_count",style:{display:"block",fontSize:"14px"},onChange:e=>M(e),children:[(0,l.jsx)("option",{value:0,children:"Select Country"}),c.map(e=>(0,l.jsx)("option",{value:e.country,children:e.country},e.country))]})]}),(0,l.jsxs)("div",{style:{marginBottom:"17px"},className:" form-group ",children:[(0,l.jsx)("label",{className:"personal-label",children:"City"}),(0,l.jsxs)("select",{style:{display:"block",fontSize:"14px"},className:"form-control notnice",name:"extended_city",id:"extended_city",children:[(0,l.jsx)("option",{value:0,children:"Select City"}),s.map((e,a)=>(0,l.jsx)("option",{value:e,children:e},a))]})]}),(0,l.jsxs)("div",{style:{marginBottom:"17px"},className:" form-group ",children:[(0,l.jsx)("label",{children:"Select your preferred language"}),(0,l.jsxs)("select",{style:{display:"block",fontSize:"14px"},name:"preferred_lang",id:"preferred_lang",className:"lang-picker",children:[(0,l.jsx)("option",{value:"en",children:"English"}),(0,l.jsx)("option",{value:"ar",children:"Arabic"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-6 custom-margin-top",children:[(0,l.jsx)("h4",{style:{marginTop:"25px",color:"#333333",marginBottom:"5px",fontWeight:"normal",fontSize:"14px",textTransform:"capitalize",fontFamily:"Inter"},children:"PROFILE SETTINGS"}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("input",{type:"hidden",name:"logo_ur",id:"logo_ur"}),(0,l.jsxs)("div",{className:"upload",children:[(0,l.jsx)("div",{className:"uploaded-img",children:(0,l.jsx)(r.Z,{unoptimized:!0,width:"46",height:"36",alt:"Avatar",src:"https://ramaaz.dev/e-wallet-staginv3/files_service/public".concat(null==x?void 0:x.avatar)})}),(0,l.jsxs)("div",{className:"upload-tools",children:[(0,l.jsx)("div",{className:"select",children:(0,l.jsx)("button",{className:"btn btn-default btn-sm custom-button",children:"Choose File"})}),(0,l.jsx)("input",{type:"file",name:"item-img",id:"item-img"}),(0,l.jsx)("div",{className:"delete",children:(0,l.jsx)("button",{className:"btn btn-danger btn-sm",children:"Delete"})})]})]})]}),(0,l.jsx)("h4",{children:"UPLOAD BUSINESS DOCUMENT"}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("input",{type:"hidden",name:"business_ur",id:"business_ur"}),(0,l.jsx)("div",{className:"upload",children:(0,l.jsxs)("div",{className:"upload-tools",children:[(0,l.jsxs)("div",{className:"select",children:[(0,l.jsx)("button",{className:"btn btn-default btn-sm custom-button",children:"Choose File"}),(0,l.jsx)("span",{children:"No file chosen"})]}),(0,l.jsx)("input",{type:"file",name:"business-img",id:"business-img",multiple:!0,style:{display:"none"}})]})})]}),(0,l.jsxs)("div",{className:"form-group",style:{display:"none"},children:[(0,l.jsx)("label",{children:"SELECT CATEGORIES YOU LIKE TO SELL"}),(0,l.jsx)("button",{className:"btn btn-input",children:"Browse Categories"}),(0,l.jsxs)("div",{className:"select-tags",children:[(0,l.jsxs)("span",{className:"label",children:["Industrial & Construction",(0,l.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,l.jsxs)("span",{className:"label",children:["Car Brand",(0,l.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,l.jsxs)("span",{className:"label",children:["Car",(0,l.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:(0,l.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})]})]})]})]})}),(0,l.jsx)("div",{id:"company",className:!0===e?"tab-pane card-content fade active in ":"tab-pane card-content fade"})]}),(0,l.jsx)("div",{className:"row pull-left",style:{marginLeft:8},children:(0,l.jsx)("a",{className:"btn-deact",href:"#",children:"Deactivate your Abraa account"})}),(0,l.jsx)("div",{className:"row pull-right",style:{marginRight:8},children:(0,l.jsx)("div",{className:"col-md-12 ",children:(0,l.jsx)("button",{onClick:()=>F(),className:"btn btn-fill btn-primary",children:"Update"})})})]})})})})}},64213:function(){},84501:function(e,a,s){"use strict";var l=s(67294),n=s(45697),t=s.n(n);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}var i=(0,l.forwardRef)(function(e,a){var s=e.color,n=e.size,t=void 0===n?24:n,i=function(e,a){if(null==e)return{};var s,l,n=function(e,a){if(null==e)return{};var s,l,n={},t=Object.keys(e);for(l=0;l<t.length;l++)s=t[l],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)s=t[l],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}(e,["color","size"]);return l.createElement("svg",r({ref:a,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:void 0===s?"currentColor":s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),l.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),l.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))});i.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},i.displayName="AlertTriangle",a.Z=i},46445:function(e,a,s){"use strict";var l=s(67294),n=s(45697),t=s.n(n);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}var i=(0,l.forwardRef)(function(e,a){var s=e.color,n=e.size,t=void 0===n?24:n,i=function(e,a){if(null==e)return{};var s,l,n=function(e,a){if(null==e)return{};var s,l,n={},t=Object.keys(e);for(l=0;l<t.length;l++)s=t[l],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)s=t[l],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}(e,["color","size"]);return l.createElement("svg",r({ref:a,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:void 0===s?"currentColor":s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.createElement("polyline",{points:"20 6 9 17 4 12"}))});i.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},i.displayName="Check",a.Z=i},78268:function(e,a,s){"use strict";var l=s(67294),n=s(45697),t=s.n(n);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}var i=(0,l.forwardRef)(function(e,a){var s=e.color,n=e.size,t=void 0===n?24:n,i=function(e,a){if(null==e)return{};var s,l,n=function(e,a){if(null==e)return{};var s,l,n={},t=Object.keys(e);for(l=0;l<t.length;l++)s=t[l],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)s=t[l],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}(e,["color","size"]);return l.createElement("svg",r({ref:a,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:void 0===s?"currentColor":s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))});i.propTypes={color:t().string,size:t().oneOfType([t().string,t().number])},i.displayName="X",a.Z=i}}]);