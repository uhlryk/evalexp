!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EvalExp=e():t.EvalExp=e()}(self,(function(){return(()=>{"use strict";var t={48:(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,{default:()=>$t});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rawString=e,this.index=-1}var e,n;return e=t,(n=[{key:"removeCharacters",value:function(t){this.rawString=this.rawString.replace(t,"")}},{key:"getValue",value:function(){return this.rawString[this.index]}},{key:"getNextValue",value:function(){return this.rawString[this.index+1]}},{key:"getPrevValue",value:function(){return this.rawString[this.index-1]}},{key:"moveLeft",value:function(){return this.index+1>=this.rawString.length?null:(this.index++,!0)}},{key:"moveRight",value:function(){return this.index-1<0?null:(this.index--,!0)}}])&&r(e.prototype,n),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var c,f,a,l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.iterator=e,this.left=null,this.right=null,this.parent=null,this.root=null}return u(t,null,[{key:"registerTokenType",value:function(e){t.registeredTokenTypes.push(e)}},{key:"getApplicable",value:function(e){var n=t.registeredTokenTypes.find((function(t){return t.isApplicable(e)}));if(n)return n;throw SyntaxError("No applicable token type for ".concat(e))}},{key:"isApplicable",value:function(t){return!1}}]),u(t,[{key:"getIterator",value:function(){return this.iterator}},{key:"setLeft",value:function(t){this.left=t}},{key:"getLeft",value:function(){return this.left}},{key:"setRight",value:function(t){this.right=t}},{key:"getRight",value:function(){return this.right}},{key:"setParent",value:function(t){this.parent=t}},{key:"getParent",value:function(){return this.parent}},{key:"setRoot",value:function(t){this.root=t,this.root.addGlobalChild(this)}},{key:"getRoot",value:function(){return this.root}},{key:"isChildAllowed",value:function(){return!0}},{key:"getApplicableToken",value:function(){if(this.getIterator().moveLeft()){var e=this.getIterator().getValue();return!e||this.getParent()&&!this.getParent().isChildAllowed()?null:new(t.getApplicable(e))(this.getIterator())}return null}},{key:"parseLeft",value:function(){var t=this.getApplicableToken();t&&(this.setRight(t),t.setRoot(this.getRoot()),t.setLeft(this),t.setParent(this.getParent()),this.getParent().addChild(t),t.parse())}},{key:"parse",value:function(){}},{key:"evaluate",value:function(){}}]),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}a=[],(f="registeredTokenTypes")in(c=l)?Object.defineProperty(c,f,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[f]=a;var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).children=[],e}return e=u,(n=[{key:"addChild",value:function(t){this.children.push(t)}},{key:"removeChild",value:function(t){this.children=this.children.filter((function(e){return e!==t}))}},{key:"addChildAtIndex",value:function(t,e){this.children[e]=t}},{key:"getChild",value:function(t){return this.children[t]}},{key:"parseUp",value:function(){var t=this.getApplicableToken();t&&(this.addChild(t),t.setRoot(this.getRoot()),t.setParent(this),t.parse())}},{key:"evaluate",value:function(t){return this.getChild(0).evaluate(t)}}])&&p(e.prototype,n),u}(l);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).globalChildren=[],e.setRoot(w(e)),e}return e=u,(n=[{key:"setRoot",value:function(t){this.root=t}},{key:"addGlobalChild",value:function(t){this.globalChildren.push(t)}},{key:"getGlobalList",value:function(t){return this.globalChildren}},{key:"parse",value:function(){this.parseUp()}}])&&d(e.prototype,n),u}(v);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).value=t.getValue(),e}return e=u,(n=[{key:"setValue",value:function(t){this.value=t}},{key:"getValue",value:function(){return this.value}},{key:"parse",value:function(){this.parseLeft()}}])&&_(e.prototype,n),u}(l);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(o);if(i){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function c(){return E(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return/^[0-9]$/i.test(t)}}],(n=[{key:"parse",value:function(){for(;;){var t=this.getIterator().getNextValue();if(!/^[0-9]$/i.test(t))break;this.getIterator().moveLeft(),this.setValue(this.getValue()+""+t)}this.parseLeft()}},{key:"evaluate",value:function(){return Number(this.getValue())}}])&&L(e.prototype,n),r&&L(e,r),c}(x);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(o);if(i){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return q(this,t)});function c(){return G(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return/^[a-z]$/i.test(t)}}],(n=[{key:"parse",value:function(){for(;;){var t=this.getIterator().getNextValue();if(!/^[a-z0-9]$/i.test(t))break;this.getIterator().moveLeft(),this.setValue(this.getValue()+""+t)}this.parseLeft()}},{key:"evaluate",value:function(t){var e=this.getValue();if(!t||!(e in t))throw SyntaxError("Expected variable is not defined ".concat(e));var n=t[e];return Number("function"==typeof n?n():n)}}])&&$(e.prototype,n),r&&$(e,r),c}(x);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function K(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(o);if(i){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return K(this,t)});function c(){return F(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"("===t}}],(n=[{key:"isChildAllowed",value:function(){return")"!==this.getIterator().getValue()}},{key:"parse",value:function(){")"===this.getIterator().getNextValue()&&(this.getIterator().moveNext(),this.parseLeft()),this.parseUp(),this.parseLeft()}}])&&H(e.prototype,n),r&&H(e,r),c}(v);function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function et(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ct(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var at=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ft(r);if(o){var n=ft(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ct(this,t)});function u(){return ot(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"setLeftChild",value:function(t){this.addChildAtIndex(t,0)}},{key:"getLeftChild",value:function(){return this.getChild(0)}},{key:"setRightChild",value:function(t){this.addChildAtIndex(t,1)}},{key:"getRightChild",value:function(){return this.getChild(1)}},{key:"transformLeftOperand",value:function(){var t=this.getLeft();if(!t)throw SyntaxError("Left operand is required");var e=t.getLeft();t.getParent().removeChild(t),t.setParent(this),t.setLeft(null),t.setRight(null),this.setLeftChild(t),e&&e.setRight(this),this.setLeft(e)}},{key:"transformRightOperand",value:function(){var t=this.getRight();if(!t)throw SyntaxError("Right operand is required");var e=t.getRight();t.getParent().removeChild(t),t.setParent(this),t.setLeft(null),t.setRight(null),this.setRightChild(t),e&&e.setLeft(this),this.setRight(e)}},{key:"transform",value:function(){this.transformLeftOperand(),this.transformRightOperand()}}])&&it(e.prototype,n),u}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=nt(r);if(o){var n=nt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return et(this,t)});function u(){return Y(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"parse",value:function(){this.parseLeft()}}])&&Z(e.prototype,n),u}(v));function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yt(t,e){return(yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ht(t,e){return!e||"object"!==lt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function bt(t){return(bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var vt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yt(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=bt(o);if(i){var n=bt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ht(this,t)});function c(){return st(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"+"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)+this.getRightChild().evaluate(t)}}])&&pt(e.prototype,n),r&&pt(e,r),c}(at);function gt(t){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function wt(t,e){return!e||"object"!==gt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function St(t){return(St=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var kt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=St(o);if(i){var n=St(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return wt(this,t)});function c(){return dt(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"/"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)/this.getRightChild().evaluate(t)}}])&&mt(e.prototype,n),r&&mt(e,r),c}(at);function Rt(t){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Pt(t,e){return(Pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Tt(t,e){return!e||"object"!==Rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function xt(t){return(xt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Pt(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=xt(o);if(i){var n=xt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Tt(this,t)});function c(){return _t(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"*"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)*this.getRightChild().evaluate(t)}}])&&jt(e.prototype,n),r&&jt(e,r),c}(at);function Et(t){return(Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Lt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function At(t,e){return(At=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Vt(t,e){return!e||"object"!==Et(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function It(t){return(It=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&At(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=It(o);if(i){var n=It(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Vt(this,t)});function c(){return Lt(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"-"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)-this.getRightChild().evaluate(t)}}])&&Dt(e.prototype,n),r&&Dt(e,r),c}(at);function Gt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}l.registerTokenType(I),l.registerTokenType(M),l.registerTokenType(vt),l.registerTokenType(Nt),l.registerTokenType(kt),l.registerTokenType(Ct),l.registerTokenType(W);var $t=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rawString=e}var e,n;return e=t,(n=[{key:"parse",value:function(){var t,e,n;this.rootToken=function(t){var e=new o(t);e.removeCharacters(/\s/g);var n=new k(e);return n.parse(),n}(this.rawString),t=this.rootToken,e=[Ct,kt,vt,Nt],n=t.getGlobalList(),e.forEach((function(t){n.forEach((function(e){e instanceof t&&e.transform()}))}))}},{key:"getParsedTree",value:function(){return this.rootToken}},{key:"evaluate",value:function(t){return this.rootToken.evaluate(t)}}])&&Gt(e.prototype,n),t}()}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(48)})()}));
//# sourceMappingURL=index.js.map