(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue"),require("lkt-http-client")):typeof define=="function"&&define.amd?define(["vue","lkt-http-client"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.LktItemCrud=o(e.Vue,e.LktHttpClient))})(this,function(e,o){"use strict";const f={class:"lkt-item-crud"},h={key:0,class:"lkt-item-crud_header"},k={class:"lkt-item-crud_header-title"},_={class:"lkt-item-crud_header-slot"},y={key:1,class:"lkt-item-crud_content"},C={key:0},V={key:1},B={name:"LktItemCrud",inheritAttrs:!1},S=e.defineComponent({...B,props:{modelValue:{type:Object,required:!1,default:()=>({})},readResource:{type:String,required:!0},readData:{type:Object,required:!1,default:()=>({})},createResource:{type:String,required:!1},updateResource:{type:String,required:!1},dropResource:{type:String,required:!1},title:{type:String,default:""}},emits:["update:modelValue","read","create","update","drop","perms","error"],setup(d,{expose:m,emit:R}){const a=d,q=e.useSlots(),l=R;let g=[];const r=e.ref(!0),c=e.ref(a.modelValue),u=e.ref(g),i=e.ref(200),p=async()=>(r.value=!0,await o.httpCall(a.readResource,a.readData).then(t=>{if(r.value=!1,!t.success){i.value=t.httpStatus,l("error",t.httpStatus);return}c.value=t.data,u.value=t.perms,l("read",t)})),w=e.computed(()=>r.value?!1:a.title||!!q["post-title"]);e.watch(()=>a.modelValue,t=>c.value=t),e.watch(c,()=>l("update:modelValue",c.value)),e.watch(u,()=>l("perms",u.value));const E=async t=>{const n=a.createResource;return r.value=!0,await o.httpCall(n,{...t}).then(s=>{r.value=!1,l("create",s)})},N=async t=>{const n=a.updateResource;return r.value=!0,await o.httpCall(n,{...t}).then(s=>{r.value=!1,l("update",s)})},I=async t=>{const n=a.dropResource;return r.value=!0,await o.httpCall(n,{...t}).then(s=>{r.value=!1,l("drop",s)})};return a.readResource&&p(),m({fetchItem:p,create:E,update:N,drop:I,refresh:p}),(t,n)=>{const s=e.resolveComponent("lkt-loader");return e.openBlock(),e.createElementBlock("article",f,[w.value?(e.openBlock(),e.createElementBlock("header",h,[e.createElementVNode("h1",k,e.toDisplayString(d.title),1),e.createElementVNode("div",_,[e.renderSlot(t.$slots,"post-title",{item:c.value,loading:r.value})])])):e.createCommentVNode("",!0),r.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",y,[i.value===200?(e.openBlock(),e.createElementBlock("div",C,[e.renderSlot(t.$slots,"item",{item:c.value,loading:r.value})])):e.createCommentVNode("",!0),i.value!==200?(e.openBlock(),e.createElementBlock("div",V," An error occurred! ")):e.createCommentVNode("",!0)])),r.value?(e.openBlock(),e.createBlock(s,{key:2})):e.createCommentVNode("",!0)])}}});return{install:(d,m={})=>{d.component("LktItemCrud",S)}}});
