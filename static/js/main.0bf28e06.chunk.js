(this["webpackJsonpnotekeeper-app-final"]=this["webpackJsonpnotekeeper-app-final"]||[]).push([[0],{46:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),o=n(41),u=n(11),i=n(32),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"NoteKeeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},p=n(37),s=n.n(p),v=n(39),b=n.n(v),d=n(38),h=n.n(d);var j=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1];return l.a.createElement("div",{className:"note"},l.a.createElement("h1",{style:{textDecoration:r&&"line-through"}},e.title),l.a.createElement("p",{style:{textDecoration:r&&"line-through"}},e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(s.a,null)),l.a.createElement("button",{onClick:function(){c((function(e){return!e}))}},r?l.a.createElement(h.a,null):l.a.createElement(b.a,null)))},O=n(30),k=n(40),g=n.n(k),C=n(73),D=n(74);var y=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)("1"),i=Object(u.a)(o,2),m=i[0],E=i[1],f=Object(a.useState)(!1),p=Object(u.a)(f,2),s=p[0],v=p[1];function b(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(O.a)(Object(O.a)({},e),{},{[n]:a})}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},s&&l.a.createElement("input",{name:"title",onChange:b,value:r.title,placeholder:"Title"}),l.a.createElement("textarea",{onClick:function(){v(!0),E("3")},name:"content",onChange:b,value:r.content,placeholder:"Take a note...",rows:m}),l.a.createElement(D.a,{in:s},l.a.createElement(C.a,{onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}},l.a.createElement(g.a,null)))))};var S=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(y,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(j,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0bf28e06.chunk.js.map