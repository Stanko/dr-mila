(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=50;window.addEventListener("scroll",()=>{window.scrollY>i?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")});function l(o,s){const n=o.querySelector(".dialog-backdrop");s.addEventListener("click",()=>{o.showModal()});const r=()=>{o.classList.contains("closing")||o.classList.add("closing")};n.addEventListener("click",()=>{r()}),o.addEventListener("keydown",e=>{e.key==="Escape"&&(e.preventDefault(),r())}),n.addEventListener("animationend",()=>{o.classList.contains("closing")&&(o.close(),o.classList.remove("closing"))})}const d=document.querySelector("#menu"),u=document.querySelector(".menu-toggle");l(d,u);