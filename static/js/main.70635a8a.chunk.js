(this["webpackJsonp@datnq/unidata-example"]=this["webpackJsonp@datnq/unidata-example"]||[]).push([[0],{176:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(55),o=n.n(c),l=n(35),u=n.n(l),i=n(56),s=n.n(i),d=n(57),m=n.n(d),p=n(58),f=n.n(p);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=function(e){return u()(e,(function(){return s.a.generate()}))},v=function(e,t){return""+e+(t.displayName||t.name||"Component")},g=function(e){return{data:e,state:h(e)}},E=function(e,t){return function(e,t){return{data:b({},e.data,t),state:b({},e.state,h(t))}}(e,t(e.data))},j=Object(a.createContext)({store:{data:{},state:{}},dispatch:function(){}});j.displayName="UnidataContext";var O=function(e){var t=e.initialData,n=e.children,c=Object(a.useReducer)(E,t,g),o=c[0],l=c[1];return r.a.createElement(j.Provider,{value:{store:o,dispatch:l}},n)},y=function(e){return function(t){var n=function(n){var c=function(e){void 0===e&&(e={});var t=Object(a.useContext)(j),n=t.dispatch,r=t.store,c=r.data,o=r.state,l={},i=u()(e,(function(e,t){return void 0!==c[t]||c[t]===e?c[t]:(l[t]=e,e)})),s=Object.keys(l).length>0,d=f()(m()(o,Object.keys(e))).join("-");return Object(a.useEffect)((function(){s&&n((function(){return l}))}),[s,n,l]),[i,n,d]}(e||{}),o=c[0],l=c[1],i=c[2],s=b({},n),d=function(){return r.a.createElement(t,Object.assign({data:o,dispatch:l},s))};return d.displayName=v("UnidataSubscribed",t),r.a.useMemo((function(){return r.a.createElement(d,{state:i})}),[i])};return n.displayName=v("UnidataMemoized",t),n}},k=n(4),C=n(19),x=n(20),w=n(24),D=n(22),R=n(23),q=n(59),M=n.n(q),T=function(e){return function(t){return e((function(e){var n=e.logs,a=void 0===n?[]:n;return{logs:[].concat(Object(R.a)(a),[{content:t,id:M.a.generate(),time:new Date}])}}))}},F=y({logs:[]})((function(e){var t,n=e.data.logs,a=[];return(void 0===n?[]:n).forEach((function(e,n){if(0===n)return a.push(Object(k.a)(Object(k.a)({},e),{},{count:1})),void(t=e.content);var r=e.content;t&&r===t?(a[a.length-1].count+=1,a[a.length-1].time=new Date):(a.push(Object(k.a)(Object(k.a)({},e),{},{count:1})),t=r)})),a&&r.a.createElement("div",null,a.map((function(e){return r.a.createElement("p",{key:e.id},r.a.createElement("code",null,e.time.toLocaleTimeString())," \u2013 ",e.content,e.count>1?" (".concat(e.count,")"):"")})))})),I=function(e){Object(w.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).log=T(a.props.dispatch),a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.log&&this.log("Rendering Todo Counter")}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement("span",null,"Completed: ",e.todos.filter((function(e){return e.completed})).length,"/",e.todos.length)}}]),n}(r.a.PureComponent),N=y({todos:[]})(I),U=n(21),P=n(36),S=function(e){Object(w.a)(n,e);var t=Object(D.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"extractFromEvent",value:function(e){var t=e.target,n=t.value,a=t.checked;this.setValue(a?n:null)}}]),n}(U.a),V=function(){return{content:{label:"Todo Content",validators:[{test:Object(P.required)(),errorMessage:"%(label)s is required"},{test:Object(P.minlen)(6),errorMessage:"%(label)s must be longer than 6 characters"}]},completed:{label:"Completed",type:S}}},_=y()((function(e){var t=e.dispatch,n=T(t),c=Object(U.b)(V),o=c.content,l=c.completed,u=function(e){c.extractFromEvent(e)};return Object(a.useEffect)((function(){n("Rendering Add Todo")})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:u,name:o.name,value:o.value}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:l.name,checked:"completed"===l.value,value:"completed",onChange:u})," ","Completed"),r.a.createElement("button",{type:"button",onClick:function(e){if(e.preventDefault(),c.isValid){var n=c.data;t((function(e){var t=e.todos;return{todos:[].concat(Object(R.a)(t),[n])}})),c.clearData()}}},"Add todo"),r.a.createElement("br",null),o.isValid?null:r.a.createElement("p",null,o.error.message))})),z=y({todos:[]})((function(e){var t=e.data,n=e.dispatch,c=t.todos,o=T(n),l=function(e){var t=e.target,a=t.checked,r=t.value;n((function(e){var t=e.todos;e.logs;return t[parseInt(r,10)].completed=a,{todos:t}}))};return Object(a.useEffect)((function(){o("Rendering Todo list")})),r.a.createElement("ol",null,c.map((function(e,t){return r.a.createElement("li",{key:e.content},r.a.createElement("input",{type:"checkbox",checked:e.completed,value:t,onChange:l}),e.completed?r.a.createElement("s",null,e.content):e.content)})))})),A=y({counter:0})((function(e){var t=e.data,n=e.dispatch,c=T(n),o=Object(a.useCallback)((function(){n((function(e){return{counter:e.counter+1}}))}),[n]);return Object(a.useEffect)((function(){c("Rendering Unrelated counter")})),r.a.createElement("p",null,r.a.createElement("button",{type:"button",onClick:o},"+ Increase")," "+t.counter)}));function G(){var e={padding:"20px",flexGrow:1,width:"50%",position:"relative"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",height:"100vh",alignItems:"stretch"}},r.a.createElement("div",{style:e},r.a.createElement("a",{href:"https://github.com/datnq/unidata",style:{position:"absolute",right:0,top:0}},r.a.createElement("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"})),r.a.createElement(_,null),r.a.createElement("hr",null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(z,null)),r.a.createElement("div",{style:Object(k.a)(Object(k.a)({},e),{},{color:"#fff",backgroundColor:"#333",overflowY:"scroll",boxShadow:"inset 0 0 20px rgba(0,0,0,.4)"})},r.a.createElement("h2",null,"Rendering logger"),r.a.createElement(F,null))))}n(176);o.a.render(r.a.createElement(O,{initialData:{}},r.a.createElement(G,null)),document.getElementById("root"))},60:function(e,t,n){e.exports=n(177)}},[[60,1,2]]]);
//# sourceMappingURL=main.70635a8a.chunk.js.map