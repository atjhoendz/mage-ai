(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3277],{94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),i=t(21831),o=t(82684),u=t(50724),c=t(82555),a=t(97618),s=t(70613),l=t(68487),f=t(68899),d=t(28598);function h(e,n){var t=e.children,r=e.noPadding;return(0,d.jsx)(f.HS,{noPadding:r,ref:n,children:t})}var p=o.forwardRef(h),m=t(62547),b=t(82571),g=t(35686),v=t(98464),y=t(46684),w=t(70515),O=t(53808),j=t(19183);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,h=e.after,S=e.afterHeader,_=e.afterHidden,P=e.afterWidth,Z=e.afterWidthOverride,I=e.appendBreadcrumbs,N=e.before,E=e.beforeWidth,H=e.breadcrumbs,C=e.children,k=e.errors,z=e.headerMenuItems,R=e.headerOffset,W=e.hideAfterCompletely,A=e.mainContainerHeader,B=e.navigationItems,M=e.setAfterHidden,F=e.setErrors,T=e.subheaderChildren,D=e.subheaderNoPadding,L=e.title,U=e.uuid,X=(0,j.i)().width,G="dashboard_after_width_".concat(U),K="dashboard_before_width_".concat(U),Q=(0,o.useRef)(null),J=(0,o.useState)(Z?P:(0,O.U2)(G,P)),V=J[0],Y=J[1],$=(0,o.useState)(!1),q=$[0],ee=$[1],ne=(0,o.useState)(N?Math.max((0,O.U2)(K,E),13*w.iI):null),te=ne[0],re=ne[1],ie=(0,o.useState)(!1),oe=ie[0],ue=ie[1],ce=(0,o.useState)(null)[1],ae=g.ZP.projects.list({},{revalidateOnFocus:!1}).data,se=null===ae||void 0===ae?void 0:ae.projects,le={label:function(){var e;return null===se||void 0===se||null===(e=se[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},fe=[];H&&(r&&fe.push(le),fe.push.apply(fe,(0,i.Z)(H))),(null===H||void 0===H||!H.length||I)&&(null===se||void 0===se?void 0:se.length)>=1&&(null!==H&&void 0!==H&&H.length||fe.unshift({bold:!I,label:function(){return L}}),fe.unshift(le)),(0,o.useEffect)((function(){null===Q||void 0===Q||!Q.current||q||oe||null===ce||void 0===ce||ce(Q.current.getBoundingClientRect().width)}),[q,V,oe,te,Q,ce,X]),(0,o.useEffect)((function(){q||(0,O.t8)(G,V)}),[_,q,V,G]),(0,o.useEffect)((function(){oe||(0,O.t8)(K,te)}),[oe,te,K]);var de=(0,v.Z)(P);return(0,o.useEffect)((function(){Z&&de!==P&&Y(P)}),[Z,P,de]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{title:L}),(0,d.jsx)(l.Z,{breadcrumbs:fe,menuItems:z,project:null===se||void 0===se?void 0:se[0],version:null===se||void 0===se||null===(t=se[0])||void 0===t?void 0:t.version}),(0,d.jsxs)(f.Nk,{ref:n,children:[0!==(null===B||void 0===B?void 0:B.length)&&(0,d.jsx)(f.lm,{showMore:!0,children:(0,d.jsx)(b.Z,{navigationItems:B,showMore:!0})}),(0,d.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,d.jsxs)(m.Z,{after:h,afterHeader:S,afterHeightOffset:y.Mz,afterHidden:_,afterMousedownActive:q,afterWidth:V,before:N,beforeHeightOffset:y.Mz,beforeMousedownActive:oe,beforeWidth:f.k1+(N?te:0),headerOffset:R,hideAfterCompletely:!M||W,leftOffset:N?f.k1:null,mainContainerHeader:A,mainContainerRef:Q,setAfterHidden:M,setAfterMousedownActive:ee,setAfterWidth:Y,setBeforeMousedownActive:ue,setBeforeWidth:re,children:[T&&(0,d.jsx)(p,{noPadding:D,children:T}),C]})})]}),k&&(0,d.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===F||void 0===F?void 0:F(null)},children:(0,d.jsx)(c.Z,x(x({},k),{},{onClose:function(){return null===F||void 0===F?void 0:F(null)}}))})]})}var P=o.forwardRef(_)},75083:function(e,n,t){"use strict";t.d(n,{HF:function(){return o},L6:function(){return r}});var r,i=t(72473);function o(e,n,t){var o=e.owner,u=(e.roles,[{Icon:i.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return o&&u.push({Icon:i.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),u.push.apply(u,[{Icon:i.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}},{Icon:i.$B,id:r.FILE_BROWSER,isSelected:function(){return r.FILE_BROWSER===t},label:function(){return"File browser"},linkProps:{href:"/manage/files"}}]),u}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings",e.FILE_BROWSER="file_browser"}(r||(r={}))},59533:function(e,n,t){"use strict";var r=t(82684),i=t(94629),o=t(35686),u=t(70515),c=t(75083),a=t(50178),s=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,l=void 0===t?[]:t,f=e.children,d=e.errors,h=e.headerOffset,p=e.mainContainerHeader,m=e.pageName,b=e.setErrors,g=e.subheaderChildren,v=o.ZP.statuses.list().data,y=(0,r.useMemo)((function(){var e,n;return null===v||void 0===v||null===(e=v.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[v]),w=(0,a.PR)()||{};return(0,s.jsx)(i.Z,{before:n,beforeWidth:n?50*u.iI:0,breadcrumbs:l,errors:d,headerOffset:h,mainContainerHeader:p,navigationItems:(0,c.HF)(w,y,m),setErrors:b,subheaderChildren:g,title:"Workspaces",uuid:"workspaces/index",children:f})}},85854:function(e,n,t){"use strict";var r,i,o,u,c,a,s,l,f=t(82394),d=t(26304),h=t(26653),p=t(38626),m=t(33591),b=t(44897),g=t(95363),v=t(61896),y=t(30160),w=t(70515),O=t(38276),j=t(28598),S=["children","condensed","inline","level","marketing","spacingBelow"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,p.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||b.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(g.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(g.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(g.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),Z=p.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")})),I=p.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,m.media.md(r||(r=(0,h.Z)(["\n    ","\n  "])),v.aQ),m.media.lg(i||(i=(0,h.Z)(["\n    ","\n  "])),v.aQ),m.media.xl(o||(o=(0,h.Z)(["\n    ","\n  "])),v.aQ)),N=p.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,v.MJ),E=p.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,m.media.xs(u||(u=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.sm(c||(c=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.md(a||(a=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.lg(s||(s=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.xl(l||(l=(0,h.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI)),H=p.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,v.BL),C=p.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),k=p.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),z=p.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),R=p.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(v.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(v.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),W=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,u=e.marketing,c=e.spacingBelow,a=(0,d.Z)(e,S);i?n=R:0===Number(o)?n=I:1===Number(o)?n=u?E:N:2===Number(o)?n=H:3===Number(o)?n=C:4===Number(o)?n=k:5===Number(o)&&(n=z);var s=(0,j.jsxs)(n,_(_({},a),{},{level:o,children:[c&&(0,j.jsx)(O.Z,{mb:r?2:3,children:t}),!c&&t]}));return i?s:(0,j.jsx)(Z,{children:s})};W.defaultProps={level:3,weightStyle:6},n.Z=W},37560:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),u=(t(82684),t(34376)),c=t(93808),a=t(38276),s=t(36043),l=t(59533),f=t(70515),d=t(75083),h=t(28598);function p(){var e=(0,u.useRouter)();return(0,h.jsx)(l.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{label:function(){return"Users"},linkProps:{as:"/manage/users",href:"/manage/users"}},{bold:!0,label:function(){return"New"}}],pageName:d.L6.USERS,children:(0,h.jsx)(a.Z,{p:f.cd,children:(0,h.jsx)(s.Z,{hideFields:["roles"],newUser:!0,onSaveSuccess:function(n){e.push("/manage/users/[user]","/manage/users/".concat(null===n||void 0===n?void 0:n.id))},title:"Add new user",user:{}})})})}p.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=(0,c.Z)(p)},94e3:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users/new",function(){return t(37560)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},13692:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(61049);function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,r.Z)(e,n)}},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}},61049:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[2678,1154,844,4267,600,8487,8264,6043,9774,2888,179],(function(){return n=94e3,e(e.s=n);var n}));var n=e.O();_N_E=n}]);