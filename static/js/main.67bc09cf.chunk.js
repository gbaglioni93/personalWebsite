(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(21),s=n.n(a),r=(n(26),n(27),n(18)),o=n(2),j=(n(19),n(3));function l(e,t){return Object(j.jsx)("button",{className:"social-button",onClick:function(){return window.location.replace("https://"+t)},children:e})}function d(){return Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsx)("div",{className:"page-title",children:Object(j.jsx)("span",{children:"G Baglioni"})}),Object(j.jsx)("div",{className:"page-content",children:Object(j.jsxs)("div",{id:"social-media",children:[l("instagram","instagram.com/gbaglioni93"),l("trimmy.","trimmy.co.uk"),l("linkedin","linkedin.com/in/gbaglioni93/")]})}),Object(j.jsx)("div",{className:"page-footer",children:Object(j.jsx)("span",{children:"This site is protected under the Baglioni Act of 2022."})})]})}var u=n(5),b=(n(20),function(e){var t=e.value,n=e.type;e.isDanger;return Object(j.jsxs)("div",{className:"countdown-value",children:[Object(j.jsx)("p",{id:"countdown-num",children:t}),Object(j.jsxs)("p",{id:"countdown-type",children:[n,1===t?null:"s"]})]})}),m=function(e){var t=Math.floor(e/31536e6);return[t,Math.floor(e/864e5-365*t),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]},p=function(e){var t=e.years,n=e.days,c=e.hours,i=e.minutes,a=e.seconds;return Object(j.jsxs)("div",{className:"show-counter",children:[Object(j.jsx)(b,{value:t,type:"Year"}),Object(j.jsx)(b,{value:n,type:"Day"}),Object(j.jsx)(b,{value:c,type:"Hour"}),Object(j.jsx)(b,{value:i,type:"Minute"}),Object(j.jsx)(b,{value:a,type:"Second"})]})},h=function(e){var t=function(e){var t=new Date(e).getTime(),n=Object(c.useState)(t-(new Date).getTime()),i=Object(u.a)(n,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){var e=setInterval((function(){s(t-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}),[t]),m(a)}(e.targetDate),n=Object(u.a)(t,5),i=n[0],a=n[1],s=n[2],r=n[3],o=n[4];return i+a+s+r+o<=0?"Expired Notice":Object(j.jsx)(p,{years:i,days:a,hours:s,minutes:r,seconds:o})},O=n.p+"static/media/profile_picture.6e6b1036.jpg",g=n.p+"static/media/sam.32c8ad49.jpeg";function x(){var e=Object(o.l)(),t=new Date("2030-11-17");return Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsx)("div",{className:"page-title",children:Object(j.jsx)("span",{children:"Best friend timer"})}),Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsxs)("div",{id:"picture-container",children:[Object(j.jsx)("img",{className:"circle-img",src:O}),Object(j.jsx)("img",{className:"circle-img",src:g})]}),Object(j.jsx)("div",{id:"timer",children:Object(j.jsx)(h,{targetDate:t})})]}),Object(j.jsx)("div",{className:"page-footer",children:Object(j.jsx)("span",{id:"back-button",onClick:function(){return e("/")},children:"Back to homepage"})})]})}var f=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"sam-and-giorgio-become-best-friends",element:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(d,{})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.67bc09cf.chunk.js.map