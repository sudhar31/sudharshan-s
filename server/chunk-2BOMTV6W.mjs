import './polyfills.server.mjs';
import{C as W,D as G,E as Y,F as q,G as V,J as U,N as K,P as u,Q as w,R as J,S as j,a as h,b as l,c as b,d as H,e as N,f as y,g as P,h as p,i as f,j as x,k as d,l as e,m as t,n as c,o as B,p as m,q as I,r as n,s as R,t as F,u as L}from"./chunk-6N4BMHIG.mjs";var k=class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=l({type:r,selectors:[["app-about"]],decls:2,vars:0,template:function(o,a){o&1&&(e(0,"p"),n(1,"about works!"),t())}})};function X(r,i){if(r&1&&(e(0,"div",46),c(1,"img",47),t()),r&2){let o=i.$implicit;p(),d("src",o.icon,y)}}function Z(r,i){if(r&1&&(e(0,"div",43)(1,"div",44),x(2,X,2,1,"div",45),t()()),r&2){let o=i.$implicit;p(2),d("ngForOf",o)}}function ee(r,i){if(r&1&&(e(0,"div",55)(1,"p"),n(2),t(),e(3,"a",56),n(4,"View Project"),t()()),r&2){let o=I().$implicit;p(2),R(o.details),p(),d("href",o.link,y)}}function te(r,i){if(r&1){let o=B();e(0,"div",48)(1,"div",49)(2,"div",50),c(3,"img",51),t(),e(4,"div",52)(5,"button",53),m("click",function(){let s=H(o).$implicit,Q=I();return N(Q.toggle(s.id))}),n(6),t(),x(7,ee,5,2,"div",54),t()()()}if(r&2){let o=i.$implicit;p(3),d("src",o.image,y),p(3),F(" ",o.title," "),p(),d("ngIf",o.showDetails)}}function ne(r,i){r&1&&(e(0,"p",57),n(1,"Subscribed successfully! Thank you for joining."),t())}var M=class r{constructor(i){this.router=i}isScrolled=!1;isSubscribed=!1;scrollToSection(i){this.router.navigate(["/home"]).then(()=>{let o=document.getElementById(i);o&&o.scrollIntoView({behavior:"smooth"})})}onWindowScroll(){let i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;this.isScrolled=i>50}chunkArray(i,o){let a=[];for(let s=0;s<i.length;s+=o)a.push(i.slice(s,s+o));return a}skills=[{icon:"https://img.icons8.com/?size=100&id=20909&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=21278&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=71257&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=54087&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=13679&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=90519&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=74402&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=114474&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=w1Gq29w4RQWL&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=ut6gQeo5pNqf&format=png&color=000000"},{icon:"https://img.icons8.com/?size=100&id=16318&format=png&color=000000"},{icon:"https://img.icons8.com/ios-filled/50/000000/git.png"},{icon:"https://img.icons8.com/?size=100&id=q4RsigMwEQ0d&format=png&color=000000"}];chunkedSkills=this.chunkArray(this.skills,3);projects=[{id:1,title:"TinDog Designing Project (HTML, CSS, Bootstrap)",image:"https://images.unsplash.com/photo-1536544753306-ca75d2e9f7d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",details:"A web application for dog enthusiasts to connect with nearby dogs. Featuring a modern design with responsive layouts, interactive sections, and a user-friendly interface.",link:"https://sudhar31.github.io/TinDog-Project/",showDetails:!1},{id:2,title:"Amusement Park Ticketing System",image:"https://images.unsplash.com/photo-1670337949149-01c519a0e846?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",details:"A full-stack application developed with Spring Boot and Angular for managing amusement park tickets. It includes features for booking, viewing summaries, and real-time updates.",link:"https://github.com/sudhar31/Amusement-Park-Ticketing-System-Project",showDetails:!1},{id:3,title:"Glacial Bliss - A Icecream resturant",image:"https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",details:"A full-stack project utilizing Java Spring Boot for backend and Angular for a frontend, interactive user interface, managing ice cream and dessert orders with secure user authentication.",link:"https://github.com/sudhar31/Glacial-Bliss",showDetails:!1}];toggle(i){let a=[...this.projects].find(s=>s.id===i);a&&(a.showDetails=!a.showDetails)}onKeyPress(i,o){(i.key==="Enter"||i.key===" ")&&this.toggle(o)}subscribe(){this.isSubscribed=!0}static \u0275fac=function(o){return new(o||r)(f(u))};static \u0275cmp=l({type:r,selectors:[["app-home"]],hostBindings:function(o,a){o&1&&m("scroll",function(){return a.onWindowScroll()},!1,P)},decls:114,vars:3,consts:[[1,"hero-section","d-flex","align-items-center","justify-content-center"],[1,"text-center"],["href","#about","title","Scroll Down",1,"btn-scroll"],[1,"bi","bi-chevron-down"],["id","about",1,"about-section"],[1,"about-name"],[1,"about-content"],[1,"btn-know-more",3,"click"],["id","services",1,"services-section"],[1,"service-content"],[1,"experience-item"],[1,"experience-title"],[1,"experience-company"],[1,"experience-timeframe"],[1,"experience-description"],["id","know more",1,"skills-section"],[1,"section-title"],[1,"row"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],["id","projects",1,"projects-section"],[1,"projects-container"],["class","col-lg-4 col-md-6 mb-4",4,"ngFor","ngForOf"],["id","contacts",1,"contact-section"],[1,"subscribe-container"],[1,"subscribe-description"],[1,"btn-subscribe",3,"click"],["class","subscribe-success",4,"ngIf"],[1,"footer-section"],[1,"container-fluid"],[1,"col-md-4","footer-left"],[1,"social-links"],["href","https://www.linkedin.com/in/sudharshan-s-0663392b4/","target","_blank"],["src","https://img.icons8.com/color/48/000000/linkedin.png","alt","LinkedIn"],["href","https://github.com/sudhar31","target","_blank"],["src","https://img.icons8.com/color/48/000000/github.png","alt","GitHub"],["href","https://x.com/Sudharshan31200","target","_blank"],["src","https://img.icons8.com/color/48/000000/twitter.png","alt","Twitter"],[1,"col-md-4","footer-center"],["href","mailto:shansudhar209@gmail.com"],["href","https://sudhar31.github.io/my-portfolio/","target","_blank"],[1,"col-md-4","footer-right"],["href","/privacy"],["href","/terms"],[1,"col-md-4","mb-4"],[1,"skill-box"],["class","skill-item",4,"ngFor","ngForOf"],[1,"skill-item"],["alt","Skill Icon",3,"src"],[1,"col-lg-4","col-md-6","mb-4"],[1,"card","project-card"],[1,"card-image"],["alt","Project",1,"project-image",3,"src"],[1,"card-content"],[1,"card-title","btn","btn-details",3,"click"],["class","card-details",4,"ngIf"],[1,"card-details"],["target","_blank",1,"project-link",3,"href"],[1,"subscribe-success"]],template:function(o,a){o&1&&(e(0,"section",0)(1,"div",1)(2,"h1"),n(3,"A selfless act is beyond measure, like the boundless depths of the ocean"),t(),e(4,"h1"),n(5,"\u2014it knows no limits."),t(),e(6,"p"),n(7,"Start a Journey with Sudharshan!!"),t(),e(8,"a",2),c(9,"i",3),t()()(),e(10,"section",4)(11,"h2",5),n(12,"SUDHARSHAN"),t(),e(13,"p",6),n(14," Sudharshan is a dedicated Software Engineer known for his friendly nature and unwavering love for his friends and family. A passionate pet lover and an enthusiastic sportsman, he brings a vibrant energy to everything he does. With over a year of experience in software development, Sudharshan excels in Java full stack and Angular, and is also an inspiring motivator on topics such as confidence, mindset, and emotional intelligence. Explore Sudharshan's journey and the resources he shares, reflecting his commitment to personal and professional growth. "),t(),e(15,"button",7),m("click",function(){return a.scrollToSection("know more")}),n(16,"Know More"),t()(),e(17,"section",8)(18,"h2",9),n(19,"Services"),t(),e(20,"div",10)(21,"h3",11),n(22,"Associate Software Engineer"),t(),e(23,"p",12)(24,"em"),n(25,"CGI Information Systems and Management Consultants Pvt Ltd, Chennai"),t()(),e(26,"p",13),n(27,"August 2022 - December 2023"),t(),e(28,"p",14),n(29," At CGI, I contributed to both front-end and back-end development, playing a key role in "),e(30,"em"),n(31,"designing"),t(),n(32," and "),e(33,"em"),n(34,"implementing user interfaces"),t(),n(35," and "),e(36,"em"),n(37,"server-side"),t(),n(38," logic. I collaborated closely with senior developers to troubleshoot and resolve issues, ensuring the smooth deployment of applications. My responsibilities included participating in "),e(39,"em"),n(40,"code reviews"),t(),n(41,", adhering to best practices and coding standards, and assisting in maintaining project documentation. I also supported the team throughout various stages of the development lifecycle. "),t()(),e(42,"div",10)(43,"h3",11),n(44,"Engineering Intern"),t(),e(45,"p",12)(46,"em"),n(47,"CGI Information Systems and Management Consultants Pvt Ltd"),t()(),e(48,"p",13),n(49,"May 2022 - July 2022"),t(),e(50,"p",14),n(51," As an Engineering Intern, I focused on learning and applying skills in both "),e(52,"em"),n(53,"Java"),t(),n(54," and the "),e(55,"em"),n(56,"MEAN"),t(),n(57," stack. I assisted in coding, testing, and debugging tasks under the guidance of senior engineers. My contributions to the final project included implementing features and resolving issues, which were instrumental in ensuring a smooth delivery. The successful completion of this project, for which I received a certificate, significantly enhanced my technical skills and prepared me for future roles in software development. "),t()()(),e(58,"section",15)(59,"h2",16),n(60,"Skills and Technology"),t(),e(61,"div",17),x(62,Z,3,1,"div",18),t(),e(63,"section",19)(64,"h2",16),n(65,"Personal Projects"),t(),e(66,"div",20)(67,"div",17),x(68,te,8,3,"div",21),t()()()(),e(69,"section",22)(70,"div",23)(71,"h2"),n(72,"Explore with Sudharshan"),t(),e(73,"p",24),n(74," Stay updated with my latest projects, blog posts, and more. Join the community and let's explore the tech world together! "),t(),e(75,"button",25),m("click",function(){return a.subscribe()}),n(76,"Subscribe"),t(),x(77,ne,2,0,"p",26),t()(),e(78,"footer",27)(79,"div",28)(80,"div",17)(81,"div",29)(82,"div",30)(83,"a",31),c(84,"img",32),n(85," LinkedIn "),t(),e(86,"a",33),c(87,"img",34),n(88," GitHub "),t(),e(89,"a",35),c(90,"img",36),n(91," Twitter "),t()()(),e(92,"div",37)(93,"p"),n(94,"Email: "),e(95,"a",38),n(96,"shansudhar209@gmail.com"),t()(),e(97,"p"),n(98,"Phone: +91-1234567890"),t(),e(99,"p"),n(100,"\xA9 2024 Sudharshan. All rights reserved."),t(),e(101,"p"),n(102,"Address: B 37, TNHB, Annalagraharam, Kalimuthu nagar, Kumbakonam south, Kumbakonam 612001, Tamilnadu, India"),t(),e(103,"p")(104,"strong"),n(105,"Visit: "),t(),e(106,"a",39),n(107," www.sudharshan-s.com"),t()()(),e(108,"div",40)(109,"a",41),n(110,"Privacy Policy"),t(),n(111," | "),e(112,"a",42),n(113,"Terms & Conditions"),t()()()()()),o&2&&(p(62),d("ngForOf",a.chunkedSkills),p(6),d("ngForOf",a.projects),p(9),d("ngIf",a.isSubscribed))},dependencies:[G,Y],styles:['.hero-section[_ngcontent-%COMP%]{height:100vh;background-image:url(https://images.unsplash.com/photo-1686890363911-635fb164ab96?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);background-size:cover;background-position:center;color:#fff;display:flex;align-items:center;justify-content:center;position:relative}.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px;font-weight:700}.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;margin-top:10px}.text-center[_ngcontent-%COMP%]{text-align:center;background-color:#0000004d;padding:20px;border-radius:10px}.text-center[_ngcontent-%COMP%]:hover{color:#ebd3f8}section[_ngcontent-%COMP%]{padding:70px 20px 60px;position:relative}.btn-scroll[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:50%;transform:translate(-50%);font-size:2rem;color:#fff;text-decoration:none;background:#00000080;border-radius:50%;padding:10px;transition:background .3s ease,color .3s ease}.btn-scroll[_ngcontent-%COMP%]:hover{background:#000c;color:#e0e5b6}.btn-scroll[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2rem}html[_ngcontent-%COMP%]{scroll-behavior:smooth}#about[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%], #services[_ngcontent-%COMP%]{padding-top:70px}.about-section[_ngcontent-%COMP%]{text-align:center;padding:50px 20px;background-color:#2e073f;box-shadow:0 4px 12px #0000001a}.about-name[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:10px;color:#fff;position:relative}.about-name[_ngcontent-%COMP%]:after{content:"";display:block;width:80px;height:4px;background-color:#ebd3f8;margin:8px auto 0}.about-content[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;line-height:1.6;color:#ffecec;max-width:1000px;margin:0 auto 30px}.btn-know-more[_ngcontent-%COMP%]{background-color:#ebd3f8;color:#fff;font-weight:700;border-radius:20px;padding:10px 30px;text-transform:uppercase;transition:background-color .3s ease}.btn-know-more[_ngcontent-%COMP%]:hover{background-color:#ad49e1}.services-section[_ngcontent-%COMP%]{padding:50px 20px;background-color:#2e073f;text-align:center}.service-content[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:10px;color:#fff;position:relative}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:30px}.experience-item[_ngcontent-%COMP%]{margin-bottom:40px}.experience-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#ebd3f8;margin-bottom:5px}.experience-company[_ngcontent-%COMP%]{font-size:1.125rem;font-style:italic;color:#ad49e1;margin-bottom:5px}.experience-timeframe[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:bolder;color:#fff;margin-bottom:10px}.experience-description[_ngcontent-%COMP%]{font-size:1.175rem;font-weight:700;color:#ffecec;line-height:1.8;text-align:center}.knowmore-section[_ngcontent-%COMP%]{text-align:center;padding:50px 20px;background-color:#2e073f;box-shadow:0 4px 12px #0000001a}.skills-section[_ngcontent-%COMP%]{padding:50px 20px;background-color:#2e073f;text-align:center}.section-title[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:40px;color:#fff;position:relative}.skill-box[_ngcontent-%COMP%]{background-color:#ebd3f8;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;height:200px}.skill-item[_ngcontent-%COMP%]{width:70px;height:70px;margin:10px 0}.skill-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}@media (max-width: 768px){.skill-box[_ngcontent-%COMP%]{height:auto}}.projects-section[_ngcontent-%COMP%]{padding:60px 20px;background-color:#2e073f;text-align:center}.project-card[_ngcontent-%COMP%]{background-color:#ebd3f8;border-radius:12px;box-shadow:0 8px 16px #0000001a;transition:transform .3s ease,box-shadow .3s ease;overflow:hidden}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 12px 24px #0003}.project-image[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover;transition:transform .3s ease}.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]{transform:scale(1.05)}.card-content[_ngcontent-%COMP%]{padding:20px;text-align:left}.card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:#333;background-color:transparent;border:none;cursor:pointer;text-align:left;width:100%;padding:0;margin-bottom:10px}.card-details[_ngcontent-%COMP%]{margin-top:15px}.project-link[_ngcontent-%COMP%]{display:inline-block;margin-top:10px;color:#7a1cac;font-weight:600;text-decoration:none;transition:color .3s ease}.project-link[_ngcontent-%COMP%]:hover{color:#2e073f}@media (max-width: 768px){.section-title[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:30px}.card[_ngcontent-%COMP%]{max-width:100%}}@media (max-width: 480px){.section-title[_ngcontent-%COMP%]{font-size:1.75rem;margin-bottom:25px}.card[_ngcontent-%COMP%]{max-width:100%}}.contact-section[_ngcontent-%COMP%]{background-color:#2e073f;color:#fff;padding:60px 20px;text-align:center}.subscribe-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:20px}.subscribe-description[_ngcontent-%COMP%]{font-size:1.2rem;color:#ccc;max-width:600px;margin:0 auto 30px;text-align:center}.btn-subscribe[_ngcontent-%COMP%]{background-color:#7a1cac;color:#fff;padding:12px 30px;border:none;border-radius:25px;font-size:1.2rem;cursor:pointer;transition:background-color .3s ease}.btn-subscribe[_ngcontent-%COMP%]:hover{background-color:#ad49e1}.subscribe-success[_ngcontent-%COMP%]{color:#28a745;font-size:1.1rem;margin-top:20px}.footer-section[_ngcontent-%COMP%]{background-color:#281045;color:#999;padding:40px 20px}.footer-left[_ngcontent-%COMP%], .footer-center[_ngcontent-%COMP%], .footer-right[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;margin-right:15px;color:#999;text-decoration:none;font-size:1.2rem}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{vertical-align:middle;margin-right:8px}.footer-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.footer-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none}.footer-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;text-decoration:underline}.footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;margin:0 5px}.footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;text-decoration:underline}@media (max-width: 768px){.footer-left[_ngcontent-%COMP%], .footer-center[_ngcontent-%COMP%], .footer-right[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}}@media (max-width: 480px){.footer-left[_ngcontent-%COMP%], .footer-center[_ngcontent-%COMP%], .footer-right[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}.footer-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;margin:5px 0}}']})};var S=class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=l({type:r,selectors:[["app-contact"]],decls:2,vars:0,template:function(o,a){o&1&&(e(0,"p"),n(1,"contact works!"),t())}})};var oe=r=>({scrolled:r}),C=class r{constructor(i){this.router=i}isScrolled=!1;scrollToSection(i){this.router.navigate(["/home"]).then(()=>{let o=document.getElementById(i);o&&o.scrollIntoView({behavior:"smooth"})})}onWindowScroll(){let i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;this.isScrolled=i>50}toggleNavbar(){let i=document.getElementById("navbarNav");i&&i.classList.toggle("show")}static \u0275fac=function(o){return new(o||r)(f(u))};static \u0275cmp=l({type:r,selectors:[["app-navbar"]],hostBindings:function(o,a){o&1&&m("scroll",function(){return a.onWindowScroll()},!1,P)},decls:31,vars:3,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","fixed-top",3,"ngClass"],["routerLink","/home",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"click"],["routerLink","/home","routerLinkActive","active",1,"nav-link"],[1,"navbar-nav","ml-auto"],["href","https://x.com/Sudharshan31200","target","_blank",1,"nav-link"],[1,"fab","fa-twitter"],["href","https://www.instagram.com/_sdhr__shan_/","target","_blank",1,"nav-link"],[1,"fab","fa-instagram"],["href","https://github.com/sudhar31","target","_blank",1,"nav-link"],[1,"fab","fa-github"],["href","https://www.linkedin.com/in/sudharshan-s-0663392b4/","target","_blank",1,"nav-link"],[1,"fab","fa-linkedin"]],template:function(o,a){o&1&&(e(0,"nav",0)(1,"a",1),n(2,"SUDHARSHAN"),t(),e(3,"button",2),c(4,"span",3),t(),e(5,"div",4)(6,"ul",5)(7,"li",6)(8,"a",7),m("click",function(){return a.scrollToSection("about")}),n(9,"About"),t()(),e(10,"li",6)(11,"a",8),n(12,"Home"),t()(),e(13,"li",6)(14,"a",7),m("click",function(){return a.scrollToSection("services")}),n(15,"Services"),t()(),e(16,"li",6)(17,"a",7),m("click",function(){return a.scrollToSection("projects")}),n(18,"Projects"),t()(),e(19,"li",6)(20,"a",7),m("click",function(){return a.scrollToSection("contacts")}),n(21,"Contact"),t()()(),e(22,"div",9)(23,"a",10),c(24,"i",11),t(),e(25,"a",12),c(26,"i",13),t(),e(27,"a",14),c(28,"i",15),t(),e(29,"a",16),c(30,"i",17),t()()()()),o&2&&d("ngClass",L(1,oe,a.isScrolled))},dependencies:[W,w,J],styles:[".navbar[_ngcontent-%COMP%]{background:#2e073f;transition:background-color .3s ease,box-shadow .3s ease}.navbar.scrolled[_ngcontent-%COMP%]{background-color:#281045;box-shadow:0 4px 8px #2b194033}.navbar-brand[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;color:#fff;text-transform:uppercase;letter-spacing:1px;text-align:center;line-height:1.2;margin-left:5rem;padding-right:7rem;white-space:pre-wrap}.navbar-brand[_ngcontent-%COMP%]:hover{color:#ebd3f8}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#f8f9fa;font-size:1rem;padding:.75rem 2rem .75rem 1.25rem;transition:color .3s ease,transform .3s ease;font-weight:700;align-content:center}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#ad49e1;text-decoration:none;transform:scale(1.1)}.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#ebd3f8;font-weight:700}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem;color:#f8f9fa;transition:color .5s ease}.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#522258}"]})};var E=class r{constructor(i){this.router=i}errorMessage="";onSubmit(){document.getElementById("termsAccept").checked?(this.errorMessage="",this.router.navigate(["/"])):this.errorMessage="You must accept the Terms and Conditions to proceed."}static \u0275fac=function(o){return new(o||r)(f(u))};static \u0275cmp=l({type:r,selectors:[["app-terms"]],decls:44,vars:0,consts:[[1,"terms-container"],[1,"checkbox-container"],["type","checkbox","id","termsAccept","required",""],["for","termsAccept"],["routerLink","/",1,"btn-know-more"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"h1"),n(2,"Terms and Conditions"),t(),e(3,"p")(4,"i"),n(5,"Last updated: August 27, 2024"),t()(),e(6,"p"),n(7,"Welcome to Sudharshan's personal website. By accessing or using this website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use this website."),t(),e(8,"h2"),n(9,"1. Intellectual Property"),t(),e(10,"p"),n(11,"All content, including text, images, graphics, and code, is the property of Sudharshan. Some images used are sourced from free online platforms such as Unsplash and icons8 are utilized solely for decorative and reference purposes. These images are free to use, unless otherwise specified. Any reproduction, distribution, or transmission of the content without prior written permission is prohibited. All other images are the original work of Sudharshan."),t(),e(12,"h2"),n(13,"2. Use of Website"),t(),e(14,"p"),n(15,"You agree to use this website for lawful purposes only. You are prohibited from using the website to:"),t(),e(16,"ul")(17,"li"),n(18,"Engage in any illegal activities."),t(),e(19,"li"),n(20,"Harass or cause distress to other users."),t(),e(21,"li"),n(22,"Transmit viruses or malicious code."),t(),e(23,"li"),n(24,"Violate any applicable laws or regulations."),t()(),e(25,"h2"),n(26,"3. Limitation of Liability"),t(),e(27,"p"),n(28,"In no event shall Sudharshan be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the website."),t(),e(29,"h2"),n(30,"4. Modifications to Terms"),t(),e(31,"p"),n(32,"Sudharshan reserves the right to modify these terms at any time. You should review these terms periodically to ensure compliance."),t(),e(33,"h2"),n(34,"5. Governing Law"),t(),e(35,"p"),n(36,"These terms are governed by the laws of India, and any disputes will be resolved in accordance with the laws of this jurisdiction."),t(),e(37,"div",1),c(38,"input",2),e(39,"label",3)(40,"b"),n(41,"I accept the Terms and Conditions"),t()()(),e(42,"button",4),n(43,"Submit"),t()())},dependencies:[w],styles:[".terms-container[_ngcontent-%COMP%]{background-color:#2e073f;color:#fff;padding:60px 20px;max-width:800px;margin:80px auto;border-radius:10px;box-shadow:0 4px 12px #0000001a}.terms-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:20px;text-align:center;color:#ad49e1}.terms-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;margin-top:30px;margin-bottom:15px;color:#ad49e1}.terms-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .terms-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.6;margin-bottom:20px}.terms-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}.terms-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px}.checkbox-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:30px}.checkbox-container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin-right:10px;transform:scale(1.2)}.checkbox-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.2rem}.btn-know-more[_ngcontent-%COMP%]{display:block;background-color:#ebd3f8;color:#2e073f;border:none;padding:15px 30px;font-size:1.2rem;font-weight:700;border-radius:5px;cursor:pointer;transition:background-color .3s ease;margin:30px auto 0;text-align:center}.btn-know-more[_ngcontent-%COMP%]:hover{background-color:#ad49e1}@media (max-width: 768px){.terms-container[_ngcontent-%COMP%]{padding:40px 15px}.terms-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.terms-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.terms-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .terms-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:1rem}.btn-know-more[_ngcontent-%COMP%]{padding:12px 25px;font-size:1rem}}"]})};var z=class r{constructor(i){this.router=i}message=null;onSubmit(){document.getElementById("privacyAccept").checked?this.router.navigate(["/"]):this.message="You must accept the Privacy Policy to proceed."}static \u0275fac=function(o){return new(o||r)(f(u))};static \u0275cmp=l({type:r,selectors:[["app-privacy"]],decls:42,vars:0,consts:[[1,"privacy-container"],[1,"checkbox-container"],["type","checkbox","id","privacyAccept","required",""],["for","privacyAccept"],[1,"btn-know-more",3,"click"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"h1"),n(2,"Privacy Policy"),t(),e(3,"p")(4,"i"),n(5,"Last updated: August 21, 2024"),t()(),e(6,"p"),n(7,"Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use this website."),t(),e(8,"h2"),n(9,"1. Information Collection"),t(),e(10,"p"),n(11,"We collect personal information that you voluntarily provide, such as your name, email address, and any other information you provide through forms or email communications."),t(),e(12,"h2"),n(13,"2. Use of Information"),t(),e(14,"p"),n(15,"We use your personal information to respond to your inquiries, improve our website, and provide you with relevant content. We do not sell, trade, or rent your personal information to third parties."),t(),e(16,"h2"),n(17,"3. Cookies"),t(),e(18,"p"),n(19,"We use cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our website."),t(),e(20,"h2"),n(21,"4. Data Security"),t(),e(22,"p"),n(23,"We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure."),t(),e(24,"h2"),n(25,"5. Your Rights"),t(),e(26,"p"),n(27,"You have the right to access, correct, or delete your personal information. If you have any concerns about your privacy, please contact us at "),e(28,"b"),n(29,"shansudhar209@gmail.com"),t(),n(30,"."),t(),e(31,"h2"),n(32,"6. Changes to this Policy"),t(),e(33,"p"),n(34,"We may update this Privacy Policy from time to time. Please review this page periodically for any changes."),t(),e(35,"div",1),c(36,"input",2),e(37,"label",3)(38,"b"),n(39,"I accept the Privacy Policy"),t()()(),e(40,"button",4),m("click",function(){return a.onSubmit()}),n(41,"Submit"),t()())},styles:[".privacy-container[_ngcontent-%COMP%]{background-color:#2e073f;color:#ecf0f1;padding:60px 20px;max-width:1000px;margin:80px auto;border-radius:10px;box-shadow:0 4px 12px #0000001a}.privacy-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:20px;text-align:center;color:#ad49e1}.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;margin-top:30px;margin-bottom:15px;color:#ad49e1}.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.6;margin-bottom:20px}.checkbox-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:30px}.checkbox-container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin-right:10px;transform:scale(1.2)}.checkbox-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.2rem}.btn-know-more[_ngcontent-%COMP%]{display:block;background-color:#ad49e1;color:#2e073f;border:none;padding:15px 30px;font-size:1.2rem;font-weight:700;border-radius:5px;cursor:pointer;transition:background-color .3s ease;margin:30px auto 0;text-align:center}.btn-know-more[_ngcontent-%COMP%]:hover{background-color:#ebd3f8}@media (max-width: 768px){.privacy-container[_ngcontent-%COMP%]{padding:40px 15px}.privacy-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.privacy-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem}.privacy-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .privacy-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:1rem}.btn-know-more[_ngcontent-%COMP%]{padding:12px 25px;font-size:1rem}}"]})};var re=[{path:"",component:M},{path:"contact",component:S},{path:"about",component:k},{path:"",component:C},{path:"home",component:M},{path:"terms",component:E},{path:"privacy",component:z}],A=class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=b({type:r});static \u0275inj=h({imports:[j.forRoot(re),j]})};var _=class r{title="sudharshan-s";static \u0275fac=function(o){return new(o||r)};static \u0275cmp=l({type:r,selectors:[["app-root"]],decls:2,vars:0,template:function(o,a){o&1&&c(0,"app-navbar")(1,"router-outlet")},dependencies:[K,C]})};var T=class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=b({type:r,bootstrap:[_]});static \u0275inj=h({providers:[V()],imports:[q,A]})};var D=class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=b({type:r,bootstrap:[_]});static \u0275inj=h({imports:[T,U]})};export{D as a};
