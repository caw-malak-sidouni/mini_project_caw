(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(3822)}])},1552:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var l=s(5893);s(7294);var n=s(1637),r=s(7959);function a(e){let{icon:t,color:s,w:a="w-12",h:i="h-12",bg:c=!1,className:o=""}=e,d=c?n.RH[s]:"".concat(n.uK[s]," bg-gray-50 dark:bg-slate-800");return(0,l.jsx)(r.Z,{path:t,w:a,h:i,size:"24",className:"rounded-full ".concat(d," ").concat(o)})}},7190:function(e,t,s){"use strict";var l=s(5893),n=s(5317),r=s(7294),a=s(1637),i=s(4695),c=s(7959);let o=e=>{let{outline:t=!1,children:s,...o}=e,d=t?a.bN[o.color]:a.RH[o.color],[x,m]=(0,r.useState)(!1),u=e=>{e.preventDefault(),m(!0)};return x?null:(0,l.jsx)("div",{className:"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150 ".concat(d),children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center mb-6 md:mb-0",children:[o.icon&&(0,l.jsx)(c.Z,{path:o.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",className:"md:mr-2"}),(0,l.jsx)("span",{className:"text-center md:text-left md:py-2",children:s})]}),o.button,!o.button&&(0,l.jsx)(i.Z,{icon:n.r5M,color:"white",onClick:u,small:!0,roundedFull:!0})]})})};t.Z=o},1112:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var l=s(5893);s(7294);var n=s(1637),r=s(7959);let a=e=>{let{small:t=!1,className:s="",...n}=e;return(0,l.jsxs)("div",{className:"inline-flex items-center capitalize leading-none ".concat(t?"text-xs":"text-sm"," ").concat(s),children:[n.icon&&(0,l.jsx)(r.Z,{path:n.icon,h:"h-4",w:"w-4",className:t?"mr-1":"mr-2",size:t?14:null}),n.label&&(0,l.jsx)("span",{children:n.label})]})},i=e=>{let{small:t=!1,outline:s=!1,className:r="",...i}=e,c=s?n.bN[i.color]:n.RH[i.color];return(0,l.jsx)(a,{className:"border rounded-full ".concat(t?"py-1 px-3":"py-1.5 px-4"," ").concat(c," ").concat(r),icon:i.icon,label:i.label,small:t})};var c=i},841:function(e,t,s){"use strict";var l=s(5893),n=s(5317),r=s(7294),a=s(4560),i=s(4695),c=s(2041),o=s(4522),d=s(5793);let x=()=>{let{clients:e}=(0,a.X)(),[t,s]=(0,r.useState)(0),x=e.slice(10*t,10*(t+1)),m=e.length/10,u=[];for(let h=0;h<m;h++)u.push(h);let[j,f]=(0,r.useState)(!1),[p,b]=(0,r.useState)(!1),g=()=>{f(!1),b(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Z,{title:"Sample modal",buttonColor:"info",buttonLabel:"Done",isActive:j,onConfirm:g,onCancel:g,children:[(0,l.jsxs)("p",{children:["Lorem ipsum dolor sit amet ",(0,l.jsx)("b",{children:"adipiscing elit"})]}),(0,l.jsx)("p",{children:"This is sample modal"})]}),(0,l.jsxs)(o.Z,{title:"Please confirm",buttonColor:"danger",buttonLabel:"Confirm",isActive:p,onConfirm:g,onCancel:g,children:[(0,l.jsxs)("p",{children:["Lorem ipsum dolor sit amet ",(0,l.jsx)("b",{children:"adipiscing elit"})]}),(0,l.jsx)("p",{children:"This is sample modal"})]}),(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Company"}),(0,l.jsx)("th",{children:"City"}),(0,l.jsx)("th",{children:"Progress"}),(0,l.jsx)("th",{children:"Created"}),(0,l.jsx)("th",{})]})}),(0,l.jsx)("tbody",{children:x.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border-b-0 lg:w-6 before:hidden",children:(0,l.jsx)(d.Z,{username:e.name,className:"w-24 h-24 mx-auto lg:w-6 lg:h-6"})}),(0,l.jsx)("td",{"data-label":"Name",children:e.name}),(0,l.jsx)("td",{"data-label":"Company",children:e.company}),(0,l.jsx)("td",{"data-label":"City",children:e.city}),(0,l.jsx)("td",{"data-label":"Progress",className:"lg:w-32",children:(0,l.jsx)("progress",{className:"flex w-2/5 self-center lg:w-full",max:"100",value:e.progress,children:e.progress})}),(0,l.jsx)("td",{"data-label":"Created",className:"lg:w-1 whitespace-nowrap",children:(0,l.jsx)("small",{className:"text-gray-500 dark:text-slate-400",children:e.created})}),(0,l.jsx)("td",{className:"before:hidden lg:w-1 whitespace-nowrap",children:(0,l.jsxs)(c.Z,{type:"justify-start lg:justify-end",noWrap:!0,children:[(0,l.jsx)(i.Z,{color:"info",icon:n.rgx,onClick:()=>f(!0),small:!0}),(0,l.jsx)(i.Z,{color:"danger",icon:n.QGK,onClick:()=>b(!0),small:!0})]})})]},e.id))})]}),(0,l.jsx)("div",{className:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between py-3 md:py-0",children:[(0,l.jsx)(c.Z,{children:u.map(e=>(0,l.jsx)(i.Z,{active:e===t,label:e+1,color:e===t?"lightDark":"whiteDark",small:!0,onClick:()=>s(e)},e))}),(0,l.jsxs)("small",{className:"mt-6 md:mt-0",children:["Page ",t+1," of ",m]})]})})]})};t.Z=x},4695:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var l=s(5893),n=s(7294),r=s(1664),a=s.n(r),i=s(1637),c=s(7959);function o(e){let{label:t,icon:s,iconSize:r,href:o,target:d,type:x,color:m="white",className:u="",asAnchor:h=!1,small:j=!1,outline:f=!1,active:p=!1,disabled:b=!1,roundedFull:g=!1,onClick:v}=e,w=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",b?"cursor-not-allowed":"cursor-pointer",g?"rounded-full":"rounded",(0,i.pQ)(m,f,!b,p),u];!t&&s?w.push("p-1"):j?w.push("text-sm",g?"px-3 py-1":"p-1"):w.push("py-2",g?"px-6":"px-3"),b&&w.push(f?"opacity-50":"opacity-70");let N=w.join(" "),y=(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)(c.Z,{path:s,size:r}),t&&(0,l.jsx)("span",{className:j&&s?"px-1":"px-2",children:t})]});return o&&!b?(0,l.jsx)(a(),{href:o,target:d,className:N,children:y}):n.createElement(h?"a":"button",{className:N,type:null!=x?x:"button",target:d,disabled:b,onClick:v},y)}},2041:function(e,t,s){"use strict";var l=s(5893),n=s(7294);let r=e=>{let{type:t="justify-start",mb:s="-mb-3",classAddon:r="mr-3 last:mr-0 mb-3",noWrap:a=!1,children:i,className:c}=e;return(0,l.jsx)("div",{className:"flex items-center ".concat(t," ").concat(c," ").concat(s," ").concat(a?"flex-nowrap":"flex-wrap"),children:n.Children.map(i,e=>e?(0,n.cloneElement)(e,{className:"".concat(r," ").concat(e.props.className)}):null)})};t.Z=r},1768:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var l=s(5893),n=s(7294),r=s(3532),a=s(1171);function i(e){let{rounded:t="rounded-2xl",flex:s="flex-col",className:i="",hasComponentLayout:c=!1,hasTable:o=!1,isHoverable:d=!1,isModal:x=!1,children:m,footer:u,onClick:h}=e,j=["bg-white flex",i,t,s,x?"dark:bg-slate-900":"dark:bg-slate-900/70"];return d&&j.push("hover:shadow-lg transition-shadow duration-500"),n.createElement("div",{className:j.join(" "),onClick:h},c?m:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{noPadding:o,children:m}),u&&(0,l.jsx)(a.Z,{children:u})]}))}},3532:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var l=s(5893);function n(e){let{noPadding:t=!1,className:s,children:n}=e;return(0,l.jsx)("div",{className:"flex-1 ".concat(t?"":"p-6"," ").concat(s),children:n})}s(7294)},1171:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var l=s(5893);function n(e){let{className:t,children:s}=e;return(0,l.jsx)("footer",{className:"p-6 ".concat(t),children:s})}s(7294)},8645:function(e,t,s){"use strict";var l=s(5893);s(7294);let n=e=>{let{title:t,children:s}=e;return(0,l.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,l.jsx)("h1",{className:"text-2xl",children:t}),s]})};t.Z=n},4522:function(e,t,s){"use strict";var l=s(5893),n=s(5317),r=s(4695),a=s(2041),i=s(1768),c=s(8645),o=s(8994);let d=e=>{let{title:t,buttonColor:s,buttonLabel:d,isActive:x,children:m,onConfirm:u,onCancel:h}=e;if(!x)return null;let j=(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{label:d,color:s,onClick:u}),!!h&&(0,l.jsx)(r.Z,{label:"Cancel",color:s,outline:!0,onClick:h})]});return(0,l.jsx)(o.Z,{onClick:h,className:h?"cursor-pointer":"",children:(0,l.jsxs)(i.Z,{className:"transition-transform shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50",isModal:!0,footer:j,children:[(0,l.jsx)(c.Z,{title:t,children:!!h&&(0,l.jsx)(r.Z,{icon:n.r5M,color:"whiteDark",onClick:h,small:!0,roundedFull:!0})}),(0,l.jsx)("div",{className:"space-y-3",children:m})]})})};t.Z=d},9966:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var l=s(5893),n=s(5317),r=s(7294),a=s(4695),i=s(7959),c=s(1552);function o(e){let{icon:t,title:s,main:o=!1,children:d}=e,x=!!r.Children.count(d);return(0,l.jsxs)("section",{className:"".concat(o?"":"pt-6"," mb-6 flex items-center justify-between"),children:[(0,l.jsxs)("div",{className:"flex items-center justify-start",children:[t&&o&&(0,l.jsx)(c.Z,{icon:t,color:"light",className:"mr-3",bg:!0}),t&&!o&&(0,l.jsx)(i.Z,{path:t,className:"mr-2",size:"20"}),(0,l.jsx)("h1",{className:"leading-tight ".concat(o?"text-3xl":"text-2xl"),children:s})]}),d,!x&&(0,l.jsx)(a.Z,{icon:n.Shd,color:"whiteDark"})]})}},4560:function(e,t,s){"use strict";s.d(t,{X:function(){return r},p:function(){return a}});var l=s(8100);let n=e=>fetch(e).then(e=>e.json()),r=()=>{var e;let{data:t,error:s}=(0,l.ZP)("/data-sources/clients.json",n);return{clients:null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[],isLoading:!s&&!t,isError:s}},a=()=>{var e;let{data:t,error:s}=(0,l.ZP)("/data-sources/history.json",n);return{transactions:null!==(e=null==t?void 0:t.data)&&void 0!==e?e:[],isLoading:!s&&!t,isError:s}}},3822:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return B}});var l=s(5893),n=s(5317),r=s(9008),a=s.n(r),i=s(7294),c=s(4695),o=s(4457),d=s(2332),x=s(9966),m=s(1637),u=s(7959),h=s(1768),j=s(2077),f=s.n(j);let p=e=>{let{prefix:t="",suffix:s="",value:n,duration:r=500}=e,[a,c]=(0,i.useState)(0),o=a<1e3?a:f()(a).format("0,0"),d=[],x=e=>{let t=Math.ceil(a+e);if(t>n)return c(n),!1;c(t),d.push(setTimeout(()=>{x(e)},25))};return(0,i.useEffect)(()=>(x(n/(r/25)),()=>{d.forEach(e=>{clearTimeout(e)})})),(0,l.jsxs)("div",{children:[t,o,s]})};var b=s(1112);let g=e=>{let{small:t=!1,...s}=e,r={up:n.Waq,down:n.CW,success:n.k6A,danger:n.O8k,warning:n._gM,info:n.EaN}[s.type];return(0,l.jsx)(b.Z,{label:s.label,color:s.color,icon:r,small:t})},v=e=>(0,l.jsxs)(h.Z,{children:[e.trendLabel&&e.trendType&&e.trendColor&&(0,l.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,l.jsx)(g,{label:e.trendLabel,type:e.trendType,color:e.trendColor,small:!0}),(0,l.jsx)(c.Z,{icon:n.Shd,color:"lightDark",small:!0})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg leading-tight text-gray-500 dark:text-slate-400",children:e.label}),(0,l.jsx)("h1",{className:"text-3xl leading-tight font-semibold",children:(0,l.jsx)(p,{value:e.number,prefix:e.numberPrefix,suffix:e.numberSuffix})})]}),e.icon&&(0,l.jsx)(u.Z,{path:e.icon,size:"48",w:"",h:"h-16",className:m.uK[e.iconColor]})]})]});var w=s(4560),N=s(1552);let y=e=>{let t={withdraw:n.fmS,deposit:n.X$m,invoice:n.IH$,payment:n.SoU}[e.transaction.type],s=()=>{switch(e.transaction.type){case"withdraw":return"danger";case"deposit":return"success";case"invoice":return"warning";case"payment":return"info"}};return(0,l.jsx)(h.Z,{className:"mb-6 last:mb-0",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0",children:[(0,l.jsx)(N.Z,{icon:t,color:s(),className:"md:mr-6 mb-6 md:mb-0"}),(0,l.jsxs)("div",{className:"text-center space-y-1 md:text-left md:mr-6",children:[(0,l.jsxs)("h4",{className:"text-xl",children:["$",e.transaction.amount]}),(0,l.jsxs)("p",{className:"text-gray-500 dark:text-slate-400",children:[(0,l.jsx)("b",{children:e.transaction.date})," via ",e.transaction.business]})]})]}),(0,l.jsxs)("div",{className:"text-center md:text-right space-y-2",children:[(0,l.jsx)("p",{className:"text-sm text-gray-500",children:e.transaction.name}),(0,l.jsx)("div",{children:(0,l.jsx)(b.Z,{color:s(),label:e.transaction.type,small:!0})})]})]})})};var Z=s(5793);let C=e=>{let t=()=>e.client.progress>=60?"success":e.client.progress>=40?"warning":"danger",s={success:n.sIZ,warning:n.aE,danger:n.ic4}[t()];return(0,l.jsx)(h.Z,{className:"mb-6 last:mb-0",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-start mb-6 md:mb-0",children:[(0,l.jsx)(Z.Z,{className:"w-12 h-12 md:mr-6 mb-6 md:mb-0",username:e.client.name}),(0,l.jsxs)("div",{className:"text-center md:text-left overflow-hidden",children:[(0,l.jsx)("h4",{className:"text-xl text-ellipsis",children:e.client.name}),(0,l.jsxs)("p",{className:"text-gray-500 dark:text-slate-400",children:[e.client.created," @ ",e.client.login]})]})]}),(0,l.jsx)(b.Z,{color:t(),icon:s,label:"".concat(e.client.progress,"%")})]})})},k=e=>{let{className:t="",children:s}=e;return(0,l.jsx)("div",{className:"".concat(t," rounded-2xl py-12 px-6 lg:px-12 text-center"),children:s})},S=()=>(0,l.jsxs)(k,{className:m.FA,children:[(0,l.jsxs)("h1",{className:"text-3xl text-white mb-6",children:["Like the project? Please star on ",(0,l.jsx)("b",{children:"GitHub"})," ;-)"]}),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:n.LcO,label:"GitHub",roundedFull:!0})})]}),E={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},L=e=>{let t=[];for(let s=0;s<e;s++)t.push(Math.round(200*Math.random()));return t},_=(e,t)=>({fill:!1,borderColor:E.default[e],borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:E.default[e],pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:E.default[e],pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:L(t),tension:.5,cubicInterpolationMode:"default"}),T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=[];for(let s=1;s<=e;s++)t.push("0".concat(s));return{labels:t,datasets:[_("primary",e),_("info",e),_("danger",e)]}};var D=s(6775),P=s(5376);D.kL.register(D.jn,D.od,D.ST,D.f$,D.uw,D.u);let z={responsive:!0,maintainAspectRatio:!1,scales:{y:{display:!1},x:{display:!0}},plugins:{legend:{display:!1}}},F=e=>{let{data:t}=e;return(0,l.jsx)(P.x1,{options:z,data:t,className:"h-96"})};var H=s(7190),M=s(841),O=s(929);let R=()=>{let{clients:e}=(0,w.X)(),{transactions:t}=(0,w.p)(),s=e.slice(0,4),[r,o]=(0,i.useState)(T()),m=e=>{e.preventDefault(),o(T())};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a(),{children:(0,l.jsx)("title",{children:(0,O.pz)("Dashboard")})}),(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(x.Z,{icon:n.M7S,title:"Overview",main:!0,children:(0,l.jsx)(c.Z,{href:"https://github.com/justboil/admin-one-react-tailwind",target:"_blank",icon:n.LcO,label:"Star on GitHub",color:"contrast",roundedFull:!0,small:!0})}),(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6",children:[(0,l.jsx)(v,{trendLabel:"12%",trendType:"up",trendColor:"success",icon:n.zr,iconColor:"success",number:512,label:"Clients"}),(0,l.jsx)(v,{trendLabel:"16%",trendType:"down",trendColor:"danger",icon:n.JKU,iconColor:"info",number:7770,numberPrefix:"$",label:"Sales"}),(0,l.jsx)(v,{trendLabel:"Overflow",trendType:"warning",trendColor:"warning",icon:n.M7S,iconColor:"danger",number:256,numberSuffix:"%",label:"Performance"})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[(0,l.jsx)("div",{className:"flex flex-col justify-between",children:t.map(e=>(0,l.jsx)(y,{transaction:e},e.id))}),(0,l.jsx)("div",{className:"flex flex-col justify-between",children:s.map(e=>(0,l.jsx)(C,{client:e},e.id))})]}),(0,l.jsx)("div",{className:"my-6",children:(0,l.jsx)(S,{})}),(0,l.jsx)(x.Z,{icon:n.Cld,title:"Trends overview",children:(0,l.jsx)(c.Z,{icon:n.vS,color:"whiteDark",onClick:m})}),(0,l.jsx)(h.Z,{className:"mb-6",children:r&&(0,l.jsx)(F,{data:r})}),(0,l.jsx)(x.Z,{icon:n.zr,title:"Clients"}),(0,l.jsxs)(H.Z,{color:"info",icon:n.qOQ,children:[(0,l.jsx)("b",{children:"Responsive table."})," Collapses on mobile"]}),(0,l.jsx)(h.Z,{hasTable:!0,children:(0,l.jsx)(M.Z,{})})]})]})};R.getLayout=function(e){return(0,l.jsx)(o.Z,{children:e})};var B=R}},function(e){e.O(0,[702,757,664,374,100,517,784,774,888,179],function(){return e(e.s=528)}),_N_E=e.O()}]);