(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),o=t.n(r),c=(t(76),t(25)),m=(t(77),t(19)),i=t(20),s=t(23),u=t(21),d=t(24),E=t(11),p=t(130),f=t(129),y=t(121),h=t(122),v=t(127),_=t(128),b=t(8),w=Object(b.a)({forceRefresh:!0}),g=t(30),O=t.n(g),C="https://windows-pwa-express.azurewebsites.net/api/users";function j(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),c=Object(E.a)(o,2),m=c[0],i=c[1],s=Object(n.useState)(""),u=Object(E.a)(s,2),d=u[0],b=u[1];return l.a.createElement("div",null,l.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(p.a.Brand,{href:"#home"},"Express React MongoDB"),l.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{href:"#home"},"Home"),l.a.createElement(f.a.Link,{href:"#users"},"Users")),l.a.createElement(f.a,null,l.a.createElement(y.a,null,l.a.createElement(h.a,{variant:"info",onClick:function(){return r(!0)}},"Signin"),l.a.createElement(v.a,{show:t,onHide:function(){return r(!1)},animation:!0,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Modal heading")),l.a.createElement(v.a.Body,null,l.a.createElement(_.a.Group,{controlId:"formBasicUsername"},l.a.createElement(_.a.Control,{type:"text",placeholder:"Username",value:m,onChange:function(e){return i(e.target.value)}})),l.a.createElement(_.a.Group,{controlId:"formBasicPassword"},l.a.createElement(_.a.Control,{type:"password",placeholder:"Password",value:d,onChange:function(e){return b(e.target.value)}}))),l.a.createElement(v.a.Footer,null,l.a.createElement(h.a,{type:"button",variant:"primary",onClick:function(){r(!1),console.log(m),console.log(d),O()({method:"post",url:C+"/login",data:{username:m,password:d}}).then(function(e){200===e.status?(console.log(e.data.email),localStorage.setItem("loginemail",e.data.email),w.push("/#/home"),window.location.reload()):(w.push("/#/home"),window.location.reload())}).catch(function(e){console.log(e),w.push("/#/error"),window.location.reload()})}},"Go")))),l.a.createElement(y.a,null,l.a.createElement(h.a,{variant:"light",onClick:function(){localStorage.clear(),window.location.reload()}},"Signout"))))))}var x=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(j,null)}}]),a}(l.a.Component);function P(){return l.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("h3",null,"Welcome ",localStorage.getItem("loginemail")))}var I=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P,null))}}]),a}(l.a.Component),S=t(36),G=t(123),k=t(68),L=t(124),B=t(125);function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(t,!0).forEach(function(a){Object(S.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function M(){var e="https://windows-pwa-express.azurewebsites.net/api/users",a=l.a.useState([]),t=Object(E.a)(a,2),n=t[0],r=t[1],o=l.a.useState({show:!1,activeModal:null}),c=Object(E.a)(o,2),m=c[0],i=c[1],s=function(){return i({show:!1,activeModal:null})},u=l.a.useState({show0:!1,activeModal0:null}),d=Object(E.a)(u,2),p=d[0],f=d[1],y=function(){return f({show:!1,activeModal0:null})};l.a.useEffect(function(){fetch(e).then(function(e){return e.json()}).then(function(e){r(e)})},[e]);var b=l.a.useState({showdelete:!1,activedelete:null}),w=Object(E.a)(b,2),g=w[0],C=w[1],j=function(){return C({showdelete:!1,activedelete:null})};var x=l.a.useState({_id:"",email:"",password:"",first_name:"",country_name:"",city_name:"",state_name:""}),P=Object(E.a)(x,2),I=P[0],N=P[1],M=function(e){console.log(e.target.value),N(D({},I,Object(S.a)({},e.target.name,e.target.value)))},H=l.a.useState(!1),z=Object(E.a)(H,2),F=z[0],T=z[1],U=function(){T(!0)},W=function(){T(!1)},J=l.a.useState({_id:"",email:"",password:"",first_name:"",country_name:"",city_name:"",state_name:""}),R=Object(E.a)(J,2),q=R[0],A=R[1],$=function(a){a.preventDefault(),console.log(q),O()({method:"POST",url:e+"/register",data:{email:q.email,password:q.password,first_name:q.first_name,country_name:q.country_name,city_name:q.city_name,state_name:q.state_name}}).then(function(e){200===e.status?(console.log("create success"),window.location.reload()):(console.log("create failed"),window.location.reload())}).catch(function(e){console.log(e)})},K=function(e){A(D({},q,Object(S.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(L.a,{"aria-label":"Basic example"},l.a.createElement(h.a,{size:"lg",variant:"success",onClick:U},"Create"),l.a.createElement(v.a,{show:F,onHide:W,animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Create")),l.a.createElement(v.a.Body,null,l.a.createElement(_.a,{id:"createuser",onSubmit:$},l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextEmail"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Email"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:"sample@sample.com",value:q.email,name:"email",onChange:K}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Password"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"password",placeholder:"",value:q.password,name:"password",onChange:K}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"First Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:"",value:q.first_name,name:"first_name",onChange:K}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Country Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:"",value:q.country_name,name:"country_name",onChange:K}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"City Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:"",value:q.city_name,name:"city_name",onChange:K}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"State Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:"",value:q.state_name,name:"state_name",onChange:K}))))),l.a.createElement(v.a.Footer,null,l.a.createElement(h.a,{form:"createuser",type:"submit",variant:"success"},"Submit"))))),l.a.createElement(B.a,{responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First_name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Password"),l.a.createElement("th",null,"Country_name"),l.a.createElement("th",null,"city_name"),l.a.createElement("th",null,"state_name"),l.a.createElement("th",null,"company_address"),l.a.createElement("th",null,"Operations"))),l.a.createElement("tbody",null,n.map(function(a){return l.a.createElement("tr",{key:a._id},l.a.createElement("td",null,l.a.createElement("p",{className:"text-primary",onClick:function(e){return t=a._id,f({show:!0,activeModal0:t});var t}},a.first_name),l.a.createElement(v.a,{show:p.activeModal0===a._id,onHide:y,animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Details")),l.a.createElement(v.a.Body,null,l.a.createElement(_.a,{id:a._id},l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextId"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"ID"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a._id,value:a._id,name:"_id"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextEmail"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Email"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a.email,value:a.email,name:"email"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Password"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"password",placeholder:a.password,value:a.password,name:"password"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextFirstName"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"First Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a.first_name,value:a.first_name,name:"first_name"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextCountry"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Country Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a.country_name,value:a.country_name,name:"country_name"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextCity"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"City Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a.city_name,value:a.city_name,name:"city_name"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextState"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"State Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a.state_name,value:a.state_name,name:"state_name"}))))))),l.a.createElement("td",null,a.email),l.a.createElement("td",null,a.password),l.a.createElement("td",null,a.country_name),l.a.createElement("td",null,a.city_name),l.a.createElement("td",null,a.state_name),l.a.createElement("td",null,a.company_address),l.a.createElement("td",null,l.a.createElement(L.a,{"aria-label":"Basic example"},l.a.createElement(h.a,{size:"sm",variant:"primary",onClick:function(e){return t=a._id,i({show:!0,activeModal:t});var t}},"Modify"),l.a.createElement(v.a,{show:m.activeModal===a._id,onHide:s,animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Modify")),l.a.createElement(v.a.Body,null,l.a.createElement(_.a,{id:a._id,onSubmit:function(t){return function(a,t){a.preventDefault(),console.log(I);var n=document.getElementById(t).elements;console.log(n._id.value),console.log(n.email.value),console.log(n.email.placeholder),console.log(n.password.value),console.log(n.first_name.value),console.log(n.country_name.value),console.log(n.city_name.value),console.log(n.state_name.value),console.log(e+"/edit/"+n._id.value),O()({method:"post",url:e+"/edit/"+n._id.value,data:{_id:n._id.value,email:""===I.email?n.email.placeholder:I.email,password:""===I.password?n.password.placeholder:I.password,first_name:""===I.first_name?n.first_name.placeholder:I.first_name,country_name:""===I.country_name?n.country_name.placeholder:I.country_name,city_name:""===I.city_name?n.city_name.placeholder:I.city_name,state_name:""===I.state_name?n.state_name.placeholder:I.state_name}}).then(function(e){200===e.status?(console.log("modify success"),window.location.reload()):(console.log("modify failed"),window.location.reload())}).catch(function(e){console.log(e),window.location.reload()})}(t,a._id)}},l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextId"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"ID"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{readOnly:!0,type:"text",placeholder:a._id,value:a._id,name:"_id"}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextEmail"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Email"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:a.email,value:I.email,name:"email",onChange:function(e){return M(e)}}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextPassword"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Password"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"password",placeholder:a.password,value:I.password,name:"password",onChange:function(e){return M(e)}}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextFirstName"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"First Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:a.first_name,value:I.first_name,name:"first_name",onChange:function(e){return M(e)}}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextCountry"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"Country Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:a.country_name,value:I.country_name,name:"country_name",onChange:function(e){return M(e)}}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextCity"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"City Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:a.city_name,value:I.city_name,name:"city_name",onChange:function(e){return M(e)}}))),l.a.createElement(_.a.Group,{as:G.a,controlId:"formPlaintextState"},l.a.createElement(_.a.Label,{column:!0,sm:"2"},"State Name"),l.a.createElement(k.a,{sm:"10"},l.a.createElement(_.a.Control,{type:"text",placeholder:a.state_name,value:I.state_name,name:"state_name",onChange:function(e){return M(e)}}))))),l.a.createElement(v.a.Footer,null,l.a.createElement(h.a,{form:a._id,type:"submit",variant:"primary"},"Submit")))),l.a.createElement(L.a,null,l.a.createElement(h.a,{size:"sm",variant:"danger",onClick:function(e){return t=a._id,C({showdelete:!0,activedelete:t});var t}},"Delete"),l.a.createElement(v.a,{show:g.activedelete===a._id,onHide:j,animation:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(v.a.Header,{variant:"danger",closeButton:!0,bg:"danger"},l.a.createElement(v.a.Title,null,"Delete")),l.a.createElement(v.a.Body,null,l.a.createElement("p",null,"user email is: ",a.email)),l.a.createElement(v.a.Footer,null,l.a.createElement(h.a,{type:"button",variant:"danger",onClick:function(t){return n=a._id,console.log(n),console.log(e+"/delete/"+n),void O()({method:"post",url:e+"/delete/"+n,query:{Id:n}}).then(function(e){console.log(e),200===e.status?(console.log("delete success"),window.location.reload()):(console.log("delete failed"),window.location.reload())}).catch(function(e){console.log(e),window.location.reload()});var n}},"Delete"))))))}))))}var H=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("h3",null,"Sorry, this site is for Admin only"))}}]),a}(l.a.Component),z=t(126);function F(){return localStorage.getItem("loginemail")?l.a.createElement(M,null):l.a.createElement(H,null)}var T=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(z.a,{fluid:!0},l.a.createElement(F,null))}}]),a}(n.Component);var U=function(){return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:I}),l.a.createElement(c.a,{path:"/home",component:I}),l.a.createElement(c.a,{path:"/users",component:T}),l.a.createElement(c.a,{path:"/error",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(118);var W=t(44);o.a.render(l.a.createElement(W.a,{history:w},l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,a,t){e.exports=t(119)},76:function(e,a,t){},77:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.c42cb2e6.chunk.js.map