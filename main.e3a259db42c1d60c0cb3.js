(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(e,n,t){},IFuA:function(e){e.exports=JSON.parse('[{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01A098M153-98f9313c4295-512","name":"Vitalii Hromyk","position":"Team Leader","email":"hromykk@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U019P5JEHMM-86d6ce050614-512","name":"Oleksandr Mykytiuk","position":"Scrum Master","email":"alexandermykytiuk@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01A3BRA1C2-d16afcf1c24e-512","name":"Nataliia Lazorenko","position":"Student","email":"natalystruk@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U019WKPLNUE-612df3bb84ff-512","name":"Letta Savchenko","position":"Student","email":"lettawetta@icloud.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U019WKP3NVC-gf11ffee4bda-512","name":"Liliia Yarmolova","position":"Student","email":"lyarmolova@ukr.net"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01AT713S8Y-2301e1763300-512","name":"Yevheniia Suska","position":"Student","email":"susskaya86@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U019NK9NV63-92c5b48df270-512","name":"Halyna Pryn","position":"Student","email":"prynhalyna@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01A0B0UUER-d28daccf8b6a-512","name":"Helen Stepina","position":"Student","email":"stopinahelen@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01A9H8TQNQ-c5791ee3a6f3-512","name":"Volodymyr Vorona","position":"Student","email":"volodimir.vorona@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01AT714JU8-e3bdf0952ec3-512","name":"Joanna Galdzinska","position":"Student","email":"jollipop11@gmail.com"},{"image":"https://ca.slack-edge.com/T01AD58HHH7-U01AG0RAR4H-d1d737de14fb-512","name":"Oleg Litvinenko","position":"Student","email":"litwinenkooleg371@gmail.com"}]')},Njlq:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var o,i,r=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="trend-film-item list" data-film='+c("function"==typeof(i=null!=(i=u(t,"id")||(null!=n?u(n,"id"):n))?i:s)?i.call(r,{name:"id",hash:{},data:l,loc:{start:{line:2,column:43},end:{line:2,column:49}}}):i)+">\r\n"+(null!=(o=u(t,"if").call(r,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(2,l,0),inverse:e.program(4,l,0),data:l,loc:{start:{line:3,column:4},end:{line:9,column:11}}}))?o:"")+'    <h2 class="trend-film-name"> '+c("function"==typeof(i=null!=(i=u(t,"original_title")||(null!=n?u(n,"original_title"):n))?i:s)?i.call(r,{name:"original_title",hash:{},data:l,loc:{start:{line:10,column:33},end:{line:10,column:51}}}):i)+'</h2>\r\n    <div class="trend-film-genre-data-vote">\r\n        <ul class="trend-film-genre">\r\n'+(null!=(o=u(t,"if").call(r,null!=n?u(n,"genres"):n,{name:"if",hash:{},fn:e.program(6,l,0),inverse:e.program(8,l,0),data:l,loc:{start:{line:13,column:12},end:{line:17,column:19}}}))?o:"")+'        </ul>\r\n        <span class="trend-film-line"> | </span>\r\n'+(null!=(o=u(t,"if").call(r,null!=n?u(n,"release_date"):n,{name:"if",hash:{},fn:e.program(10,l,0),inverse:e.program(12,l,0),data:l,loc:{start:{line:20,column:8},end:{line:24,column:15}}}))?o:"")+"\r\n    </div>\r\n</li>\r\n"},2:function(e,n,t,a,l){var o,i=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <img class="trend-film-image" src="https://image.tmdb.org/t/p/w500'+s("function"==typeof(o=null!=(o=c(t,"poster_path")||(null!=n?c(n,"poster_path"):n))?o:r)?o.call(i,{name:"poster_path",hash:{},data:l,loc:{start:{line:4,column:70},end:{line:4,column:85}}}):o)+'" alt="'+s("function"==typeof(o=null!=(o=c(t,"original_title")||(null!=n?c(n,"original_title"):n))?o:r)?o.call(i,{name:"original_title",hash:{},data:l,loc:{start:{line:4,column:92},end:{line:4,column:110}}}):o)+'"\r\n        loading="lazy">\r\n'},4:function(e,n,t,a,l){return'    <img class="trend-film-image" src="https://www.deckchaircinema.com/template_1/img/default-movie-portrait.jpg"\r\n        alt="No foto" loading="lazy">\r\n'},6:function(e,n,t,a,l){var o,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'            <li class="genre-item">'+e.escapeExpression("function"==typeof(o=null!=(o=i(t,"genres")||(null!=n?i(n,"genres"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"genres",hash:{},data:l,loc:{start:{line:14,column:35},end:{line:14,column:45}}}):o)+"</li>\r\n"},8:function(e,n,t,a,l){return'            <li class="genre-item">Indefinite</li>\r\n'},10:function(e,n,t,a,l){var o,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <span class="trend-film-data"> '+e.escapeExpression("function"==typeof(o=null!=(o=i(t,"release_date")||(null!=n?i(n,"release_date"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"release_date",hash:{},data:l,loc:{start:{line:21,column:39},end:{line:21,column:55}}}):o)+"</span>\r\n"},12:function(e,n,t,a,l){return'        <span class="trend-film-data">NO DATE</span>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:28,column:9}}}))?o:""},useData:!0})},QfWi:function(e,n,t){"use strict";t.r(n);t("Dv/5");var a={body:document.querySelector("body"),header:document.querySelector(".header"),homeLink:document.querySelector(".nav-home"),logo:document.querySelector(".logo"),form:document.querySelector(".input__wrapper"),buttonsWrapper:document.querySelector(".buttons-wrapper"),watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),myLibrary:document.querySelector(".nav-library"),inputField:document.querySelector(".js-input"),warningString:document.querySelector(".js-warning"),filmCard:document.querySelector(".film-card"),movieModal:document.querySelector(".movie-modal"),backdrop:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".close-button"),moviesContainer:document.querySelector(".trend-movie"),divPagination:document.querySelector(".tui-pagination"),targetSpinner:document.getElementById("spinner"),footerModal:document.querySelector(".footer-modal"),modalTeamList:document.querySelector(".our-team"),closeMdlBtn:document.querySelector(".footer-close-button"),footerBackdrop:document.querySelector(".footer-backdrop")},l=function(e,n){localStorage.setItem(e,JSON.stringify(n))},o=function(e){var n=localStorage.getItem(e);return JSON.parse(n)};var i=function(e){var n=o(e);return n||(n=[])},r=t("Njlq"),s=t.n(r),c=t("ZEAl"),u={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#FF6B08",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};t("JBxO"),t("FdtR"),t("wcNg");function d(e,n,t,a,l,o,i){try{var r=e[o](i),s=r.value}catch(e){return void t(e)}r.done?n(s):Promise.resolve(s).then(a,l)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(a,l){var o=e.apply(n,t);function i(e){d(o,a,l,i,r,"next",e)}function r(e){d(o,a,l,i,r,"throw",e)}i(void 0)}))}}function p(){return(p=m(regeneratorRuntime.mark((function e(n,t){var a,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=1),e.prev=1,e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return l=e.sent,e.abrupt("return",l);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var f=function(e,n){return p.apply(this,arguments)},v=(t("IlJM"),t("RtS0"),t("8cZI"),t("lmye"),t("WB5j"),t("D/wG"),t("3dw1"),[{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:18,name:"Drama"},{id:14,name:"Fantasy"},{id:28,name:"Action"},{id:12,name:"Adventure"},{id:10751,name:"Family"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:10402,name:"Music"},{id:878,name:"Science Fiction"},{id:36,name:"History"},{id:37,name:"Western"},{id:27,name:"Horror"},{id:10752,name:"War"},{id:99,name:"Documentary"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:10770,name:"TV Movie"}]);var h=function(e){e.map((function(e){var n=[];if(e.genre_ids?e.genre_ids.forEach((function(e){var t=v.find((function(n){return n.id===e}));n.push(t.name)})):0!==e.genres.length&&"string"!=typeof e.genres&&e.genres.forEach((function(e){var t=e.id,a=v.find((function(e){return e.id===t}));n.push(a.name)})),n.length>=4){var t=n.slice(0,3);e.genres=t.join(", ")}else e.genres=n.join(", ");return e}))};var g=function(e){e.map((function(e){return e.release_date&&(e.release_date=e.release_date.slice(0,4)),e}))};var y=function(e){var n,t;void 0===e&&(e=[]);var a=[],l=document.documentElement.clientWidth;return l<768?(n=4,t=3,a=e.slice(0,4)):l>=768&&l<1024?(n=8,t=8,a=e.slice(0,8)):l>=1024&&(n=9,t=8,a=e.slice(0,9)),{moviesPerPage:n,visiblePaginationPages:t,newFilmsData:a}};function b(e){h(e),g(e),w(y(e).newFilmsData,s.a,a.moviesContainer)}function w(e,n,t){var a=n(e);t.insertAdjacentHTML("beforeend",a)}function L(){k("https://api.themoviedb.org/3/trending/movie/day?api_key=bf08c0c07642287cbabe383c02818eb3")}function k(e){var n=new c.a(u).spin(a.targetSpinner);f(e).then((function(e){return e.results})).then((function(e){a.moviesContainer.innerHTML="",h(e),g(e),w(y(e).newFilmsData,s.a,a.moviesContainer),n.stop()}))}L();var S=t("2c84"),_=t.n(S);t("w2mr");var P=function(e,n,t,l){var o={totalItems:e,itemsPerPage:n,visiblePages:t,centerAlign:!0};new _.a(a.divPagination,o).on("afterMove",l)},q=y().visiblePaginationPages;function E(e){k("https://api.themoviedb.org/3/trending/movie/day?api_key=bf08c0c07642287cbabe383c02818eb3&page="+e.page)}P(2e4,20,q,E);var x=E,H=t("YZ9n"),C=t.n(H);var O=function(e,n,t){a.moviesContainer.innerHTML="";var l=e.slice(n,t);h(l),g(l),w(l,C.a,a.moviesContainer)};function M(e){e.preventDefault(),a.myLibrary.classList.remove("active"),a.homeLink.classList.add("active"),a.form.classList.remove("is-hidden"),a.buttonsWrapper.classList.add("is-hidden"),a.header.classList.remove("library"),a.moviesContainer.classList.remove("show-message"),a.moviesContainer.innerHTML="",L();var n=y().visiblePaginationPages;P(2e4,20,n,x)}function j(e){var n;e.preventDefault(),a.myLibrary.classList.add("active"),a.homeLink.classList.remove("active"),a.form.classList.add("is-hidden"),a.buttonsWrapper.classList.remove("is-hidden"),a.header.classList.add("library"),a.moviesContainer.classList.remove("show-message"),e.target===a.myLibrary||e.target===a.watchedBtn?(n=a.watchedBtn.innerHTML.toLowerCase(),a.watchedBtn.classList.remove("noactive"),a.queueBtn.classList.add("noactive")):(n=a.queueBtn.innerHTML.toLowerCase(),a.watchedBtn.classList.add("noactive"),a.queueBtn.classList.remove("noactive"));var t=i(n);if(0===t.length)return a.moviesContainer.innerHTML="<p class='info-message'>You don't have saved movies yet</p>",a.moviesContainer.classList.add("show-message"),void(a.divPagination.innerHTML="");var l=y(),o=l.moviesPerPage,r=l.visiblePaginationPages;O(t,0,o),P(t.length,o,r,(function(e){var n=(e.page-1)*o;O(t,n,n+o)}))}a.homeLink.addEventListener("click",M),a.logo.addEventListener("click",M),a.myLibrary.addEventListener("click",j),a.watchedBtn.addEventListener("click",j),a.queueBtn.addEventListener("click",j);t("QDHd");var D=function(e,n){var t=e.results,l=e.total_results,o=y(t).visiblePaginationPages;return P(l,20,o,(function(e){var t=new c.a(u).spin(a.targetSpinner),l="https://api.themoviedb.org/3/search/movie?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US&page="+e.page+"&include_adult=false&query="+n;f(l,e.page).then((function(e){var n=e.results;a.moviesContainer.innerHTML="",b(n)})).finally((function(){t.stop()}))})),t};a.form.addEventListener("submit",(function(e){e.preventDefault();var n=new c.a(u).spin(a.targetSpinner),t=e.currentTarget,l=t.elements.query.value;t.reset(),f("https://api.themoviedb.org/3/search/movie?api_key=bf08c0c07642287cbabe383c02818eb3&language=en-US&page=undefined&include_adult=false&query="+l,void 0).then((function(e){return n.stop(),e.errors?(a.warningString.classList.remove("is-hidden"),a.warningString.textContent=e.errors):e.results.length?(a.warningString.classList.add("is-hidden"),a.moviesContainer.innerHTML="",b(e.results),D(e,l)):(a.warningString.classList.remove("is-hidden"),a.warningString.textContent="Search result not successful. Enter correct movie name"),e})).catch((function(e){return console.log(e)})).finally((function(){n.stop(),a.inputField.addEventListener("blur",(function(){a.warningString.textContent=""}))}))}));var A=t("V7tM"),T=t.n(A);t("uQK7"),t("lAJ5"),t("Xlt+");function I(e,n,t){t.addEventListener("click",(function(){var a=i(n);if(B(e,a,n,t),t.textContent==="add to "+n)a.push(e),l(n,a),t.textContent="clear from "+n;else if(t.textContent==="clear from "+n){var o=a.map((function(e){return e.id})).indexOf(e.id);a.splice(o,1),l(n,a),t.textContent="add to "+n}}))}function B(e,n,t,a){var l=n.some((function(n){return n.id===e.id}));a.textContent=l?"clear from "+t:"add to "+t}var U=t("jffb");function N(e){"Escape"===e.code&&F()}function F(){a.movieModal.classList.add("is-hidden"),a.body.classList.remove("modal-overflow"),window.removeEventListener("keydown",N),a.filmCard.innerHTML=""}a.moviesContainer.addEventListener("click",U((function(e){e.preventDefault();var n=e.path[1].dataset.film;f("https://api.themoviedb.org/3/movie/"+n+"?api_key=bf08c0c07642287cbabe383c02818eb3").then((function(e){w(e,T.a,a.filmCard),a.movieModal.classList.remove("is-hidden"),a.body.classList.add("modal-overflow");var n=document.querySelector(".js-add-to-watched"),t=document.querySelector(".js-add-to-queue"),l=i("watched"),o=i("queue");B(e,l,"watched",n),B(e,o,"queue",t),I(e,"watched",n),I(e,"queue",t),window.addEventListener("keydown",N),a.closeModalBtn.addEventListener("click",F),a.backdrop.addEventListener("click",F)}))}),500));var R=t("SzhR");t("VwVG");R.a.initializeApp({apiKey:"AIzaSyDk7QuF0N971UQ7B7P7vr3TDlcSPjXDgOo",authDomain:"filmoteka-92820.firebaseapp.com",projectId:"filmoteka-92820",storageBucket:"filmoteka-92820.appspot.com",messagingSenderId:"466516500538",appId:"1:466516500538:web:eb00eb8ab0589fee1cd503",measurementId:"G-DHVDN5240J"});var W=R.a.auth(),z=document.querySelector(".formIn-group"),J=document.querySelector(".formUp-group"),V=document.querySelector(".nav-library");z.addEventListener("submit",(function(e){e.preventDefault();var n=document.querySelector(".signInemail").value,t=document.querySelector(".signInpassword").value;W.signInWithEmailAndPassword(n,t).then(G).then(Y).catch((function(e){console.log(e)}))})),J.addEventListener("submit",(function(e){e.preventDefault();var n=document.querySelector(".sign_email").value,t=document.querySelector(".sign_password").value;W.createUserWithEmailAndPassword(n,t).then(notie.alert({type:"success",text:"Registration was successful ;)",time:2})).then(V.classList.add("hide")).catch((function(e){notie.alert({type:"error",text:"Filled your email and password please!",time:2}),console.log(e)}))}));var Q=W.currentUser;function Y(){V.classList.remove("hide")}function G(){for(var e=document.querySelectorAll(".cleanInput"),n=0;n<e.length;n++)e[n].value=""}W.onAuthStateChanged((function(e){e?(Q=e,console.log(Q),document.getElementById("btnLogOut").classList.remove("hide"),document.querySelector(".signUp").classList.add("hide"),document.querySelector(".signIn").classList.add("hide"),V.classList.remove("hide")):(document.getElementById("btnLogOut").classList.add("hide"),document.querySelector(".signUp").classList.remove("hide"),document.querySelector(".signIn").classList.remove("hide"),V.classList.add("hide"))})),btnLogOut.addEventListener("click",(function(e){W.signOut().then(V.classList.add("hide")),notie.alert({type:"success",text:"You are Logged Out!",time:2}),console.log("logged out")})),document.querySelector(".forgotPass").addEventListener("click",(function(){var e=document.querySelector(".signInemail").value;W.sendPasswordResetEmail(e).then((function(){notie.alert({type:"success",text:"Password reset email sent!",time:2})})).catch((function(e){notie.alert({type:"error",text:"Ops, something went wrong",time:2})}))}));var Z=document.querySelector(".signIn"),K=document.querySelector(".signUp"),X=document.querySelector(".container-sign_in"),$=document.querySelector(".backdrop-sign-up"),ee=document.querySelector(".modalSIbtn"),ne=document.querySelector(".modalSUbtn"),te=document.querySelector(".siModalClose"),ae=document.querySelector(".suModalClose");Z.addEventListener("click",(function(){X.classList.remove("is-unactive"),a.body.classList.add("modal-overflow")})),K.addEventListener("click",(function(){$.classList.remove("is-unactive"),a.body.classList.add("modal-overflow")})),ee.addEventListener("click",(function(){X.classList.add("is-unactive"),a.body.classList.remove("modal-overflow")})),ne.addEventListener("click",(function(){$.classList.add("is-unactive"),a.body.classList.remove("modal-overflow")})),te.addEventListener("click",(function(){X.classList.add("is-unactive"),a.body.classList.remove("modal-overflow")})),ae.addEventListener("click",(function(){$.classList.add("is-unactive"),a.body.classList.remove("modal-overflow")}));var le=t("IFuA"),oe=t("Zmr0");function ie(){a.footerModal.classList.add("is_hidden"),a.body.classList.remove("modal-overflow"),window.removeEventListener("keydown",re)}function re(e){"Escape"===e.code&&ie()}w(le,t.n(oe).a,a.modalTeamList),document.querySelector(".js-open-modal").addEventListener("click",(function(e){e.preventDefault(),a.footerModal.classList.remove("is_hidden"),a.body.classList.add("modal-overflow"),a.closeMdlBtn.addEventListener("click",ie),a.footerBackdrop.addEventListener("click",ie),window.addEventListener("keydown",re)}))},V7tM:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var o,i=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<img class="movie-modal-image" src=https://image.tmdb.org/t/p/w500'+s("function"==typeof(o=null!=(o=c(t,"poster_path")||(null!=n?c(n,"poster_path"):n))?o:r)?o.call(i,{name:"poster_path",hash:{},data:l,loc:{start:{line:2,column:66},end:{line:2,column:81}}}):o)+' alt="'+s("function"==typeof(o=null!=(o=c(t,"original_title")||(null!=n?c(n,"original_title"):n))?o:r)?o.call(i,{name:"original_title",hash:{},data:l,loc:{start:{line:2,column:87},end:{line:2,column:105}}}):o)+'" width="426px"\r\n    height="514px" loading="lazy">\r\n'},3:function(e,n,t,a,l){return'<img class="movie-modal-image" src="https://www.deckchaircinema.com/template_1/img/default-movie-portrait.jpg"\r\n    alt="No foto" loading="lazy">\r\n'},5:function(e,n,t,a,l){var o,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return null!=(o=i(t,"each").call(null!=n?n:e.nullContext||{},null!=n?i(n,"genres"):n,{name:"each",hash:{},fn:e.program(6,l,0),inverse:e.noop,data:l,loc:{start:{line:27,column:16},end:{line:29,column:25}}}))?o:""},6:function(e,n,t,a,l){var o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'                <span class="modal-genre-item">'+e.escapeExpression(e.lambda(null!=n?o(n,"name"):n,n))+"</span>\r\n"},8:function(e,n,t,a,l){return'                <span class="modal-genre-item">Indefinite</span>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o,i,r=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return(null!=(o=d(t,"if").call(r,null!=n?d(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:1,column:0},end:{line:7,column:7}}}))?o:"")+'<div class="movie-modal-full-description">\r\n    <h2 class="movie-modal-title"> '+u(typeof(i=null!=(i=d(t,"original_title")||(null!=n?d(n,"original_title"):n))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:l,loc:{start:{line:9,column:35},end:{line:9,column:53}}}):i)+'</h2>\r\n    <div class="movie-modal-properties-values">\r\n        <ul class="movie-modal-properties list">\r\n            <li>Rating / Votes</li>\r\n            <li>Popularity</li>\r\n            <li> Original Title</li>\r\n            <li>Genre</li>\r\n        </ul>\r\n        <ul class="movie-modal-values list">\r\n            <li class="modal-vote-count">\r\n                <span class="modal-vote">'+u(typeof(i=null!=(i=d(t,"vote_average")||(null!=n?d(n,"vote_average"):n))?i:s)===c?i.call(r,{name:"vote_average",hash:{},data:l,loc:{start:{line:19,column:41},end:{line:19,column:57}}}):i)+'</span>\r\n                <span class="modal-line"> /</span>\r\n                <span class="modal-count">'+u(typeof(i=null!=(i=d(t,"vote_count")||(null!=n?d(n,"vote_count"):n))?i:s)===c?i.call(r,{name:"vote_count",hash:{},data:l,loc:{start:{line:21,column:42},end:{line:21,column:56}}}):i)+"</span>\r\n            </li>\r\n            <li>"+u(typeof(i=null!=(i=d(t,"popularity")||(null!=n?d(n,"popularity"):n))?i:s)===c?i.call(r,{name:"popularity",hash:{},data:l,loc:{start:{line:23,column:16},end:{line:23,column:30}}}):i)+'</li>\r\n            <li class="modal-original-title">'+u(typeof(i=null!=(i=d(t,"original_title")||(null!=n?d(n,"original_title"):n))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:l,loc:{start:{line:24,column:45},end:{line:24,column:63}}}):i)+'</li>\r\n            <li class="modal-genre">\r\n'+(null!=(o=d(t,"if").call(r,null!=n?d(n,"genres"):n,{name:"if",hash:{},fn:e.program(5,l,0),inverse:e.program(8,l,0),data:l,loc:{start:{line:26,column:16},end:{line:32,column:23}}}))?o:"")+'            </li>\r\n        </ul>\r\n    </div>\r\n    <h3 class="about-modal">About</h3>\r\n    <p class="about-modal-description">'+u(typeof(i=null!=(i=d(t,"overview")||(null!=n?d(n,"overview"):n))?i:s)===c?i.call(r,{name:"overview",hash:{},data:l,loc:{start:{line:37,column:39},end:{line:37,column:51}}}):i)+'</p>\r\n\r\n    <div class="buttons-wrapper movie-button">\r\n        <button class="button js-add-to-watched">add to watched</button>\r\n        <button class="button modal-light-btn js-add-to-queue">add to queue</button>\r\n    </div>\r\n</div>'},useData:!0})},YZ9n:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var o,i,r=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="trend-film-item list" data-film='+c("function"==typeof(i=null!=(i=u(t,"id")||(null!=n?u(n,"id"):n))?i:s)?i.call(r,{name:"id",hash:{},data:l,loc:{start:{line:2,column:43},end:{line:2,column:49}}}):i)+">\r\n"+(null!=(o=u(t,"if").call(r,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(2,l,0),inverse:e.program(4,l,0),data:l,loc:{start:{line:3,column:2},end:{line:9,column:9}}}))?o:"")+'  <h2 class="trend-film-name"> '+c("function"==typeof(i=null!=(i=u(t,"original_title")||(null!=n?u(n,"original_title"):n))?i:s)?i.call(r,{name:"original_title",hash:{},data:l,loc:{start:{line:10,column:31},end:{line:10,column:49}}}):i)+'</h2>\r\n  <div class="trend-film-genre-data-vote">\r\n    <ul class="trend-film-genre">\r\n'+(null!=(o=u(t,"if").call(r,null!=n?u(n,"genres"):n,{name:"if",hash:{},fn:e.program(6,l,0),inverse:e.program(8,l,0),data:l,loc:{start:{line:13,column:6},end:{line:17,column:13}}}))?o:"")+'    </ul>\r\n    <span class="trend-film-line"> | </span>\r\n'+(null!=(o=u(t,"if").call(r,null!=n?u(n,"release_date"):n,{name:"if",hash:{},fn:e.program(10,l,0),inverse:e.program(12,l,0),data:l,loc:{start:{line:20,column:4},end:{line:24,column:11}}}))?o:"")+'    <span class="trend-film-vote">'+c("function"==typeof(i=null!=(i=u(t,"vote_average")||(null!=n?u(n,"vote_average"):n))?i:s)?i.call(r,{name:"vote_average",hash:{},data:l,loc:{start:{line:25,column:34},end:{line:25,column:50}}}):i)+"</span>\r\n  </div>\r\n</li>\r\n"},2:function(e,n,t,a,l){var o,i=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'  <img class="trend-film-image" src="https://image.tmdb.org/t/p/w500'+s("function"==typeof(o=null!=(o=c(t,"poster_path")||(null!=n?c(n,"poster_path"):n))?o:r)?o.call(i,{name:"poster_path",hash:{},data:l,loc:{start:{line:4,column:68},end:{line:4,column:83}}}):o)+'" alt="'+s("function"==typeof(o=null!=(o=c(t,"original_title")||(null!=n?c(n,"original_title"):n))?o:r)?o.call(i,{name:"original_title",hash:{},data:l,loc:{start:{line:4,column:90},end:{line:4,column:108}}}):o)+'"\r\n    loading="lazy">\r\n'},4:function(e,n,t,a,l){return'  <img class="trend-film-image" src="https://www.deckchaircinema.com/template_1/img/default-movie-portrait.jpg"\r\n    alt="No foto" loading="lazy">\r\n'},6:function(e,n,t,a,l){var o,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'      <li class="genre-item">'+e.escapeExpression("function"==typeof(o=null!=(o=i(t,"genres")||(null!=n?i(n,"genres"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"genres",hash:{},data:l,loc:{start:{line:14,column:29},end:{line:14,column:39}}}):o)+"</li>\r\n"},8:function(e,n,t,a,l){return'      <li class="genre-item">Indefinite</li>\r\n'},10:function(e,n,t,a,l){var o,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <span class="trend-film-data"> '+e.escapeExpression("function"==typeof(o=null!=(o=i(t,"release_date")||(null!=n?i(n,"release_date"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"release_date",hash:{},data:l,loc:{start:{line:21,column:35},end:{line:21,column:51}}}):o)+"</span>\r\n"},12:function(e,n,t,a,l){return'    <span class="trend-film-data">NO DATE</span>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:28,column:9}}}))?o:""},useData:!0})},Zmr0:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,l){var o,i=null!=n?n:e.nullContext||{},r=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="team-member">\r\n    <img src="'+c(typeof(o=null!=(o=u(t,"image")||(null!=n?u(n,"image"):n))?o:r)===s?o.call(i,{name:"image",hash:{},data:l,loc:{start:{line:3,column:14},end:{line:3,column:23}}}):o)+'" alt="'+c(typeof(o=null!=(o=u(t,"name")||(null!=n?u(n,"name"):n))?o:r)===s?o.call(i,{name:"name",hash:{},data:l,loc:{start:{line:3,column:30},end:{line:3,column:38}}}):o)+'" class="member-pic">\r\n    <h2 class="member-name">'+c(typeof(o=null!=(o=u(t,"name")||(null!=n?u(n,"name"):n))?o:r)===s?o.call(i,{name:"name",hash:{},data:l,loc:{start:{line:4,column:28},end:{line:4,column:36}}}):o)+'</h2> \r\n    <p class="member-position">'+c(typeof(o=null!=(o=u(t,"position")||(null!=n?u(n,"position"):n))?o:r)===s?o.call(i,{name:"position",hash:{},data:l,loc:{start:{line:5,column:31},end:{line:5,column:43}}}):o)+'</p>\r\n    <a class="member-email" href="mailto:'+c(typeof(o=null!=(o=u(t,"email")||(null!=n?u(n,"email"):n))?o:r)===s?o.call(i,{name:"email",hash:{},data:l,loc:{start:{line:6,column:41},end:{line:6,column:50}}}):o)+'">contact</a>\r\n</li>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:8,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.e3a259db42c1d60c0cb3.js.map