(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6568],{94629:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(82394),i=r(21831),o=r(82684),u=r(50724),s=r(82555),a=r(97618),c=r(70613),d=r(68487),l=r(68899),f=r(28598);function h(e,t){var r=e.children,n=e.noPadding;return(0,f.jsx)(l.HS,{noPadding:n,ref:t,children:r})}var p=o.forwardRef(h),b=r(62547),m=r(82571),v=r(98464),j=r(77417),O=r(46684),g=r(70515),w=r(53808),_=r(19183);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t){e.addProjectBreadcrumbToCustomBreadcrumbs;var r=e.after,n=e.afterHeader,h=e.afterHidden,x=e.afterWidth,Z=e.afterWidthOverride,P=e.appendBreadcrumbs,C=e.before,E=e.beforeWidth,k=e.breadcrumbs,H=e.children,A=e.errors,M=e.headerMenuItems,S=e.headerOffset,B=e.hideAfterCompletely,R=e.mainContainerHeader,T=e.navigationItems,I=e.setAfterHidden,N=e.setErrors,W=e.subheaderChildren,D=e.subheaderNoPadding,U=e.title,z=e.uuid,F=(0,_.i)().width,X="dashboard_after_width_".concat(z),q="dashboard_before_width_".concat(z),V=(0,o.useRef)(null),G=(0,o.useState)(Z?x:(0,w.U2)(X,x)),J=G[0],K=G[1],L=(0,o.useState)(!1),Q=L[0],Y=L[1],$=(0,o.useState)(C?Math.max((0,w.U2)(q,E),13*g.iI):null),ee=$[0],te=$[1],re=(0,o.useState)(!1),ne=re[0],ie=re[1],oe=(0,o.useState)(null)[1],ue=(0,j.Z)().project,se=[];k&&se.push.apply(se,(0,i.Z)(k)),null!==k&&void 0!==k&&k.length&&!P||!ue||null!==k&&void 0!==k&&k.length||se.unshift({bold:!P,label:function(){return U}}),(0,o.useEffect)((function(){null===V||void 0===V||!V.current||Q||ne||null===oe||void 0===oe||oe(V.current.getBoundingClientRect().width)}),[Q,J,ne,ee,V,oe,F]),(0,o.useEffect)((function(){Q||(0,w.t8)(X,J)}),[h,Q,J,X]),(0,o.useEffect)((function(){ne||(0,w.t8)(q,ee)}),[ne,ee,q]);var ae=(0,v.Z)(x);return(0,o.useEffect)((function(){Z&&ae!==x&&K(x)}),[Z,x,ae]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{title:U}),(0,f.jsx)(d.Z,{breadcrumbs:se,menuItems:M}),(0,f.jsxs)(l.Nk,{ref:t,children:[0!==(null===T||void 0===T?void 0:T.length)&&(0,f.jsx)(l.lm,{showMore:!0,children:(0,f.jsx)(m.Z,{navigationItems:T,showMore:!0})}),(0,f.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:r,afterHeader:n,afterHeightOffset:O.Mz,afterHidden:h,afterMousedownActive:Q,afterWidth:J,before:C,beforeHeightOffset:O.Mz,beforeMousedownActive:ne,beforeWidth:l.k1+(C?ee:0),headerOffset:S,hideAfterCompletely:!I||B,leftOffset:C?l.k1:null,mainContainerHeader:R,mainContainerRef:V,setAfterHidden:I,setAfterMousedownActive:Y,setAfterWidth:K,setBeforeMousedownActive:ie,setBeforeWidth:te,children:[W&&(0,f.jsx)(p,{noPadding:D,children:W}),H]})})]}),A&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===N||void 0===N?void 0:N(null)},children:(0,f.jsx)(s.Z,y(y({},A),{},{onClose:function(){return null===N||void 0===N?void 0:N(null)}}))})]})}var P=o.forwardRef(Z)},14759:function(e,t,r){"use strict";r.r(t);var n=r(77837),i=r(38860),o=r.n(i),u=r(82684),s=r(44898),a=r(94629),c=r(88328),d=r(93808),l=r(38276),f=r(4190),h=r(5755),p=r(35686),b=r(70515),m=r(69419),v=r(28598);function j(e){var t,r=e.objectType,n=e.slug,i=(0,m.iV)().object_type,o=(0,u.useState)(null),d=o[0],j=o[1],O=i||r||s.Z,g=s.R===O,w=p.ZP.custom_templates.detail(n&&encodeURIComponent(n),{object_type:O}).data;return(0,u.useEffect)((function(){w&&j(null===w||void 0===w?void 0:w.custom_template)}),[w]),(0,v.jsxs)(a.Z,{addProjectBreadcrumbToCustomBreadcrumbs:!0,breadcrumbs:[{label:function(){return"Templates"},linkProps:{href:g?"/templates?object_type=".concat(s.R):"/templates"}},{bold:!0,label:function(){return n}}],title:n,uuid:"TemplatesDetail/index",children:[!w&&(0,v.jsx)(l.Z,{p:b.cd,children:(0,v.jsx)(f.Z,{inverted:!0})}),d&&(0,v.jsxs)(v.Fragment,{children:[(!O||s.Z===O)&&(0,v.jsx)(h.Z,{template:d},null===d||void 0===d||null===(t=d.content)||void 0===t?void 0:t.slice(0,40)),g&&(0,v.jsx)(c.Z,{template:d})]})]})}j.getInitialProps=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=r.object_type,i=r.slug,e.abrupt("return",{objectType:n,slug:i});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=(0,d.Z)(j)},45082:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates/[...slug]",function(){return r(14759)}])}},function(e){e.O(0,[2678,1154,844,5820,6639,1124,341,1751,1821,4267,9266,8487,8264,7858,5499,5283,3745,5810,1769,1550,90,9264,9774,2888,179],(function(){return t=45082,e(e.s=t);var t}));var t=e.O();_N_E=t}]);