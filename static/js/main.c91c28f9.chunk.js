(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,o){},14:function(t,n,o){"use strict";o.r(n);var e=o(5),c=o.n(e),r=o(6),i=o(1),u=(o(12),o(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},s=o(7);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=function(t){t.then((function(t){e(t)}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return c(d())},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return c(d().then((function(t){var n=Object(s.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)}));return n.length=5,n})))},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return c(d().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"}),Object(u.jsx)(a,{goods:o})]})};c.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c91c28f9.chunk.js.map