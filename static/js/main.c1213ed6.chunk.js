(this["webpackJsonptr-to-do-list"]=this["webpackJsonptr-to-do-list"]||[]).push([[0],{17:function(e,t,n){e.exports=n(34)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=n(2),l=n(3),s=n(5),u=n(4),m=n(6),d=(n(22),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),f=n(15),h=(n(23),function(e){var t=e.important,n=e.done,a=e.label,r=e.onToggleImportant,i=e.onToggleDone,c=e.onDelete,l="todo-list-item";return t&&(l+=" important"),n&&(l+=" done"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:i},a),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:c},o.a.createElement("i",{className:"fa fa-trash-o"})))}),p=(n(24),function(e){var t=e.items,n=e.onToggleImportant,a=e.onToggleDone,r=e.onDelete,i=t.map((function(e){var t=e.id,i=Object(f.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(h,Object.assign({},i,{onToggleImportant:function(){return n(t)},onToggleDone:function(){return a(t)},onDelete:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"todo-list list-group"},i)}),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.items;return e?o.a.createElement(p,Object.assign({items:e},this.props)):o.a.createElement("h1",null,"Loading items")}}]),t}(a.Component),g=(n(25),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onTermChange=function(e){var t=n.props.onSearchChange,a=void 0===t?function(){}:t;n.setState({term:e.target.value}),a(e.target.value)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onTermChange})}}]),t}(a.Component)),v=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],E=function(e){var t=e.filter,n=e.onFilterChange,a=void 0===n?function(){}:n,r=v.map((function(e){var n=e.name,r=e.label,i="btn "+(n===t?"btn-info":"btn-outline-secondary");return o.a.createElement("button",{key:n,type:"button",onClick:function(){return a(n)},className:i},r)}));return o.a.createElement("div",{className:"btn-group"},r)},O=(n(26),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault();var t=n.state.label,a=n.props.onItemAdded;t.length>3&&(a((new Date).getTime(),t,!1,!1),n.setState({label:""}))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control new-todo-label",value:this.state.label,onChange:this.onLabelChange,placeholder:"What needs to be done?"}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))}}]),t}(a.Component)),T=n(10),y=(n(33),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:""},n.filterItems=function(e,t){switch(t){case"done":return e.filter((function(e){return e.done}));case"active":return e.filter((function(e){return!e.done}));default:return e}},n.onSearchChange=function(e){n.setState({search:e})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"searchItems",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.state.search,t=this.props,n=t.items,a=t.filter,r=n.filter((function(e){return e.done})).length,i=n.length-r,c=this.searchItems(this.filterItems(n,a),e);return o.a.createElement("div",{className:"todo-app"},o.a.createElement(d,{toDo:i,done:r}),o.a.createElement("div",{className:"search-panel d-flex"},o.a.createElement(g,{onSearchChange:this.onSearchChange}),o.a.createElement(E,{filter:a,onFilterChange:this.props.changeFilter})),o.a.createElement(b,{items:c,onToggleImportant:this.props.onToggleImportantTask,onToggleDone:this.props.completeTask,onDelete:this.props.removeTask}),o.a.createElement(O,{onItemAdded:this.props.addTask}))}}]),t}(a.Component)),j=Object(T.b)((function(e){return{items:e.tasks,filter:e.filters}}),{addTask:function(e,t,n,a){return{type:"ADD_TASK",id:e,label:t,important:n,done:a}},removeTask:function(e){return{type:"REMOVE_TASK",id:e}},completeTask:function(e){return{type:"COMPLETE_TASK",id:e}},onToggleImportantTask:function(e){return{type:"ON_TOGGLE_IMPORTANT_TASK",id:e}},changeFilter:function(e){return{type:"CHANGE_FILTER",activeFilter:e}}})(y),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C,A=n(7),N=n(8),S=[{id:1,label:"Make react project",important:!1,done:!1},{id:2,label:"Add Redux",important:!0,done:!1},{id:3,label:"Add styles",important:!1,done:!1}],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.id,a=t.label,o=t.important,r=t.done,i=t.type;switch(i){case"ADD_TASK":return[].concat(Object(N.a)(e),[{id:n,label:a,important:o,done:r}]);case"REMOVE_TASK":return Object(N.a)(e).filter((function(e){return e.id!==n}));case"COMPLETE_TASK":return Object(N.a)(e).map((function(e){return e.id===n&&(e.done=!e.done),e}));case"ON_TOGGLE_IMPORTANT_TASK":return Object(N.a)(e).map((function(e){return e.id===n&&(e.important=!e.important),e}));default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.activeFilter;switch(n){case"CHANGE_FILTER":return a;default:return e}},L=Object(A.b)({tasks:D,filters:I}),_=A.c,x=(C={},Object(A.d)(L,C,_()));i.a.render(o.a.createElement(T.a,{store:x},o.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tr-react-to-do-list",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/tr-react-to-do-list","/service-worker.js");k?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.c1213ed6.chunk.js.map