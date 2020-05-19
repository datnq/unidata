(this["webpackJsonp@datnq/unidata-example"]=this["webpackJsonp@datnq/unidata-example"]||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(60),o=n.n(c),u=n(42),l=n(22),i=n(11),d=n(1),s=n(39),f=n.n(s),p=n(40),m=n.n(p),b=n(61),h=n.n(b),v=n(62),y=n.n(v),g=n(63),E=n.n(g),j=function(e){return"function"===typeof e?e:function(t){return Object.keys(e).every((function(n){return void 0!==t[n]&&e[n]===t[n]}))}},O=function(e){return m()(e,(function(){return h.a.generate()}))},k=function(e,t){return"".concat(e).concat(t.displayName||t.name||"Component")},C=function(e){return{data:e,state:O(e)}},x=function(e,t){return{data:Object(d.a)({},e.data,{},t),state:Object(d.a)({},e.state,{},O(t))}},w=function(e,t){var n=t.type,a=t.name,r=t.value,c=t.filter,o=t.forced,u=t.data,s=e.data[a],p=Object(d.a)({},u,{},e.data),m=function(t,n){return f()(e.data[t],n)&&e.state[t]?e:x(e,Object(l.a)({},t,Array.isArray(n)?Object(i.a)(n):n))};switch(n){case"init":return f()(Object.keys(p),Object.keys(e.data))?e:x(e,p);case"put":return m(a,r);case"add":return Array.isArray(s)?m(a,[].concat(Object(i.a)(s),[r])):m(a,r);case"update":if(!c)throw new Error("Filter is required for update data");if(Array.isArray(s)&&"object"===typeof r){var b=j(c);return m(a,s.map((function(e,t){return b(e,t)?(a=r,"object"===typeof(n=e)?Object(d.a)({},n,{},a):a):e;var n,a})))}return m(a,r);case"remove":if(!c&&!o)throw new Error("Filter is required for remove data. Unless you pass force = true");if(!Array.isArray(s)||o)return delete s[a],m(a,s);var h=j(c);return m(a,s.filter((function(e,t){return!h(e,t)})));default:throw new Error}},A=Object(a.createContext)({store:{data:{},state:{}},dispatch:function(){}});A.displayName="UnidataContext";var R=function(e){var t=e.initialData,n=e.children,c=Object(a.useReducer)(w,t,C),o=Object(u.a)(c,2),l=o[0],i=o[1];return r.a.createElement(A.Provider,{value:{store:l,dispatch:i}},n)},q=function(e){return function(t){var n=function(n){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useContext)(A),n=t.dispatch,r=t.store,c=r.data,o=r.state,u={},l=m()(e,(function(e,t){return void 0!==c[t]||c[t]===e?c[t]:(u[t]=e,e)})),i=y()(o,Object.keys(e)),d={data:l,state:i},s={put:function(e,t){return n({type:"put",name:e,value:t})},add:function(e,t){return n({type:"add",name:e,value:t})},update:function(e,t,a){return n({type:"update",name:e,value:a,filter:t})},remove:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n({type:"remove",filter:t,name:e,forced:a})}};return Object(a.useEffect)((function(){Object.keys(u)&&n({type:"init",data:u})}),[u,c,n,l]),[d,s]}(e||{}),o=Object(u.a)(c,2),l=o[0],i=o[1],s=Object(d.a)({},n),f=E()(l.state).join("-"),p=function(){return r.a.createElement(t,Object.assign({data:l.data,dispatcher:i},s))};return p.displayName=k("UnidataSubscribed",t),r.a.useMemo((function(){return r.a.createElement(p,{deps:f})}),[f])};return n.displayName=k("UnidataMemoized",t),n}},F=n(23),U=n(24),D=n(27),I=n(26),M=n(64),N=n.n(M),T=function(e){return function(t){e.add("logs",{content:t,id:N.a.generate()})}},z=q({logs:[]})((function(e){var t=e.data.logs;return t&&t.map((function(e,t){return r.a.createElement("p",{key:e.id},t+1,". ",e.content)}))})),V=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidUpdate",value:function(){this.log=T(this.props.dispatcher)}},{key:"render",value:function(){this.log&&this.log("Rendering Todo Counter");var e=this.props.data;return r.a.createElement("span",null,"Completed: ",e.todos.filter((function(e){return e.completed})).length,"/",e.todos.length)}}]),n}(r.a.PureComponent),_=q({todos:[]})(V),G=n(25),J=n(41),P=function(e){Object(D.a)(n,e);var t=Object(I.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"extractFromEvent",value:function(e){var t=e.target,n=t.value,a=t.checked;this.setValue(a?n:null)}}]),n}(G.a),S=function(){return{content:{label:"Todo Content",validators:[{test:Object(J.required)(),errorMessage:"%(label)s is required"},{test:Object(J.minlen)(6),errorMessage:"%(label)s must be longer than 6 characters"}]},completed:{label:"Completed",type:P}}},B=q()((function(e){var t=e.dispatcher,n=T(t),c=Object(a.useRef)(null),o=Object(G.b)(S),u=o.content,l=o.completed,i=function(e){o.extractFromEvent(e)};return Object(a.useEffect)((function(){n("Rendering Add Todo")})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:c,onChange:i,name:u.name,value:u.value}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:l.name,checked:"completed"===l.value,value:"completed",onChange:i})," ","Completed"),r.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),o.isValid&&(t.add("todos",o.data),o.clearData())}},"Add todo"),r.a.createElement("br",null),u.isValid?null:r.a.createElement("p",null,u.error.message))})),H=q({todos:[]})((function(e){var t=e.data,n=e.dispatcher,c=t.todos,o=T(n),u=function(e){var t=e.target,a=t.checked,r=t.value,o=Object(i.a)(c),u=parseInt(r,10),l=c[u];o[u]=Object(d.a)({},l,{completed:a}),n.put("todos",o)};return Object(a.useEffect)((function(){o("Rendering Todo list")})),r.a.createElement("ol",null,c.map((function(e,t){return r.a.createElement("li",{key:e.content},r.a.createElement("input",{type:"checkbox",checked:e.completed,value:t,onChange:u}),e.completed?r.a.createElement("s",null,e.content):e.content)})))})),Y=q({counter:0})((function(e){var t=e.data,n=e.dispatcher,c=T(n),o=Object(a.useCallback)((function(){n.put("counter",t.counter+1)}),[t.counter,n]);return Object(a.useEffect)((function(){c("Rendering Unrelated counter")})),r.a.createElement("p",null,t.counter," ",r.a.createElement("button",{type:"button",onClick:o},"+ Increase"))}));function K(){var e={padding:"20px",flexGrow:1,width:"50%",position:"relative"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",height:"100vh",alignItems:"stretch"}},r.a.createElement("div",{style:e},r.a.createElement("a",{href:"https://github.com/you",style:{position:"absolute",right:0,top:0}},r.a.createElement("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",class:"attachment-full size-full",alt:"Fork me on GitHub","data-recalc-dims":"1"})),r.a.createElement(B,null),r.a.createElement("hr",null),r.a.createElement(_,null),r.a.createElement(Y,null),r.a.createElement(H,null)),r.a.createElement("div",{style:Object(d.a)({},e,{color:"#fff",backgroundColor:"#333",overflowY:"scroll",boxShadow:"inset 0 0 20px rgba(0,0,0,.4)"})},r.a.createElement("h2",null,"Rendering logger"),r.a.createElement(z,null))))}n(181);o.a.render(r.a.createElement(R,{initialData:{logs:[]}},r.a.createElement(K,null)),document.getElementById("root"))},65:function(e,t,n){e.exports=n(182)}},[[65,1,2]]]);
//# sourceMappingURL=main.ec49b58c.chunk.js.map