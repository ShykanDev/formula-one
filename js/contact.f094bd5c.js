"use strict";(self["webpackChunkemmit_grid"]=self["webpackChunkemmit_grid"]||[]).push([[353],{9272:function(e,t,o){o.d(t,{A:function(){return d}});var s=o(6768);const n={class:"flex flex-col min-h-screen"},a={class:"sticky w-full p-4 text-white bg-black"},l={class:"flex items-center justify-between"},i={class:"flex w-full pl-4 overflow-auto text-sm justify-evenly"},r={class:"flex-grow w-full"};var c=(0,s.pM)({__name:"MainLayout",setup(e){return(e,t)=>{const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.Lk)("header",a,[(0,s.Lk)("section",l,[t[4]||(t[4]=(0,s.Lk)("div",{class:"flex items-center text-lg font-bold font-poppins"},[(0,s.Lk)("span",{class:"text-red-600 animate-pulse"},"F"),(0,s.Lk)("span",{class:"text-white"},"1 ")],-1)),(0,s.Lk)("div",i,[(0,s.bF)(o,{to:"/",class:"text-gray-300 hover:underline font-poppins"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Home")]))),_:1}),(0,s.bF)(o,{to:"/drivers",class:"text-gray-300 hover:underline font-poppins"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Conductores")]))),_:1}),(0,s.bF)(o,{to:"/teams",class:"text-gray-300 hover:underline font-poppins"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("Equipos")]))),_:1}),(0,s.bF)(o,{to:"/contact",class:"text-gray-300 hover:underline font-poppins"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("Contacto")]))),_:1})])])]),(0,s.Lk)("main",r,[(0,s.RG)(e.$slots,"main")]),t[5]||(t[5]=(0,s.Lk)("footer",{class:"p-4 text-center text-white bg-black font-poppins"},[(0,s.Lk)("p",{class:"text-sm"},[(0,s.eW)(" © PACA. Todos los derechos reservados. | "),(0,s.Lk)("span",{class:"text-red-600"},"Speed, Precision, Passion")])],-1))])}}});const u=c;var d=u},5098:function(e,t,o){o.r(t),o.d(t,{default:function(){return f}});var s=o(6768),n=o(5130),a=o(9272),l=o(144);const i={class:"flex flex-col w-full max-w-xl p-8 mx-auto mt-16 bg-white border rounded-lg"},r={class:"mb-4"},c={class:"mb-4"},u={key:0,class:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"};var d=(0,s.pM)({__name:"ContactView",setup(e){const t=(0,l.KR)(""),o=(0,l.KR)(""),d=(0,l.KR)(!1);function g(){t.value&&o.value?d.value=!0:alert("Por favor, completa todos los campos.")}function p(){d.value=!1}return(e,l)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(a.A,null,{main:(0,s.k6)((()=>[(0,s.Lk)("div",i,[l[6]||(l[6]=(0,s.Lk)("h2",{class:"mb-1 text-lg font-medium text-gray-900 title-font"},"Feedback",-1)),l[7]||(l[7]=(0,s.Lk)("p",{class:"mb-5 leading-relaxed text-gray-600"},"Si tienes algún comentario o sugerencia, no dudes en contactarnos.",-1)),(0,s.Lk)("div",r,[l[2]||(l[2]=(0,s.Lk)("label",{for:"email",class:"text-sm leading-7 text-gray-600"},"Email",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),type:"email",id:"email",name:"email",class:"w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",required:""},null,512),[[n.Jo,t.value]])]),(0,s.Lk)("div",c,[l[3]||(l[3]=(0,s.Lk)("label",{for:"message",class:"text-sm leading-7 text-gray-600"},"Mensaje",-1)),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),id:"message",name:"message",class:"w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"},null,512),[[n.Jo,o.value]])]),(0,s.Lk)("button",{onClick:g,class:"px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded hover:bg-indigo-600 focus:outline-none"},"Enviar"),l[8]||(l[8]=(0,s.Lk)("p",{class:"mt-3 text-xs text-gray-500"},"Nunca te enviaremos spam",-1)),d.value?((0,s.uX)(),(0,s.CE)("div",u,[(0,s.Lk)("div",{class:"w-11/12 max-w-lg p-6 mx-auto bg-white rounded-lg"},[l[4]||(l[4]=(0,s.Lk)("h3",{class:"text-xl font-semibold text-gray-800"},"¡Gracias por tu feedback!",-1)),l[5]||(l[5]=(0,s.Lk)("p",{class:"mt-2 text-gray-600"},"Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.",-1)),(0,s.Lk)("button",{onClick:p,class:"px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none"},"Cerrar")])])):(0,s.Q3)("",!0)])])),_:1})]))}}),g=o(1241);const p=(0,g.A)(d,[["__scopeId","data-v-6c092e80"]]);var f=p}}]);
//# sourceMappingURL=contact.f094bd5c.js.map