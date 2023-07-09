(function(){"use strict";var e={1142:function(e,n,t){var o=t(9242),s=t(3396);function a(e,n,t,o,a,r){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}var r={name:"App",created(){this.$store.dispatch("loadInfo")}},i=t(89);const l=(0,i.Z)(r,[["render",a]]);var c=l,u=t(2483);const m={class:"home"};function d(e,n,t,o,a,r){const i=(0,s.up)("NavBar"),l=(0,s.up)("LandingView"),c=(0,s.up)("AboutView"),u=(0,s.up)("RobotsView"),d=(0,s.up)("SponsorsView"),p=(0,s.up)("TeamsPreview"),v=(0,s.up)("ContactView"),f=(0,s.up)("FooterTile");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s.Wm)(i),(0,s.Wm)(l),(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(d),(0,s.Wm)(p),(0,s.Wm)(v),(0,s.Wm)(f)])}var p=t(7139),v=t.p+"img/logo.15820c76.png";const f=e=>((0,s.dD)("data-v-151182f4"),e=e(),(0,s.Cn)(),e),g={id:"landing"},w={class:"cover"},b={class:"cover-wrapper"},h={class:"left"},_=f((()=>(0,s._)("img",{src:v,alt:"",class:"logo"},null,-1))),k={class:"right"},y=f((()=>(0,s._)("div",{class:"robosub"},"RoboSub",-1)));function T(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("section",g,[(0,s._)("div",w,[(0,s._)("span",b,[(0,s._)("span",h,(0,p.zw)(a.leftText),1),_,(0,s._)("span",k,(0,p.zw)(a.rightText),1)]),y])])}var x={name:"LandingView",data(){return{leftText:"Cycl",rightText:"ne"}}};const D=(0,i.Z)(x,[["render",T],["__scopeId","data-v-151182f4"]]);var O=D;const C={class:"wrapper"},V={id:"about"},j={class:"about-wrapper"},M=(0,s._)("h2",null,"Who Are We?",-1),S={class:"about-us"},W={class:"section"},Z=["src"],I={class:"mission-wrapper"},R=(0,s._)("h3",null,"Our Mission",-1),U={class:"mission"};function z(e,n,t,o,a,r){const i=(0,s.up)("MovingDivider");return(0,s.wg)(),(0,s.iD)("div",C,[(0,s.Wm)(i,{id:"waves",index:0}),(0,s._)("section",V,[(0,s._)("div",j,[M,(0,s._)("p",S,(0,p.zw)(e.$store.state.info["about"]),1)]),(0,s._)("div",W,[(0,s._)("iframe",{src:e.$store.state.info["introVideoURL"],title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","data-cookieconsent":"marketing",allowfullscreen:""},null,8,Z),(0,s._)("div",I,[R,(0,s._)("p",U,(0,p.zw)(e.$store.state.info["mission"]),1)])])]),(0,s.Wm)(i,{bottom:!0,index:3})])}const B=(0,s._)("defs",null,[(0,s._)("path",{id:"gentle-wave",d:"M-160 44c30 0 \r\n                58-18 88-18s\r\n                58 18 88 18 \r\n                58-18 88-18 \r\n                58 18 88 18\r\n                v44h-352z"})],-1),$={key:0,class:"one"},F=(0,s._)("use",{"xlink:href":"#gentle-wave",x:"50",y:"0"},null,-1),A=[F],E={key:1,class:"two"},L=(0,s._)("use",{"xlink:href":"#gentle-wave",x:"50",y:"3"},null,-1),N=[L],P={key:2,class:"three"},q=(0,s._)("use",{"xlink:href":"#gentle-wave",x:"50",y:"5"},null,-1),H=[q];function J(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("svg",{class:(0,p.C_)(["wave",{bottom:t.bottom}]),xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28 ",preserveAspectRatio:"none"},[B,0==t.index||1==t.index?((0,s.wg)(),(0,s.iD)("g",$,A)):(0,s.kq)("",!0),0==t.index||2==t.index?((0,s.wg)(),(0,s.iD)("g",E,N)):(0,s.kq)("",!0),0==t.index||3==t.index?((0,s.wg)(),(0,s.iD)("g",P,H)):(0,s.kq)("",!0)],2)}var Y={name:"MovingDivider",props:{index:Number,bottom:Boolean}};const K=(0,i.Z)(Y,[["render",J]]);var Q=K,G={name:"AboutView",components:{MovingDivider:Q}};const X=(0,i.Z)(G,[["render",z]]);var ee=X;const ne={class:"robot-wrapper"},te={id:"robot"},oe=(0,s._)("div",{class:"robot-header"},[(0,s._)("h2",null,"Our Robot")],-1),se={class:"message-wrapper"},ae=(0,s._)("div",{class:"message"}," Our robot is currently under development, stay tuned for updates... ",-1);function re(e,n,t,o,a,r){const i=(0,s.up)("StatusBar"),l=(0,s.up)("MovingDivider");return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s._)("section",te,[oe,(0,s._)("div",se,[ae,(0,s.Wm)(i)])]),(0,s.Wm)(l,{bottom:!0,index:2})])}const ie={class:"status-bar"};function le(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("span",ie)}var ce={name:"StatusBar"};const ue=(0,i.Z)(ce,[["render",le]]);var me=ue,de={name:"RobotsView",components:{MovingDivider:Q,StatusBar:me}};const pe=(0,i.Z)(de,[["render",re]]);var ve=pe;const fe={class:"sponsors-wrapper"},ge=(0,s.uE)('<section id="sponsors"><h2 class="header"> Our Sponsors </h2><div class="sponsors-display"><div class="message"> Be the first to sponsor us! <br><span class="contact"> If you are interested then you can find out how to contact us <a href="#contact">here</a>! </span></div></div></section>',1);function we(e,n,t,o,a,r){const i=(0,s.up)("MovingDivider");return(0,s.wg)(),(0,s.iD)("div",fe,[ge,(0,s.Wm)(i,{bottom:!0,index:1})])}var be={name:"SponsorsView",components:{MovingDivider:Q}};const he=(0,i.Z)(be,[["render",we]]);var _e=he;const ke={id:"teams"},ye=(0,s._)("h2",null," Our Team ",-1),Te={class:"leadership-wrapper"},xe=(0,s._)("h3",null," Leadership ",-1),De={class:"leader-wrapper"},Oe={class:"subteams-wrapper"},Ce=(0,s._)("div",{class:"header-wrapper"},[(0,s._)("h3",null," Subteams "),(0,s._)("span",{class:"learn-more"}," Meet Our Members! ")],-1),Ve={class:"team-wrapper"};function je(e,n,t,o,a,r){const i=(0,s.up)("MemberTile"),l=(0,s.up)("TeamTile");return(0,s.wg)(),(0,s.iD)("section",ke,[ye,(0,s._)("div",Te,[xe,(0,s._)("div",De,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.leadership,((e,n)=>((0,s.wg)(),(0,s.j4)(i,{key:n,member:e},null,8,["member"])))),128))])]),(0,s._)("div",Oe,[Ce,(0,s._)("div",Ve,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.teams,((e,n)=>((0,s.wg)(),(0,s.j4)(l,{key:n,team:e},null,8,["team"])))),128))])])])}t(7658);const Me={class:"member-tile"},Se=["src"],We={class:"member-info"},Ze={class:"name"},Ie={class:"title"};function Re(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("div",Me,[(0,s._)("div",{class:"profile-wrapper",onClick:n[0]||(n[0]=(...n)=>e.email&&e.email(...n))},[(0,s._)("img",{class:"member-image",src:t.member.image},null,8,Se)]),(0,s._)("div",We,[(0,s._)("div",Ze,(0,p.zw)(t.member.name),1),(0,s._)("div",Ie,(0,p.zw)(t.member.position),1)])])}var Ue={name:"MemberTile",props:{member:Object}};const ze=(0,i.Z)(Ue,[["render",Re]]);var Be=ze;const $e={class:"team-tile"},Fe=["src"],Ae={class:"title"};function Ee(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("div",$e,[(0,s._)("img",{class:"team-logo",src:t.team.logo,alt:""},null,8,Fe),(0,s._)("h3",Ae,(0,p.zw)(t.team.title),1)])}var Le={name:"TeamTile",props:{team:Object}};const Ne=(0,i.Z)(Le,[["render",Ee]]);var Pe=Ne,qe={name:"TeamsPreview",components:{MemberTile:Be,TeamTile:Pe},computed:{leadership(){let e=[];const n=this.$store.state.info["leadership"].members,t=this.$store.state.info["members"];for(let o=0;o<n.length;o++){let s=n[o];s in t&&e.push({name:s,...t[s]})}return e},teams(){let e=[];const n=this.$store.state.info["teams"];for(const t in n){let o=n[t];e.push({title:o.title,logo:o.logo})}return e}}};const He=(0,i.Z)(qe,[["render",je]]);var Je=He;const Ye={id:"contact"};function Ke(e,n,t,o,a,r){const i=(0,s.up)("ContactInfo"),l=(0,s.up)("ContactForm");return(0,s.wg)(),(0,s.iD)("section",Ye,[(0,s.Wm)(i),(0,s.Wm)(l)])}const Qe={class:"contact-form"},Ge={class:"form-wrapper"},Xe={class:"form-wrapper"},en={class:"form-wrapper"},nn=(0,s.uE)('<datalist id="subjects"><option value="Join"></option><option value="Sponsor"></option><option value="Inquire"></option><option value="Suggest"></option></datalist>',1),tn={class:"form-wrapper"};function on(e,n,t,a,r,i){return(0,s.wg)(),(0,s.iD)("div",Qe,[(0,s._)("span",Ge,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.name=e),type:"text",placeholder:"Full Name",class:"form name"},null,512),[[o.nr,r.name]])]),(0,s._)("span",Xe,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.email=e),type:"email",placeholder:"Email",class:"form email"},null,512),[[o.nr,r.email]])]),(0,s._)("span",en,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.subject=e),list:"subjects",type:"text",placeholder:"Subject",class:"form subject"},null,512),[[o.nr,r.subject]]),nn]),(0,s._)("span",tn,[(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":n[3]||(n[3]=e=>r.message=e),placeholder:"Message",class:"form message"},null,512),[[o.nr,r.message]])]),(0,s._)("button",{class:"send btn",onClick:n[4]||(n[4]=(...e)=>i.send&&i.send(...e))},"Send Message")])}var sn={name:"ContactForm",data(){return{name:"",email:"",subject:"",message:""}},methods:{send(){}}};const an=(0,i.Z)(sn,[["render",on]]);var rn=an,ln=t.p+"img/QR.d10aea5b.svg";const cn={class:"info-wrapper"},un=(0,s._)("h2",{class:"contact-header"},"Contact Us",-1),mn={class:"email-wrapper"},dn=(0,s._)("h3",{class:"heading"},"Email Us!",-1),pn={class:"detail"},vn={class:"instagram-wrapper"},fn=(0,s._)("h3",{class:"heading"},"Follow Our Instagram!",-1),gn={class:"detail"},wn={class:"discord-wrapper"},bn=(0,s._)("h3",{class:"heading"},"Join Our Discord!",-1),hn=["alt"];function _n(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("div",cn,[un,(0,s._)("div",mn,[dn,(0,s._)("span",pn,(0,p.zw)(e.$store.state.info["email"]),1)]),(0,s._)("div",vn,[fn,(0,s._)("span",gn,(0,p.zw)(e.$store.state.info["instagram"]),1)]),(0,s._)("div",wn,[bn,(0,s._)("img",{src:ln,alt:e.$store.state.info["discord"],class:"qr-code"},null,8,hn)])])}var kn={name:"ContactInfo"};const yn=(0,i.Z)(kn,[["render",_n]]);var Tn=yn,xn={name:"ContactView",components:{ContactInfo:Tn,ContactForm:rn}};const Dn=(0,i.Z)(xn,[["render",Ke]]);var On=Dn;const Cn={class:"nav-wrapper"},Vn=(0,s._)("span",{class:"line top"},null,-1),jn=(0,s._)("span",{class:"line middle"},null,-1),Mn=(0,s._)("span",{class:"line bottom"},null,-1),Sn=[Vn,jn,Mn],Wn=(0,s._)("span",{id:"donate-link",class:"link"},"Donate",-1);function Zn(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("div",Cn,[(0,s._)("div",{class:(0,p.C_)(["hamburger-menu",{open:a.isOpen}]),onClick:n[0]||(n[0]=(...e)=>r.open&&r.open(...e))},Sn,2),(0,s._)("nav",{id:"nav",class:(0,p.C_)({open:a.isOpen})},[(0,s._)("a",{href:"#",id:"logo",class:"link",onClick:n[1]||(n[1]=e=>a.isOpen=!1)},"Cyclone"),(0,s._)("a",{href:"#",id:"home-link",class:"link",onClick:n[2]||(n[2]=e=>a.isOpen=!1)},"Home"),(0,s._)("a",{onClick:n[3]||(n[3]=(...e)=>r.scrollTo&&r.scrollTo(...e)),"data-target":"about",id:"about-link",class:"link"},"About"),(0,s._)("a",{onClick:n[4]||(n[4]=(...e)=>r.scrollTo&&r.scrollTo(...e)),"data-target":"robot",id:"robots-link",class:"link"},"Our Robot"),(0,s._)("a",{onClick:n[5]||(n[5]=(...e)=>r.scrollTo&&r.scrollTo(...e)),"data-target":"sponsors",id:"sponsors-link",class:"link"},"Sponsors"),(0,s._)("a",{onClick:n[6]||(n[6]=(...e)=>r.scrollTo&&r.scrollTo(...e)),"data-target":"teams",id:"teams-link",class:"link"},"Teams"),(0,s._)("a",{onClick:n[7]||(n[7]=(...e)=>r.scrollTo&&r.scrollTo(...e)),"data-target":"contact",id:"contact-link",class:"link"},"Contact Us"),Wn],2)])}var In={name:"NavBar",data(){return{isOpen:!1}},methods:{scrollTo(e){console.log(e.currentTarget.dataset),document.getElementById(e.currentTarget.dataset.target).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),this.isOpen=!1},open(){console.log("Clicked"),this.isOpen=!this.isOpen}}};const Rn=(0,i.Z)(In,[["render",Zn]]);var Un=Rn;const zn={id:"footer"};function Bn(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("footer",zn," © 2023 Cyclone - web design by Logan Reuter ")}var $n={name:"FooterTile"};const Fn=(0,i.Z)($n,[["render",Bn]]);var An=Fn,En={name:"HomeView",components:{NavBar:Un,LandingView:O,AboutView:ee,RobotsView:ve,SponsorsView:_e,TeamsPreview:Je,ContactView:On,FooterTile:An}};const Ln=(0,i.Z)(En,[["render",d]]);var Nn=Ln;const Pn={id:"teams"};function qn(e,n,t,o,a,r){return(0,s.wg)(),(0,s.iD)("div",Pn)}var Hn={name:"TeamsView"};const Jn=(0,i.Z)(Hn,[["render",qn]]);var Yn=Jn;const Kn=[{path:"/",name:"home",component:Nn},{path:"/teams",name:"teams",component:Yn}],Qn=(0,u.p7)({history:(0,u.PO)("/"),routes:Kn});var Gn=Qn,Xn=t(65),et=JSON.parse('{"email":"lareuter@ucdavis.edu","instagram":"@cyclone_robosub","about":"We are a brand new student club at the University of California, Davis with the goal of building a fully autonomous robotic submarine (i.e. RoboSub) to compete in the annual RoboSub compeition.","mission":"Our mission is to build a community where engineering and non-engineering students alike can form connections and learn about the engineering process... and build a super cool robot.","introVideoURL":"","isUnderDevelopment":true,"leadership":{"members":[]},"teams":{"software":{"title":"Software","logo":"","members":[]},"mechanical":{"title":"Mechanical","logo":"","members":[]},"electrical":{"title":"Electrical","logo":"","members":[]}},"members":{}}'),nt=(0,Xn.MT)({state:{info:{}},getters:{info:e=>e.info},mutations:{setInfo(e,n){e.info=n}},actions:{async loadInfo({commit:e}){e("setInfo",et),await fetch("/info.json").then((e=>e.json())).then((n=>{e("setInfo",n)})).catch((e=>{console.log(e)}))}},modules:{}});(0,o.ri)(c).use(nt).use(Gn).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,a){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],a=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(u--,1);var c=s();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,s,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,a,r=o[0],i=o[1],l=o[2],c=0;if(r.some((function(n){return 0!==e[n]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(l)var u=l(t)}for(n&&n(o);c<r.length;c++)a=r[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkcyclone"]=self["webpackChunkcyclone"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1142)}));o=t.O(o)})();
//# sourceMappingURL=app.5e8add8a.js.map