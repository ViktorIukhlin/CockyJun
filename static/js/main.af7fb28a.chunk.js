(this["webpackJsonpcocky-jun"]=this["webpackJsonpcocky-jun"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"ResultWindow_container__1f996",result:"ResultWindow_result__2PS4t",answer:"ResultWindow_answer__3EXJN"}},16:function(e,t,n){e.exports={container:"QuestionsPage_container__3WUU1",containerCopy:"QuestionsPage_containerCopy__5eO1Z"}},19:function(e,t,n){e.exports={button:"StartPage_button__2u5UL",pulsate:"StartPage_pulsate__1pOlj"}},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(24),i=n.n(r),o=n(9),u=n(2),j=(n(33),n(11)),l=n(7),b=n.n(l),O=function(e){var t=e.answer,n=e.sendAnswers,a=t.answers.sort((function(){return Math.random()-.5}));return Object(s.jsxs)("div",{className:b.a.container,children:[Object(s.jsx)("div",{className:b.a.question,children:Object(s.jsx)("div",{children:t.question})}),Object(s.jsxs)("form",{className:b.a.boxForAnswer,children:[Object(s.jsx)("input",{type:"button",className:b.a.answer,onClick:n,value:a[0]}),Object(s.jsx)("input",{type:"button",className:b.a.answer,onClick:n,value:a[1]}),Object(s.jsx)("input",{type:"button",className:b.a.answer,onClick:n,value:a[2]}),Object(s.jsx)("input",{type:"button",className:b.a.answer,onClick:n,value:a[3]})]})]})},d=n(16),_=n.n(d),x=n(10),w=n.n(x),h=function(e){var t=e.answer,n=e.rightAnswer,a=e.nextQuestionTrue,c=e.nextQuestionFalse,r=t===n;return Object(s.jsxs)("div",{className:w.a.container,style:r?{border:"#DCF5EB solid 5px"}:{border:"#FCE4DF solid 5px"},children:[r?Object(s.jsx)("div",{className:w.a.result,style:{color:"#45C38A"},children:Object(s.jsx)("div",{children:"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0432\u0435\u0440\u043d\u043e!"})}):Object(s.jsxs)("div",{className:w.a.result,style:{color:"#EE593B"},children:[Object(s.jsx)("div",{className:w.a.message,children:"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u043e! \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442:"}),Object(s.jsx)("div",{className:w.a.answer,children:n})]}),Object(s.jsx)("button",{onClick:r?a:c,children:"\u0414\u0430\u043b\u0435\u0435"})]})},p=function(e){var t=e.listOfQuestions,n=Object(a.useState)(t),c=Object(j.a)(n,2),r=c[0],i=(c[1],Object(a.useState)(0)),u=Object(j.a)(i,2),l=u[0],b=u[1],d=Object(a.useState)(!1),x=Object(j.a)(d,2),w=x[0],p=x[1],m=Object(a.useState)(""),v=Object(j.a)(m,2),f=v[0],g=v[1],N=Object(a.useState)(0),q=Object(j.a)(N,2),Q=q[0],S=q[1];return Object(s.jsx)("div",{className:_.a.container,children:l===r.length?Object(s.jsxs)("div",{className:_.a.containerCopy,children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 ",l-Q," \u0438\u0437 ",l,Object(s.jsx)(o.b,{to:"/startPage",children:" \u0417\u0430\u043d\u043e\u0432\u043e "})]}):w?Object(s.jsx)(h,{answer:f,rightAnswer:r[l].correctAnswer,nextQuestionTrue:function(){p(!1),b(l+1)},nextQuestionFalse:function(){S(Q+1),p(!1),b(l+1)}}):Object(s.jsx)(O,{sendAnswers:function(e){g(e.target.defaultValue),p(!0)},answer:r[l]})})},m=n(19),v=n.n(m),f=function(){return Object(s.jsx)("div",{className:v.a.container,children:Object(s.jsxs)(o.b,{to:"/questionsPage",children:[" ",Object(s.jsx)("button",{className:v.a.button,to:"/questionsPage",children:"START"})," "]})})};var g=function(e){return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(u.a,{exact:!0,path:"/startPage",render:function(){return Object(s.jsx)(f,{})}}),Object(s.jsx)(u.a,{exact:!0,path:"/questionsPage",render:function(){return Object(s.jsx)(p,{listOfQuestions:e.store.getState().questionsPage.questions.sort((function(){return Math.random()-.5}))})}})]})})},N=n(13),q=n(26),Q=n(21),S="NEXT_QUESTION",A={questions:[{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u0434\u0435\u0442 2 + 2?",questionImg:"",answers:["2","22","4","6"],correctAnswer:"22"},{question:"\u0421\u0430\u043c\u044b\u0439 \u043b\u0443\u0447\u0448\u0438\u0439 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f?",questionImg:"",answers:["JavaScript","C#","Python","Kotlin"],correctAnswer:"JavaScript"},{question:"\u0413\u0434\u0435 \u043b\u0443\u0447\u0448\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c?",questionImg:"",answers:["\u0417\u0430\u0432\u043e\u0434","IT","\u041f\u0440\u043e\u0434\u0430\u0436\u0438","\u041f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430"],correctAnswer:"\u041f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430"},{question:"\u041b\u0443\u0447\u0448\u0430\u044f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f?",questionImg:"",answers:["\u0424\u0440\u0435\u0437\u0435\u0440\u043e\u0432\u0449\u0438\u043a","\u0422\u043e\u043a\u0430\u0440\u044c","IT \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u0432 \u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0435"],correctAnswer:"\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446 \u0432 \u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0435"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(Q.a)(Object(Q.a)({},e),{},{questions:t.questions});default:return e}},C=Object(N.b)({questionsPage:y}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.c,P=Object(N.d)(C,E(Object(N.a)(q.a)));i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{store:P})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Question_container__1JGtT",question:"Question_question__3J3hO",boxForAnswer:"Question_boxForAnswer__1EsOe",answer:"Question_answer__3YQnh",submit:"Question_submit__1XJQz",answerActive:"Question_answerActive__RCs-n"}}},[[39,1,2]]]);
//# sourceMappingURL=main.af7fb28a.chunk.js.map