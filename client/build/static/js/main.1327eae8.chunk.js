(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,a){e.exports=a(89)},63:function(e,t,a){},64:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(63),a(18)),u=(a(64),a(21)),i=a(22),s=a(25),m=a(23),d=a(26),E=a(28),p=a(97),h=a(96),f=a(92),b=a(93),v=a(94),w=a(95),j=a(8),y=Object(j.a)({forceRefresh:!0}),O="https://windows-pwa-express.azurewebsites.net/api/users";function g(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(E.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(""),m=Object(E.a)(s,2),d=m[0],j=m[1];return r.a.createElement("div",null,r.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(p.a.Brand,{href:"#home"},"Express React MongoDB"),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(h.a.Link,{href:"#home"},"Home"),r.a.createElement(h.a.Link,{href:"#users"},"Users")),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(b.a,{variant:"info",onClick:function(){return l(!0)}},"Signin"),r.a.createElement(v.a,{show:a,onHide:function(){return l(!1)},animation:!1,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,"Modal heading")),r.a.createElement(v.a.Body,null,r.a.createElement(w.a.Group,{controlId:"formBasicUsername"},r.a.createElement(w.a.Control,{type:"text",placeholder:"Username",value:u,onChange:function(e){return i(e.target.value)}})),r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Control,{type:"password",placeholder:"Password",value:d,onChange:function(e){return j(e.target.value)}}))),r.a.createElement(v.a.Footer,null,r.a.createElement(b.a,{type:"button",variant:"primary",onClick:function(){l(!1),console.log(u),console.log(d),fetch(O+"/login",{method:"POST",headers:{Accept:"application/json","content-type":"application/json"},body:JSON.stringify({username:u,password:d})}).then(function(e){console.log(e.status),200==e.status?(y.push("/#/users"),window.location.reload()):(y.push("/#/home"),window.location.reload())}).catch(function(e){console.error(e)})}},"Go")))),r.a.createElement(f.a,null,r.a.createElement(b.a,{variant:"light"},"Signout"))))))}var k=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}]),t}(r.a.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Home page")}}]),t}(n.Component);function _(){var e=r.a.useState([]),t=Object(E.a)(e,2),a=t[0],n=t[1];r.a.useEffect(function(){fetch("https://windows-pwa-express.azurewebsites.net/api/users").then(function(e){return e.json()}).then(function(e){n(e)})},[]);return r.a.createElement("div",null,r.a.createElement("table",{id:"users"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First_name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Password"),r.a.createElement("th",null,"Country_name"),r.a.createElement("th",null,"city_name"),r.a.createElement("th",null,"state_name"),r.a.createElement("th",null,"company_address"))),r.a.createElement("tbody",null,a.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.first_name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.password),r.a.createElement("td",null,e.country_name),r.a.createElement("td",null,e.city_name),r.a.createElement("td",null,e.state_name),r.a.createElement("td",null,e.company_address))}))))}var S=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Users page"),r.a.createElement(_,null))}}]),t}(n.Component);var B=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:C}),r.a.createElement(o.a,{path:"/home",component:C}),r.a.createElement(o.a,{path:"/users",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(88);var x=a(29);c.a.render(r.a.createElement(x.a,{history:y},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.1327eae8.chunk.js.map