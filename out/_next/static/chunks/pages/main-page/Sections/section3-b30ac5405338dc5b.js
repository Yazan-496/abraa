(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2759,917],{38844:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main-page/Sections/section3",function(){return l(84437)}])},54564:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,l(92648).Z)(l(67294));var r=l(92983)},37645:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=s.default,n={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=r({},n,e)),n=r({},n,t);let o=n.loader,a=()=>o().then(i);if(n.loadableGenerated&&delete(n=r({},n,n.loadableGenerated,{loader:a})).loadableGenerated,"boolean"==typeof n.ssr){if(!n.ssr)return delete n.ssr,u(a,n);delete n.ssr}return l(n)},t.noSSR=u;var r=l(6495).Z,n=l(92648).Z,o=(0,l(91598).Z)(l(67294)),s=n(l(14588)),a=n(l(54564));function i(e){return{default:e.default||e}}function u(e,t){delete t.webpack,delete t.modules;let l=o.lazy(e),r=t.loading,n=o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>o.default.createElement(o.Suspense,{fallback:n},o.default.createElement(a.default,null,o.default.createElement(l,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},33644:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,l(92648).Z)(l(67294));let n=r.default.createContext(null);t.LoadableContext=n},14588:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(6495).Z,n=(0,l(92648).Z)(l(67294)),o=l(33644);let s=[],a=[],i=!1;function u(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);l.lazy=n.default.lazy(l.loader);let r=null;function s(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let u=l.webpack?l.webpack():l.modules;u&&a.push(e=>{for(let t of u)if(-1!==e.indexOf(t))return s()})}function c(e){!function(){s();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let t=n.default.createElement(l.loading,{isLoading:!0,pastDelay:!0,error:null});return n.default.createElement(n.default.Suspense,{fallback:t},n.default.createElement(l.lazy,e))}return c.preload=()=>s(),c.displayName="LoadableComponent",c}(u,e)}function f(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(s).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(i=!0,t());f(a,e).then(l,l)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},30960:function(){},5152:function(e,t,l){e.exports=l(37645)},25043:function(e,t,l){"use strict";var r=l(67294),n=Object.defineProperty,o=(e,t,l)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,s=(e,t,l)=>(o(e,"symbol"!=typeof t?t+"":t,l),l);let a=(e,t)=>"u">typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style.getPropertyValue(t),i=e=>a(e,"overflow")+a(e,"overflow-y")+a(e,"overflow-x"),u=e=>{if(!(e instanceof HTMLElement))return window;let t=e;for(;t&&!(t===document.body||t===document.documentElement||!t.parentNode);){if(/(scroll|auto)/.test(i(t)))return t;t=t.parentNode}return window};class d extends r.Component{constructor(e){super(e),s(this,"elementObserver"),s(this,"wrapper"),s(this,"lazyLoadHandler",e=>{var t,l;let{onContentVisible:r}=this.props,[n]=e,{isIntersecting:o}=n;if(o){this.setState({visible:!0},()=>{r&&r()});let s=null==(t=this.wrapper)?void 0:t.current;s&&s instanceof HTMLElement&&(null==(l=this.elementObserver)||l.unobserve(s))}}),this.elementObserver=null,this.wrapper=r.createRef(),this.state={visible:!1}}componentDidMount(){var e;this.getEventNode();let{offset:t,threshold:l}=this.props,r={rootMargin:"number"==typeof t?`${t}px`:t||"0px",threshold:l||0};this.elementObserver=new IntersectionObserver(this.lazyLoadHandler,r);let n=null==(e=this.wrapper)?void 0:e.current;n instanceof HTMLElement&&this.elementObserver.observe(n)}shouldComponentUpdate(e,t){return t.visible}componentWillUnmount(){var e,t;let l=null==(e=this.wrapper)?void 0:e.current;l&&l instanceof HTMLElement&&(null==(t=this.elementObserver)||t.unobserve(l))}getEventNode(){var e;return u(null==(e=this.wrapper)?void 0:e.current)}render(){let{children:e,className:t,height:l,width:n,elementType:o}=this.props,{visible:s}=this.state,a=`LazyLoad${s?" is-visible":""}${t?` ${t}`:""}`;return(0,r.createElement)(o||"div",{className:a,style:{height:l,width:n},ref:this.wrapper},s&&r.Children.only(e))}}s(d,"defaultProps",{elementType:"div",className:"",offset:0,threshold:0,width:null,onContentVisible:null,height:null})}},function(e){e.O(0,[1664,5675,7989,4437,9774,2888,179],function(){return e(e.s=38844)}),_N_E=e.O()}]);