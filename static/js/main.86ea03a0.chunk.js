(this["webpackJsonp@datnq/unidata-example"]=this["webpackJsonp@datnq/unidata-example"]||[]).push([[0],{166:function(e,t,n){},167:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(49),c=n.n(o),u=n(29),l=n.n(u),i=n(50),d=n.n(i),s=n(30),f=n.n(s),m=n(51),p=n.n(m),v=n(52),b=n.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=function(e){return"function"===typeof e?e:function(t){return Object.keys(e).every((function(n){return void 0!==t[n]&&e[n]===t[n]}))}},j=Object(a.createContext)({}),h={},O={},g=function(e){var t=e.initialData,n=e.children,o=Object(a.useState)()[1],c=function(e){O=function(e,t){return y({},e,{},f()(t,(function(){return d.a.generate()})))}(O,e),o(O)};Object(a.useEffect)((function(){l()(h,t)||c(t)}),[t]);var u=Object(a.useCallback)((function(e){var t=y({},e,{},h);l()(Object.keys(t),Object.keys(h))||(h=y({},e,{},h),c(t))}),[O]),i=function(e,t){var n;h[e]=Array.isArray(t)?[].concat(t):t,c(((n={})[e]=t,n))},s={put:i,add:function(e,t){var n=h[e];Array.isArray(n)?i(e,[].concat(n,[t])):i(e,t)},remove:function(e,t,n){if(void 0===n&&(n=!1),!t&&!n)throw new Error("Filter is required for remove data. Unless you pass force = true");var a=h[e];if(!Array.isArray(a)||n)delete a[e],i(e,a);else{var r=E(t);i(e,a.filter((function(e,t){return!r(e,t)})))}},update:function(e,t,n){if(!t)throw new Error("Filter is required for update data");var a=h[e];if(Array.isArray(a)&&"object"===typeof n){var r=E(t);i(e,a.map((function(e,t){return r(e,t)?(o=n,"object"===typeof(a=e)?y({},a,{},o):o):e;var a,o})))}else i(e,n)}};return r.a.createElement(j.Provider,{value:{data:h,dataState:O,dataSetter:s,initData:u}},n)},k=function(e){return function(t){return function(n){var o=function(e){var t=Object(a.useContext)(j),n=t.dataSetter,r=t.dataState,o=void 0===r?{}:r,c=t.data,u=void 0===c?{}:c,l=t.initData,i=!1,d=f()(e,(function(e,t){return void 0!==u[t]||u[t]===e?u[t]:(i=!0,e)})),s=b()(o,Object.keys(e));return Object(a.useEffect)((function(){i&&"function"===typeof l&&l(y({},u,{},d))}),[i]),[d,n,s]}(e||{}),c=o[0],u=o[1],l=o[2],i=y({},n),d=p()(l).join("-"),s=function(){return r.a.createElement(t,Object.assign({data:c,dataSetter:u},i))};return r.a.useMemo((function(){return r.a.createElement(s,{deps:d})}),[d])}}},C=k({todos:[]})((function(e){var t=e.data;return console.log("Rendered Counter"),r.a.createElement("span",null,"Completed: ",t.todos.filter((function(e){return e.completed})).length,"/",t.todos.length)})),x=n(17),A=n(53),S=n(54),w=n(57),D=n(55),q=n(31),F=function(e){Object(w.a)(n,e);var t=Object(D.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"extractFromEvent",value:function(e){var t=e.target,n=t.value,a=t.checked;this.setValue(a?n:null)}}]),n}(x.a),R=function(){return{content:{label:"Todo Content",validators:[{test:Object(q.required)(),errorMessage:"%(label)s is required"},{test:Object(q.minlen)(6),errorMessage:"%(label)s must be longer than 6 characters"}]},completed:{label:"Completed",type:F}}},M=k()((function(e){var t=e.dataSetter,n=Object(a.useRef)(null),o=Object(x.b)(R),c=o.content,u=o.completed,l=function(e){o.extractFromEvent(e)};return console.log("Rendered Add Todo"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:n,onChange:l,name:c.name,value:c.value}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:u.name,checked:"completed"===u.value,value:"completed",onChange:l})," ","Completed"),r.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),o.isValid&&(t.add("todos",o.data),o.clearData())}},"Add todo"),r.a.createElement("br",null),c.isValid?null:r.a.createElement("p",null,c.error.message))})),T=n(56),V=k({todos:[]})((function(e){var t=e.data,n=e.dataSetter,a=t.todos,o=function(e){var t=e.target,r=t.checked,o=t.value,c=parseInt(o,10),u=a[c];a[c]=Object(T.a)({},u,{completed:r}),n.put("todos",a)};return console.log("Rendered Todo list"),r.a.createElement("ol",null,a.map((function(e,t){return r.a.createElement("li",{key:e.content},r.a.createElement("input",{type:"checkbox",checked:e.completed,value:t,onChange:o}),e.completed?r.a.createElement("s",null,e.content):e.content)})))}));n(166);var I,J=(I={},function(e){return function(t){var n=Object(a.useState)(I||{}),o=n[0],c=n[1];return r.a.createElement(g,{initialData:o,setData:c},r.a.createElement(e,Object.assign({},t)))}})((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("hr",null),r.a.createElement(C,null),r.a.createElement(V,null))}));c.a.render(r.a.createElement(J,null),document.getElementById("root"))},58:function(e,t,n){e.exports=n(167)}},[[58,1,2]]]);
//# sourceMappingURL=main.86ea03a0.chunk.js.map