(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(4),r=n.n(c),i=(n(19),n(20),n(11)),o=n(7),m=n(3);var u=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),u=Object(o.a)(r,2),s=u[0],E=u[1],d=Object(a.useState)(""),p=Object(o.a)(d,2),f=p[0],b=p[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=document.getElementsByName("file")[0].files[0],n=t.name,a=t.type,l=t.size;n&&a&&l&&(E([].concat(Object(i.a)(s),[{name:t.name,type:t.type,size:t.size}])),console.log("tumisang",t.name))}(e)}},l.a.createElement(m.g,null,l.a.createElement(m.h,{type:"file",name:"file",onChange:function(e){b(URL.createObjectURL(e.target.files[0]))}})),l.a.createElement("div",null,l.a.createElement(m.a,null,"Submit"))),l.a.createElement("div",null,l.a.createElement(m.b,null,l.a.createElement(m.c,null,l.a.createElement("div",null,l.a.createElement("object",{data:f,type:"application/pdf",width:"100%",height:"100%"})),l.a.createElement(m.e,{tag:"h1"},l.a.createElement("h4",null,"Click on file name to show file information"),s.map(function(e){return l.a.createElement(m.a,{onClick:function(){return function(e){var t=e.name,n=e.type,a=e.size;console.log("props",e),c({name:t,type:n,size:a})}(e)},color:"success",outline:!0,style:{color:"red"}},"File Name: ",e.name)}),l.a.createElement("div",null))))),l.a.createElement(m.i,null,l.a.createElement(m.f,{sm:"12"},l.a.createElement(m.b,{body:!0},l.a.createElement(m.e,{tag:"h5"},"File Information"),l.a.createElement(m.d,{className:"CardText"},l.a.createElement(m.a,{disabled:!0,color:"success",outline:!0},"Name: ",n.name),l.a.createElement("br",null),l.a.createElement(m.a,{disabled:!0,color:"info",outline:!0},"Type: ",n.type),l.a.createElement("br",null),l.a.createElement(m.a,{disabled:!0,color:"warning",outline:!0},"Size: ",n.size))))))};var s=function(){return l.a.createElement("div",{className:"AppBody"},l.a.createElement("h1",{style:{textAlign:"center"}},"File Meta-Data Reader App"),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"AppComponents"},l.a.createElement(u,null))))},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)})};n(23);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),E()}},[[14,1,2]]]);
//# sourceMappingURL=main.d58a8ebb.chunk.js.map