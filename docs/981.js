(self.webpackChunknenrei=self.webpackChunknenrei||[]).push([[981],{2285:(n,t,e)=>{"use strict";e.d(t,{Z:()=>m});var i=e(2122),r=e(1253),o=e(7294),s=(e(5697),e(3935)),a=e(9437),c=e(2666),u=e(3834),f=e(1041),l=e(3366),d=e(5653);function p(n,t){var e=function(n,t){var e,i=t.getBoundingClientRect();if(t.fakeTransform)e=t.fakeTransform;else{var r=window.getComputedStyle(t);e=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var o=0,s=0;if(e&&"none"!==e&&"string"==typeof e){var a=e.split("(")[1].split(")")[0].split(",");o=parseInt(a[4],10),s=parseInt(a[5],10)}return"left"===n?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-i.left,"px)"):"right"===n?"translateX(-".concat(i.left+i.width-o,"px)"):"up"===n?"translateY(".concat(window.innerHeight,"px) translateY(").concat(s-i.top,"px)"):"translateY(-".concat(i.top+i.height-s,"px)")}(n,t);e&&(t.style.webkitTransform=e,t.style.transform=e)}var g={enter:l.x9.enteringScreen,exit:l.x9.leavingScreen};const m=o.forwardRef((function(n,t){var e=n.children,l=n.direction,m=void 0===l?"down":l,w=n.in,E=n.onEnter,v=n.onEntered,y=n.onEntering,x=n.onExit,k=n.onExited,h=n.onExiting,Z=n.style,b=n.timeout,C=void 0===b?g:b,T=n.TransitionComponent,O=void 0===T?c.ZP:T,R=(0,r.Z)(n,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),P=(0,f.Z)(),S=o.useRef(null),X=o.useCallback((function(n){S.current=s.findDOMNode(n)}),[]),Y=(0,u.Z)(e.ref,X),z=(0,u.Z)(Y,t),I=function(n){return function(t){n&&(void 0===t?n(S.current):n(S.current,t))}},L=I((function(n,t){p(m,n),(0,d.n)(n),E&&E(n,t)})),V=I((function(n,t){var e=(0,d.C)({timeout:C,style:Z},{mode:"enter"});n.style.webkitTransition=P.transitions.create("-webkit-transform",(0,i.Z)({},e,{easing:P.transitions.easing.easeOut})),n.style.transition=P.transitions.create("transform",(0,i.Z)({},e,{easing:P.transitions.easing.easeOut})),n.style.webkitTransform="none",n.style.transform="none",y&&y(n,t)})),j=I(v),B=I(h),D=I((function(n){var t=(0,d.C)({timeout:C,style:Z},{mode:"exit"});n.style.webkitTransition=P.transitions.create("-webkit-transform",(0,i.Z)({},t,{easing:P.transitions.easing.sharp})),n.style.transition=P.transitions.create("transform",(0,i.Z)({},t,{easing:P.transitions.easing.sharp})),p(m,n),x&&x(n)})),H=I((function(n){n.style.webkitTransition="",n.style.transition="",k&&k(n)})),M=o.useCallback((function(){S.current&&p(m,S.current)}),[m]);return o.useEffect((function(){if(!w&&"down"!==m&&"right"!==m){var n=(0,a.Z)((function(){S.current&&p(m,S.current)}));return window.addEventListener("resize",n),function(){n.clear(),window.removeEventListener("resize",n)}}}),[m,w]),o.useEffect((function(){w||M()}),[w,M]),o.createElement(O,(0,i.Z)({nodeRef:S,onEnter:L,onEntered:j,onEntering:V,onExit:D,onExited:H,onExiting:B,appear:!0,in:w,timeout:C},R),(function(n,t){return o.cloneElement(e,(0,i.Z)({ref:z,style:(0,i.Z)({visibility:"exited"!==n||w?void 0:"hidden"},Z,e.props.style)},t))}))}))},2981:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>o});var i=e(7294),r=e(2285);const o=n=>i.createElement(r.Z,Object.assign({},n,{direction:"down"}))}}]);