(function(e){function t(t){for(var n,s,o=t[0],l=t[1],i=t[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,o=1;o<c.length;o++){var l=c[o];0!==a[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var n={},a={app:0},r=[];function s(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=n,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(c,n,function(t){return e[t]}.bind(null,n));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},1716:function(e,t,c){},4590:function(e,t,c){"use strict";c("871a")},"47b6":function(e,t,c){"use strict";c("96bc")},"5afc":function(e,t,c){},"7fba":function(e,t,c){"use strict";c("abff")},"871a":function(e,t,c){},"96bc":function(e,t,c){},abff:function(e,t,c){},b315:function(e,t,c){"use strict";c("5afc")},cd49:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function a(e,t,c,a,r,s){return Object(n["l"])(),Object(n["e"])(n["b"],{name:"change-component",mode:"out-in"},{default:Object(n["u"])(()=>[(Object(n["l"])(),Object(n["e"])(Object(n["r"])(e.state.currentComponent),{steps:e.state.steps,difficulty:e.state.currentLevel,onLevelChosen:e.handleLevelChosen,onReplay:e.replay,onVictory:e.handleVictory},null,8,["steps","difficulty","onLevelChosen","onReplay","onVictory"]))]),_:1})}var r=c("e347"),s=c.n(r);const o=e=>(Object(n["n"])("data-v-96f1f28c"),e=e(),Object(n["m"])(),e),l={"data-test":"home-component"},i=o(()=>Object(n["h"])("header",null,[Object(n["h"])("img",{class:"logo",src:s.a,alt:"vivamemory logo"})],-1));function u(e,t,c,a,r,s){return Object(n["l"])(),Object(n["g"])("div",l,[i,Object(n["h"])("main",null,[Object(n["h"])("button",{class:"btn easy",onClick:t[0]||(t[0]=t=>e.selectLevel("easy"))},"👶 Easy"),Object(n["h"])("button",{class:"btn medium",onClick:t[1]||(t[1]=t=>e.selectLevel("medium"))}," 👦 Normal "),Object(n["h"])("button",{class:"btn hard",onClick:t[2]||(t[2]=t=>e.selectLevel("hard"))},"🤯 Hard")])])}var d=c("5c40"),b=Object(d["l"])({name:"Home",emits:["level-chosen"],setup(e,{emit:t}){function c(e){t("level-chosen",e)}return{selectLevel:c}}}),p=(c("7fba"),c("6b0d")),f=c.n(p);const j=f()(b,[["render",u],["__scopeId","data-v-96f1f28c"]]);var O=j;const v=e=>(Object(n["n"])("data-v-d5616a2e"),e=e(),Object(n["m"])(),e),m={"data-test":"victory-component"},h=v(()=>Object(n["h"])("span",{class:"icon"},"✅",-1)),y=v(()=>Object(n["h"])("h1",{class:"title"},"Congrats! You won!",-1)),g={class:"subtitle"},C=v(()=>Object(n["h"])("footer",null,[Object(n["h"])("img",{class:"logo",src:s.a,alt:"vivamemory logo"})],-1));function k(e,t,c,a,r,s){return Object(n["l"])(),Object(n["g"])("div",m,[Object(n["h"])("header",null,[h,y,Object(n["h"])("p",g,"With "+Object(n["s"])(e.steps)+" "+Object(n["s"])(e.stepsLabel),1)]),Object(n["h"])("main",null,[Object(n["h"])("button",{class:"btn",onClick:t[0]||(t[0]=(...t)=>e.replay&&e.replay(...t))},"Replay")]),C])}var L=c("a1e9"),_=Object(d["l"])({name:"Victory",props:{steps:{type:Number,required:!0}},emits:["replay"],setup(e,{emit:t}){const c=Object(L["c"])(()=>1===e.steps?"step":"steps");function n(){t("replay")}return{stepsLabel:c,replay:n}}});c("47b6");const w=f()(_,[["render",k],["__scopeId","data-v-d5616a2e"]]);var x=w;const M=e=>(Object(n["n"])("data-v-5f698d26"),e=e(),Object(n["m"])(),e),R={class:"level"},S=M(()=>Object(n["h"])("header",null,[Object(n["h"])("img",{class:"logo",src:s.a,alt:"vivamemory logo"})],-1)),z={class:"level-info"},P=M(()=>Object(n["h"])("p",null,"Level:",-1));function V(e,t,c,a,r,s){const o=Object(n["q"])("card");return Object(n["l"])(),Object(n["g"])("div",R,[S,Object(n["h"])("main",null,[Object(n["h"])("div",z,[Object(n["h"])("p",null,Object(n["s"])(e.state.steps)+" "+Object(n["s"])(e.stepsLabel),1),Object(n["h"])("button",{onClick:t[0]||(t[0]=(...t)=>e.randomizeCards&&e.randomizeCards(...t))},"🔄")]),Object(n["i"])(n["c"],{class:Object(n["k"])(["cards-container",{[e.difficulty]:!!e.difficulty}]),tag:"div",name:"cards"},{default:Object(n["u"])(()=>[(Object(n["l"])(!0),Object(n["g"])(n["a"],null,Object(n["p"])(e.state.cards,t=>(Object(n["l"])(),Object(n["e"])(o,{key:t.key,card:t,"as-blank":"blank"===t.key,"data-test":t.key,onFlipCard:e.selectCard},null,8,["card","as-blank","data-test","onFlipCard"]))),128))]),_:1},8,["class"])]),Object(n["h"])("footer",null,[P,Object(n["h"])("div",{class:Object(n["k"])(["current-level-display",{[e.difficulty]:!!e.difficulty}])},Object(n["s"])(e.levelLabel),3)])])}const F=["⏰","⚡","⚽","⛄","⭐","🌚","🌞","🌟","🌵","🌸","🌼","🍉","🍍","🍌","🍒","🍞","🍦","🍬","🍫","🍼","🎃","🎅","🎈","🎉","🎒","🎹","🏀","🏐","🏠","🐁","🐈","🐒","🐊","🐖","🐛","🐜","🐝","🐧","🐷","🐸","🐻","🐿","👻","💚","💙","💜","🔥","😀","😎","🚀","🚗","🚲","🤖","🥕","🥦","🦁","🦋","🧙","🦖","🦄"],H=F.length,B={class:"front"},I={class:"back"},q={key:0,class:"logo",src:s.a,alt:"vivamemory logo"};function T(e,t,c,a,r,s){return Object(n["l"])(),Object(n["g"])("div",{class:Object(n["k"])(["card",{"as-blank":e.asBlank,[e.card.state]:!!e.card.state}]),ref:"cardRef",onClick:t[0]||(t[0]=(...t)=>e.flipCard&&e.flipCard(...t))},[Object(n["h"])("div",B,[Object(n["h"])("p",null,Object(n["s"])(e.card.emoji),1)]),Object(n["h"])("div",I,[e.asBlank?(Object(n["l"])(),Object(n["g"])("img",q)):Object(n["f"])("",!0)])],2)}const E=Object(d["l"])({name:"Card",props:{card:{type:Object,required:!0},asBlank:{type:Boolean,default:!1}},emits:["flip-card"],setup(e,{emit:t}){function c(){e.asBlank||"inactive"!==e.card.state||t("flip-card",e.card)}const n=Object(L["l"])(),a=Object(L["l"])("100px"),r=!!ResizeObserver,s=r?new ResizeObserver((function(e){const t=e[0].contentRect;a.value=(.55*t.width).toFixed(2)+"px"})):null;return Object(d["u"])(()=>{a.value=(.55*n.value.offsetWidth).toFixed(2)+"px",s&&s.observe(n.value)}),Object(d["t"])(()=>{s&&s.unobserve(n.value)}),{flipCard:c,cardRef:n,cardFontSize:a}}}),J=()=>{Object(n["t"])(e=>({"18a94b92":e.cardFontSize}))},N=E.setup;E.setup=N?(e,t)=>(J(),N(e,t)):J;var W=E;c("d72b");const A=f()(W,[["render",T],["__scopeId","data-v-41712ec5"]]);var Y=A,D=Object(d["l"])({name:"Level",props:{difficulty:{type:String,required:!0}},emits:["victory"],components:{Card:Y},setup(e,{emit:t}){const c=Object(L["k"])({cards:[],steps:0,chosenCards:[],correctCards:0}),n=Object(L["c"])(()=>1===c.steps?"step":"steps"),a=Object(L["c"])(()=>"easy"===e.difficulty?"Easy - 4":"medium"===e.difficulty?"Normal - 8":"Hard - 16"),r=Object(L["c"])(()=>"easy"===e.difficulty?2:"medium"===e.difficulty?4:8);function s(){return Math.floor(Math.random()*H)}const o=[];for(let u=0;u<r.value;u++){let e;const t=u%r.value;do{e=s()}while(o.find(t=>t===e));o.push(e),c.cards.push({emoji:F[e],state:"inactive",key:"card-"+(u+t)}),c.cards.push({emoji:F[e],state:"inactive",key:"card-"+(u+t+1)})}function l(){c.chosenCards=[],c.steps=0,c.correctCards=0,c.cards.forEach(e=>{e.state="inactive"});let t=c.cards.length;while(0!=t){const e=Math.floor(Math.random()*t);t--,[c.cards[t],c.cards[e]]=[c.cards[e],c.cards[t]]}if("medium"===e.difficulty){const e=c.cards.findIndex(e=>"blank"===e.key);[c.cards[e],c.cards[4]]=[c.cards[4],c.cards[e]]}}function i(e){if(e.state="active",c.steps++,c.chosenCards.push(e),2===c.chosenCards.length){const[e,t]=c.chosenCards;e.emoji===t.emoji?(e.state="correct",t.state="correct",setTimeout(()=>{c.correctCards++},1e3)):(e.state="incorrect",t.state="incorrect",setTimeout(()=>{e.state="inactive",t.state="inactive"},2e3)),c.chosenCards=[]}}return"medium"===e.difficulty&&c.cards.splice(4,0,{emoji:"",state:"inactive",key:"blank"}),Object(d["J"])(()=>{c.correctCards===r.value&&t("victory",c.steps)}),l(),{state:c,stepsLabel:n,levelLabel:a,randomizeCards:l,selectCard:i}}});c("b315");const G=f()(D,[["render",V],["__scopeId","data-v-5f698d26"]]);var K=G,Q=Object(n["j"])({name:"App",components:{Home:O,Level:K,Victory:x},setup(){const e=Object(n["o"])({currentComponent:"Home",steps:0,currentLevel:"easy"});function t(t){e.currentLevel=t,e.currentComponent="Level"}function c(){e.currentComponent="Home",e.steps=0}function a(t){e.steps=t,e.currentComponent="Victory"}return{state:e,handleLevelChosen:t,replay:c,handleVictory:a}}});c("4590");const U=f()(Q,[["render",a]]);var X=U;Object(n["d"])(X).mount("#app")},d72b:function(e,t,c){"use strict";c("1716")},e347:function(e,t,c){e.exports=c.p+"img/logo.5b8f404a.svg"}});
//# sourceMappingURL=app.237c14cd.js.map