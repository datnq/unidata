(this["webpackJsonp@datnq/unidata-example"]=this["webpackJsonp@datnq/unidata-example"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(58),o=n.n(c),l=n(27),u=n(1),i=n(38),d=n.n(i),s=n(59),m=n.n(s),f=n(60),p=n.n(f),b=n(61),h=n.n(b),v=function(e){return d()(e,(function(){return m.a.generate()}))},g=function(e,t){return"".concat(e).concat(t.displayName||t.name||"Component")},E=function(e){return{data:e,state:v(e)}},j=function(e,t){return function(e,t){return{data:Object(u.a)(Object(u.a)({},e.data),t),state:Object(u.a)(Object(u.a)({},e.state),v(t))}}(e,t(e.data))},O=Object(a.createContext)({store:{data:{},state:{}},dispatch:function(){}});O.displayName="UnidataContext";var y=function(e){var t=e.initialData,n=e.children,c=Object(a.useReducer)(j,t,E),o=Object(l.a)(c,2),u=o[0],i=o[1];return r.a.createElement(O.Provider,{value:{store:u,dispatch:i}},n)},k=function(e){return function(t){var n=function(n){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useContext)(O),n=t.dispatch,r=t.store,c=r.data,o=r.state,u=Object(a.useMemo)((function(){var t={},n=d()(e,(function(e,n){return void 0!==c[n]||c[n]===e?c[n]:(t[n]=e,e)})),a=h()(p()(o,Object.keys(e))).join("-");return[t,n,a]}),[c,o,e]),i=Object(l.a)(u,3),s=i[0],m=i[1],f=i[2],b=Object.keys(s).length>0;return Object(a.useEffect)((function(){b&&n((function(){return s}))}),[b,n,s]),[m,n,f]}(e||{}),o=Object(l.a)(c,3),i=o[0],s=o[1],m=o[2],f=Object(u.a)({},n),b=function(){return r.a.createElement(t,Object.assign({data:i,dispatch:s},f))};return b.displayName=g("UnidataSubscribed",t),r.a.useMemo((function(){return r.a.createElement(b,{state:m})}),[m])};return n.displayName=g("UnidataMemoized",t),n}},C=n(21),x=n(22),w=n(26),D=n(24),M=n(25),R=n(62),q=n.n(R),T=function(e){return function(t){return e((function(e){var n=e.logs,a=void 0===n?[]:n;return{logs:[].concat(Object(M.a)(a),[{content:t,id:q.a.generate(),time:new Date}])}}))}},F=k({logs:[]})((function(e){var t,n=e.data.logs,a=[];return(void 0===n?[]:n).forEach((function(e,n){if(0===n)return a.push(Object(u.a)(Object(u.a)({},e),{},{count:1})),void(t=e.content);var r=e.content;t&&r===t?(a[a.length-1].count+=1,a[a.length-1].time=new Date):(a.push(Object(u.a)(Object(u.a)({},e),{},{count:1})),t=r)})),a&&r.a.createElement("div",null,a.map((function(e){return r.a.createElement("p",{key:e.id},r.a.createElement("code",null,e.time.toLocaleTimeString())," \u2013 ",e.content,e.count>1?" (".concat(e.count,")"):"")})))})),I=function(e){Object(w.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).log=T(a.props.dispatch),a}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.log&&this.log("Rendering Todo Counter")}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement("span",null,"Completed: ",e.todos.filter((function(e){return e.completed})).length,"/",e.todos.length)}}]),n}(r.a.PureComponent),N=k({todos:[]})(I),U=n(23),S=n(39),V=function(e){Object(w.a)(n,e);var t=Object(D.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"extractFromEvent",value:function(e){var t=e.target,n=t.value,a=t.checked;this.setValue(a?n:null)}}]),n}(U.a),_=function(){return{content:{label:"Todo Content",validators:[{test:Object(S.required)(),errorMessage:"%(label)s is required"},{test:Object(S.minlen)(6),errorMessage:"%(label)s must be longer than 6 characters"}]},completed:{label:"Completed",type:V}}},z=k()((function(e){var t=e.dispatch,n=T(t),c=Object(U.b)(_),o=c.content,l=c.completed,u=function(e){c.extractFromEvent(e)};return Object(a.useEffect)((function(){n("Rendering Add Todo")})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:u,name:o.name,value:o.value}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:l.name,checked:"completed"===l.value,value:"completed",onChange:u})," ","Completed"),r.a.createElement("button",{type:"button",onClick:function(e){if(e.preventDefault(),c.isValid){var n=c.data;t((function(e){var t=e.todos;return{todos:[].concat(Object(M.a)(t),[n])}})),c.clearData()}}},"Add todo"),r.a.createElement("br",null),o.isValid?null:r.a.createElement("p",null,o.error.message))})),A=k({todos:[]})((function(e){var t=e.data,n=e.dispatch,c=t.todos,o=T(n),l=function(e){var t=e.target,a=t.checked,r=t.value;n((function(e){var t=e.todos;e.logs;return t[parseInt(r,10)].completed=a,{todos:t}}))};return Object(a.useEffect)((function(){o("Rendering Todo list")})),r.a.createElement("ol",null,c.map((function(e,t){return r.a.createElement("li",{key:e.content},r.a.createElement("input",{type:"checkbox",checked:e.completed,value:t,onChange:l}),e.completed?r.a.createElement("s",null,e.content):e.content)})))})),G=k({counter:0})((function(e){var t=e.data,n=e.dispatch,c=T(n),o=Object(a.useCallback)((function(){n((function(e){return{counter:e.counter+1}}))}),[n]);return Object(a.useEffect)((function(){c("Rendering Unrelated counter")})),r.a.createElement("p",null,r.a.createElement("button",{type:"button",onClick:o},"+ Increase")," "+t.counter)}));function J(){var e={padding:"20px",flexGrow:1,width:"50%",position:"relative"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",height:"100vh",alignItems:"stretch"}},r.a.createElement("div",{style:e},r.a.createElement("a",{href:"https://github.com/datnq/unidata",style:{position:"absolute",right:0,top:0}},r.a.createElement("img",{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"})),r.a.createElement(z,null),r.a.createElement("hr",null),r.a.createElement(N,null),r.a.createElement(G,null),r.a.createElement(A,null)),r.a.createElement("div",{style:Object(u.a)(Object(u.a)({},e),{},{color:"#fff",backgroundColor:"#333",overflowY:"scroll",boxShadow:"inset 0 0 20px rgba(0,0,0,.4)"})},r.a.createElement("h2",null,"Rendering logger"),r.a.createElement(F,null))))}n(179);o.a.render(r.a.createElement(y,{initialData:{}},r.a.createElement(J,null)),document.getElementById("root"))},63:function(e,t,n){e.exports=n(180)}},[[63,1,2]]]);
//# sourceMappingURL=main.92cfdcf0.chunk.js.map