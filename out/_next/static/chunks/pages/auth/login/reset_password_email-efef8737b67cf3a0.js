(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7266],{94184:function(t,e){var n;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var c=typeof n;if("string"===c||"number"===c)t.push(n);else if(Array.isArray(n)&&n.length){var o=s.apply(null,n);o&&t.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0!==(n=(function(){return s}).apply(e,[]))&&(t.exports=n)}()},27879:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login/reset_password_email",function(){return n(85879)}])},85879:function(t,e,n){"use strict";n.r(e);var a=n(85893),s=n(67294),c=n(11163),o=n(9008),i=n.n(o),r=n(50304),u=n(94939),l=n.n(u);n(22606);let d=()=>{let t=(0,c.useRouter)(),[e,n]=(0,s.useState)(null),[o,u]=(0,s.useState)(null),[d,p]=(0,s.useState)(null),[h,f]=(0,s.useState)(!0),[b,v]=(0,s.useState)(!1),m=()=>{e==o?f(!0):f(!1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("link",{rel:"stylesheet",href:"https://assets.abraacdn.com/assets/css/pages/account.css?b102"})}),(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"account-container margin-top-40",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"container page-settings margin-top-20",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsxs)("div",{className:"col-md-6 col-lg-4 mt-5 ",children:[(0,a.jsxs)("div",{className:"alert alert-success",style:{display:"none"},children:["Please update your new password"," "]}),(0,a.jsxs)("div",{className:" login-panel sign_content_main d3 margin-top-40",children:[(0,a.jsx)("div",{className:!0,style:{marginBottom:20},children:(0,a.jsx)("h3",{className:"text-dubai no-margin",children:"Reset Password"})}),(0,a.jsx)("div",{style:{marginTop:"50px"},children:(0,a.jsxs)("div",{className:"form_div_main",children:[(0,a.jsx)("p",{id:"new-psw-alert",style:{color:"red",display:!h&&b?"block":"none"},children:"Please confirm your password well"}),(0,a.jsx)("input",{type:"hidden",name:"token",defaultValue:"GUTAfjnIxK"}),(0,a.jsxs)("div",{className:" form-group",children:[(0,a.jsxs)("label",{htmlFor:"id_password",className:"text-normal",children:[(0,a.jsx)("span",{children:"*"}),"PASSWORD"]}),(0,a.jsx)("div",{className:"input-group",children:(0,a.jsx)("input",{id:"password",type:d?"text":"password",required:!0,onKeyUp:m,onChange:t=>n(t.target.value),type:d?"text":"password",required:!0,placeholder:"Your account password",name:"password",className:"form-control"})})]}),(0,a.jsxs)("div",{className:" form-group",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsxs)("label",{htmlFor:"id_cPassword",className:"text-normal",children:[(0,a.jsx)("span",{children:"*"}),"CONFIRM PASSWORD"," "]}),(0,a.jsx)("input",{id:"confirmpassword",type:d?"text":"password",required:!0,onChange:t=>u(t.target.value),type:d?"text":"password",onKeyUp:m,placeholder:"Confirm password",name:"confirm_password",className:"form-control"})]}),(0,a.jsxs)("div",{style:{display:"inline-flex"},className:"form-group",children:[(0,a.jsx)(l(),{onClick:()=>p(!d)}),(0,a.jsx)("label",{style:{marginTop:"8px"},htmlFor:"show-hide-psw",children:"show/hide password"})]})]}),(0,a.jsx)("div",{className:" form-group",children:(0,a.jsx)("div",{className:"input-group",children:(0,a.jsx)("button",{disabled:null===e||(null==e?void 0:e.length)<8||null===o,className:"btn button_log",onClick:()=>{var n;v(!0),null!==e&&null!==o&&h&&(0,r.Ks)({password:e,confirmPassword:o,pid:null==t?void 0:null===(n=t.query)||void 0===n?void 0:n.pid},()=>{t.push({pathname:"/auth/login"})})},children:"Update"})})})]})})]})]})})})})})})]})};e.default=d},50304:function(t,e,n){"use strict";n.d(e,{Ai:function(){return _},HV:function(){return S},IG:function(){return c},JC:function(){return N},Ks:function(){return f},LP:function(){return g},M6:function(){return E},MC:function(){return i},Ne:function(){return p},Ps:function(){return j},QQ:function(){return A},SE:function(){return h},Tx:function(){return d},WZ:function(){return l},Xc:function(){return m},Z2:function(){return k},cG:function(){return r},cT:function(){return x},ch:function(){return w},de:function(){return v},e_:function(){return T},mi:function(){return y},ox:function(){return u},r7:function(){return o},zK:function(){return b}});var a=n(92015),s=n(79235);n(34155);let c=async(t,e,n)=>{let{email:c,password:o,mobile_phone:i,signup_country_id:r,roles:u,username:l,user_store:d}=t;await a.b.post("".concat("abraa-backend-users","/public/api/v1/auth/email/signup"),{email:c,password:o,mobile_phone:i,signup_country_id:r,roles:u,username:l,user_store:d}).then(function(t){e(t),console.log("\uD83D\uDE80 ~ file: index.js ~ line 33 ~ res",t),s.h.dispatch({type:"USER_NAME",action:t}),localStorage.setItem("USER_DATA_STORAGE",JSON.stringify({userData:t}))}).catch(function(t){n(t)})},o=async(t,e,n)=>{await a.b.post("".concat("http://65.1.197.155:81","/").concat("abraa-backend-sms","/public/api/v1/otp/verification_code"),{phoneNumber:"".concat(t),sid:"VAfddf1d6ae7e176a6a7bfc4f0e0855c52",channel:"whatsapp"}).then(function(t){e(t),s.h.dispatch({type:"SESSION_INFO",action:t})}).catch(function(t){n(t)})},i=async(t,e,n)=>{let{country:s}=t;await a.b.post("https://countriesnow.space/api/v0.1/countries/cities",{country:s}).then(function(t){let{data:n}=t;e(n)}).catch(function(t){n(t)})},r=async(t,e)=>{await a.b.get("".concat("abraa-backend-users","/public/api/v1/cities")).then(function(e){let{data:n}=e;t(n)}).catch(function(t){e(t)})},u=async(t,e)=>{await a.b.get("https://countriesnow.space/api/v0.1/countries").then(function(e){let{data:n}=e;t(n)}).catch(function(t){e(t)})},l=async(t,e)=>{await a.b.get("".concat("http://65.1.197.155:81","/").concat("abraa-backend-users","/public/api/v1/countries")).then(function(e){let{data:n}=e;t(n)}).catch(function(t){e(t)})},d=(t,e,n)=>{let{mobile:c,password:o}=t;a.b.post("".concat("abraa-backend-users","/public/api/v1/auth/login"),{mobile_phone:c,password:o}).then(function(t){var n;e(t),s.h.dispatch({type:"NAME",action:null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.username}),s.h.dispatch({type:"USER_NAME",action:t}),localStorage.setItem("USER_DATA_STORAGE",JSON.stringify({userData:t}))}).catch(function(t){n(t)})},p=(t,e,n)=>{let{mobile:c,password:o}=t;a.b.post("".concat("abraa-backend-users","/public/api/v1/auth/email/login"),{email:c,password:o}).then(function(t){var n;e(t),s.h.dispatch({type:"NAME",action:null==t?void 0:null===(n=t.data)||void 0===n?void 0:n.username}),s.h.dispatch({type:"USER_NAME",action:t}),localStorage.setItem("USER_DATA_STORAGE",JSON.stringify({userData:t}))}).catch(function(t){n(t)})},h=(t,e)=>{let{mobile:n}=t;a.b.get("".concat("abraa-backend-users","/public/api/v1/auth/email/sendResetPasswordToken/").concat(n)).then(function(t){e(t)})},f=(t,e)=>{let{password:n,confirmPassword:s,pid:c}=t;a.b.post("".concat("abraa-backend-users","/public/api/v1/auth/email/resetPassword"),{confirm_password:s,password:n,reset_password_token:c}).then(function(t){e(t)})},b=(t,e)=>{let{password:n,confirmPassword:s,id_token:c}=t;a.b.post("".concat("abraa-backend-users","/public/api/v1/auth/resetPasswordUsingOTP "),{confirm_password:s,password:n,id_token:c}).then(function(t){e(t)})},v=()=>{localStorage.setItem("USER_DATA_STORAGE",JSON.stringify({userData:null}))},m=(t,e)=>{let{idToken:n}=t;a.b.post("".concat("abraa-backend-users","/public/api/v1/auth/mobile_phone/verify"),{id_token:n}).then(function(t){e(t)})},g=(t,e,n)=>{let{pin:c,sessionInfo:o}=t;a.b.post("".concat("http://65.1.197.155:81","/").concat("abraa-backend-sms","/public/api/v1/otp/verifyPhoneNumber"),{code:c,sessionInfo:o}).then(function(t){e(t),s.h.dispatch({type:"ID_TOKEN",action:null==t?void 0:t.data})}).catch(function(t){n(t)})},_=(t,e,n)=>{a.b.get("".concat("abraa-backend-users","/public/api/v1/users/profile"),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){e(t)}).catch(function(t){n(t)})},y=(t,e,n)=>{let{token:s,userData:c}=t;a.b.post("".concat("abraa-backend-users","/public/api/v1/users/update"),c,{headers:{Authorization:"Bearer ".concat(s)}}).then(function(t){e(t)})},w=(t,e,n)=>{a.b.get("".concat("abraa-backend-users","/public/api/v1/users/check_existing_email/").concat(t)).then(function(t){e(t)}).catch(function(t){n(t)})},x=(t,e,n)=>{let{file_name:s,file_path:c}=t;a.b.post("https://stagingacp.abraa.com/api/upload-file",{file_name:s,file_path:c}).then(function(t){e(t)}).catch(function(t){n(t)})},N=(t,e)=>{var n,c,o,i;let r,{limit:u,page:l,sort:d,filter:p}=t;null===(n=s.h.getState().user)||void 0===n||n.role_id,r=null===(c=JSON.parse(localStorage.getItem("USER_DATA_STORAGE")))||void 0===c?void 0:null===(o=c.userData)||void 0===o?void 0:null===(i=o.data)||void 0===i?void 0:i.access_token,a.b.get("".concat("http://65.1.197.155:81","/").concat("abraa-backend-users","/public/api/v1/users/my_kyc_levels"),{headers:{Authorization:"Bearer ".concat(r)},params:{limit:u,page:l,sort:d,filter:p,datatables:!0}}).then(function(t){let{data:n}=t;e(n)}).catch(function(t){})},S=(t,e)=>{var n,s,c;let o;o=null===(n=JSON.parse(localStorage.getItem("USER_DATA_STORAGE")))||void 0===n?void 0:null===(s=n.userData)||void 0===s?void 0:null===(c=s.data)||void 0===c?void 0:c.access_token,a.b.get("".concat("http://65.1.197.155:81","/").concat("abraa-backend-users","/public/api/v1/attributes/kyc_extra_fields_of_kyc/").concat(t),{headers:{Authorization:"Bearer ".concat(o)}}).then(function(t){let{data:n}=t;e(n)}).catch(function(t){})},j=(t,e,n)=>{var s,c,o;let i;console.log("\uD83D\uDE80 ~ file: index.js:381 ~ data",t),i=null===(s=JSON.parse(localStorage.getItem("USER_DATA_STORAGE")))||void 0===s?void 0:null===(c=s.userData)||void 0===c?void 0:null===(o=c.data)||void 0===o?void 0:o.access_token,a.b.post("".concat("http://65.1.197.155:81","/").concat("abraa-backend-users","/public/api/v1/attribute_values/save"),{attribute_values:[t]},{headers:{Authorization:"Bearer ".concat(i)}}).then(function(t){let{data:n}=t;e(n)}).catch(function(t){})},k=(t,e,n)=>{a.b.get("/".concat("abraa-backend-stores-products","/public/api/v1/attributes/category/566")).then(function(t){let{data:n}=t;e(n)}).catch(function(t){})},A=(t,e)=>{a.b.get("/".concat("abraa-backend-stores-products","/public/api/v1/categories/roots")).then(function(e){let{data:n}=e;t(n)}).catch(function(t){})},E=(t,e,n)=>{let s=t||"undefined";"undefined"!==s&&a.b.get("/".concat("abraa-backend-stores-products","/public/api/v1/categories/filter/").concat(s)).then(function(t){let{data:n}=t;e(n)}).catch(function(t){})},T=(t,e,n)=>{a.b.get("/".concat("abraa-backend-stores-products","/public/api/v1/categories/category_sons/").concat(t)).then(function(t){let{data:n}=t;e(n)}).catch(function(t){})}},92015:function(t,e,n){"use strict";n.d(e,{b:function(){return l}});var a=n(9669),s=n.n(a),c=n(80129),o=n.n(c),i=n(79235),r=n(40782);function u(t){let e=0;return"+"===t?e=1:"-"===t&&(e=(e=-1)>0?e:0),{c:0,n:e}}let l=s().create({baseURL:"".concat("http://65.1.197.155:81"),headers:{dev:!0}});l.interceptors.request.use(function(t){return!0!==t.silent&&u("+").c,t.params&&(t.paramsSerializer=t=>o().stringify(t)),t.data&&t.noStringify,t},function(t){return Promise.reject(t)}),l.interceptors.response.use(function(t){return!0!==t.config.silent&&(u("-").n,t.data.message&&t.data.message),t.data},function(t){if(!0!==t.config.silent&&u("-").n,t.response){if(!0!==t.config.silent&&""!==t.response.data.error){var e;e=t.response.data.error_code,t.config,"USR_UNAUTHENTICATED"===e&&(i.h.dispatch(_logout()),_historyPush("/"),window.location.reload()),!t.response.data.message.includes("No query")&&t.response.data.message&&(0,r.Am)(t.response.data.message)}}else t.request?t.request._response:t.sync||t.offline;return Promise.reject(t.response)})},22606:function(){},24654:function(){}},function(t){t.O(0,[5077,4939,9774,2888,179],function(){return t(t.s=27879)}),_N_E=t.O()}]);