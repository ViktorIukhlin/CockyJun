(this["webpackJsonpcocky-jun"]=this["webpackJsonpcocky-jun"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"ResultWindow_container__1f996",result:"ResultWindow_result__2PS4t",answer:"ResultWindow_answer__3EXJN"}},14:function(e,t,n){e.exports={containerCopy:"QuestionsPage_containerCopy__5eO1Z",buttonReturn:"QuestionsPage_buttonReturn__2mwzs",timer:"QuestionsPage_timer__2Z-xo"}},19:function(e,t,n){e.exports={container:"StartPage_container__3bt3p",button:"StartPage_button__2u5UL",pulsate:"StartPage_pulsate__1pOlj"}},26:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),r=n.n(c),a=n(24),i=n.n(a),o=n(6),u=n(11),j=n(2),b=(n(34),n(8)),l=n.n(b),O=function(e){var t=e.question,n=e.answers,c=e.sendAnswers;return Object(s.jsxs)("div",{className:l.a.container,children:[Object(s.jsx)("div",{className:l.a.question,children:Object(s.jsx)("div",{children:t})}),Object(s.jsxs)("div",{className:l.a.boxForAnswer,children:[Object(s.jsxs)("button",{className:l.a.answer,onClick:c,children:[" ",n[0]," "]}),Object(s.jsxs)("button",{className:l.a.answer,onClick:c,children:[" ",n[1]," "]}),Object(s.jsxs)("button",{className:l.a.answer,onClick:c,children:[" ",n[2]," "]}),Object(s.jsxs)("button",{className:l.a.answer,onClick:c,children:[" ",n[3]," "]})]})]})},d=n(14),x=n.n(d),_=n(10),m=n.n(_),h=function(e){var t=e.answer,n=e.rightAnswer,c=e.timeOff,r=e.nextQuestionTrue,a=e.nextQuestionFalse,i=t===n;return Object(s.jsxs)("div",{className:m.a.container,style:i?{border:"#DCF5EB solid 5px"}:{border:"#FCE4DF solid 5px"},children:[i?Object(s.jsx)("div",{className:m.a.result,style:{color:"#45C38A"},children:Object(s.jsx)("div",{children:"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0432\u0435\u0440\u043d\u043e!"})}):Object(s.jsxs)("div",{className:m.a.result,style:{color:"#EE593B"},children:[c?Object(s.jsx)("div",{className:m.a.message,children:"\u0412\u0440\u0435\u043c\u044f \u0432\u044b\u0448\u043b\u043e! \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442:"}):Object(s.jsx)("div",{className:m.a.message,children:"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u043e! \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442:"}),Object(s.jsx)("div",{className:m.a.answer,children:n})]}),Object(s.jsx)("button",{onClick:i?r:a,children:"\u0414\u0430\u043b\u0435\u0435"})]})},w=function(e){var t=e.state,n=e.countTimer,r=e.timerOn,a=Object(c.useState)(0),i=Object(o.a)(a,2),j=i[0],b=i[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),_=d[0],m=d[1],w=Object(c.useState)(""),f=Object(o.a)(w,2),v=f[0],g=f[1],N=Object(c.useState)(0),p=Object(o.a)(N,2),S=p[0],q=p[1],T=Object(c.useState)(n),E=Object(o.a)(T,2),P=E[0],A=E[1],Q=Object(c.useState)(!1),C=Object(o.a)(Q,2),y=C[0],F=C[1],k=Object(c.useState)(""),I=Object(o.a)(k,2),R=I[0],J=I[1],X=Object(c.useState)([]),B=Object(o.a)(X,2),D=B[0],M=B[1];Object(c.useEffect)((function(){if(r){if(0!==P){var e=setTimeout((function(){A(P-1)}),1e3);return function(){return clearTimeout(e)}}F(!0)}}),[P,r]),Object(c.useEffect)((function(){if(j===t.length)return function(){};M(t[j].answers.sort((function(){return Math.random()-.5}))),J(t[j].question),A(n)}),[j,n,t]);var U=function(){F(!1),m(!1),b(j+1)},W=function(){F(!1),q(S+1),m(!1),b(j+1)};return Object(s.jsx)(s.Fragment,{children:j===t.length?Object(s.jsxs)("div",{className:x.a.containerCopy,children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 ",j-S," \u0438\u0437 ",j,Object(s.jsx)(u.b,{to:"/startPage",className:x.a.buttonReturn,children:"\u0417\u0430\u043d\u043e\u0432\u043e"})]}):_||y?Object(s.jsx)(h,{answer:v,rightAnswer:t[j].correctAnswer,nextQuestionTrue:U,nextQuestionFalse:W,timeOff:y}):Object(s.jsxs)(s.Fragment,{children:[r&&Object(s.jsx)("div",{className:x.a.timer,style:P<5?{color:"#EE593B"}:{},children:P>=10?"00:".concat(P):"00:0".concat(P)}),Object(s.jsx)(O,{sendAnswers:function(e){g(e.target.outerText),m(!0)},answers:D,question:R})]})})},f=n(26),v=n.n(f),g=function(e){e.setTimer;return Object(s.jsx)("div",{className:v.a.container,children:"Settings"})},N=n(19),p=n.n(N),S=function(e){var t=e.setTimer;return Object(s.jsxs)("div",{className:p.a.container,children:[Object(s.jsx)(g,{setTimer:t}),Object(s.jsxs)(u.c,{to:"/questionsPage",children:[" ",Object(s.jsx)("button",{className:p.a.button,to:"/questionsPage",children:"START"})," "]})]})};var q=function(e){var t=Object(c.useState)(10),n=Object(o.a)(t,2),r=n[0],a=(n[1],Object(c.useState)(!0)),i=Object(o.a)(a,2),b=i[0];return i[1],Object(s.jsx)(u.a,{children:Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(j.a,{from:"/",to:"/startPage"}),Object(s.jsx)(j.b,{exact:!0,path:"/startPage",render:function(){return Object(s.jsx)(S,{})}}),Object(s.jsx)(j.b,{exact:!0,path:"/questionsPage",render:function(){return Object(s.jsx)(w,{state:e.store.getState().questionsPage.questions.sort((function(){return Math.random()-.5})),countTimer:r,timerOn:b})}})]})})})},T=n(13),E=n(27),P=n(21),A="NEXT_QUESTION",Q={questions:[{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u0434\u0435\u0442 2 + 2?",questionImg:"",answers:["2","22","4","6"],correctAnswer:"22"},{question:"\u0421\u0430\u043c\u044b\u0439 \u043b\u0443\u0447\u0448\u0438\u0439 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f?",questionImg:"",answers:["JavaScript","C#","Python","Kotlin"],correctAnswer:"JavaScript"},{question:"\u0413\u0434\u0435 \u043b\u0443\u0447\u0448\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c?",questionImg:"",answers:["\u0417\u0430\u0432\u043e\u0434","IT","\u041f\u0440\u043e\u0434\u0430\u0436\u0438","\u041f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430"],correctAnswer:"\u041f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430"},{question:"\u041b\u0443\u0447\u0448\u0430\u044f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f?",questionImg:"",answers:["\u0424\u0440\u0435\u0437\u0435\u0440\u043e\u0432\u0449\u0438\u043a","\u0422\u043e\u043a\u0430\u0440\u044c","IT \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u0432 \u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0435"],correctAnswer:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u0432 \u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0435"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(P.a)(Object(P.a)({},e),{},{questions:t.questions});default:return e}},y=Object(T.b)({questionsPage:C}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.c,k=Object(T.d)(y,F(Object(T.a)(E.a)));i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(q,{store:k})}),document.getElementById("root"))},8:function(e,t,n){e.exports={container:"Question_container__1JGtT",question:"Question_question__3J3hO",boxForAnswer:"Question_boxForAnswer__1EsOe",answer:"Question_answer__3YQnh",submit:"Question_submit__1XJQz",answerActive:"Question_answerActive__RCs-n"}}},[[40,1,2]]]);
//# sourceMappingURL=main.39dbe91a.chunk.js.map