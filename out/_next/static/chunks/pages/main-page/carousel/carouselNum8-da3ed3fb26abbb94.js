(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9639,917],{8067:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main-page/carousel/carouselNum8",function(){return i(38746)}])},60141:function(e,t,i){"use strict";var r=i(85893),a=i(25675),l=i.n(a);let n=e=>{let{children:t,src:i,width:a,height:n,alt:s,unoptimized:o,...d}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l(),{loading:void 0,unoptimized:!0,alt:s,width:a||10,height:n||10,src:i||"",children:t})})};t.Z=n},54564:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,i(92648).Z)(i(67294));var r=i(92983)},37645:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let i=n.default,a={loading:e=>{let{error:t,isLoading:i,pastDelay:r}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e)),a=r({},a,t);let l=a.loader,s=()=>l().then(o);if(a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated,{loader:s})).loadableGenerated,"boolean"==typeof a.ssr){if(!a.ssr)return delete a.ssr,d(s,a);delete a.ssr}return i(a)},t.noSSR=d;var r=i(6495).Z,a=i(92648).Z,l=(0,i(91598).Z)(i(67294)),n=a(i(14588)),s=a(i(54564));function o(e){return{default:e.default||e}}function d(e,t){delete t.webpack,delete t.modules;let i=l.lazy(e),r=t.loading,a=l.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>l.default.createElement(l.Suspense,{fallback:a},l.default.createElement(s.default,null,l.default.createElement(i,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,i(92648).Z)(i(67294));let a=r.default.createContext(null);t.LoadableContext=a},14588:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,a=(0,i(92648).Z)(i(67294)),l=i(33644);let n=[],s=[],o=!1;function d(e){let t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);i.lazy=a.default.lazy(i.loader);let r=null;function n(){if(!r){let t=new c(e,i);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!o){let d=i.webpack?i.webpack():i.modules;d&&s.push(e=>{for(let t of d)if(-1!==e.indexOf(t))return n()})}function u(e){!function(){n();let e=a.default.useContext(l.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach(t=>{e(t)})}();let t=a.default.createElement(i.loading,{isLoading:!0,pastDelay:!0,error:null});return a.default.createElement(a.default.Suspense,{fallback:t},a.default.createElement(i.lazy,e))}return u.preload=()=>n(),u.displayName="LoadableComponent",u}(d,e)}function m(e,t){let i=[];for(;e.length;){let r=e.pop();i.push(r(t))}return Promise.all(i).then(()=>{if(e.length)return m(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{m(n).then(e,t)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let i=()=>(o=!0,t());m(s,e).then(i,i)})},window.__NEXT_PRELOADREADY=u.preloadReady,t.default=u},38746:function(e,t,i){"use strict";i.r(t);var r=i(85893),a=i(67294);i(30960);var l=i(60141);i(25043);var n=i(5152),s=i.n(n);let o=s()(Promise.all([i.e(571),i.e(2568)]).then(i.t.bind(i,12568,23)),{loadableGenerated:{webpack:()=>[12568]},ssr:!1});class d extends a.Component{render(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o,{className:"item-3-wrapper item-3-slider owl-carousel mt-2 mt-md-0",items:3,dots:!1,loop:!0,nav:!1,autoplay:!0,children:[(0,r.jsx)("div",{className:"item-3 text-center",children:(0,r.jsxs)("a",{title:"Bangs Organic Ginger Shot with Orange,Carrot and Ginger",children:[(0,r.jsx)("div",{className:"item-3-image",children:(0,r.jsx)(l.Z,{unoptimized:"true",width:140,height:140,src:"https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png",alt:"Bangs Organic Ginger Shot with Orange,Carrot and Ginger"})}),(0,r.jsx)("div",{className:"item-2-mq",children:"MOQ 1 Carton"}),(0,r.jsx)("div",{className:"item-3-title",children:"Bangs Organic Ginger Shot ..."}),(0,r.jsx)("div",{className:"item-3-price",children:"/ Carton"})]})}),(0,r.jsx)("div",{className:"item-3 text-center",children:(0,r.jsxs)("a",{title:"Organic Extra Virgin Palestinian Olive oil",children:[(0,r.jsx)("div",{className:"item-3-image",children:(0,r.jsx)(l.Z,{unoptimized:"true",width:140,height:140,src:"https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg",alt:"Organic Extra Virgin Palestinian Olive oil"})}),(0,r.jsx)("div",{className:"item-2-mq",children:"MOQ 1 Carton"}),(0,r.jsx)("div",{className:"item-3-title",children:"Organic Extra Virgin ..."}),(0,r.jsx)("div",{className:"item-3-price",children:"/ Carton"})]})}),(0,r.jsx)("div",{className:"item-3 text-center",children:(0,r.jsxs)("a",{title:"Brumi Choco Cereals 500 G",children:[(0,r.jsx)("div",{className:"item-3-image",children:(0,r.jsx)(l.Z,{unoptimized:"true",width:140,height:140,src:"https://s101.abraacdn.com/thumbs/small/uploads/product/696192/brumi-choco-cereals-500-g_53621.png",alt:"Brumi Choco Cereals 500 G"})}),(0,r.jsx)("div",{className:"item-2-mq",children:"MOQ 1 Carton"}),(0,r.jsx)("div",{className:"item-3-title",children:"Brumi Choco Cereals 500 G"}),(0,r.jsx)("div",{className:"item-3-price",children:"/ Carton"})]})}),(0,r.jsx)("div",{className:"item-3 text-center",children:(0,r.jsxs)("a",{title:"Bangs Organic Ginger Shot with Orange,Carrot and Ginger",children:[(0,r.jsx)("div",{className:"item-3-image",children:(0,r.jsx)(l.Z,{unoptimized:"true",width:140,height:140,src:"https://s101.abraacdn.com/thumbs/small/uploads/product/696173/bangs-organic-ginger-shot-with-orangecarrot-and-ginger_61360.png",alt:"Bangs Organic Ginger Shot with Orange,Carrot and Ginger"})}),(0,r.jsx)("div",{className:"item-2-mq",children:"MOQ 1 Carton"}),(0,r.jsx)("div",{className:"item-3-title",children:"Bangs Organic Ginger Shot ..."}),(0,r.jsx)("div",{className:"item-3-price",children:"/ Carton"})]})}),(0,r.jsx)("div",{className:"item-3 text-center",children:(0,r.jsxs)("a",{title:"Organic Extra Virgin Palestinian Olive oil",children:[(0,r.jsx)("div",{className:"item-3-image",children:(0,r.jsx)(l.Z,{unoptimized:"true",width:140,height:140,src:"https://s101.abraacdn.com/thumbs/small/uploads/product/696181/organic-extra-virgin-palestinian-olive-oil_31570.jpeg",alt:"Organic Extra Virgin Palestinian Olive oil"})}),(0,r.jsx)("div",{className:"item-2-mq",children:"MOQ 1 Carton"}),(0,r.jsx)("div",{className:"item-3-title",children:"Organic Extra Virgin ..."}),(0,r.jsx)("div",{className:"item-3-price",children:"/ Carton"})]})}),(0,r.jsx)("div",{className:"item-3 text-center",children:(0,r.jsxs)("a",{title:"Brumi Choco Cereals 500 G",children:[(0,r.jsx)("div",{className:"item-3-image",children:(0,r.jsx)(l.Z,{unoptimized:"true",width:140,height:140,src:"https://s101.abraacdn.com/thumbs/small/uploads/product/696192/brumi-choco-cereals-500-g_53621.png",alt:"Brumi Choco Cereals 500 G"})}),(0,r.jsx)("div",{className:"item-2-mq",children:"MOQ 1 Carton"}),(0,r.jsx)("div",{className:"item-3-title",children:"Brumi Choco Cereals 500 G"}),(0,r.jsx)("div",{className:"item-3-price",children:"/ Carton"})]})}),(0,r.jsx)("div",{className:"owl-nav"})]})})}}t.default=d},30960:function(){},5152:function(e,t,i){e.exports=i(37645)},25043:function(e,t,i){"use strict";var r=i(67294),a=Object.defineProperty,l=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n=(e,t,i)=>(l(e,"symbol"!=typeof t?t+"":t,i),i);let s=(e,t)=>"u">typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style.getPropertyValue(t),o=e=>s(e,"overflow")+s(e,"overflow-y")+s(e,"overflow-x"),d=e=>{if(!(e instanceof HTMLElement))return window;let t=e;for(;t&&!(t===document.body||t===document.documentElement||!t.parentNode);){if(/(scroll|auto)/.test(o(t)))return t;t=t.parentNode}return window};class c extends r.Component{constructor(e){super(e),n(this,"elementObserver"),n(this,"wrapper"),n(this,"lazyLoadHandler",e=>{var t,i;let{onContentVisible:r}=this.props,[a]=e,{isIntersecting:l}=a;if(l){this.setState({visible:!0},()=>{r&&r()});let n=null==(t=this.wrapper)?void 0:t.current;n&&n instanceof HTMLElement&&(null==(i=this.elementObserver)||i.unobserve(n))}}),this.elementObserver=null,this.wrapper=r.createRef(),this.state={visible:!1}}componentDidMount(){var e;this.getEventNode();let{offset:t,threshold:i}=this.props,r={rootMargin:"number"==typeof t?`${t}px`:t||"0px",threshold:i||0};this.elementObserver=new IntersectionObserver(this.lazyLoadHandler,r);let a=null==(e=this.wrapper)?void 0:e.current;a instanceof HTMLElement&&this.elementObserver.observe(a)}shouldComponentUpdate(e,t){return t.visible}componentWillUnmount(){var e,t;let i=null==(e=this.wrapper)?void 0:e.current;i&&i instanceof HTMLElement&&(null==(t=this.elementObserver)||t.unobserve(i))}getEventNode(){var e;return d(null==(e=this.wrapper)?void 0:e.current)}render(){let{children:e,className:t,height:i,width:a,elementType:l}=this.props,{visible:n}=this.state,s=`LazyLoad${n?" is-visible":""}${t?` ${t}`:""}`;return(0,r.createElement)(l||"div",{className:s,style:{height:i,width:a},ref:this.wrapper},n&&r.Children.only(e))}}n(c,"defaultProps",{elementType:"div",className:"",offset:0,threshold:0,width:null,onContentVisible:null,height:null})}},function(e){e.O(0,[5675,9774,2888,179],function(){return e(e.s=8067)}),_N_E=e.O()}]);