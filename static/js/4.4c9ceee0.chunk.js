(this.webpackJsonphand_action_detect=this.webpackJsonphand_action_detect||[]).push([[4],{108:function(e,n,t){},109:function(e,n,t){},131:function(e,n,t){"use strict";t.r(n);var c=t(43),a=t(25),s=(t(108),t(20)),i=t(17),l=t(128),o=t(0),r=t(42),d=t(15),u=t.n(d),j=(t(109),t(4));function b(e){var n=e.children,t=e.isShow,c=e.setIsShow,a=e.onClose,s=Object(o.useRef)(null),i=Object(o.useRef)(null);return Object(o.useEffect)((function(){return t&&i.current.addEventListener("click",(function(e){console.log(e.target),s.current.contains(e.target)||(c&&c(!1),a&&a())})),document.body.style.overflow="".concat(t?"hidden":"auto"),function(){i.current&&i.current.removeEventListener("click",(function(){}))}}),[t]),u.a.createPortal(Object(j.jsx)("div",{className:"backdrop ".concat(t?"backdrop":"backdropHide"),ref:i,children:Object(j.jsx)("div",{ref:s,className:"modal ".concat(t?"modal-show":"modal-hide"),children:n})}),document.getElementById("modal"))}var h=t(22),O={indicatorSeparator:function(e,n){return{display:"none!important"}}};n.default=function(){var e,n,t,d,u=Object(s.b)(),m=Object(o.useState)(!1),f=Object(a.a)(m,2),v=f[0],p=f[1],g=Object(o.useState)(null),x=Object(a.a)(g,2),y=x[0],C=x[1],S=function(){p(!1),u({type:i.a.CLEAR_DETECT_HAND_RESULT})},N=Object(o.useState)(null),D=Object(a.a)(N,2),E=D[0],H=D[1],F=Object(o.useState)(null),A=Object(a.a)(F,2),T=A[0],_=A[1],k=Object(o.useState)(null),w=Object(a.a)(k,2),R=w[0],L=w[1],P=Object(o.useState)(null),M=Object(a.a)(P,2),B=M[0],I=M[1],J=Object(o.useState)(!1),U=Object(a.a)(J,2),W=U[0],q=U[1],z=Object(s.c)((function(e){return e.handDetect.listDirectionOfPalmAndFinger})),G=Object(s.c)((function(e){return e.handDetect.listFingerOpening})),K=Object(s.c)((function(e){return e.handDetect.listFingerShape})),Q=Object(s.c)((function(e){return e.handDetect.listHandMovement})),V=Object(s.c)((function(e){return e.handDetect.listHandShape})),X=Object(s.c)((function(e){return e.handDetect.loading})),Y=Object(s.c)((function(e){return e.handDetect.returnResult}));return Object(o.useLayoutEffect)((function(){return Y&&p(!0),function(){}}),[Y]),Object(o.useEffect)((function(){u({type:i.a.FETCH_DATA_START,payload:{message:"Hello world"}})}),[]),"idle"===X||"loading"===X?Object(j.jsx)(r.a,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsxs)("div",{className:"selectContainer",children:[Object(j.jsx)("span",{children:"H\xecnh d\u1ea1ng b\xe0n tay"}),Object(j.jsx)(l.a,{styles:O,options:V.map((function(e){return{value:e.idHandShape,label:e.nameHandShape}})),value:B,onChange:function(e){I(e)}})]}),Object(j.jsxs)("div",{className:"selectContainer",children:[Object(j.jsx)("span",{children:"H\u01b0\u1edbng c\u1ee7a l\xf2ng b\xe0n tay v\xe0 ng\xf3n tay"}),Object(j.jsx)(l.a,{styles:O,options:z.map((function(e){return{value:e.idDirectionOfPalmsAndFinger,label:e.directionOfPalmAndFingerName}})),value:y,onChange:function(e){C(e),console.log(e)}})]}),Object(j.jsxs)("div",{className:"selectContainer",children:[Object(j.jsx)("span",{children:"\u0110\u1ed9 m\u1edf c\xe1c ng\xf3n tay"}),Object(j.jsx)(l.a,{styles:O,options:G.map((function(e){return{value:e.idFingerOpening,label:e.nameFingerOpening}})),value:E,onChange:function(e){H(e)}})]}),Object(j.jsxs)("div",{className:"selectContainer",children:[Object(j.jsx)("span",{children:"H\xecnh d\u1ea1ng ng\xf3n tay"}),Object(j.jsx)(l.a,{styles:O,options:K.map((function(e){return{value:e.idFingerShape,label:e.nameFingerShape}})),value:T,onChange:function(e){_(e)}})]}),Object(j.jsxs)("div",{className:"selectContainer",children:[Object(j.jsx)("span",{children:"\u0110\u1ed9 d\u1ecbch chuy\u1ec3n c\u1ee7a tay"}),Object(j.jsx)(l.a,{styles:O,options:Q.map((function(e){return{value:e.idHandMovement,label:e.nameHandMovement}})),value:R,onChange:function(e){L(e)}})]}),W?Object(j.jsx)("div",{className:"error_message",children:"Error"}):Object(j.jsx)(j.Fragment,{}),Object(j.jsx)("button",{className:"submitBtn",onClick:function(){u({type:i.a.DETECT_HAND_START,data:{directionOfPalmAndFinger:y.value,fingerOpening:E.value,fingerShape:T.value,handMovement:R.value,handShape:B.value}}),q(!1)},children:"Check"})]})}),Object(j.jsx)(b,{isShow:v,setIsShow:p,onClose:S,children:Object(j.jsxs)("div",{className:"modalContainer",children:[Object(j.jsx)("div",{style:{textAlign:"right"},children:Object(j.jsx)(h.a,(e={name:"close",width:18},Object(c.a)(e,"width",18),Object(c.a)(e,"onClick",S),Object(c.a)(e,"style",{cursor:"pointer"}),e))}),Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h2",{className:"header",children:"Ch\u1eef c\xe1i b\u1ea1n m\xf4 t\u1ea3 l\xe0"}),Object(j.jsx)("div",{className:"closeBtn",onClick:S})]}),Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{style:{fontWeight:"unset"},children:"Ch\u1eef "}),Object(j.jsx)("strong",{className:"result",children:(null===Y||void 0===Y||null===(n=Y.case)||void 0===n||null===(t=n.case)||void 0===t?void 0:t.caseNameResult)||(null===Y||void 0===Y||null===(d=Y.case)||void 0===d?void 0:d.caseNameResult)})]}),Object(j.jsx)("p",{style:{marginTop:5},children:null===Y||void 0===Y?void 0:Y.message})]})]})})]})}}}]);
//# sourceMappingURL=4.4c9ceee0.chunk.js.map