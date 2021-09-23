(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{41:function(e,a,t){},42:function(e,a,t){},49:function(e,a,t){e.exports=t(91)},54:function(e,a,t){},76:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),i=(t(54),t(15)),s=t(37),o=t.n(s),m=(t(74),t(75),t(76),t(27)),d=function(e){var a=e.name,t=e.titles.map((function(e){return[e.toUpperCase(),1500]})).flat(),n=l.a.memo((function(){return l.a.createElement(m.a,{className:"title-styles",steps:t,loop:50})}));return l.a.createElement("header",{id:"home",style:{height:window.innerHeight,display:"block"}},l.a.createElement("div",{className:"row aligner",style:{height:"100%"}},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",null,l.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),l.a.createElement("br",null),l.a.createElement("h1",{className:"mb-0"},l.a.createElement(m.a,{steps:[a],wrapper:"p"})),l.a.createElement("div",{className:"title-container"},l.a.createElement(n,null))))))},u=function(e){var a=e.socials,t=e.name;return console.log(a),l.a.createElement("footer",null,l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"social-links"},a.map((function(e){return l.a.createElement("span",{key:e.name,className:"m-4"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.icon})))}))),l.a.createElement("div",{className:"copyright py-4 text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("small",null,"Copyright \xa9"," ",t||"???")))))},p=(t(78),t(79),t(80),t(81),function(e){var a=e.icon;return l.a.createElement("li",{className:"list-inline-item mx-3"},l.a.createElement("span",null,l.a.createElement("div",{className:"text-center skills-tile"},l.a.createElement("i",{className:a.icon+" colored",style:{fontSize:"220%"}},l.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},a.name)))))});var f=function(e){var a=e.image,t=e.about,n=e.core;return console.log(a),l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{style:{color:"black"}},l.a.createElement("span",null,"about")),l.a.createElement("div",{className:"row center mx-auto mb-5"},l.a.createElement("div",{className:"col-md-4 mb-5 center"},l.a.createElement("div",{className:"polaroid"},l.a.createElement("span",{style:{cursor:"auto"}},l.a.createElement("img",{height:"220px",src:a,alt:"Avatar placeholder"}),l.a.createElement("div",{className:"mt-3"},n.map((function(e){return l.a.createElement("i",{className:e.icon+" colored",style:{fontSize:35,margin:"9% 5% 0 5%"}})})))))),l.a.createElement("div",{className:"col-md-8 center"},l.a.createElement("div",{className:"col-md-10"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),l.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},l.a.createElement("br",null),l.a.createElement("span",{className:"wave"},"hello"," :) "),l.a.createElement("br",null),l.a.createElement("br",null),t)))))))},E=t(21),v=(t(87),t(16)),g=function(e){var a=e.item,t=e.icon;return l.a.createElement(E.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:a.year,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:l.a.createElement("i",{className:t+" experience-icon"})},l.a.createElement("h3",{className:"vertical-timeline-element-title mb-2",style:{textAlign:"left"}},a.title),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},a.institution),l.a.createElement("h5",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},a.address),l.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},a.topics&&a.topics.map((function(e,a){return l.a.createElement(v.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}))),l.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},l.a.createElement("ul",null,a.details&&a.details.map((function(e,a){return l.a.createElement("li",{className:"mr-2 mb-2",key:a},e)})))),a.description&&l.a.createElement("p",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left",color:"#808080"}},a.description))},N=function(e){var a=e.experiences;return l.a.createElement("section",{id:"resume",className:"pb-5"},l.a.createElement("div",{className:"col-md-12 mx-auto"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"section-title",style:{color:"black"}},l.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},"Experience")))),a.map((function(e,a){return l.a.createElement("div",{className:"col-md-8 mx-auto",style:{marginBottom:50}},l.a.createElement("h3",{className:"skills-subtitle",style:{color:"black"}},l.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e.name)),l.a.createElement(E.VerticalTimeline,null,e.experiences.map((function(a,t){return l.a.createElement(g,{item:a,icon:e.icon,key:t})}))))})))},h=t(38),y=t(39),b=t(48),k=t(47),w=t(94),x=t(40),j=t.n(x),S=t(41),A=t.n(S),O=t(42),L=t.n(O),T=(t(88),function(e){switch(e.toLowerCase()){case"android":return"devicon-android-plain";case"ios":return"devicon-apple-original";case"web":return"fas fa-globe-americas";case"desktop":return"fas fa-desktop";case"windows":return"devicon-windows8-original";case"linux":return"devicon-linux-plain";case"mac":return"devicon-apple-original";case"iot":return"devicon-embeddedc-plain";case"dart":return"devicon-dart-plain";case"javascript":return"devicon-javascript-plain";case"typeScript":return"devicon-typescript-plain";case"python":return"devicon-python-plain-wordmark";case"java":return"devicon-java-plain-wordmark";case"c#":return"devicon-csharp-plain-wordmark";case"bash":return"devicon-bash-plain";case"c++":return"devicon-cplusplus-plain-wordmark";case"flutter":return"devicon-flutter-plain";case"reactjs":return"devicon-react-original-wordmark";case"react native":return"devicon-react-original";case"vuejs":return"devicon-vuejs-plain-wordmark";case"expressjs":return"devicon-express-original-wordmark";case"laravel":return"devicon-laravel-plain-wordmark";case"flask":return"devicon-flask-original-wordmark";case"django":return"devicon-django-plain";case".net core":return"devicon-dotnetcore-plain";case".net desktop":return"devicon-dot-net-plain-wordmark";case"electronjs":return"devicon-electron-original-wordmark";case"swing":return"devicon-java-plain-wordmark";case"arduino":case"esp8266":return"devicon-arduino-plain";case"raspberry pi":return"devicon-raspberrypi-line-wordmark";case"mongodb":return"devicon-mongodb-plain-wordmark";case"mysql":return"devicon-mysql-plain-wordmark";case"firebase":return"devicon-firebase-plain-wordmark";default:return"fas fa-desktop"}}),z=function(e){var a=e.icon;return l.a.createElement("li",{className:"list-inline-item mx-3"},l.a.createElement("span",null,l.a.createElement("div",{className:"text-center"},l.a.createElement("i",{className:T(a.name)+" colored",style:{fontSize:"300%"}},l.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},a.name)))))},C=function(e){var a=e.data;return l.a.createElement("li",{className:"list-inline-item mx-3"},l.a.createElement("span",null,l.a.createElement("div",{className:"text-center"},l.a.createElement("i",{className:T(a),style:{fontSize:"300%"}},l.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},a)))))},W=function(e){Object(b.a)(t,e);var a=Object(k.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data,a=e.technologies,t=e.images,n=e.tags,r=e.platforms,c=this.props.data.title,i=this.props.data.description,s=this.props.data.url;if(t)var o=t.map((function(e,a){return l.a.createElement("div",{key:a,"data-src":e})}));if(a)var m=a.map((function(e,a){return l.a.createElement(z,{key:a,icon:e})}));if(r)var d=r.map((function(e,a){return l.a.createElement(C,{data:e})}));if(this.props.data.tags)var u=n.map((function(e,a){return l.a.createElement(v.a,{pill:!0,className:"experience-badge mx-2",key:a},e)}))}return l.a.createElement(w.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),l.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},l.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},l.a.createElement("div",{className:"slider-tab"},l.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",l.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",l.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),l.a.createElement(j.a,{cssModule:[A.a,L.a],animation:"scaleOutAnimation",className:"slider-image"},o)),l.a.createElement("div",{className:"col-md-10 mx-auto"},l.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},c,s?l.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-href"},l.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),l.a.createElement("p",{className:"modal-description"},i),l.a.createElement("div",{className:"col-md-12 text-left"},l.a.createElement("strong",null,"Technologies"),l.a.createElement("ul",{className:"list-inline mx-auto mt-2"},m)),l.a.createElement("div",{className:"col-md-12 text-left"},l.a.createElement("strong",null,"Platforms"),l.a.createElement("ul",{className:"list-inline mx-auto mt-2"},d)),l.a.createElement("div",{className:"col-md-12 text-left mb-5"},l.a.createElement("strong",null,"Tags\xa0"),u))))}}]),t}(n.Component),I=function(e){var a=e.projects,t=Object(n.useState)(!1),r=Object(i.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)({}),m=Object(i.a)(o,2),d=m[0],u=m[1];return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"section-title",style:{color:"black"}},l.a.createElement("span",null,"Projects")),l.a.createElement("div",{className:"col-md-12 mx-auto"},l.a.createElement("div",{className:"row mx-auto"},a&&a.map((function(e,a){return l.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a,style:{cursor:"pointer"}},l.a.createElement("span",{className:"portfolio-item d-block"},l.a.createElement("div",{className:"foto",onClick:function(){return a=e,s(!0),void u(a);var a}},l.a.createElement("div",null,l.a.createElement("img",{src:e.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),l.a.createElement("span",{className:"project-date"},e.started),l.a.createElement("br",null),l.a.createElement("p",{className:"project-title-settings mt-3"},e.title)))))})))),l.a.createElement(W,{show:c,onHide:function(){s(!1),u(void 0)},data:d})))},B=function(e){var a=e.skills,t=function(e){return e.map((function(e,a){return l.a.createElement(p,{icon:e,key:a})}))};return l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",{className:"section-title"},l.a.createElement("span",{className:"text-white"},"Skills"))),l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h3",{className:"skills-subtitle"},l.a.createElement("span",{className:"text-white"},"Programming Language")),l.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a.language&&t(a.language))),a.platform.map((function(e,a){return l.a.createElement("div",{className:"col-md-12 text-center",style:{marginTop:50},key:a},l.a.createElement("h3",{className:"skills-subtitle"},l.a.createElement("span",{className:"text-white"},e.name)),l.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},e.framework&&t(e.framework)))}))))},P="http://localhost:5000",$="".concat(P,"/api/portfolio");"".concat(P,"/cdn/projects");var H=function(){var e=Object(n.useState)({name:"",titles:[],image:"",about:"",skills:{platform:[],core:[],language:[],ui:[],icons:[]},socials:[],projects:[],experiences:[{name:"Voluntary",experiences:[]},{name:"Internship",experiences:[]}]}),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(0),s=Object(i.a)(c,2);return s[0],s[1],Object(n.useEffect)((function(){o.a.get($).then((function(e){var a=e.data;r(a),document.title="".concat(a.name)})).catch((function(e){alert(e)}))}),[]),t.name,t.titles,t.image,t.about,t.projects,l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{name:t.name,titles:t.titles}),l.a.createElement(f,{image:t.image,about:t.about,core:t.skills.core}),l.a.createElement(I,{projects:t.projects}),l.a.createElement(B,{skills:t.skills}),l.a.createElement(N,{experiences:t.experiences}),l.a.createElement(u,{name:t.name,socials:t.socials}))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(90);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",c.a.render(l.a.createElement(H,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");U?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(a,e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.7be36b04.chunk.js.map