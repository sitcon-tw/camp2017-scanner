(function(t){function e(e){for(var o,a,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)a=s[l],i[a]&&p.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["student"===t.mode?[t.isAndroid?n("p",{staticStyle:{"text-align":"center"}},[t._v("如果使用 Android，請點擊上面三個點 開啟於...")]):t._e(),n("qrcode-reader",{attrs:{enable:!0,noResult:!0,title:"",subTitle:"請掃描點數 QRcode"},on:{OnSuccess:t.OnSuccess}})]:"admin"===t.mode?[n("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.point>=0?"獲得 ":"")+"分數：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.point,expression:"point"}],staticStyle:{"text-align":"center",width:"150px",height:"150px","font-size":"1.6rem"},attrs:{type:"number",max:"500",min:"-500",step:"10",value:"0",list:"defaultNumbers"},domProps:{value:t.point},on:{input:function(e){e.target.composing||(t.point=e.target.value)}}}),t._m(0),n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.description=e.target.multiple?n:n[0]}}},[n("option",[t._v("認真參與活動，"+t._s(t.point>=0?"獲得 ":""))]),n("option",[t._v("勇敢探索攤位，"+t._s(t.point>=0?"獲得 ":""))]),n("option",[t._v("上課表現卓越，"+t._s(t.point>=0?"獲得 ":""))]),n("option",[t._v("無故鬧事，"+t._s(t.point>=0?"獲得 ":""))]),n("option",[t._v("自訂")])])]),"自訂"==t.description?n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.custom,expression:"custom"}],attrs:{type:"text"},domProps:{value:t.custom},on:{input:function(e){e.target.composing||(t.custom=e.target.value)}}}),t._v(t._s(t.point>=0?"獲得 ":"")+"\n    ")]):t._e(),n("button",{attrs:{type:"submit"},on:{click:t.generate}},[t._v("產生")])]:"admin-finish"===t.mode?[n("canvas",{attrs:{id:"qrcode",height:"240",width:"240"}}),n("p",[n("button",{on:{click:t.back}},[t._v("返回")])])]:"god"===t.mode?[n("div",{staticStyle:{margin:"0 auto"}},[n("div",{staticStyle:{display:"inline-block","margin-right":"24px"}},[n("p",[t._v("解題狀況")]),n("table",t._l(t.problems,function(e,o){return n("tr",{key:"pro"+o},[n("td",[t._v(t._s("第"+(o+1)+"題"))]),n("td"),n("td",[t._v(t._s(e.solved_team.length))])])}),0)]),n("div",{staticStyle:{display:"inline-block","margin-left":"24px"}},[n("p",[t._v("各組解題狀況")]),n("table",{staticStyle:{margin:"0 auto"}},t._l(t.groupProblem,function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(o))]),n("td"),n("td",[t._v(t._s(e))])])}),0)])])]:[n("table",{staticStyle:{margin:"0 auto"}},t._l(t.status,function(e){return n("tr",{key:e["group_id"]},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.coin))])])}),0)]],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("datalist",{attrs:{id:"defaultNumbers"}},[n("option",{attrs:{value:"100"}}),n("option",{attrs:{value:"50"}}),n("option",{attrs:{value:"20"}}),n("option",{attrs:{value:"10"}}),n("option",{attrs:{value:"-10"}}),n("option",{attrs:{value:"-20"}}),n("option",{attrs:{value:"-50"}}),n("option",{attrs:{value:"-100"}})])}],a=(n("7f7f"),n("386d"),n("28a5"),n("4917"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"QrcodeReader"}},[n("center",[""!=t.title?n("h2",{staticClass:"ma-0"},[t._v(t._s(t.title))]):t._e(),""!==t.subTitle?n("p",{attrs:{role:"subTitle"}},[t._v(t._s(t.subTitle))]):t._e(),t.webrtc?n("div",{attrs:{id:"camsource"}}):n("div",{attrs:{id:"uploadField"}},[n("label",{attrs:{id:"uploadButton",for:"upload"}}),n("input",{attrs:{type:"file",id:"upload"},on:{change:t.uploadChange}})]),t.noResult?t._e():n("h6",{staticClass:"ma-0"},[t._v(t._s(t.result))])])],1)}),s=[],u={name:"QrcodeReader",props:{title:{type:String,default:""},subTitle:{type:String,default:""},enable:Boolean,noResult:Boolean,width:{type:String,default:"320px"},height:{type:String,default:"240px"}},data:function(){return{result:"Loading...",cam:null,webrtc:!0,scanner:null}},watch:{enable:function(t){var e=this;e.scanner.setStopped(!t)}},mounted:function(){var t=this;window.w69b.qr.decoding.setWorkerUrl("static/barcode.js/w69b.qrcode.decodeworker.min.js"),navigator.mediaDevices&&!window.navigator.userAgent.match(/iPhone|iPad|iPod/i)?(t.webrtc=!0,t.scanner=new window.w69b.qr.ui.ContinuousScanner,t.scanner.setDecodedCallback(function(e){t.onSuccess(e)}),t.scanner.render(document.getElementById("camsource"))):(t.webrtc=!1,console.log("Sorry, native web camera streaming (getUserMedia) is not supported by this browser..."))},beforeDestroy:function(){if(navigator.mediaDevices){var t=this;t.scanner.setStopped(!0),t.scanner.dispose()}},methods:{onSuccess:function(t){this.result=t,this.$emit("OnSuccess",t)},uploadChange:function(){var t=this,e=document.getElementById("upload").files[0],n=/^image\//;n.test(e.type)||console.log("File type not valid");var o=new FileReader;o.addEventListener("load",function(){var e=new Image;e.onload=function(n){var o=new window.w69b.qr.decoding.Decoder;o.decode(e).then(function(e){t.onSuccess(e.text)},function(){t.$emit("OnError","no qr code found")})},e.src=this.result}.bind(o),!1),o.readAsDataURL(e)}}},c=u,d=(n("e57e"),n("2877")),l=Object(d["a"])(c,a,s,!1,null,null,null),p=l.exports,m=n("bc3a"),f=n.n(m),v=n("4328"),h=n.n(v),g={name:"app",components:{QrcodeReader:p},data:function(){return{mode:"student",isAndroid:!1,api:null,point:0,description:"",custom:"",coupon:"",status:[],lock:!1,group:[{groupId:-0xe9183ef594,name:"第一小隊"},{groupId:-0xe9186e2afd,name:"第二小隊"},{groupId:-0xe916c76e62,name:"第三小隊"},{groupId:-0xe9162e463a,name:"第四小隊"},{groupId:-0xe916d5edb1,name:"第五小隊"},{groupId:-0xe91537c959,name:"第六小隊"},{groupId:-0xe916d9bd46,name:"第七小隊"},{groupId:-0xe9170ab0f5,name:"第八小隊"},{groupId:-0xe917ee7afa,name:"開發小隊"}],problems:[]}},beforeMount:function(){var t={baseURL:"https://camp-api.sitcon.party/",timeout:3e3};this.api=f.a.create(t),0!==(this.parameters().token||"").length?this.mode="admin":0!==(this.parameters().id||"").length?(this.mode="student",this.isAndroid=navigator.userAgent.match(/Android/i)):0!==(this.parameters().god||"").length?(this.mode="god",window.setInterval(function(){this.getProblem()}.bind(this),1e3)):(this.mode="dashboard",window.setInterval(function(){this.getStatus()}.bind(this),1e3))},computed:{desc:function(){return"自訂"!==this.description?this.description:this.custom+(this.point>=0?"獲得 ":" ")},groupProblem:function(){for(var t={},e=0;e<this.problems.length;e++)for(var n=0;n<this.problems[e]["solved_team"].length;n++)void 0===t[this.id2GroupName(this.problems[e]["solved_team"][n])]?t[this.id2GroupName(this.problems[e]["solved_team"][n])]=1:t[this.id2GroupName(this.problems[e]["solved_team"][n])]++;return t}},methods:{OnSuccess:function(t){if(!this.lock){var e=this;0!==(this.parameters().id||"").length&&(this.lock=!0,this.api.post("consume",h.a.stringify({group_id:this.parameters().id,coupon:t})).then(function(t){alert(t.data.status),e.lock=!1}).catch(function(t){console.log(t.message),e.lock=!1}))}},parameters:function(){return window.location.search.split("?").pop().split("&").map(function(t){var e=t.split("="),n={};return n[e.shift()]=e.join("="),n}).reduce(function(t,e){var n=t;for(var o in e)n[o]=e[o];return n})},generate:function(){var t=this;0!==(this.parameters().token||"").length&&this.api.post("generate",h.a.stringify({token:this.parameters().token,coin:this.point,description:this.desc})).then(function(e){t.mode="admin-finish",t.coupon=e.data.coupon,t.$nextTick(function(){var e=document.getElementById("qrcode");window.w69b.qr.encoding.drawOnCanvas(t.coupon,e)})})},back:function(){this.mode="admin"},getStatus:function(){var t=this;this.api.get("status").then(function(e){t.status=e.data})},getProblem:function(){var t=this;this.api.get("keyword_status").then(function(e){t.problems=e.data})},id2GroupName:function(t){var e=this.group.filter(function(e){return e.groupId===t});return 0!==e.length?e[0].name:""}}},b=g,_=(n("034f"),Object(d["a"])(b,i,r,!1,null,null,null)),w=_.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},"8e94":function(t,e,n){},e57e:function(t,e,n){"use strict";var o=n("8e94"),i=n.n(o);i.a}});
//# sourceMappingURL=app.bff9c40c.js.map