(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/jQuery.d0e45620.png"},25:function(e,a,t){e.exports=t.p+"static/media/ExpressJs.92c2eb22.png"},26:function(e,a,t){e.exports=t.p+"static/media/PostgreSQL.4c844722.png"},28:function(e,a,t){e.exports=t.p+"static/media/PersonalImage.aecf0086.JPG"},29:function(e,a,t){e.exports=t.p+"static/media/BattleSource.37cbdc2f.PNG"},30:function(e,a,t){e.exports=t.p+"static/media/Cursr.ca383455.PNG"},31:function(e,a,t){e.exports=t.p+"static/media/Bookmark.137b2cda.PNG"},32:function(e,a,t){e.exports=t.p+"static/media/Quiz.dfe2e012.PNG"},35:function(e,a,t){e.exports=t(56)},42:function(e,a,t){},43:function(e,a,t){},46:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(19),l=t.n(r),i=t(20),c=t(21),s=t(34),m=t(33),u=t(1),p=t.n(u),d=t(9),h=t(2);t(42),t(43);function g(e){return o.a.createElement("ul",{className:"navbar"},o.a.createElement("li",{className:"name",id:"name",key:"name"},o.a.createElement(d.b,{to:"/Portfolio"},o.a.createElement("p",{className:"header-button"},"Adam Brown"))),o.a.createElement("li",{className:"nav",id:"about",key:"about"},o.a.createElement(d.b,{to:"/about"},o.a.createElement("p",{className:"header-button"},"About Me"))),o.a.createElement("li",{className:"nav",id:"projects",key:"projects"},o.a.createElement(d.b,{to:"/projects"},o.a.createElement("p",{className:"header-button"},"Projects"))))}t(46);var f=t(8),b=t(23),E=t(10);function y(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h5",null,"\xa9 Adam Brown 2022"),o.a.createElement("section",{className:"address"},o.a.createElement("a",{href:"mailto:adam.edward.brown@gmail.com","aria-label":"email"},o.a.createElement(f.a,{icon:b.a})),o.a.createElement("section",{className:"socialLinks"},o.a.createElement("a",{href:"https://www.linkedin.com/in/adam-brown-36b93565","aria-label":"linkedin"},o.a.createElement(f.a,{icon:E.e})),o.a.createElement("a",{href:"https://github.com/ChancellorAceX/","aria-label":"github"},o.a.createElement(f.a,{icon:E.b})))),o.a.createElement("p",{className:"email"},o.a.createElement("i",null,"adam.edward.brown@gmail.com")))}var v=[{title:"BattleSource",image:"BattleSource.PNG",imageAlt:"BattleSource Screenshots",imageCaption:"This application is a full-stack tool for use with Dungeons and Dragons 5e. Intended for use by Dungeon Masters, however the bestiary is public and can be used by players as well. The rest of the app allow for creation of campaigns and battles on the fly. Battle members are auto-sorted by initiative for ease of use as a battle management system as well.",tech:["html5","css3","javascript","react","node.js","expressjs","postgresql"],repo:"https://github.com/ChancellorAceX/capstone-project-1-adam.git",live:"https://battlesource.vercel.app/"},{title:"Cursr",image:"Cursr.PNG",imageAlt:"Cursr Screenshots",imageCaption:'How many people tell you that you have to manage your anger? Well, with Cursr we give you a free, safe, anonymous method to vent your anger out into the world. When you feel like you need to vent your anger, you can let yourself be heard. Put a curse into the system and one random person will see it and "bless" it. After which you\'ll be notified of their blessing, and the curse disappeares forever',tech:["html5","css3","javascript","react","node.js","expressjs","postgresql"],repo:"https://github.com/thinkful-ei-macaw/Capstone-3-OABKT---Client",live:"https://capstone-3-oabkt.vercel.app/"},{title:"Bookmark Application",image:"Bookmark.PNG",imageAlt:"Bookmark Application screenshot",imageCaption:"This application is designed to allow an individual to add, update, and delete bookmarks to a list where they can filter and manage them easily. The application uses an api interface and a store/state based design.",tech:["html5","css3","javascript","jquery"],repo:"https://github.com/ChancellorAceX/bookmark-application-adam",live:"https://chancelloracex.github.io/bookmark-application-adam/"},{title:"Quiz Application",image:"Quiz.PNG",imageAlt:"Bookmark Application Screenshot",imageCaption:"An app where a user can get dynamic feeback and progress while navigating a quick 5 question quiz. The application features full-page rendering which means no need for multiple site links.",tech:["html5","css3","javascript","jquery"],repo:"https://github.com/ChancellorAceX/quiz-app-Adam-Kamela",live:"https://chancelloracex.github.io/quiz-app-Adam-Kamela/"}],k=t(5),j=t(24),w=t.n(j),N=t(25),I=t.n(N),A=t(26),x=t.n(A);function C(e){switch(e.icon){case"html5":return o.a.createElement(f.a,{icon:E.c});case"css3":return o.a.createElement(f.a,{icon:E.a});case"javascript":return o.a.createElement(f.a,{icon:E.d});case"jquery":return o.a.createElement("img",{className:"jquery-img",src:w.a,alt:"JQuery icon"});case"react":return o.a.createElement(f.a,{icon:E.g,spin:!0});case"node.js":return o.a.createElement(f.a,{icon:E.f});case"expressjs":return o.a.createElement("img",{className:"express-img",src:I.a,alt:"ExpressJs icon"});case"postgresql":return o.a.createElement("img",{className:"postgresql-img",src:x.a,alt:"PostgreSQL icon"});default:return"No icon found"}}function q(e){var a=e.last?null:o.a.createElement("div",{className:"linebreak"});return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"projects",id:"project"},o.a.createElement(k.Fade,{delay:300,key:"title"},o.a.createElement("h1",null,e.project.title)),o.a.createElement(k.Fade,{delay:400,key:"image"},o.a.createElement("figure",null,o.a.createElement("img",{className:"projectimg",src:e.projectImages[e.index],alt:e.project.imageAlt}),o.a.createElement("figcaption",null,e.project.imageCaption))),o.a.createElement(k.Fade,{key:"icon-box",delay:500},o.a.createElement("section",{className:"icon-box"},e.project.tech.map((function(a,t){return o.a.createElement(k.Fade,{delay:100*t+500,key:"icon-".concat(t)},o.a.createElement(C,{icon:a,key:"".concat(e.project.name,"-").concat(a)}))})))),o.a.createElement(k.Fade,{delay:600},o.a.createElement("section",{className:"buttonBox"},o.a.createElement("button",{className:"repolink button",id:"bookmarkRepo",value:e.project.repo,onClick:function(){return window.open(e.project.repo,"".concat(e.project.title," - repository"))}},"Project Repository"),o.a.createElement("button",{className:"livelink button",id:"bookmarkLive",value:e.project.live,onClick:function(){return window.open(e.project.live,"".concat(e.project.title))}},"View Product")))),a)}t(52);var B=Object(h.f)((function(e){return console.log(e.projectImages),o.a.createElement(o.a.Fragment,null,v.map((function(a,t){return o.a.createElement(k.Fade,{cascade:!0,fraction:.01,delay:100,key:a.title},o.a.createElement(q,{project:a,key:a.title,last:t===v.length-1,projectImages:e.projectImages,index:t}))})))})),P=(t(53),t(28)),F=t.n(P);function G(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.Fade,null,o.a.createElement("p",{className:"about name"},"Hey there, I'm Adam. I'm a software developer with a background in Biomedical Engineering.")),o.a.createElement(k.Fade,null,o.a.createElement("img",{src:F.a,className:"myself",alt:"Adam Brown"})),o.a.createElement(k.Fade,null,o.a.createElement("p",{className:"about name"},"Thanks for visiting my page! Feel free to get to know me a little better or have a look at previous projects I've done. You can also contact me at any of the links below.")))}t(54);function T(e){return o.a.createElement("section",{className:"about"},o.a.createElement(k.Fade,null,o.a.createElement("p",{className:"about"},"Back during the pandemic, I took the opportunity to expand my skillset, specifically into web development. At the time I had a long overdue interest in software development, and i'm so glad that I decided to persue this new career. With my previous knowledge obtained from my Biomedical Engineering degree at Georgia Tech, I quickly graduated from the Engineering Immersion bootcamp at Thinkful where I learned how to implement various programming technologies and methodologies. And since then have expanded my techstack and skill set drastically. Especially being the sole developer for my employer going on nearly a year now. Professionally, I have a strong interest in continuing my education and providing valuable services to society. I also believe that belonging to a team of developers would be a very good step for me, for purposes of learning about alternative workflows and team partnership in the a dev environment. My combined educations allows me a unique perspective on the process that most developers won't have. I understand the importance of continually thinking about the end user as a project is being developed, and all the complications that implies. That being said, I love problem solving, and I feel like I have finally found my niche to allow my unique skills to flourish.")),o.a.createElement(k.Fade,null,o.a.createElement("p",{className:"about"},"Outside of coding I have several interests. I'm a DnD Dungeon Master for two seperate campaigns (completely homebrewed) and love playing all sorts of tabletop games. I'm a percussionist, avid video gamer (primarily RPGs), comic book fan, TV/movie enthusiast, and an all around general nerd. Every year you can find me at DragonCon either nerding out on one of my interests, joking with people as Deadpool, or just wandering around having a good time.")))}var S=t(29),D=t.n(S),O=t(30),Q=t.n(O),z=t(31),J=t.n(z),R=t(32),L=t.n(R),M=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={match:p.a.object.isRequired,location:p.a.object.isRequired,history:p.a.object.isRequired,projectImages:[D.a,Q.a,J.a,L.a]},n}return Object(c.a)(t,[{key:"render",value:function(){return console.log(this.state.projectImages),o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(g,null)),o.a.createElement("main",null,o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/about"},o.a.createElement(T,null)),o.a.createElement(h.a,{path:"/projects"},o.a.createElement(B,{projectImages:this.state.projectImages})),o.a.createElement(h.a,{path:"*"},o.a.createElement(G,null)))),o.a.createElement("footer",null,o.a.createElement(y,null))))}}]),t}(n.Component),X=Object(h.f)(M);l.a.render(o.a.createElement(d.a,null,o.a.createElement(X,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4af6a18d.chunk.js.map