import{e as s,u as e,a,j as o,B as d,g as r,o as l}from"./index-4d37af9a.js";import{D as t}from"./discord-9ca535ee.js";import{m as i}from"./chargebee-43d1bf1e.js";import{I as c}from"./index-2a248eda.js";const m=({label:m,theme:n="primary",className:h})=>{const _=s(),{locale:j}=e(),{user:x}=a();return o.jsx(d,{size:"large",theme:n,className:h,onClick:()=>{const s=r(),e=s?"&"+s:"";i("home_add_to_discord_click",null,{label:m}),x?(i("home_add_to_discord_dashboard",null,{label:m}),_(`/${j}/dashboard`)):(_({search:`?redirect=/${j}/dashboard${e}`}),i("home_add_to_discord_login",null,{label:m}),l())},children:o.jsxs("div",{className:"flex items-center gap-2 justify-center",children:[o.jsx(t,{className:("white"===n?"text-discord-default":"text-dark-100")+" w-5"}),o.jsx(c,{id:"home.hero.button.addToDiscord"})]})})};export{m as A};