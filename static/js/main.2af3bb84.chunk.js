(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{29:function(e,t,i){},38:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){"use strict";i.r(t);var a=i(2),c=i.n(a),n=i(31),s=i.n(n),o=(i(37),i(29),i(28)),r=(i(38),i(16)),l=i(57),d=i(1),j=function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("div",{className:"nav-container",children:[Object(d.jsx)(r.b,{to:"/about",children:Object(d.jsx)(l.a.li,{whileHover:{scale:1.2},children:" About "})}),Object(d.jsx)(r.b,{to:"/portfolio",children:Object(d.jsx)(l.a.li,{whileHover:{scale:1.2},children:" Portfolio "})}),Object(d.jsx)(r.b,{to:"/resume",children:Object(d.jsx)(l.a.li,{whileHover:{scale:1.2},children:" Resume "})}),Object(d.jsx)(r.b,{to:"/contact",children:Object(d.jsx)(l.a.li,{whileHover:{scale:1.2},children:" Contact "})})]})})},p=(i(45),function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"\xa9 Sam Sweigart"})})})}),h=(i(46),i(47),function(){return Object(d.jsx)("div",{className:"back tool-tip",children:Object(d.jsxs)(r.b,{to:"/",children:[Object(d.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/60/ffffff/circled-left-2.png",alt:"Arrow pointing back to homepage.",rel:"noreferrer"}),Object(d.jsx)("span",{className:"tool-tip-text",children:"Homepage"})]})})}),m=i.p+"static/media/sam-nrg-thunderstruck.56a7c99d.JPG",b=function(){return Object(d.jsxs)(l.a.main,{className:"about",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.25,duration:1}},exit:{x:"100vw",transition:{ease:"easeOut",duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("section",{className:"about-card-body",children:[Object(d.jsxs)("article",{className:"about-card-img",children:[Object(d.jsx)("h2",{className:"about-title",children:" About Me "}),Object(d.jsx)("img",{className:"aboutImg",src:m,alt:"Sam Sweigart on the Route 'ThunderStruck' in the New River Gorge"})]}),Object(d.jsxs)("article",{className:"about-card-body-content",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"hi-there",children:" Hi There! "}),"Welcome to my portfolio page. My name is Sam Sweigart. I currently reside in Philadelphia, PA and identify as a Full Stack Web Developer. In my journey for a new path, I began exploring HTML and CSS. Someone who has a near insatiable curiosity for information and problem solving, I quickly knew that Web Development was something I wanted to pursue."]}),Object(d.jsx)("p",{children:"Thank you for stopping by my page and taking the time to get to know me a bit better. This space will continue to be a work in progress as I polish my current skills and expand my scope into other aspects of Web Development. Please check back regularly, as I would love to hear any feedback you may have to offer."})]})]})]})},u=(i(48),function(e){var t=e.images,i=(e.openModal,e.close,e.open);e.handleProjectDisplay;return Object(d.jsx)(l.a.section,{className:"cards",children:t.map((function(e){return Object(d.jsx)("div",{class:"flip-card",children:Object(d.jsxs)("div",{class:"flip-card-inner",children:[Object(d.jsx)("div",{class:"flip-card-front",children:Object(d.jsx)("img",{src:e.path,alt:e.alt})}),Object(d.jsxs)("div",{class:"flip-card-back",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)(l.a.button,{className:"appLink",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){i(e.id)},children:"Details"},e.id)]})]})},e.id)}))})}),x=i(58),O=(i(49),i(50),function(e){var t=e.children,i=e.onClick;return Object(d.jsx)(l.a.section,{className:"backdrop",onClick:i,variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit",children:t})}),y=function(e){var t=e.handleClose,i=e.images,a={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},c=[];return Object(d.jsx)(O,{onClick:t,children:c&&i.map((function(e){return c=e.id,Object(d.jsxs)(l.a.section,{onClick:function(e){return e.stopPropagation()},className:"portModal",variants:a,initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsxs)(l.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:1.25},children:[Object(d.jsxs)("span",{className:"modalTitle",children:[" ",e.title," "]}),e.description]}),Object(d.jsx)(l.a.button,{className:"deployBtn",children:Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"Deploy"},e.id)}),Object(d.jsx)(l.a.button,{className:"repoBtn",children:Object(d.jsx)("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer",children:"Repo"},e.id)}),Object(d.jsx)(l.a.h5,{children:"Tech Used"}),Object(d.jsxs)(l.a.aside,{className:"modalTech",children:[i.map((function(e,t){return console.log(e),Object(d.jsx)(l.a.ul,{className:"techList1",initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:1.25},children:Object(d.jsx)("li",{children:e.tech[t]},e.id)},e.id)})),Object(d.jsxs)(l.a.ul,{className:"techList2",initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:1.25},children:[Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{})]})]})]},e.id)}))})},g=function(e){var t=e.modalOpen,i=e.setModalOpen,a=e.open,c=e.close,n=e.images,s=e.setImages;return Object(d.jsxs)(l.a.main,{className:"portfolio",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.25,duration:1}},exit:{x:"100vw",transition:{ease:"easeOut",duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:"portfolio-card-body",children:Object(d.jsxs)("div",{className:"centered",children:[Object(d.jsx)("h2",{className:"portfolio-title",children:" Portfolio "}),Object(d.jsx)(u,{close:c,open:a,modalOpen:t,setModalOpen:i,handleProjectDisplay:function(e){var t=n.filter((function(t){return t.id===e}));s(t)},images:n})]})}),Object(d.jsx)(x.a,{initial:!1,exitBeforeEnter:!0,children:t&&Object(d.jsx)(y,{modalOpen:a,handleClose:c,images:n})})]})},f=(i(51),i.p+"static/media/resume.a0e1c969.png"),v=function(e){e.images;return Object(d.jsxs)(l.a.main,{className:"resume",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.25,duration:1}},exit:{x:"100vw",transition:{ease:"easeOut",duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("article",{className:"resume-card-body",children:[Object(d.jsxs)("section",{className:"skillsCard",children:[Object(d.jsx)("h2",{className:"resumeTitle",children:" Resume "}),Object(d.jsxs)(l.a.ul,{className:"languages",children:[Object(d.jsx)(l.a.h5,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:1.25},children:"Languages"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.25},children:" HTML "}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.45},children:" CSS "}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.65},children:" TypeScript "}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.85},children:" JavaScript "})]}),Object(d.jsxs)(l.a.ul,{className:"tools",children:[Object(d.jsx)(l.a.h5,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25,duration:1.25},children:"Tools"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.25},children:"ReactJS"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.45},children:"NodeJS"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.65},children:"ExpressJS"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:1.85},children:"JQuery"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:2.05},children:"SQL"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:2.25},children:"NoSQL"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:2.45},children:"MongoDB"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:2.65},children:"Mongoose"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:2.85},children:"MySQL"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:3.05},children:"NPM"}),Object(d.jsx)(l.a.li,{initial:{y:1e3,opacity:0},animate:{y:0,opacity:1},transition:{delay:.35,duration:3.25},children:"MERN"})]})]}),Object(d.jsx)("section",{className:"resume-card",children:Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1eDNQRJeGJSx0bIPIuo5tRqKTkDko7B4H/view?usp=sharing",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:f,alt:"Downloadable PDF of Resume",className:"resume-img"})})})]})]})},k=(i(52),i(53),function(){return Object(d.jsxs)("section",{className:"social-icons",children:[Object(d.jsx)("p",{className:"contact-number",children:"267.666.8499"}),Object(d.jsx)("a",{href:"https://github.com/gamgee-em",rel:"noreferrer",target:"_blank",className:"github",children:Object(d.jsx)("img",{src:"https://img.icons8.com/material-two-tone/24/000000/github.png",alt:"GitHub Icon"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/sam-sweigart/",rel:"noreferrer",target:"_blank",className:"linked-in",children:Object(d.jsx)("img",{src:"https://img.icons8.com/material-two-tone/24/000000/linkedin--v1.png",alt:"LinkedIn Icon"})}),Object(d.jsx)("a",{href:"https://twitter.com/gamgee_em",rel:"noreferrer",target:"_blank",className:"twitter",children:Object(d.jsx)("img",{src:"https://img.icons8.com/material-two-tone/24/000000/stack-of-tweets.png",alt:"Twitter Icon"})}),Object(d.jsx)(l.a.p,{className:"contact-email",whileHover:{scale:1.1},children:Object(d.jsx)("a",{href:"mailto:samuel.sweigart@gmail.com",children:"samuel.sweigart@gmail.com"})})]})}),N=function(){return Object(d.jsxs)(l.a.div,{className:"contact",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.25,duration:1}},exit:{x:"100vw",transition:{ease:"easeOut",duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:"contact-card-body",children:Object(d.jsx)("section",{className:"contact-section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{className:"title",children:"Contact Me"}),Object(d.jsx)("p",{children:"I would love your feedback! Please contact me with suggestions or work opportunities. Thank you!"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{id:"contact-form",method:"POST",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("input",{placeholder:"Name",id:"name",type:"text",className:"form-control"})}),Object(d.jsx)("div",{className:"col-md-6",children:Object(d.jsx)("input",{placeholder:"Your Email",id:"email",type:"email",className:"form-control","aria-describedby":"emailHelp",required:!0})})]})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{placeholder:"Subject",id:"subject",type:"text",className:"form-control"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("textarea",{placeholder:"Message",id:"message",className:"form-control",rows:"1"})}),Object(d.jsx)("button",{type:"submit",className:"submit",children:"Submit"})]}),Object(d.jsx)(k,{})]})})})})})})]})},S=i(4),w=(i(54),function(){return Object(d.jsxs)(l.a.section,{className:"introContainer",children:[Object(d.jsx)(l.a.h1,{className:"hi",initial:{x:-1e3,opacity:0},animate:{x:0,opacity:1},transition:{delay:.15,duration:1.35},children:"Hi,"}),Object(d.jsx)(l.a.h1,{className:"introName",initial:{x:1e3,opacity:0},animate:{x:0,opacity:1},transition:{delay:.15,duration:1.55},children:"I'm Sam"})]})}),T=i.p+"static/media/moolah-ss.99fca3d6.png",P=i.p+"static/media/workout-sessions.77b4271b.png",M=i.p+"static/media/spend-app-ss.466a50a9.png",I=i.p+"static/media/team-profile-builder.12888974.png",L=i.p+"static/media/bucket-list-ss.aa626f7b.png",C=i.p+"static/media/project-api.9e78b1c0.png",B=function(){var e=Object(S.f)(),t=Object(a.useState)(!1),i=Object(o.a)(t,2),c=i[0],n=i[1],s=[{title:"Workout Sessions",description:"is a Full Stack application that allows the user to enter data from their workouts and keep track of each session. Allowing them to see growth and progress through visual representation.",tech:["JavaScript","HTML","CSS","BootStrap","API"],path:P,url:"https://pacific-lowlands-32048.herokuapp.com/?id=6151e3ea6f6df100157c12f5",repo:"https://github.com/gamgee-em/Workout-Sessions",alt:"Workout Sessions screenshot",id:1},{title:"Spend App",description:"is a Full stack application that allows the user to track spending on and offline.",tech:["JavaScript","HTML","CSS","PWA","MongoDB","Mongoose","Express JS"],path:M,url:"https://thawing-tundra-12672.herokuapp.com/",repo:"https://github.com/gamgee-em/Spend-App",alt:"Workout Sessions screenshot",id:2},{title:"MooLah",description:"is a Full Stack application that allows the user to enter data from their workouts and keep track of each session. Allowing them to see growth and progress through visual representation.",tech:["JavaScript","HTML","CSS","BootStrap","API"],path:T,url:"https://moolah-tip-tracker.herokuapp.com/",repo:"https://github.com/gamgee-em/TipTrackerApp",alt:"MooLah Tip Tracker application screenshot",id:3},{title:"Team Builder",description:"is a CL application that assists the the team manager in creating a professional profiles for their team members.",tech:["JavaScript","HTML","CSS","BootStrap","Inquirer","Node JS","Jest"],path:I,url:"https://github.com/gamgee-em/Team-Profile-Builder",repo:"https://github.com/gamgee-em/Team-Profile-Builder",alt:"Team-Profile-Builder application screenshot",id:4},{title:"Bucket List",description:"is a Full Stack application that allows the user to keep track of their bucketlist and order based on priority.",tech:["JavaScript","HTML","CSS","BootStrap","React JS","Node JS"],path:L,url:"https://gamgee-em.github.io/Bucket-List/",repo:"https://github.com/gamgee-em/Bucket-List",alt:"Bucket List application screenshot",id:5},{title:"Flobi Events",description:"Flobi is an application that allows users to grab hourly weather forecasts and a list of events happening in their area from either a simple city search or allowing their current location to be monitored.",tech:["JavaScript","HTML","CSS","BootStrap","API"],path:C,url:"https://gamgee-em.github.io/Project-API/",repo:"https://github.com/gamgee-em/Project-API",alt:"Flobi Events application screenshot",id:6}],r=Object(a.useState)(s),l=Object(o.a)(r,2),h=l[0],m=l[1];return Object(d.jsxs)("div",{className:"App backgroundImage mainContainer",children:[Object(d.jsx)(j,{}),Object(d.jsx)(x.a,{initial:!1,exitBeforeEnter:!0,children:Object(d.jsxs)(S.c,{location:e,children:[Object(d.jsx)(S.a,{exact:!0,path:["/","/Portfolio-React"],children:Object(d.jsx)(w,{})}),Object(d.jsx)(S.a,{exact:!0,path:"/about",children:Object(d.jsx)(b,{})}),Object(d.jsx)(S.a,{exact:!0,path:"/portfolio",children:Object(d.jsx)(g,{close:function(){n(!1),m(s),console.clear()},open:function(e){var t=s.filter((function(t){return t.id===e}));m(t),n(!0)},modalOpen:c,setModalOpen:n,images:h})}),Object(d.jsx)(S.a,{exact:!0,path:"/resume",children:Object(d.jsx)(v,{})}),Object(d.jsx)(S.a,{exact:!0,path:"/contact",children:Object(d.jsx)(N,{})})]},e.key)}),Object(d.jsx)(p,{})]})},J=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,59)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(B,{})})}),document.getElementById("root")),J()}},[[55,1,2]]]);
//# sourceMappingURL=main.2af3bb84.chunk.js.map