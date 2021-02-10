!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EvalExp=e():t.EvalExp=e()}(this,(function(){return(()=>{"use strict";var t={426:(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,{EvalExp:()=>te,default:()=>ne,evaluate:()=>ee});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rawString=e,this.index=-1}var e,n;return e=t,(n=[{key:"removeCharacters",value:function(t){this.rawString=this.rawString.replace(t,"")}},{key:"getValue",value:function(){return this.rawString[this.index]}},{key:"getNextValue",value:function(){return this.rawString[this.index+1]}},{key:"getPrevValue",value:function(){return this.rawString[this.index-1]}},{key:"moveLeft",value:function(){return this.index+1>=this.rawString.length?null:(this.index++,!0)}},{key:"moveRight",value:function(){return this.index-1<0?null:(this.index--,!0)}}])&&r(e.prototype,n),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var c,f,a,l=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),(this instanceof t?this.constructor:void 0)===t)throw SyntaxError("AbstractToken is abstract class");this.iterator=e,this.left=null,this.right=null,this.parent=null,this.root=null}return u(t,null,[{key:"registerTokenType",value:function(e){t.registeredTokenTypes.push(e)}},{key:"getApplicable",value:function(e){var n=t.registeredTokenTypes.find((function(t){return t.isApplicable(e)}));if(n)return n;throw SyntaxError("No applicable token type for ".concat(e))}},{key:"isApplicable",value:function(t){return!1}}]),u(t,[{key:"getIterator",value:function(){return this.iterator}},{key:"setLeft",value:function(t){this.left=t}},{key:"getLeft",value:function(){return this.left}},{key:"setRight",value:function(t){this.right=t}},{key:"getRight",value:function(){return this.right}},{key:"setParent",value:function(t){this.parent=t}},{key:"getParent",value:function(){return this.parent}},{key:"setRoot",value:function(t){this.root=t,this.root.addGlobalChild(this)}},{key:"getRoot",value:function(){return this.root}},{key:"isChildAllowed",value:function(){return!0}},{key:"getApplicableToken",value:function(){if(this.getIterator().moveLeft()){var e=this.getIterator().getValue();return!e||this.getParent()&&!this.getParent().isChildAllowed()?null:new(t.getApplicable(e))(this.getIterator())}return null}},{key:"parseLeft",value:function(){var t=this.getApplicableToken();t&&(this.setRight(t),t.setRoot(this.getRoot()),t.setLeft(this),t.setParent(this.getParent()),this.getParent().addChild(t),t.parse())}},{key:"parse",value:function(){}},{key:"transform",value:function(){}},{key:"evaluate",value:function(){}}]),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}a=[],(f="registeredTokenTypes")in(c=l)?Object.defineProperty(c,f,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[f]=a;var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return h(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).children=[],e}return e=u,(n=[{key:"addChild",value:function(t){this.children.push(t)}},{key:"removeChild",value:function(t){this.children=this.children.filter((function(e){return e!==t}))}},{key:"addChildAtIndex",value:function(t,e){this.children[e]=t}},{key:"getChild",value:function(t){return this.children[t]}},{key:"getNumChildren",value:function(){return this.children.length}},{key:"getChildren",value:function(){return this.children}},{key:"parseUp",value:function(){var t=this.getApplicableToken();t&&(this.addChild(t),t.setRoot(this.getRoot()),t.setParent(this),t.parse())}},{key:"evaluate",value:function(t){return this.getChild(0).evaluate(t)}}])&&p(e.prototype,n),u}(l);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(o){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return O(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).globalChildren=[],e.setRoot(w(e)),e}return e=u,(n=[{key:"setRoot",value:function(t){this.root=t}},{key:"addGlobalChild",value:function(t){this.globalChildren.push(t)}},{key:"getGlobalList",value:function(t){return this.globalChildren}},{key:"parse",value:function(){this.parseUp()}}])&&d(e.prototype,n),u}(v);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(o);if(i){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return D(this,t)});function c(){return E(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return/^[0-9]$/i.test(t)}}],(n=[{key:"parse",value:function(){for(var t=!1;;){var e=this.getIterator().getNextValue();if(!/^[0-9.]$/i.test(e))break;if("."===e){if(t)throw SyntaxError("More than one floating point in number");t=!0}this.getIterator().moveLeft(),this.setValue(this.getValue()+""+e)}this.parseLeft()}},{key:"evaluate",value:function(){return Number(this.getValue())}}])&&C(e.prototype,n),r&&C(e,r),c}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).value=t.getValue(),e}return e=u,(n=[{key:"setValue",value:function(t){this.value=t}},{key:"getValue",value:function(){return this.value}},{key:"parse",value:function(){this.parseLeft()}}])&&P(e.prototype,n),u}(l));function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function $(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return H(this,t)});function u(){return q(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"setLeftChild",value:function(t){this.addChildAtIndex(t,0)}},{key:"getLeftChild",value:function(){return this.getChild(0)}},{key:"setRightChild",value:function(t){this.addChildAtIndex(t,1)}},{key:"getRightChild",value:function(){return this.getChild(1)}},{key:"getLeftOperand",value:function(){var t=this.getLeft();if(!t)throw SyntaxError("Left operand is required");return t}},{key:"transformLeftOperand",value:function(t){var e=t.getLeft();t.getParent()&&t.getParent().removeChild(t),t.setParent(this),t.setLeft(null),t.setRight(null),e&&e.setRight(this)}},{key:"getRightOperand",value:function(){var t=this.getRight();if(!t)throw SyntaxError("Right operand is required");return t}},{key:"transformRightOperand",value:function(t){var e=t.getRight();t.getParent()&&t.getParent().removeChild(t),t.getParent().removeChild(t),t.setParent(this),t.setLeft(null),t.setRight(null),e&&e.setLeft(this)}},{key:"transform",value:function(){var t=this.getLeftOperand();this.transformLeftOperand(t),this.setLeftChild(t);var e=this.getRightOperand();this.transformRightOperand(e),this.setRightChild(e)}}])&&z(e.prototype,n),u}(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(r);if(o){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return $(this,t)});function u(){return V(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"parse",value:function(){this.parseLeft()}}])&&G(e.prototype,n),u}(v));function Q(t){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Y(t,e){return(Y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Z(t,e){return!e||"object"!==Q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var et=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Y(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=tt(o);if(i){var n=tt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Z(this,t)});function c(){return W(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"*"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)*this.getRightChild().evaluate(t)}}])&&X(e.prototype,n),r&&X(e,r),c}(K);function nt(t){var e=t.getLeft();if(e&&e instanceof I){var n=new et(t.getIterator());e.setRight(n),n.setLeft(e),t.setLeft(n),n.setRight(t),n.setParent(t.getParent()),t.getParent().addChild(n),n.setRoot(t.getRoot())}}function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ut(t,e){return(ut=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ct(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var at=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ut(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ft(o);if(i){var n=ft(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ct(this,t)});function c(){return ot(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"("===t}}],(n=[{key:"isChildAllowed",value:function(){return")"!==this.getIterator().getValue()}},{key:"transform",value:function(){nt(this)}},{key:"parse",value:function(){")"===this.getIterator().getNextValue()&&(this.getIterator().moveNext(),this.parseLeft()),this.parseUp(),this.parseLeft()}}])&&it(e.prototype,n),r&&it(e,r),c}(v);function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yt(t,e){return(yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ht(t,e){return!e||"object"!==lt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function bt(t){return(bt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var vt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yt(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=bt(o);if(i){var n=bt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return ht(this,t)});function c(){return st(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"("===t}}],(n=[{key:"isChildAllowed",value:function(){return![")",","].includes(this.getIterator().getValue())}},{key:"parse",value:function(){this.parseUp()}}])&&pt(e.prototype,n),r&&pt(e,r),c}(v);function gt(t){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function dt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mt(t,e,n){return e&&dt(t.prototype,e),n&&dt(t,n),t}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function wt(t,e){return!e||"object"!==gt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function kt(t){return(kt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=kt(e);if(n){var o=kt(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return wt(this,t)});function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this,t)).name=t.getValue(),e.isFunction=!1,e}return mt(o,null,[{key:"isApplicable",value:function(t){return/^[a-z]$/i.test(t)}}]),mt(o,[{key:"setName",value:function(t){this.name=t}},{key:"getName",value:function(){return this.name}},{key:"parseArguments",value:function(){if("("===this.getIterator().getNextValue())if(this.getIterator().moveLeft(),this.isFunction=!0,")"===this.getIterator().getNextValue())this.getIterator().moveLeft();else for(;this.parseArgument(),","===this.getIterator().getValue(););}},{key:"parseArgument",value:function(){var t=new vt(this.getIterator());this.addChild(t),t.setRoot(this.getRoot()),t.setParent(this),t.parse()}},{key:"parseName",value:function(){for(;;){var t=this.getIterator().getNextValue();if(!/^[a-z0-9]$/i.test(t))break;this.getIterator().moveLeft(),this.setName(this.getName()+""+t)}}},{key:"parse",value:function(){this.parseName(),this.parseArguments(),this.parseLeft()}},{key:"transform",value:function(){nt(this)}},{key:"evaluate",value:function(t){var e=this.getName();if(!t||!(e in t))throw SyntaxError("Expected variable is not defined ".concat(e));var n=t[e];if("function"==typeof n){if(n.length!==this.getNumChildren())throw SyntaxError("Expected number of arguments ".concat(n.length," but got ").concat(this.getNumChildren()));var r=this.getChildren().map((function(e){return e.evaluate(t)}));return Number(n.apply({},r))}if(this.isFunction)throw SyntaxError("Expected variable but got function ".concat(e));return Number(n)}}]),o}(v);function St(t){return(St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Pt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jt(t,e){return(jt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xt(t,e){return!e||"object"!==St(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Tt(t){return(Tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Et=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jt(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Tt(r);if(o){var n=Tt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return xt(this,t)});function u(){return Pt(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"getLeftOperand",value:function(){var t=this.getLeft();if(!t){var e=new I(this.getIterator());return e.setValue(0),e}return t}}])&&_t(e.prototype,n),u}(K);function Ct(t){return(Ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Lt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Dt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function At(t,e){return(At=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function It(t,e){return!e||"object"!==Ct(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Nt(t){return(Nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Vt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&At(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Nt(o);if(i){var n=Nt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return It(this,t)});function c(){return Lt(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"+"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)+this.getRightChild().evaluate(t)}}])&&Dt(e.prototype,n),r&&Dt(e,r),c}(Et);function Gt(t){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ft(t,e){return(Ft=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Mt(t,e){return!e||"object"!==Gt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function qt(t){return(qt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var zt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ft(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=qt(o);if(i){var n=qt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Mt(this,t)});function c(){return Ut(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"/"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)/this.getRightChild().evaluate(t)}}])&&$t(e.prototype,n),r&&$t(e,r),c}(K);function Bt(t){return(Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ht(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Kt(t,e){return(Kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Qt(t,e){return!e||"object"!==Bt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Wt(t){return(Wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Xt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Kt(t,e)}(c,t);var e,n,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Wt(o);if(i){var n=Wt(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Qt(this,t)});function c(){return Ht(this,c),u.apply(this,arguments)}return e=c,r=[{key:"isApplicable",value:function(t){return"-"===t}}],(n=[{key:"evaluate",value:function(t){return this.getLeftChild().evaluate(t)-this.getRightChild().evaluate(t)}}])&&Jt(e.prototype,n),r&&Jt(e,r),c}(Et);function Yt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Zt(t,e,n){return e&&Yt(t.prototype,e),n&&Yt(t,n),t}l.registerTokenType(I),l.registerTokenType(Rt),l.registerTokenType(Vt),l.registerTokenType(Xt),l.registerTokenType(zt),l.registerTokenType(et),l.registerTokenType(at);var te=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.expression=e,this.rootToken=null}return Zt(t,null,[{key:"evaluate",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new t(e);return r.evaluate(n)}}]),Zt(t,[{key:"parse",value:function(){var t,e,n;this.rootToken=function(t){var e=new o(t);e.removeCharacters(/\s/g);var n=new R(e);return n.parse(),n}(this.expression),t=this.rootToken,e=[at,Rt,et,zt,Vt,Xt],n=t.getGlobalList(),e.forEach((function(t){n.forEach((function(e){e instanceof t&&e.transform()}))}))}},{key:"getParsedTree",value:function(){return this.parseIfNotParsed(),this.rootToken}},{key:"evaluate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.parseIfNotParsed(),this.rootToken.evaluate(t)}},{key:"parseIfNotParsed",value:function(){this.rootToken||this.parse()}}]),t}();function ee(t,e){return te.evaluate(t,e)}const ne=te}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(426)})()}));
//# sourceMappingURL=index.js.map