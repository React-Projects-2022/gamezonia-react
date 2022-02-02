"use strict";(self.webpackChunkgamezonia_react=self.webpackChunkgamezonia_react||[]).push([[647],{8390:function(n,i,o){var e=o(1174),t=o(184);i.Z=function(){return(0,t.jsx)("span",{className:"loading",children:(0,t.jsx)(e.FM,{size:454})})}},1945:function(n,i,o){o.d(i,{E:function(){return r}});var e,t=o(168),r=(0,o(7261).Ps)(e||(e=(0,t.Z)(["\nfragment ShopProductObject on ShopProduct {\n  id\n  price\n  stock\n  product {\n    name\n    img\n    rating {\n      value\n      count\n    }\n    screenshoot @include(if: $relationScreens)\n  }\n  platform @include(if: $showPlatform){\n    id\n    name\n    slug\n  }\n  relationalProducts @include(if: $relationScreens) {\n    id\n    platform {\n      name\n    }\n  }\n}\n"])))},3647:function(n,i,o){o.r(i),o.d(i,{default:function(){return k}});var e=o(168),t=o(885),r=o(2791),a=o(6871),s=o(9388),c=o(2336),l=["refetch","fetchMore","updateQuery","startPolling","subscribeToMore"];o(6260);var d=o(5970),u=o(2364),v=o(5046);var p,m,f=o(7261),h=o(9663),b=o(1945),g=(0,f.Ps)(p||(p=(0,e.Z)(["\n  query DetailsPageInfo(\n    $id: Int!\n    $showPlatform: Boolean = true\n    $relationScreens: Boolean = true\n  ) {\n    randomItems: shopProductsOffersLast(itemsPage: 6, random: true) {\n      shopProducts {\n        ...ShopProductObject\n      }\n    }\n    details: shopProductDetails(id: $id) {\n      shopProduct {\n        ...ShopProductObject\n      }\n    }\n  }\n  ","\n"])),b.E),j=o(5331),x=o(8390),P=o(184),k=function(){var n=(0,h.jD)().manageProduct,i=(0,r.useState)((0,a.UO)().id),o=(0,t.Z)(i,2),p=o[0],b=o[1],k=(0,r.useState)(""),y=(0,t.Z)(k,2),N=y[0],S=y[1],w=(0,r.useState)(1),Z=(0,t.Z)(w,2),$=Z[0],C=Z[1],I=function(n,i){var o=(0,r.useState)({called:!1}),e=o[0],t=o[1],a=(0,c.a)(n,(0,s.pi)((0,s.pi)((0,s.pi)({},i),e.options),{fetchPolicy:e.called?null===i||void 0===i?void 0:i.fetchPolicy:"standby",skip:void 0}));e.called||(a=(0,s.pi)((0,s.pi)({},a),{loading:!1,data:void 0,error:void 0,called:!1}));var d=(0,r.useMemo)((function(){for(var n={},i=function(i){var o=a[i];n[i]=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t((function(n){return(0,s.pi)((0,s.pi)({},n),{called:!0})})),o.apply(void 0,n)}},o=0,e=l;o<e.length;o++)i(e[o]);return n}),[]);return a.error=a.error||void 0,Object.assign(a,d),[(0,r.useCallback)((function(n){return t({called:!0,options:n}),a.refetch(null===n||void 0===n?void 0:n.variables).then((function(n){var i=(0,s.pi)((0,s.pi)({},a),{data:n.data,error:n.error,called:!0,loading:!1});return Object.assign(i,d),i}))}),[]),a]}(g),O=(0,t.Z)(I,2),D=O[0],E=O[1],q=E.data,z=E.loading,M=!!q&&q.details.shopProduct,_=!!q&&q.randomItems.shopProducts;(0,r.useEffect)((function(){return D({variables:{id:+p,showPlatform:!0,relationScreens:!0}})}),[D,p]);var A=function(n,i){var o=(0,v.x)(null===i||void 0===i?void 0:i.client);(0,u.Vp)(n,u.n_.Subscription);var e=(0,r.useState)({loading:!(null===i||void 0===i?void 0:i.skip),error:void 0,data:void 0,variables:null===i||void 0===i?void 0:i.variables}),t=e[0],a=e[1],s=(0,r.useState)((function(){return(null===i||void 0===i?void 0:i.skip)?null:o.subscribe({query:n,variables:null===i||void 0===i?void 0:i.variables,fetchPolicy:null===i||void 0===i?void 0:i.fetchPolicy,context:null===i||void 0===i?void 0:i.context})})),c=s[0],l=s[1],p=(0,r.useRef)({client:o,subscription:n,options:i});return(0,r.useEffect)((function(){var e,t,r,s,c=null===i||void 0===i?void 0:i.shouldResubscribe;"function"===typeof c&&(c=!!c(i)),(null===i||void 0===i?void 0:i.skip)&&!(null===i||void 0===i?void 0:i.skip)!==!(null===(e=p.current.options)||void 0===e?void 0:e.skip)?(a({loading:!1,data:void 0,error:void 0,variables:null===i||void 0===i?void 0:i.variables}),l(null)):!1===c||o===p.current.client&&n===p.current.subscription&&(null===i||void 0===i?void 0:i.fetchPolicy)===(null===(t=p.current.options)||void 0===t?void 0:t.fetchPolicy)&&!(null===i||void 0===i?void 0:i.skip)===!(null===(r=p.current.options)||void 0===r?void 0:r.skip)&&(0,d.D)(null===i||void 0===i?void 0:i.variables,null===(s=p.current.options)||void 0===s?void 0:s.variables)||(a({loading:!0,data:void 0,error:void 0,variables:null===i||void 0===i?void 0:i.variables}),l(o.subscribe({query:n,variables:null===i||void 0===i?void 0:i.variables,fetchPolicy:null===i||void 0===i?void 0:i.fetchPolicy,context:null===i||void 0===i?void 0:i.context}))),Object.assign(p.current,{client:o,subscription:n,options:i})}),[o,n,i]),(0,r.useEffect)((function(){if(c){var n=c.subscribe({next:function(n){var e,t,r={loading:!1,data:n.data,error:void 0,variables:null===i||void 0===i?void 0:i.variables};a(r),null===(t=null===(e=p.current.options)||void 0===e?void 0:e.onSubscriptionData)||void 0===t||t.call(e,{client:o,subscriptionData:r})},error:function(n){a({loading:!1,data:void 0,error:n,variables:null===i||void 0===i?void 0:i.variables})},complete:function(){var n,i;null===(i=null===(n=p.current.options)||void 0===n?void 0:n.onSubscriptionComplete)||void 0===i||i.call(n)}});return function(){n.unsubscribe()}}}),[c]),t}((0,f.Ps)(m||(m=(0,e.Z)(["\n    subscription obtenerDetallesActualizados($id: Int!) {\n      selectProductStockUpdate(id: $id) {\n        id\n        stock\n      }\n    }\n  "])))).data;return(0,r.useEffect)((function(){M&&S(M.product.screenshoot[0])}),[M]),A&&console.log("Nuevo stock",A),(0,P.jsxs)(P.Fragment,{children:[z&&(0,P.jsx)(x.Z,{}),!!q&&(0,P.jsxs)("div",{className:"container mb-2",children:[(0,P.jsxs)("div",{className:"row game-details",children:[(0,P.jsx)("div",{className:"col-md-1",id:"screens-section",children:M.product.screenshoot.map((function(n,i){return(0,P.jsx)("img",{className:"img-fluid mini",src:n,alt:"",onClick:function(){return function(n){return S(M.product.screenshoot[n])}(i)}},i)}))}),(0,P.jsx)("div",{className:"col-md-7",children:(0,P.jsx)("img",{className:"img-fluid",src:N,alt:""})}),(0,P.jsxs)("div",{className:"col-md-4",children:[(0,P.jsx)("h3",{className:"my-3",children:(0,P.jsxs)("p",{children:[M.product.name," (",M.platform.name,")"]})}),(0,P.jsx)(h.iG,{max:5,ratingItem:{value:M.product.rating.value,count:M.product.rating.count}}),(0,P.jsxs)("p",{className:"price mt-2",children:["\u20ac ",M.price]}),(0,P.jsxs)("p",{className:"mt-3",children:["Stock: ",M.stock]}),(0,P.jsx)("hr",{}),0===M.stock?(0,P.jsx)("span",{children:"No hay stock. Producto no disponible en este momento."}):(0,P.jsx)(h.cw,{stock:M.stock,updateValue:function(n){return C(n)}}),(0,P.jsx)("br",{}),(0,P.jsx)("span",{className:"h5",children:"Plataformas:"}),"\xa0\xa0",(0,P.jsxs)("select",{onChange:function(n){var i=+n.target.value;b(i),window.history.replaceState({},"","/games/details/".concat(i))},children:[(0,P.jsx)("option",{value:M.id,children:M.platform.name}),M.relationalProducts.map((function(n){return(0,P.jsx)("option",{value:n.id,children:n.platform.name},n.id)}))]}),(0,P.jsx)("br",{}),(0,P.jsxs)("button",{className:"btn btn-outline-dark mt-2",onClick:function(){var i={description:M.platform.name,id:p,img:M.product.img,name:M.product.name,price:M.price,qty:$,rating:{count:M.product.rating.count,value:M.product.rating.value},stock:M.stock};n(i)},children:[(0,P.jsx)("i",{className:"fas fa-cart-plus"}),"\xa0Add cart"]})]})]}),(0,P.jsx)("h3",{className:"my-4",children:"Juegos que te puedan interesar"}),(0,P.jsx)("div",{className:"row other-interest-games",children:_.map((function(n,i){return(0,P.jsx)("div",{className:"col-md-2 col-sm-6 mb-4",onClick:function(){return(0,j.T)("games/details",n.id)},title:n.product.name.concat(" (".concat(n.platform.name,")")),children:(0,P.jsx)("img",{className:"img-fluid more-games",src:n.product.img,alt:"{{ itemInfo.name }} ( {{ itemInfo.description }})"})},i)}))})]})]})}}}]);
//# sourceMappingURL=647.b9b529a8.chunk.js.map