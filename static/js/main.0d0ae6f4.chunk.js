(this["webpackJsonp@datnq/unidata-example"]=this["webpackJsonp@datnq/unidata-example"]||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(60),o=n.n(c),u=n(42),l=n(22),i=n(11),d=n(3),s=n(39),f=n.n(s),p=n(40),m=n.n(p),b=n(61),v=n.n(b),h=n(62),y=n.n(h),j=n(63),E=n.n(j),O=function(e){return"function"===typeof e?e:function(t){return Object.keys(e).every((function(n){return void 0!==t[n]&&e[n]===t[n]}))}},g=function(e){return m()(e,(function(){return v.a.generate()}))},k=function(e,t){return"".concat(e).concat(t.displayName||t.name||"Component")},C=function(e){return{data:e,state:g(e)}},x=function(e,t){return{data:Object(d.a)({},e.data,{},t),state:Object(d.a)({},e.state,{},g(t))}},w=function(e,t){var n=t.type,a=t.name,r=t.value,c=t.filter,o=t.forced,u=t.data,s=e.data[a],p=Object(d.a)({},u,{},e.data),m=function(t,n){return f()(e.data[t],n)&&e.state[t]?e:x(e,Object(l.a)({},t,Array.isArray(n)?Object(i.a)(n):n))};switch(n){case"init":return f()(Object.keys(p),Object.keys(e.data))?e:x(e,p);case"put":return m(a,r);case"add":return Array.isArray(s)?m(a,[].concat(Object(i.a)(s),[r])):m(a,r);case"update":if(!c)throw new Error("Filter is required for update data");if(Array.isArray(s)&&"object"===typeof r){var b=O(c);return m(a,s.map((function(e,t){return b(e,t)?(a=r,"object"===typeof(n=e)?Object(d.a)({},n,{},a):a):e;var n,a})))}return m(a,r);case"remove":if(!c&&!o)throw new Error("Filter is required for remove data. Unless you pass force = true");if(!Array.isArray(s)||o)return delete s[a],m(a,s);var v=O(c);return m(a,s.filter((function(e,t){return!v(e,t)})));default:throw new Error}},A=Object(a.createContext)({store:{data:{},state:{}},dispatch:function(){}});A.displayName="UnidataContext";var q=function(e){var t=e.initialData,n=e.children,c=Object(a.useReducer)(w,t,C),o=Object(u.a)(c,2),l=o[0],i=o[1];return r.a.createElement(A.Provider,{value:{store:l,dispatch:i}},n)},R=function(e){return function(t){var n=function(n){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useContext)(A),n=t.dispatch,r=t.store,c=r.data,o=r.state,u=!1,l=m()(e,(function(e,t){return void 0!==c[t]||c[t]===e?c[t]:(u=!0,e)})),i=y()(o,Object.keys(e)),s={data:l,state:i},f={put:function(e,t){return n({type:"put",name:e,value:t})},add:function(e,t){return n({type:"add",name:e,value:t})},update:function(e,t,a){return n({type:"update",name:e,value:a,filter:t})},remove:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n({type:"remove",filter:t,name:e,forced:a})}};return Object(a.useEffect)((function(){u&&n({type:"init",data:Object(d.a)({},c,{},l)})}),[u,c,n,l]),[s,f]}(e||{}),o=Object(u.a)(c,2),l=o[0],i=o[1],s=Object(d.a)({},n),f=E()(l.state).join("-"),p=function(){return r.a.createElement(t,Object.assign({data:l.data,dispatcher:i},s))};return p.displayName=k("UnidataSubscribed",t),r.a.useMemo((function(){return r.a.createElement(p,{deps:f})}),[f])};return n.displayName=k("UnidataMemoized",t),n}},U=n(23),D=n(24),F=n(27),I=n(26),M=n(64),N=n.n(M),T=function(e){return function(t){e.add("logs",{content:t,id:N.a.generate()})}},V=R({logs:[]})((function(e){var t=e.data.logs;return t&&t.map((function(e,t){return r.a.createElement("p",{key:e.id},t+1,". ",e.content)}))})),G=function(e){Object(F.a)(n,e);var t=Object(I.a)(n);function n(){return Object(U.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidUpdate",value:function(){this.log=T(this.props.dispatcher)}},{key:"render",value:function(){this.log&&this.log("Rendering Todo Counter");var e=this.props.data;return r.a.createElement("span",null,"Completed: ",e.todos.filter((function(e){return e.completed})).length,"/",e.todos.length)}}]),n}(r.a.PureComponent),J=R({todos:[]})(G),P=n(25),z=n(41),B=function(e){Object(F.a)(n,e);var t=Object(I.a)(n);function n(){return Object(U.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"extractFromEvent",value:function(e){var t=e.target,n=t.value,a=t.checked;this.setValue(a?n:null)}}]),n}(P.a),S=function(){return{content:{label:"Todo Content",validators:[{test:Object(z.required)(),errorMessage:"%(label)s is required"},{test:Object(z.minlen)(6),errorMessage:"%(label)s must be longer than 6 characters"}]},completed:{label:"Completed",type:B}}},Y=R()((function(e){var t=e.dispatcher,n=T(t),c=Object(a.useRef)(null),o=Object(P.b)(S),u=o.content,l=o.completed,i=function(e){o.extractFromEvent(e)};return Object(a.useEffect)((function(){n("Rendered Add Todo")})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:c,onChange:i,name:u.name,value:u.value}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:l.name,checked:"completed"===l.value,value:"completed",onChange:i})," ","Completed"),r.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),o.isValid&&(t.add("todos",o.data),o.clearData())}},"Add todo"),r.a.createElement("br",null),u.isValid?null:r.a.createElement("p",null,u.error.message))})),H=R({todos:[]})((function(e){var t=e.data,n=e.dispatcher,c=t.todos,o=T(n),u=function(e){var t=e.target,a=t.checked,r=t.value,o=Object(i.a)(c),u=parseInt(r,10),l=c[u];o[u]=Object(d.a)({},l,{completed:a}),n.put("todos",o)};return Object(a.useEffect)((function(){o("Rendering Todo list")})),r.a.createElement("ol",null,c.map((function(e,t){return r.a.createElement("li",{key:e.content},r.a.createElement("input",{type:"checkbox",checked:e.completed,value:t,onChange:u}),e.completed?r.a.createElement("s",null,e.content):e.content)})))})),K=R({counter:0})((function(e){var t=e.data,n=e.dispatcher,c=T(n),o=Object(a.useCallback)((function(){n.put("counter",t.counter+1)}),[t.counter,n]);return Object(a.useEffect)((function(){c("Rendering Unrelated counter")})),r.a.createElement("p",null,t.counter," ",r.a.createElement("button",{type:"button",onClick:o},"+ Increase"))}));function L(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",height:"100vh",alignItems:"stretch"}},r.a.createElement("div",{style:{padding:"10px",flexGrow:1}},r.a.createElement(Y,null),r.a.createElement("hr",null),r.a.createElement(J,null),r.a.createElement(K,null),r.a.createElement(H,null)),r.a.createElement("div",{style:{padding:"10px",flexGrow:1,backgroundColor:"#f3f3f3",overflowY:"scroll"}},r.a.createElement(V,null))))}n(181);o.a.render(r.a.createElement(q,{initialData:{logs:[]}},r.a.createElement(L,null)),document.getElementById("root"))},65:function(e,t,n){e.exports=n(182)}},[[65,1,2]]]);
//# sourceMappingURL=main.0d0ae6f4.chunk.js.map