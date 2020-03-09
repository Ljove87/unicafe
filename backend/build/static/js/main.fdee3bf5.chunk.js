(window.webpackJsonpunicafe=window.webpackJsonpunicafe||[]).push([[0],{21:function(e,t,n){e.exports=n(50)},26:function(e,t,n){},28:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),o=(n(26),n(27),n(2)),u=n(52),i=(n(28),n(7)),s=["If it hurts, do it more often","Adding manpower to a late software project makes it later!","The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","Premature optimization is the root of all evil.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."],m=function(e){var t=e.votes,n=t.indexOf(Math.max.apply(Math,Object(i.a)(t)));return r.a.createElement("div",{className:"container text=center"},r.a.createElement("h1",null,"Anecdote with most votes"),r.a.createElement("div",null,s[n]),r.a.createElement("div",null,"Has ",t[n]," votes"))},p=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(Array(6).fill(0)),u=Object(o.a)(l,2),p=u[0],f=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},s[n],r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){c(Math.floor(Math.random()*s.length))}},"Next Anecdote"))),r.a.createElement("div",{className:"container mt-3 mb-3"},"Has ",p[n]," votes",r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return function(e){var t=Object(i.a)(p);t[e]+=1,f(t)}(n)}},"Vote"))),r.a.createElement(m,{votes:p}))},f=n(4),d=n.n(f),b=n(5),E=n(18),v=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return r.a.createElement("div",null,r.a.createElement("li",{className:"note"},t.content),r.a.createElement("button",{onClick:n},a))},h=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},g=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,c=e.username,l=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:c,onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:l,onChange:a})),r.a.createElement("button",{type:"submit"},"Login")))},O=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(o.a)(n,2),l=c[0],u=c[1],i={display:l?"none":""},s={display:l?"":"none"},m=function(){u(!l)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",null,r.a.createElement("div",{style:i},r.a.createElement("button",{onClick:m},e.buttonLabel)),r.a.createElement("div",{style:s},e.children,r.a.createElement("button",{onClick:m},"Cancel")))})),j=function(e){var t=e.onSubmit,n=e.handleChange,a=e.value;return r.a.createElement("div",null,r.a.createElement("h2",null,"Create a new note"),r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{value:a,onChange:n}),r.a.createElement("button",{type:"submit"},"Save")))},w=n(6),y=n.n(w),S=null,k={getAll:function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.a.get("/api/notes"),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:S}},e.next=3,y.a.post("/api/notes",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y.a.put("".concat("/api/notes","/").concat(t),n),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){S="bearer ".concat(e)}},N={login:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),f=p[0],w=p[1],y=Object(a.useState)(""),S=Object(o.a)(y,2),C=S[0],P=S[1],A=Object(a.useState)(""),D=Object(o.a)(A,2),I=D[0],T=D[1],L=Object(a.useState)(null),F=Object(o.a)(L,2),M=F[0],J=F[1],U=Object(a.useState)(!1),H=Object(o.a)(U,2),V=(H[0],H[1],function(e){var t=n.find((function(t){return t.id===e})),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{important:!t.important});k.update(e,a).then((function(t){c(n.map((function(n){return n.id!==e?n:t})))})).catch((function(e){w("Note '".concat(t.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))});Object(a.useEffect)((function(){k.getAll().then((function(e){c(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);J(t),k.setToken(t.token)}}),[]);var z=r.a.createRef(),B=function(e){e.preventDefault(),z.current.toggleVisibility();var t={content:i,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};k.create(t).then((function(e){c(n.concat(e)),s("")}))},G=function(e){console.log(e.target.value),s(e.target.value)},R=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,N.login({username:C,password:I});case 4:n=e.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(n)),k.setToken(n.token),J(n),P(""),T(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),w("Wrong credentials"),setTimeout((function(){w(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container pt-5 pb-5"},r.a.createElement(h,{message:f}),r.a.createElement("h2",null,"Login"),null===M?r.a.createElement("div",null,r.a.createElement(O,{buttonLabel:"Login"},r.a.createElement(g,{username:C,password:I,handleUsernameChange:function(e){var t=e.target;return P(t.value)},handlePasswordChange:function(e){var t=e.target;return T(t.value)},handleSubmit:R}))):r.a.createElement("div",null,r.a.createElement("p",null,M.name," logged in"),r.a.createElement(O,{buttonLabel:"New Note",ref:z},r.a.createElement(j,{onSubmit:B,value:i,handleChange:G}))),r.a.createElement("h1",null,"Note"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(v,{key:e.id,note:e,toggleImportance:function(){return V(e.id)}})}))),r.a.createElement("form",{onSubmit:B},r.a.createElement("input",{onChange:G,value:i}),r.a.createElement("button",{type:"submit"},"save")))},P=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),i=Object(o.a)(l,2),s=i[0],m=i[1],f=Object(a.useState)(0),d=Object(o.a)(f,2),b=d[0],E=d[1],v=function(e){return(100*e).toFixed(1)},h=function(){var e=n+s+b;return 0===e?["0","0"]:[v((n-b)/e),v(n/e)]}(),g=Object(o.a)(h,2),O=g[0],j=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",{className:"text-center pb-2"},"Stankove ocene"),r.a.createElement(u.a,{bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",null,"#"),r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-success",onClick:function(){c((function(e){return e+1}))}},"Good")),r.a.createElement("th",null," ",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){m((function(e){return e+1}))}},"Neutral")),r.a.createElement("th",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){E((function(e){return e+1}))}},"Bad")),r.a.createElement("th",null,r.a.createElement("h5",null,"Overall Feedback")),r.a.createElement("th",null,r.a.createElement("h5",null,"Average")),r.a.createElement("th",null,r.a.createElement("h5",null,"Positive")))),r.a.createElement("tbody",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"row"},"Feedback"),r.a.createElement("td",null,r.a.createElement("p",null,n)),r.a.createElement("td",null,r.a.createElement("p",null,s)),r.a.createElement("td",null,r.a.createElement("p",null,b)),r.a.createElement("td",null,r.a.createElement("p",null,n+s+b)),r.a.createElement("td",null,r.a.createElement("p",null,O,"%")),r.a.createElement("td",null,r.a.createElement("p",null,j,"%")))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"mt-5"},r.a.createElement(p,null)),r.a.createElement("div",{className:"mt-5"},r.a.createElement(C,null)))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.fdee3bf5.chunk.js.map