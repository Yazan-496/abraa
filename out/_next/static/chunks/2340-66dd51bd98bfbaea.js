"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2340],{12340:function(e,a,s){s.r(a);var l=s(85893),t=s(67294);s(16054);var r=s(11163);s(64213);var i=s(80608),n=s(15034),c=s(37039),d=s(87536),m=s(14416),o=s(50304),u=s(41907),h=s(74330),x=s(9008),p=s.n(x);let _=e=>{let a;let s=["en","ar"],[r]=(0,c.cQ)(),{t:x}=(0,c.$G)(),_=(null==r?void 0:r.lang)||"en",j=e=>{(0,o.ch)(e,e=>{f(!0)},e=>{f(!1)})},[v,f]=(0,t.useState)(!1),{register:g,handleSubmit:b,watch:N,formState:{errors:y},control:w}=(0,d.cI)({mode:"onBlur"}),k={username:{required:"".concat(x("auth.main.name_is_required"))},mobile:{required:"".concat(x("auth.main.mobile_is_required")),minLength:{value:6,message:"".concat(x("auth.main.mobile_phone_must_have_at_least_6_characters"))}},email:"".concat(x("auth.main.email_is_required")),password:{required:"".concat(x("auth.main.password_is_required")),minLength:{value:6,message:"".concat(x("auth.main.password_must_have_at_least_6_characters"))}}},S=s=>{v||null===V||"not"===V||(T(!0),(0,o.r7)(null==s?void 0:s.mobile,l=>{T(!1),setTimeout(()=>e.switchToNext(),500),T(!1),e.setSessionInfo(a),e.setUserName(null==s?void 0:s.username),e.setEmail(V),e.setPassword(null==s?void 0:s.password),e.setmobile(null==s?void 0:s.mobile)},e=>{T(!1)}))};(0,m.I0)();let[L,q]=(0,t.useState)(!0),[C,T]=(0,t.useState)(!1),[E,I]=(0,t.useState)(e.username),[V,Q]=(0,t.useState)(e.email),[Z,A]=(0,t.useState)(e.password),[O,F]=(0,t.useState)(e.mobile),[G,P]=(0,t.useState)(5);return(0,t.useEffect)(()=>{var e;a=null===(e=JSON.parse(localStorage.getItem("GET_SEESION")))||void 0===e?void 0:e.sessionInfo,null!==E||null!==V||null!==Z||null!==O||null!==G?q(!0):q(!1)}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(p(),{children:[(0,l.jsx)("link",{rel:"stylesheet",href:"https://www.abraa.com/assets/css/pages/slide-to-submit.css?V=1.1"}),(0,l.jsx)("link",{rel:"stylesheet",href:"https://www.abraa.com/assets/css/intlTelInput.css?b102"}),(0,l.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://www.abraa.com/assets/css/pages/abraav2-register.css?v=3.1"}),(0,l.jsx)("link",{"data-react-helmet":"true",rel:"icon",href:"https://s101.abraacdn.com/files/favicon-32x32.png"})]}),(0,l.jsx)("div",{style:{backgroundColor:"#eff0f5",height:"600px"},children:(0,l.jsxs)("div",{className:"right_area_slider",children:[(0,l.jsxs)("div",{className:"top_nav_main",children:[(0,l.jsxs)("div",{style:{float:"left"},className:"top_nav left",children:[" ",(0,l.jsx)(u.Z,{href:"/",locale:_,children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{className:"regLogo",src:"https://assets.abraacdn.com/assets/images/abraa-logo.svg",alt:"Abraa",title:"Abraa"})})})]}),(0,l.jsxs)("div",{style:{float:"left"},className:"top_nav left",dir:"ltr",children:[(0,l.jsx)("a",{children:x("auth.nav.about")}),(0,l.jsx)("a",{children:x("auth.nav.request_a_quote")}),null==s?void 0:s.map(e=>e===_?null:(0,l.jsx)(h.Z,{locale:e},e))]}),(0,l.jsxs)("div",{style:{float:"right"},className:"top_nav right",children:[(0,l.jsx)("a",{children:x("auth.nav.already_have_an_account")}),(0,l.jsx)(u.Z,{href:"/auth/login",locale:_,children:(0,l.jsx)("a",{className:"btn",children:x("auth.nav.sign_in")})})]})]}),(0,l.jsx)("div",{style:{backgroundColor:"#f0f0f0"},className:"suplier_main__form",id:"suplier_form",children:(0,l.jsxs)("div",{className:"supplier_extend_main",id:"supplier_extend_main",children:[(0,l.jsxs)("div",{className:"main_extend",children:[(0,l.jsxs)("div",{className:"extend_ball_main",children:[(0,l.jsx)("div",{className:"bullet",children:(0,l.jsx)("span",{id:"supplier-active1",className:"active",children:"1"})}),(0,l.jsxs)("div",{className:"labeltext",children:[x("auth.main.basic"),(0,l.jsx)("br",{}),x("auth.main.information")]})]}),(0,l.jsx)("div",{className:"center_line"}),(0,l.jsxs)("div",{className:"extend_ball_main",children:[(0,l.jsx)("div",{className:"bullet",children:(0,l.jsx)("span",{id:"supplier-active2",children:"2"})}),(0,l.jsxs)("div",{className:"labeltext",children:[x("auth.main.business"),(0,l.jsx)("br",{}),x("auth.main.information")]})]})]}),(0,l.jsxs)("div",{style:{textAlign:"en"===_?"left":"right"},className:"top_text",children:[(0,l.jsx)("div",{className:"big",children:x("auth.main.get_started_absoluetely_free")}),(0,l.jsx)("div",{className:"small",children:x("auth.main.no_credit_card_needed")})]}),(0,l.jsxs)("form",{dir:"ar"===_?"rtl":"ltr",onSubmit:b(S),className:"supplier_express_form custom-form",id:"supplier_extended_form",noValidate:"novalidate",children:[(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("label",{style:{marginLeft:"ar"===_?"10px":""},htmlFor:"username",children:x("auth.main.full_name")}),(0,l.jsx)(d.Qr,{control:w,type:"text",className:"form-control txtOnlyabraa",name:"username",id:"username",value:E,defaultValue:E,rules:k.username,render:e=>{let{field:a}=e;return(0,l.jsx)("input",{...a,label:"Text field"})}})]}),(0,l.jsx)("div",{dir:"ltr",style:{marginTop:"-20px",marginLeft:"130px"},children:(0,l.jsx)("small",{className:"text-danger",children:(null==y?void 0:y.username)&&y.username.message})}),(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("label",{style:{marginLeft:"ar"===_?"10px":""},children:x("auth.main.mobile_number")}),(0,l.jsx)(d.Qr,{id:"mobile",name:"mobile",control:w,type:"tel",rules:k.mobile,value:O,onChange:F,defaultValue:O,render:e=>{let{field:a}=e;return(0,l.jsx)(n.ZP,{...a,style:{flex:4},"aria-required":"true",className:"form-control1",placeholder:x("auth.main.enter_phone_number")})}})]}),(0,l.jsx)("div",{dir:"ltr",style:{marginTop:"-20px",marginLeft:"130px"},children:(0,l.jsx)("small",{className:"text-danger",children:(null==y?void 0:y.mobile)&&y.mobile.message})}),(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("label",{style:{marginLeft:"ar"===_?"10px":""},children:x("auth.main.email")}),(0,l.jsx)(d.Qr,{control:w,type:"email",value:V,className:"form-control",name:"email",id:"email",render:e=>{let{field:a}=e;return(0,l.jsx)("input",{...a,defaultValue:V,onChange:e=>{Q(e.target.value),j(e.target.value)},label:"Text field"})}})]}),(0,l.jsxs)("div",{dir:"ltr",style:{marginTop:"-20px",marginLeft:"130px"},children:[(0,l.jsx)("small",{className:"text-danger",children:"not"===V&&"".concat(x("auth.main.email_is_required"))}),(0,l.jsx)("small",{dir:"ltr",style:{marginLeft:"10px"},className:"text-danger ml-10",children:v&&"".concat(x("auth.main.email_already_been_taken"))})]}),(0,l.jsxs)("div",{className:"input-group",children:[(0,l.jsx)("label",{style:{marginLeft:"ar"===_?"10px":""},children:x("auth.main.password")}),(0,l.jsx)(d.Qr,{control:w,onChange:e=>A(e.target.value),type:"text",className:"form-control",name:"password",id:"password",value:Z,defaultValue:Z,rules:k.password,render:e=>{let{field:a}=e;return(0,l.jsx)("input",{...a,label:"Text field"})}})]}),(0,l.jsx)("div",{dir:"ltr",style:{marginTop:"-20px",marginLeft:"130px"},children:(0,l.jsx)("small",{className:"text-danger",children:(null==y?void 0:y.password)&&y.password.message})}),(0,l.jsx)("div",{style:{backgroundColor:"#eff0f5"},className:"supplier_express_form custom-form",children:(0,l.jsx)("div",{style:{backgroundColor:"#eff0f5",width:"100%"},className:"supplier_button_main",children:(0,l.jsxs)("button",{type:"submit",onClick:()=>{null===V&&Q("not")},className:"btn",children:[x("auth.actions.continue"),"   ",(0,l.jsx)(i.Z,{loading:C})]})})})]}),(0,l.jsx)("div",{style:{backgroundColor:"#eff0f5",width:"100%"},className:"supplier_button_main",children:(0,l.jsxs)("div",{className:"last_text",children:[(0,l.jsxs)("span",{className:"m-1",children:[x("auth.main.by_clicking_continue_i_agree_to"),x("auth.main.abraa")]}),(0,l.jsxs)("span",{className:"m-1",children:[(0,l.jsx)("a",{children:x("auth.main.terms_of_service")})," "]}),(0,l.jsxs)("span",{className:"m-1",children:[x("auth.main.and")," "]}),(0,l.jsxs)("span",{className:"m-1",children:[(0,l.jsx)("a",{children:x("auth.main.privacy_policy")})," "]})]})})]})})]})})]})};a.default=(0,r.withRouter)(_)}}]);