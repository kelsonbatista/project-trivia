(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],Array(30).concat([function(e,t,a){e.exports=a.p+"static/media/entrada.eab61386.mp3"},function(e,t,a){e.exports=a.p+"static/media/certa-a-resposta.bd3b92a0.mp3"},function(e,t,a){e.exports=a.p+"static/media/certa-a-resposta3.26e2d624.mp3"},function(e,t,a){e.exports=a.p+"static/media/certa-a-resposta4.26417997.mp3"},function(e,t,a){e.exports=a.p+"static/media/controle-emocional.13346dbb.mp3"},function(e,t,a){e.exports=a.p+"static/media/da-branco.4b7ebd7f.mp3"},function(e,t,a){e.exports=a.p+"static/media/da-para-acertar.5c1e3d16.mp3"},function(e,t,a){e.exports=a.p+"static/media/entendeu-a-pergunta.04087624.mp3"},function(e,t,a){e.exports=a.p+"static/media/essa-me-pegou.cc9cdd5f.mp3"},function(e,t,a){e.exports=a.p+"static/media/fofoca.01a1d0ed.mp3"},function(e,t,a){e.exports=a.p+"static/media/ja-ouviu-falar.ec7a86fb.mp3"},function(e,t,a){e.exports=a.p+"static/media/nao-eh-dificil.234ad67a.mp3"},function(e,t,a){e.exports=a.p+"static/media/nervosismo.32f19a1c.mp3"},function(e,t,a){e.exports=a.p+"static/media/nervosismo2.20e8648e.mp3"},function(e,t,a){e.exports=a.p+"static/media/opcoes4.fddd6467.mp3"},function(e,t,a){e.exports=a.p+"static/media/pergunta-boa.481a410b.mp3"},function(e,t,a){e.exports=a.p+"static/media/posso-perguntar.6d49b9ca.mp3"},function(e,t,a){e.exports=a.p+"static/media/posso-perguntar2.cef6e9e7.mp3"},function(e,t,a){e.exports=a.p+"static/media/sera-que-hoje.414684ae.mp3"},function(e,t,a){e.exports=a.p+"static/media/sera-que-hoje2.19015e26.mp3"},function(e,t,a){e.exports=a.p+"static/media/ta-por-dentro.efbef170.mp3"},function(e,t,a){e.exports=a.p+"static/media/vai-chutar.9421b8d3.mp3"},function(e,t,a){e.exports=a.p+"static/media/voce-pode-acertar.37b17b2e.mp3"},function(e,t,a){e.exports=a.p+"static/media/ta-indo-bem.19287826.mp3"},function(e,t,a){e.exports=a.p+"static/media/nao-eh-dificil2.0bfe1651.mp3"},function(e,t,a){e.exports=a.p+"static/media/ele-treina.e9c324fe.mp3"},function(e,t,a){e.exports=a.p+"static/media/nao1.03e1626d.mp3"},function(e,t,a){e.exports=a.p+"static/media/nao2.b95edf85.mp3"},function(e,t,a){e.exports=a.p+"static/media/nao3.143559f7.mp3"},function(e,t,a){e.exports=a.p+"static/media/nao4.4226b7cb.mp3"},,,,,function(e,t,a){e.exports=a(89)},,,,,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t){},function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=a(18),s=a(10);a(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(2),m=a.p+"static/media/logo.de9da511.png",u=(a(75),a(9)),d=a.n(u),p=a(12),f=a(19),g=a(5),b=a(8),E=a(27),_=a.n(E);var h=function(e){var t=e.classDiv,a=e.className,n=e.dataTestid,c=e.id,i=e.label,o=e.name,s=e.onChange,l=e.placeholder,m=e.value,u=e.type;return r.a.createElement("div",{className:t},r.a.createElement("label",{htmlFor:c},i,r.a.createElement("input",{className:a,"data-testid":n,id:c,name:o,onChange:s,placeholder:l,value:m,type:u})))};var v=function(e){var t=e.className,a=e.dataTestid,n=e.disabled,c=e.id,i=e.index,o=e.key,s=e.name,l=e.onClick,m=e.type,u=e.text,d=i+1,p=r.a.createElement("span",{className:"game__answer-num"},d);return r.a.createElement("span",{className:"game__answer"},d?p:"",r.a.createElement("button",{className:t,"data-testid":a,disabled:n,id:c,key:o,name:s,onClick:l,type:"submit"===m?"submit":"button"},u))},k=(a(79),function(){return fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return"Error found: ".concat(e)}))}),N=function(e){return{type:"REQUEST_TOKEN",payload:e}},y=function(e){return{type:"SET_PLAYER",payload:e}};var w=Object(s.b)(null,(function(e){return{dispatchToken:function(t){return e(N(t))},dispatchPlayer:function(t){return e(y(t))}}}))((function(e){var t=Object(n.useState)({name:"",email:""}),a=Object(b.a)(t,2),c=a[0],i=a[1],o=Object(l.f)(),s=e.dispatchPlayer,m=e.dispatchToken;function u(e){var t=e.target,a=t.name,n=t.value;i(Object(g.a)(Object(g.a)({},c),{},Object(f.a)({},a,n)))}function E(){var e=_()(c.email).toString(),t={name:c.name,assertions:0,score:0,total:0,gravatarEmail:"https://www.gravatar.com/avatar/".concat(e)};s(t)}function N(){return(N=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,localStorage.setItem("token",JSON.stringify(t.token)),m(t.token),E(),o.push("/game");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{classDiv:"login__div",className:"login__name",dataTestid:"input-player-name",id:"name",name:"name",onChange:function(e){return u(e)},placeholder:"Digite seu nome",value:c.name,type:"text"}),r.a.createElement(h,{classDiv:"login__div",className:"login__email",dataTestid:"input-gravatar-email",id:"email",name:"email",onChange:function(e){return u(e)},placeholder:"Digite seu email",value:c.email,type:"email"}),r.a.createElement(v,{className:"login__button ".concat(c.name&&c.email?"":"disabled"),dataTestid:"btn-play",disabled:!c.name||!c.email,id:"loginbtn",name:"login-btn",onClick:function(){return function(){return N.apply(this,arguments)}()},text:"Play",type:"button"}),r.a.createElement(v,{className:"settings__button",dataTestid:"btn-settings",id:"settingsbtn",name:"settings-btn",onClick:function(){return o.push("/settings")},text:"Settings",type:"button"}))}));var x=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{className:"video-container"},r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0},r.a.createElement("source",{src:"https://github.com/kelsonbatista/kelsonbatista.github.io/blob/version/1.0/assets/public/videos/intro.mp4?raw=true",type:"video/mp4"}),r.a.createElement("track",{src:"captions_en.vtt",kind:"captions",srcLang:"en",label:"english_captions"}))),r.a.createElement("section",{className:"login"},r.a.createElement("img",{src:m,className:"login__logo",alt:"logo"}),r.a.createElement("div",{className:"login__glow"},"\xa0"),r.a.createElement("div",{className:"login__form"},r.a.createElement(w,null)))))},O=a(62),j=a(21),A=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://opentdb.com/api.php?amount=5&token=".concat(t),e.abrupt("return",fetch(a).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return"Error found: ".concat(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=a(63);a(84);var T=function(e){var t=e.className,a=e.classPicture,n=e.classPictureImage,c=e.classScore,i=e.classTable,o=e.name,s=e.score,l=e.gravatarEmail;return r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm",className:i},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:a},r.a.createElement("img",{alt:"Profile",className:n,"data-testid":"header-profile-picture",src:l}),r.a.createElement("span",{"data-testid":"input-gravatar-email"},"\xa0")),r.a.createElement("td",{className:t},r.a.createElement("span",{"data-testid":"header-player-name"},o)),r.a.createElement("td",{className:c},r.a.createElement("span",null,"Pontos: "),r.a.createElement("span",{"data-testid":"header-score"},s)))))};var P=function(){return r.a.createElement("h2",null,"Loading...")},C=(a(86),a(30)),I=a.n(C),M=a(31),R=a.n(M),q=a(32),D=a.n(q),J=a(33),L=a.n(J),W=a(34),F=a.n(W),z=a(35),B=a.n(z),K=a(36),Q=a.n(K),U=a(37),Y=a.n(U),G=a(38),H=a.n(G),V=a(39),$=a.n(V),X=a(40),Z=a.n(X),ee=a(41),te=a.n(ee),ae=a(42),ne=a.n(ae),re=a(43),ce=a.n(re),ie=a(44),oe=a.n(ie),se=a(45),le=a.n(se),me=a(46),ue=a.n(me),de=a(47),pe=a.n(de),fe=a(48),ge=a.n(fe),be=a(49),Ee=a.n(be),_e=a(50),he=a.n(_e),ve=a(51),ke=a.n(ve),Ne=a(52),ye=a.n(Ne),we=a(53),xe=a.n(we),Oe=a(54),je=a.n(Oe),Ae=a(55),Se=a.n(Ae),Te=a(56),Pe=a.n(Te),Ce=a(57),Ie=a.n(Ce),Me=a(58),Re=a.n(Me),qe=a(59),De=a.n(qe),Je=[new Audio(R.a),new Audio(D.a),new Audio(L.a)],Le=[new Audio(F.a),new Audio(B.a),new Audio(Q.a),new Audio(Y.a),new Audio(H.a),new Audio($.a),new Audio(Z.a),new Audio(te.a),new Audio(ne.a),new Audio(ce.a),new Audio(oe.a),new Audio(le.a),new Audio(ue.a),new Audio(pe.a),new Audio(ge.a),new Audio(Ee.a),new Audio(he.a),new Audio(ke.a),new Audio(ye.a),new Audio(xe.a),new Audio(je.a),new Audio(Se.a)],We=[new Audio(Pe.a),new Audio(Ie.a),new Audio(Re.a),new Audio(De.a)],Fe=new Audio(I.a);function ze(e){return e.currentTime=0,e.play()}var Be=Object(s.b)((function(e){return{player:e.player,token:e.token}}),(function(e){return{dispatchToken:function(t){return e(N(t))},dispatchPlayer:function(t){return e(y(t))}}}))((function(e){var t=Object(n.useRef)(),a=e.dispatchPlayer,c=e.dispatchToken,i=e.history,o=e.player,s=o.name,l=o.assertions,u=o.score,f=o.total,E=o.gravatarEmail,_=e.token,h=Object(n.useState)([]),N=Object(b.a)(h,2),y=N[0],w=N[1],x=Object(n.useState)(0),S=Object(b.a)(x,2),C=S[0],I=S[1],M=Object(n.useState)(0),R=Object(b.a)(M,2),q=R[0],D=R[1],J=Object(n.useState)(30),L=Object(b.a)(J,2),W=L[0],F=L[1],z=Object(n.useState)(!1),B=Object(b.a)(z,2),K=B[0],Q=B[1],U=Object(n.useState)(!1),Y=Object(b.a)(U,2),G=Y[0],H=Y[1],V=Object(n.useState)(!1),$=Object(b.a)(V,2),X=$[0],Z=$[1],ee=Object(n.useRef)(!1),te=Object(n.useRef)(!1),ae=Object(n.useState)({correct:"",incorrect:[],all:[]}),ne=Object(b.a)(ae,2),re=ne[0],ce=ne[1];function ie(){return(ie=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.next=3,A(_);case 3:if(3!==(t=e.sent).response_code){e.next=12;break}return e.next=7,k();case 7:return a=e.sent,c(a.token),e.next=11,A(a.token);case 11:t=e.sent;case 12:w(t.results),Z(!1);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){if(y.length>0){var e=y[q],t=e.correct_answer,a=e.incorrect_answers,n=[t].concat(Object(O.a)(a));n=n.sort((function(){return Math.random()-.5})),ce(Object(g.a)(Object(g.a)({},re),{},{correct:t,incorrect:a,all:n}))}}function se(){var e=y[q].difficulty;return"hard"===e?3:"medium"===e?2:1}return Object(n.useEffect)((function(){!function(){ie.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){oe()}),[y]),Object(n.useEffect)((function(){ze(Fe)}),[q]),Object(n.useEffect)((function(){W<=0&&t.current&&(H(!0),Q(!0),ze(We[Math.floor(Math.random()*We.length)]),clearInterval(t.current)),30===W&&(t.current=setInterval((function(){F((function(e){return e-1}))}),1e3)),function(e){var t=Le[Math.floor(Math.random()*Le.length)];switch(e){case 25:case 20:case 13:case 7:return ze(t);default:;}}(W)}),[W]),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game__left"},r.a.createElement("header",null,r.a.createElement("img",{src:m,alt:"Logo",className:"game__logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"game__score"},"Pontos: ".concat(u)),r.a.createElement("p",{className:"game__total"},"Total: ".concat(f)),y.length>0&&r.a.createElement("span",{className:"game__category"},r.a.createElement("p",{"data-testid":"question-category"},Object(j.decode)(y[q].category)))),r.a.createElement("div",{className:"game__timer"},r.a.createElement("div",{className:"game__circle"},"\xa0"),r.a.createElement("span",null,W))),r.a.createElement("main",null,X&&r.a.createElement(P,null),y.length>0&&r.a.createElement("div",null,r.a.createElement("div",{className:"game__question"},r.a.createElement("div",{"data-testid":"question-text",className:"game__text"},Object(j.decode)(y[q].question))),r.a.createElement("div",{className:"game__answers","data-testid":"answer-options"},re.all.map((function(e,n){return r.a.createElement(v,{className:e===re.correct?"correct game__answer-txt":"incorrect game__answer-txt",dataTestid:e===re.correct?"correct-answer":"wrong-answer-".concat(n),disabled:G,index:n,key:n,onClick:function(e){return function(e){if(e.target.getAttribute("data-testid").includes("correct")){var n={name:s,assertions:l+1,score:10+W*se(),total:f+(10+W*se()),gravatarEmail:E};ze(Je[Math.floor(Math.random()*Je.length)]),a(n),ee.current=!0}else ze(We[Math.floor(Math.random()*We.length)]),te.current=!0;H(!0),clearInterval(t.current)}(e)},text:Object(j.decode)(e),type:"button"})}))),r.a.createElement("div",{className:"game__messages"},G&&K&&r.a.createElement("p",{className:"msg__timeup"},"Tempo esgotado! Resposta inv\xe1lida."),G&&te.current&&r.a.createElement("p",{className:"msg__wrong"},"Infelizmente voc\xea errou!"),G&&ee.current&&r.a.createElement("p",{className:"msg__right"},"Parab\xe9ns! Voc\xea acertou!"))),r.a.createElement("div",{className:"game__footer"},r.a.createElement(T,{className:"game__profile-name",classPicture:"game__profile-picture",classPictureImage:"game__profile-image",classScore:"game__profile-score",classTable:"game__profile",name:s,score:u,gravatarEmail:E}),G&&r.a.createElement(v,{className:"next",dataTestid:"btn-next",onClick:function(){return I(C+1),D(q+1),H(!1),ee.current=!1,te.current=!1,F(30),oe(),void(4===C&&(I(0),i.push("/feedback")))},text:"Next",type:"button"})))),r.a.createElement("div",{className:"game__right ".concat(["man1","man2","man3","man4","man5","man6","man7"][q])},"\xa0"))}));var Ke=function(){return r.a.createElement("h1",null,"Error 404! Page Not Found")};var Qe=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",{"data-testid":"settings-title"},"Settings")))};a(87);var Ue=Object(s.b)((function(e){return{player:e.player}}),null)((function(e){var t=e.history,a=e.player,c=a.name,i=a.assertions,o=a.score,s=a.total,l=a.gravatarEmail;return Object(n.useEffect)((function(){!function(){console.log("run function");var e=localStorage.getItem("ranking");e=null===e?[]:JSON.parse(e);var t={name:c,score:s,picture:l};Array.isArray(e)&&(e.push(t),localStorage.setItem("ranking",JSON.stringify(e)))}()}),[]),r.a.createElement("div",{className:"feedback"},r.a.createElement("section",{className:"feedback__left"},r.a.createElement("div",{className:"feedback__header"},r.a.createElement(T,{className:"feedback__profile-name",classPicture:"feedback__profile-picture",classPictureImage:"feedback__profile-image",classScore:"feedback__profile-score",classTable:"feedback__profile",name:c,score:o,gravatarEmail:l})),r.a.createElement("div",{className:"feedback__body"},r.a.createElement("h3",{"data-testid":"feedback-text"},i<3?"Could be better...":"Well Done!"),r.a.createElement("p",null,r.a.createElement("span",null,"Pontos: "),r.a.createElement("span",{"data-testid":"feedback-total-score"},o)),r.a.createElement("p",null,r.a.createElement("span",null,"Total: "),r.a.createElement("span",{"data-testid":"feedback-total"},s)),r.a.createElement("p",null,r.a.createElement("span",null,"Acertos: "),r.a.createElement("span",{"data-testid":"feedback-total-question"},i))),r.a.createElement("div",{className:"feedback__btn"},r.a.createElement(v,{className:"play__btn",dataTestid:"btn-play-again",onClick:function(){return t.push("/game")},text:"Play Again",type:"button"}),r.a.createElement(v,{className:"ranking__btn",dataTestid:"btn-ranking",onClick:function(){return t.push("/ranking")},text:"Ranking",type:"button"}))),r.a.createElement("section",{className:"feedback__right"},"\xa0"))}));a(88);var Ye=function(e){var t=e.ranking;return r.a.createElement("table",{className:"ranking__profile"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"ranking__color2"},r.a.createElement("th",{className:"ranking__profile-position"},"#"),r.a.createElement("th",{className:"ranking__profile-picture"},"Avatar"),r.a.createElement("th",{className:"ranking__profile-name"},"Name"),r.a.createElement("th",{className:"ranking__profile-score"},"Score"))),r.a.createElement("tbody",null,t.sort((function(e,t){return e.score>t.score&&-1})).map((function(e,t){var a=e.picture,n=e.name,c=e.score;return r.a.createElement("tr",{key:t,className:t%2===0?"ranking__color1":"ranking__color2"},r.a.createElement("td",{className:"ranking__profile-position"},t+1),r.a.createElement("td",{className:"ranking__profile-picture"},r.a.createElement("img",{src:a,alt:"Player",className:"ranking__profile-image"})),r.a.createElement("td",{className:"ranking__profile-name","data-testid":"player-name-".concat(t)},n),r.a.createElement("td",{className:"ranking__profile-score","data-testid":"player-score-".concat(t)},c))}))))};var Ge=function(e){var t=e.history,a=JSON.parse(localStorage.getItem("ranking"));return r.a.createElement("div",{className:"ranking"},r.a.createElement("section",{className:"ranking__left"},r.a.createElement("div",{className:"ranking__header"},r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement(v,{className:"login__btn",dataTestid:"btn-go-home",onClick:function(){return t.push("/")},text:"Home",type:"button"})),r.a.createElement(Ye,{ranking:a})),r.a.createElement("section",{className:"ranking__right"},"\xa0"))};var He=Object(l.g)((function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:x}),r.a.createElement(l.a,{exact:!0,path:"/game",component:Be}),r.a.createElement(l.a,{exact:!0,path:"/settings",component:Qe}),r.a.createElement(l.a,{exact:!0,path:"/feedback",component:Ue}),r.a.createElement(l.a,{exact:!0,path:"/ranking",component:Ge}),r.a.createElement(l.a,{path:"*",component:Ke}))})),Ve=a(13),$e=a(60),Xe=a(61),Ze={timer:0,finalAnswer:""},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME":return t.payload;default:return e}},tt={name:"",assertions:0,score:0,total:0,gravatarEmail:""},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLAYER":return t.payload;default:return e}},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_TOKEN":return t.payload;default:return e}},rt=Object(Ve.combineReducers)({game:et,player:at,token:nt}),ct=Object(Ve.createStore)(rt,Object($e.composeWithDevTools)(Object(Ve.applyMiddleware)(Xe.a)));window.Cypress&&(window.store=ct);var it=ct;i.a.render(r.a.createElement(s.a,{store:it},r.a.createElement(o.a,null,r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[64,1,2]]]);
//# sourceMappingURL=main.857a7cf2.chunk.js.map