"use strict";(self.webpackChunkgamezonia_react=self.webpackChunkgamezonia_react||[]).push([[877],{4877:function(e,a,n){n.r(a),n.d(a,{default:function(){return b}});var t=n(885),s=n(6871),l=n(3504),r=n(184),i=function(e){var a=e.label,n=e.changeTitle,t=e.route;return(0,r.jsx)(l.rU,{onClick:function(){return n(a)},to:t,className:"list-group-item list-group-item-action list-group-item-light p-3",children:a})},o=function(e){var a=e.changeTitle;return(0,r.jsxs)("div",{className:"border-end bg-white",id:"sidebar-wrapper",children:[(0,r.jsx)("div",{className:"sidebar-heading border-bottom bg-light",children:(0,r.jsx)(l.rU,{to:"/",children:"Home"})}),(0,r.jsxs)("div",{className:"list-group list-group-flush",children:[(0,r.jsx)(i,{label:"Dashboard",changeTitle:a,route:"/admin"}),(0,r.jsx)(i,{label:"Users",changeTitle:a,route:"/admin/users"}),(0,r.jsx)(i,{label:"Genres",changeTitle:a,route:"/admin/genres"}),(0,r.jsx)(i,{label:"Tags",changeTitle:a,route:"/admin/tags"})]})]})},c=function(){return window.addEventListener("DOMContentLoaded",(function(e){var a=document.body.querySelector("#sidebarToggle");console.log(a),a&&("true"===localStorage.getItem("sb|sidebar-toggle")&&document.body.classList.toggle("sb-sidenav-toggled"),a.addEventListener("click",(function(e){e.preventDefault(),console.log("click toggle"),document.body.classList.toggle("sb-sidenav-toggled"),localStorage.setItem("sb|sidebar-toggle",document.body.classList.contains("sb-sidenav-toggled"))})))})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{className:"btn btn-primary",id:"sidebarToggle",children:"Toggle Menu"}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})})]})},d=function(){return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border-bottom",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[(0,r.jsx)("li",{className:"nav-item active",children:(0,r.jsx)(l.rU,{to:"/",className:"nav-link",children:"Home"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link",href:"#!",children:"Link"})})]})})]})})},g=function(e){var a=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"mt-4",children:a}),(0,r.jsx)("hr",{})]})},u=n(2791),b=function(){var e=(0,u.useState)("Dashboard"),a=(0,t.Z)(e,2),n=a[0],l=a[1];return(0,r.jsxs)("div",{className:"d-flex",id:"wrapper",children:[(0,r.jsx)(o,{changeTitle:function(e){return l(e)}}),(0,r.jsxs)("div",{id:"page-content-wrapper",children:[(0,r.jsx)(d,{}),(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)(g,{title:n}),(0,r.jsx)(s.j3,{})]})]})]})}}}]);
//# sourceMappingURL=877.8ee08b77.chunk.js.map