(function(t){function e(e){for(var i,s,c=e[0],u=e[1],o=e[2],l=0,d=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},s={app:0},a={app:0},r=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-60120b2a":"3c90224a"}[t]+".js"}function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-60120b2a":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-60120b2a":"b221c242"}[t]+".css",a=u.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var o=r[c],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===i||l===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],l=o.getAttribute("data-href");if(l===i||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete s[t],p.parentNode.removeChild(p),n(r)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0960":function(t,e,n){},"11e0":function(t,e,n){"use strict";n("fdc6")},"1c0b9":function(t,e,n){},"2b1b":function(t,e,n){"use strict";n("3d0a")},"2f8b":function(t,e,n){},"3d0a":function(t,e,n){},"3d3f":function(t,e,n){"use strict";n("4f29")},4729:function(t,e,n){"use strict";n("ca57")},"4f29":function(t,e,n){},"514d":function(t,e,n){},"54f1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=(n("d3b7"),n("bc3a")),a=n.n(s),r={baseURL:"http://music.kele8.cn"},c=a.a.create(r);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},i["a"].use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.isShowLoading,expression:"$parent.isShowLoading"}],staticClass:"loading"},[n("span",{staticClass:"refresh iconfont icon-luntai_xuanzhuan"})]),t.currentMusic?n("Play",{attrs:{currentMusic:t.currentMusic,playlist:t.playlist,LyricsGroup:t.LyricsGroup,currentIndex:t.currentIndex,PicturePath:t.PicturePath,isShowimg:t.isShowimg},on:{"update:paused":function(e){t.paused=e},"update:music":function(e){t.currentMusic=e.item,t.currentIndex=e.index}}}):t._e(),t.$route.meta.isShowNav?n("HomeNav"):t._e(),n("keep-alive",[n("router-view",{attrs:{currentMusic:t.currentMusic,paused:t.paused},on:{"update:music":function(e){t.currentMusic=e.item,t.currentIndex=e.index},"update:playlist":function(e){t.playlist=e}}})],1)],1)},o=[],l=(n("4de4"),n("d81d"),n("a9e3"),n("ac1f"),n("466d"),n("5319"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"home-nav"}},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),n("li",[n("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),n("li",[n("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])}),d=[],p={},f=p,h=(n("a9bd"),n("2877")),m=Object(h["a"])(f,l,d,!1,null,null,null),g=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play",class:{paused:t.paused}},[n("audio",{ref:"audio",attrs:{src:"https://music.163.com/song/media/outer/url?id="+t.currentMusic.id+".mp3",autoplay:""}}),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__slideInUp","leave-active-class":"animate__animated animate__slideOutDown"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPlayBar,expression:"isShowPlayBar"}],staticClass:"play-bar",on:{click:function(e){t.isShowPlayBar=!1}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.isShowimg,expression:"$parent.isShowimg"}],staticClass:"load"},[n("span",{staticClass:"ref iconfont icon-luntai_xuanzhuan"})]),n("div",{staticClass:"imgd",class:{paused:t.paused}},[n("img",{staticClass:"imgs",attrs:{src:t.PicturePath}})]),n("h5",{staticClass:"name"},[t._v(" "+t._s(t.currentMusic.name)+" "),n("br"),t.currentMusic.ar?n("span",t._l(t.currentMusic.ar,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0):t._e(),t.currentMusic.alg?n("span",t._l(t.currentMusic.song.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0):n("span",t._l(t.currentMusic.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0)]),n("div",{staticClass:"control",on:{click:function(e){return e.stopPropagation(),t.togglePlayState(e)}}},[n("canvas",{ref:"circle",attrs:{width:"50",height:"50"}}),t.paused?n("span",{staticClass:"iconfont icon-bofang"}):n("span",{staticClass:"iconfont icon-zantingtingzhi"})])])]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.isShowPlayBar?t._e():n("div",{staticClass:"play-full"},[n("PlayFullHeader",{attrs:{currentMusic:t.currentMusic},on:{"show-play-bar":function(e){t.isShowPlayBar=!0}}}),[t.isShowLyric?n("PlayFullLyric",{attrs:{currentMusic:t.currentMusic,LyricsGroup:t.LyricsGroup,audio:this.$refs.audio,currentTime:t.currentTime},on:{"toggle-show-lyric":function(e){t.isShowLyric=!t.isShowLyric}}}):n("PlayFullChart",{attrs:{currentMusic:t.currentMusic,paused:t.paused,PicturePath:t.PicturePath},on:{"toggle-show-lyric":function(e){t.isShowLyric=!t.isShowLyric}}})],n("PlayFullFooter",{attrs:{currentTime:t.currentTime,duration:t.duration,paused:t.paused,playNext:t.playNext,PlayPrevious:t.PlayPrevious,togglePlayState:t.togglePlayState},on:{"update:currentTime":function(e){t.$refs.audio.currentTime=e}}})],2)])],1)},v=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"return",on:{click:function(e){return t.$emit("show-play-bar")}}},[n("span",{staticClass:"iconfont icon-fanhui"}),n("span",{staticClass:"goback"},[t._v("返回")]),n("h5",{staticClass:"name"},[t._v(" "+t._s(t.currentMusic.name)+" —— "),t.currentMusic.ar?n("span",t._l(t.currentMusic.ar,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0):t._e(),t.currentMusic.alg?n("span",t._l(t.currentMusic.song.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0):n("span",t._l(t.currentMusic.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0)])])},C=[],x={props:["currentMusic"]},b=x,w=(n("c542"),Object(h["a"])(b,_,C,!1,null,null,null)),P=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart",class:{paused:t.paused},on:{click:function(e){return t.$emit("toggle-show-lyric")}}},[n("img",{staticClass:"imgd",attrs:{src:t.PicturePath}})])},$=[],L={props:["currentMusic","paused","PicturePath"]},k=L,M=(n("2b1b"),Object(h["a"])(k,S,$,!1,null,null,null)),I=M.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playly"},[n("div",{staticClass:"toggle",on:{click:function(e){return t.$emit("toggle-show-lyric")}}},[n("ul",{ref:"lyric",staticClass:"lyric",on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},t._l(t.LyricsGroup,(function(e,i){return n("li",{key:i},[t._v(" "+t._s(e.text)+" ")])})),0)]),n("div",{staticClass:"colors"},[n("div",{staticClass:"red",on:{click:function(e){t.LyricsColor="red"}}}),n("div",{staticClass:"blue",on:{click:function(e){t.LyricsColor="blue"}}}),n("div",{staticClass:"yellow",on:{click:function(e){t.LyricsColor="yellow"}}})])])},j=[],T=(n("c740"),n("2909")),O={props:["currentTime","audio","currentMusic","LyricsGroup"],data:function(){return{str:null,arrLyric:[],scrollY:0,touching:!1,LyricsColor:"red"}},mounted:function(){this.str=this.LyricsGroup},updated:function(){},watch:{LyricsGroup:function(t){this.str=t},scrollY:function(t){var e=this.$refs.lyric,n=this.currentTime;this.i=this.str.findIndex((function(t){return t.time>n})),e.style.marginTop=-30*(this.i-1+t)+250+"px";for(var i=e.querySelectorAll("li"),s=0;s<i.length;s++)i[s].style.color="white";i[this.i-1+t]&&(i[this.i-1+t].style.color=this.LyricsColor)},currentTime:function(){var t=this.$refs.lyric;if(t){this.str=this.LyricsGroup;var e=Object(T["a"])(this.str),n=this;this.audio.ontimeupdate=function(){if(!n.touching){var i=this.currentTime,s=e.findIndex((function(t){return t.time>i}));t.style.marginTop=-30*(s-1)+250+"px";for(var a=t.querySelectorAll("li"),r=0;r<a.length;r++)a[r].style.color=" white";a[s-1]&&(a[s-1].style.color=n.LyricsColor)}}}}},methods:{touchstart:function(t){this.touching=!0,this.y=t.touches[0].clientY},touchmove:function(t){this.scrollY=Math.floor((this.y-t.touches[0].clientY)/30),console.log(this.scrollY)},touchend:function(){this.touching=!1;var t=this.LyricsGroup[this.i-1+this.scrollY].time;this.audio.currentTime=t}}},N=O,G=(n("a2ca"),Object(h["a"])(N,E,j,!1,null,null,null)),B=G.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play-full-footer"},[n("div",{staticClass:"progress"},[n("input",{staticClass:"inp",attrs:{type:"range",min:"0",max:t.duration,step:"1"},domProps:{value:t.currentTime},on:{input:t.getValue}}),n("span",{style:{width:t.currentTime/t.duration*100+"%"}})]),n("div",{staticClass:"funct"},[n("span",{staticClass:"iconfont icon-shangyishou1",on:{click:t.PlayPrevious}}),n("span",{on:{click:t.togglePlayState}},[t.paused?n("span",{staticClass:"iconfont icon-bofang"}):n("span",{staticClass:"iconfont icon-zantingtingzhi"})]),n("span",{staticClass:"iconfont icon-xiayishou",on:{click:function(e){return e.stopPropagation(),t.playNext(e)}}})])])},H=[],z={props:["currentTime","duration","paused","playNext","PlayPrevious","togglePlayState"],data:function(){return{}},methods:{getValue:function(t){this.$emit("update:currentTime",t.target.value)}}},R=z,A=(n("11e0"),Object(h["a"])(R,F,H,!1,null,null,null)),q=A.exports,D={props:["currentMusic","item","playlist","currentIndex","LyricsGroup","PicturePath","isShowimg"],components:{PlayFullHeader:P,PlayFullChart:I,PlayFullLyric:B,PlayFullFooter:q},data:function(){return{paused:null,duration:0,currentTime:0,isShowLyric:!1,isShowPlayBar:!0,Pic:""}},mounted:function(){var t=this,e=this.$refs.audio;e.addEventListener("pause",(function(){t.paused=!0})),e.addEventListener("play",(function(){t.paused=!1})),e.addEventListener("durationchange",(function(){t.duration=e.duration})),e.addEventListener("paused",(function(){t.paused=e.paused})),e.addEventListener("timeupdate",(function(){t.currentTime=e.currentTime,t.drawCircle(t.currentTime,t.duration)})),e.addEventListener("ended",(function(){t.playNext()}))},methods:{drawCircle:function(t,e){var n=this.$refs.circle,i=n.getContext("2d");i.clearRect(0,0,50,50),i.beginPath(),i.strokeStyle="rgba(0,0,0,0.3)",i.arc(25,25,20,0,2*Math.PI,!1),i.stroke(),i.closePath(),i.beginPath(),i.strokeStyle="rgba(255, 0, 0, 0.6)",i.arc(25,25,19,-.5*Math.PI,Math.PI*(t/e*2-.5),!1),i.stroke(),i.closePath()},togglePlayState:function(){var t=this.$refs.audio;this.paused?t.play():t.pause()},calculateNext:function(){var t;return t=this.currentIndex<this.playlist.length-1?this.currentIndex+1:0,t},playNext:function(){var t=this.calculateNext();this.$emit("update:music",{item:this.playlist[t],index:t})},CalculateLast:function(){var t;return t=this.currentIndex>0?this.currentIndex-1:this.playlist.length-1,t},PlayPrevious:function(){var t=this.CalculateLast();this.$emit("update:music",{item:this.playlist[t],index:t})}},watch:{paused:function(t){this.$emit("update:paused",t)}}},U=D,Y=(n("eabe"),Object(h["a"])(U,y,v,!1,null,"4a37d84f",null)),J=Y.exports,V={components:{HomeNav:g,Play:J},data:function(){return{currentMusic:null,paused:null,playlist:[],currentIndex:0,LyricsGroup:[],PicturePath:"",isShowimg:!1}},watch:{currentMusic:function(){var t=this;this.axios.get("/lyric?id="+this.currentMusic.id).then((function(e){t.LyricsGroup=t.paresLyric(e.data.lrc.lyric)})),this.$root.isShowimg=!0,this.axios.get("/song/detail?ids="+this.currentMusic.id).then((function(e){t.PicturePath=e.data.songs[0].al.picUrl,t.$root.isShowimg=!0}))}},methods:{paresLyric:function(t){var e=/\[\d{2}:\d{2}\.\d{0,3}\]/gi,n=t.split("\n").filter((function(t){return t})).map((function(t){var n=t.match(e)[0].replace(/(\[|\])/gi,""),i=n.split(":");n=60*Number(i[0])+Number(i[1]);var s=t.replace(e,"");return{time:n,text:s}}));return n}}},X=V,K=(n("7c55"),Object(h["a"])(X,u,o,!1,null,null,null)),Q=K.exports,W=n("8c4f"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("SearchInput",{attrs:{currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)}}})],1)},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("SearchList",{attrs:{currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)}}})],1)},nt=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sea"},[n("div",{staticClass:"sou"},[n("div",{staticClass:"inp"},[n("span",{staticClass:"iconfont icon-fangdajing"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.something,expression:"something"}],staticClass:"text",attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.something},on:{input:[function(e){e.target.composing||(t.something=e.target.value)},function(e){t.inputing=!0}],keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.inputing=!1}}}),t.something.length?n("span",{staticClass:"inpde",on:{click:function(e){t.something=""}}},[t._v("X")]):t._e()])]),t.inputing.length||t.inputing||t.something?t._e():n("div",[n("ul",{staticClass:"hottitl"},[n("li",{staticClass:"hotso"},[t._v("热门搜索")]),t._l(t.Htadata,(function(e,i){return n("li",{key:i,staticClass:"titl",on:{click:function(n){t.something=e.first,t.record()}}},[n("span",[t._v(t._s(e.first))])])}))],2),n("ul",t._l(t.SearchEecords,(function(e,i){return n("li",{key:i,staticClass:"searchee"},[n("span",{staticClass:"record"}),n("span",{staticClass:"spanit",on:{click:function(n){t.something=e}}},[t._v(t._s(e))]),n("span",{staticClass:"delete",on:{click:function(e){return t.dele(i)}}},[t._v("X")])])})),0)]),t.inputing&&t.suggests.length?n("ul",{staticClass:"list"},[n("li",{staticClass:"suo"},[t._v("搜索“"+t._s(t.something)+"”")]),t._l(t.suggests,(function(e,i){return n("li",{key:i,on:{click:function(n){t.something=e.keyword,t.inputing=!1,t.record()}}},[n("span",{staticClass:"iconfont icon-fangdajing"}),t._v(t._s(e.keyword)+" ")])}))],2):t._e(),!t.inputing&&t.something?n("ul",t._l(t.MatchingSearch,(function(e,i){return n("SongItem",{key:e.id,attrs:{item:e,index:i,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",t.MatchingSearch)}}})})),1):t._e()])},st=[],at=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"song-item",on:{click:function(e){t.$emit("update:music",{item:t.item,index:t.index}),t.$emit("update:playlist")}}},[n("div",{staticClass:"info"},[n("h5",[t._v(t._s(t.item.name))]),t.item.alg?n("p",{staticStyle:{"font-size":"13px"}},t._l(t.item.song.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0):n("p",{staticStyle:{"font-size":"13px"}},t._l(t.item.artists,(function(e,i){return n("span",{key:i},[i?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)})),0)]),n("div",{staticClass:"icon"},[t.currentMusic&&t.currentMusic.id===t.item.id?n("span",{staticClass:"playing",class:{paused:t.paused}},[n("i"),n("i"),n("i")]):n("span",{staticClass:"iconfont icon-music-play backloco"})])])}),rt=[],ct={props:["item","index","paused","currentMusic"]},ut=ct,ot=(n("87ca"),Object(h["a"])(ut,at,rt,!1,null,null,null)),lt=ot.exports,dt={components:{SongItem:lt},data:function(){return{Htadata:[],something:"",suggests:[],inputing:!1,MatchingSearch:[],SearchEecords:[]}},created:function(){var t=this;this.$root.isShowLoading=!0,this.axios.get("/search/hot").then((function(e){t.Htadata=e.data.result.hots,t.$root.isShowLoading=!1}))},methods:{record:function(){this.SearchEecords.push(this.something)},dele:function(t){this.SearchEecords.splice(t,1)}},watch:{something:function(t){var e=this;this.$root.isShowLoading=!0,t?this.inputing?this.axios.get("/search/suggest?keywords= "+this.something+"&type=mobile").then((function(t){e.suggests=t.data.result.allMatch,e.$root.isShowLoading=!1})):this.axios.get("/search?keywords="+this.something).then((function(t){e.MatchingSearch=t.data.result.songs,e.$root.isShowLoading=!1})):(this.inputing=!1,this.suggests=[],this.$root.isShowLoading=!1)}}},pt=dt,ft=(n("3d3f"),Object(h["a"])(pt,it,st,!1,null,null,null)),ht=ft.exports,mt={components:{SearchList:ht}},gt=mt,yt=(n("a900"),Object(h["a"])(gt,et,nt,!1,null,null,null)),vt=yt.exports,_t={components:{SearchInput:vt}},Ct=_t,xt=Object(h["a"])(Ct,Z,tt,!1,null,null,null),bt=xt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playlist"},[n("div",{staticStyle:{width:"100%",overflow:"hidden"}},[n("div",{staticClass:"x-box",style:{background:"url("+t.coverImg+")"}}),n("div",{staticClass:"imgs"},[n("div",{staticClass:"imgpi"},[n("img",{attrs:{src:t.coverImg}}),n("span",{staticClass:"play-count"},[t._v(t._s(t._f("formatPlayCount")(t.playCount)))])]),n("div",{staticClass:"songs"},[t._v("歌单")]),n("div",{staticClass:"plhead_fr"},[n("h1",[t._v(t._s(t.names))])])])]),n("div",{staticClass:"list"},[t._v("歌曲列表")]),n("ul",{staticClass:"Piaul"},t._l(t.SongListDetails,(function(e,i){return n("HotSong",{key:e.id,attrs:{index:i,item:e,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:PicturePath":function(e){return t.$emit("update:PicturePath",e)},"update:playlist":function(e){return t.$emit("update:playlist",t.SongListDetails)}}})})),1)])},Pt=[],St=(n("a15b"),n("fb6a"),n("b0c0"),n("b680"),n("ac1f4")),$t={components:{HotSong:St["a"]},data:function(){return{SingleGroup:[],SongListDetails:[],coverImg:"",playCount:"",names:""}},filters:{formatPlayCount:function(t){return(t/1e4).toFixed(1)+"万"}},activated:function(){var t=this;this.axios.get("/playlist/detail?id="+this.$route.query.id).then((function(e){t.SingleGroup=e.data,t.coverImg=e.data.playlist.coverImgUrl,t.playCount=e.data.playlist.playCount,t.names=e.data.playlist.name,t.axios.get("/song/detail?ids="+e.data.playlist.trackIds.slice(0,20).map((function(t){return t.id})).join()).then((function(e){t.SongListDetails=e.data.songs})).finally((function(){t.$root.isShowLoading=!1}))})).finally((function(){t.$root.isShowLoading=!0}))}},Lt=$t,kt=(n("a7a3"),Object(h["a"])(Lt,wt,Pt,!1,null,null,null)),Mt=kt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("RecommendPlayList",{attrs:{currentRecommends:t.currentRecommends}},[t._v("推荐歌单")]),n("RecommendNewMusic",{attrs:{newSongs:t.newSongs,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:PicturePath":function(e){return t.$emit("update:PicturePath",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)}}},[t._v("最新音乐")])],1)},Et=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BorderedTitle",[t._t("default")],2),n("ul",{staticClass:"playlist"},t._l(t.currentRecommends,(function(t,e){return n("PlayListItem",{key:e,attrs:{item:t}})})),1)],1)},Tt=[],Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._t("default")],2)},Nt=[],Gt={},Bt=Gt,Ft=(n("6946"),Object(h["a"])(Bt,Ot,Nt,!1,null,"165ab44b",null)),Ht=Ft.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"playlistitem",on:{click:function(e){return t.navigateToPlayList(t.item.id)}}},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.item.picUrl,alt:""}}),n("span",{staticClass:"play-count"},[t._v(t._s(t._f("formatPlayCount")(t.item.playCount)))])]),n("h6",[t._v(t._s(t.item.name))])])},Rt=[],At={props:{item:{type:Object}},filters:{formatPlayCount:function(t){return(t/1e4).toFixed(1)+"万"}},methods:{navigateToPlayList:function(t){this.$router.push({path:"/playlist",query:{id:t}})}}},qt=At,Dt=(n("fa1f"),Object(h["a"])(qt,zt,Rt,!1,null,null,null)),Ut=Dt.exports,Yt={props:{currentRecommends:{type:Array}},components:{BorderedTitle:Ht,PlayListItem:Ut}},Jt=Yt,Vt=(n("f5f4"),Object(h["a"])(Jt,jt,Tt,!1,null,null,null)),Xt=Vt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("BorderedTitle",[t._t("default")],2),n("ul",{staticClass:"uli"},t._l(t.newSongs,(function(e,i){return n("SongItem",{key:e.id,attrs:{item:e,index:i,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",t.newSongs)}}})})),1)],1)},Qt=[],Wt={props:{newSongs:{type:Array}},components:{BorderedTitle:Ht,SongItem:lt}},Zt=Wt,te=(n("7b24"),Object(h["a"])(Zt,Kt,Qt,!1,null,null,null)),ee=te.exports,ne={components:{RecommendPlayList:Xt,RecommendNewMusic:ee},data:function(){return{recommends:[],newSongs:[],recommendsIndex:0,count:0}},computed:{currentRecommends:function(){return this.recommends.slice(6*this.recommendsIndex,6*(this.recommendsIndex+1))}},created:function(){var t=this;this.$root.isShowLoading=!0,this.axios.get("/personalized").then((function(e){t.recommends=e.data.result})).finally((function(){t.count=t.count+1})),this.axios.get("/personalized/newsong").then((function(e){t.newSongs=e.data.result})).finally((function(){t.count=t.count+1}))},watch:{count:function(t){t>=2&&(this.$root.isShowLoading=!1)}},activated:function(){this.recommendsIndex=this.recommendsIndex>=4?0:this.recommendsIndex+1}},ie=ne,se=Object(h["a"])(ie,It,Et,!1,null,null,null),ae=se.exports;i["a"].use(W["a"]);var re=[{path:"/",name:"Recommend",component:ae,meta:{isShowNav:!0}},{path:"/hot",name:"Hot",component:function(){return n.e("chunk-60120b2a").then(n.bind(null,"0b70"))},meta:{isShowNav:!0}},{path:"/search",name:"Search",component:bt,meta:{isShowNav:!0}},{path:"/playlist",name:"PlayList",component:Mt}],ce=new W["a"]({routes:re}),ue=ce;n("cbcd");i["a"].config.productionTip=!1,new i["a"]({router:ue,render:function(t){return t(Q)},data:function(){return{isShowLoading:!1}}}).$mount("#app")},6946:function(t,e,n){"use strict";n("c5bf")},"7a93":function(t,e,n){},"7b24":function(t,e,n){"use strict";n("af0f")},"7c55":function(t,e,n){"use strict";n("7a93")},"87ca":function(t,e,n){"use strict";n("0960")},"9b58":function(t,e,n){},a1db:function(t,e,n){},a2ca:function(t,e,n){"use strict";n("1c0b9")},a3a2:function(t,e,n){},a7a3:function(t,e,n){"use strict";n("9b58")},a900:function(t,e,n){"use strict";n("d507")},a9bd:function(t,e,n){"use strict";n("a3a2")},ac1f4:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"Hotli",on:{click:function(e){t.$emit("update:music",{item:t.item,index:t.index}),t.$emit("update:playlist"),t.$emit("update:PicturePath",t.item.al.picUrl)}}},[n("span",{staticClass:"sort",style:{color:t.index>2?"":"red"}},[t._v(t._s(t.index>8?t.index+1:"0"+(t.index+1)))]),n("span",{staticClass:"SongTitle"},[t._v(t._s(t.item.name))]),n("h6",[t._v(t._s(t.item.ar[0].name)+"--"+t._s(t.item.al.name))]),n("span",{staticClass:"Icon"},[t.currentMusic&&t.currentMusic.id===t.item.id&&!t.paused?n("span",{staticClass:"iconfont icon-zantingtingzhi"}):n("span",{staticClass:"iconfont icon-music-play"})])])},s=[],a={props:["HotSongTitle","paused","item","index","currentMusic"],methods:{}},r=a,c=(n("4729"),n("2877")),u=Object(c["a"])(r,i,s,!1,null,null,null);e["a"]=u.exports},af0f:function(t,e,n){},c542:function(t,e,n){"use strict";n("514d")},c5bf:function(t,e,n){},ca57:function(t,e,n){},cbcd:function(t,e,n){},d507:function(t,e,n){},eabe:function(t,e,n){"use strict";n("54f1")},f5f4:function(t,e,n){"use strict";n("a1db")},fa1f:function(t,e,n){"use strict";n("2f8b")},fdc6:function(t,e,n){}});
//# sourceMappingURL=app.d52b8ca6.js.map