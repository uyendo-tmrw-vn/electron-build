(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[252],{485:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment",function(){return r(3322)}])},3322:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n,o=r(5893),s=(r(7294),r(2797)),c=r(9227),i=r.n(c);const u=function(){return(0,o.jsxs)("div",{className:"own-form",children:[(0,o.jsx)("form",{className:"text-center",children:(0,o.jsx)("button",{className:"btn",type:"button",onClick:function(e){n.open({frameDescription:"Invoice #3847",amount:0,onCreateTokenSuccess:function(e){console.log({token:e})},onFormClosed:function(){}})},children:"Pay with Credit Card"})}),(0,o.jsx)(i(),{url:"https://cdn.omise.co/omise.js",onLoad:function(){(n=window.OmiseCard).configure({publicKey:"pkey_test_5rh74dt56l9t52hd1aj",currency:"thb",frameLabel:"Fiction",submitLabel:"PAY NOW",buttonLabel:"Pay with Omise",defaultPaymentMethod:"credit_card",otherPaymentMethods:[]})}})]})};const a=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.WT,{}),(0,o.jsx)(u,{})]})}},2703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(7294),c=(n=s)&&n.__esModule?n:{default:n},i=r(5697);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onError,r=e.onLoad,n=e.url;this.constructor.loadedScripts[n]?r():this.constructor.erroredScripts[n]?t():this.constructor.scriptObservers[n]?this.constructor.scriptObservers[n][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[n]=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,r=t.onCreate,n=t.url,o=t.attributes,s=document.createElement("script");r(),o&&Object.keys(o).forEach((function(e){return s.setAttribute(e,o[e])})),s.src=n,s.hasAttribute("async")||(s.async=1);var c=function(t){var r=e.constructor.scriptObservers[n];Object.keys(r).forEach((function(o){t(r[o])&&delete e.constructor.scriptObservers[n][e.scriptLoaderId]}))};s.onload=function(){e.constructor.loadedScripts[n]=!0,c((function(e){return e.onLoad(),!0}))},s.onerror=function(){e.constructor.erroredScripts[n]=!0,c((function(e){return e.onError(),!0}))},document.body.appendChild(s)}},{key:"render",value:function(){return null}}]),t}(c.default.Component);u.propTypes={attributes:i.PropTypes.object,onCreate:i.PropTypes.func,onError:i.PropTypes.func.isRequired,onLoad:i.PropTypes.func.isRequired,url:i.PropTypes.string.isRequired},u.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},u.scriptObservers={},u.loadedScripts={},u.erroredScripts={},u.idCount=0,t.default=u,e.exports=t.default}},e=>{e.O(0,[774,888,179],(()=>{return t=485,e(e.s=t);var t}));var t=e.O();_N_E=t}]);