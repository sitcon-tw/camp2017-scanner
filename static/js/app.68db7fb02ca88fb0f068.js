webpackJsonp([1],{10:function(t,e,n){function i(t){n(33)}var o=n(9)(n(31),n(41),i,null,null);t.exports=o.exports},30:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n(10),s=n.n(o);i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:s.a}})},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(40),o=n.n(i),s=n(12),a=n.n(s),r=n(37),c=n.n(r);e.default={name:"app",components:{QrcodeReader:o.a},data:function(){return{mode:"student",isAndroid:!1,api:null,point:0,description:"",custom:"",coupon:"",status:[],lock:!1}},beforeMount:function(){0!==(this.parameters().token||"").length?this.mode="admin":0!==(this.parameters().id||"").length?(this.mode="student",this.isAndroid=navigator.userAgent.match(/Android/i)):this.mode="dashboard";var t={baseURL:"https://ccip.coscup.org/",timeout:3e3};this.api=a.a.create(t),window.setInterval(this.getStatus(),1e3)},computed:{desc:function(){return""!==this.description?this.description:this.custom+(this.point>=0?"獲得 ":"消耗 ")}},methods:{OnSuccess:function(t){if(!this.lock){var e=this;0!==(this.parameters().id||"").length&&(this.lock=!0,this.api.post("consume",c.a.stringify({group_id:this.parameters().id,coupon:t})).then(function(t){alert(t.data.status),e.lock=!1}).catch(function(t){console.log(t.message),e.lock=!1}))}},parameters:function(){return window.location.search.split("?").pop().split("&").map(function(t){var e=t.split("="),n={};return n[e.shift()]=e.join("="),n}).reduce(function(t,e){var n=t;for(var i in e)n[i]=e[i];return n})},generate:function(){var t=this;0!==(this.parameters().token||"").length&&this.api.post("generate",c.a.stringify({token:this.parameters().token,coin:this.point,description:this.desc})).then(function(e){t.mode="admin-finish",t.coupon=e.data.coupon,t.$nextTick(function(){var e=document.getElementById("qrcode");window.w69b.qr.encoding.drawOnCanvas(t.coupon,e)})})},back:function(){this.mode="admin"},getStatus:function(){var t=this;this.api.get("status").then(function(e){t.status=e.data})}}}},32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"QrcodeReader",props:{title:{type:String,default:""},subTitle:{type:String,default:""},enable:Boolean,noResult:Boolean,width:{type:String,default:"320px"},height:{type:String,default:"240px"}},data:function(){return{result:"Loading...",cam:null,webrtc:!0,scanner:null}},watch:{enable:function(t){this.scanner.setStopped(!t)}},mounted:function(){var t=this;window.w69b.qr.decoding.setWorkerUrl("static/barcode.js/w69b.qrcode.decodeworker.min.js"),navigator.mediaDevices&&!window.navigator.userAgent.match(/iPhone|iPad|iPod/i)?(t.webrtc=!0,t.scanner=new window.w69b.qr.ui.ContinuousScanner,t.scanner.setDecodedCallback(function(e){t.onSuccess(e)}),t.scanner.render(document.getElementById("camsource"))):(t.webrtc=!1,console.log("Sorry, native web camera streaming (getUserMedia) is not supported by this browser..."))},beforeDestroy:function(){if(navigator.mediaDevices){var t=this;t.scanner.setStopped(!0),t.scanner.dispose()}},methods:{onSuccess:function(t){this.result=t,this.$emit("OnSuccess",t)},uploadChange:function(){var t=this,e=document.getElementById("upload").files[0];/^image\//.test(e.type)||console.log("File type not valid");var n=new FileReader;n.addEventListener("load",function(){var e=new Image;e.onload=function(n){(new window.w69b.qr.decoding.Decoder).decode(e).then(function(e){t.onSuccess(e.text)},function(){t.$emit("OnError","no qr code found")})},e.src=this.result}.bind(n),!1),n.readAsDataURL(e)}}}},33:function(t,e){},34:function(t,e){},40:function(t,e,n){function i(t){n(34)}var o=n(9)(n(32),n(42),i,null,null);t.exports=o.exports},41:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["student"===t.mode?[t.isAndroid?n("p",{staticStyle:{"text-align":"center"}},[t._v("如果使用 Android，請點擊上面三個點 開啟於...")]):t._e(),t._v(" "),n("qrcode-reader",{attrs:{enable:!0,noResult:!0,title:"",subTitle:"請掃描點數 QRcode"},on:{OnSuccess:t.OnSuccess}})]:"admin"===t.mode?[n("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.point>=0?"獲得 ":"消耗 ")+"分數：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.point,expression:"point"}],staticStyle:{"text-align":"center",width:"150px",height:"150px","font-size":"1.6rem"},attrs:{type:"number",max:"1000000",min:"-1000000",step:"100",list:"defaultNumbers"},domProps:{value:t.point},on:{input:function(e){e.target.composing||(t.point=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),n("p",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.description=e.target.multiple?n:n[0]}}},[n("option",[t._v("勇敢探索攤位，故"+t._s(t.point>=0?"獲得 ":"消耗 "))]),t._v(" "),n("option",[t._v("因上課表現卓越，"+t._s(t.point>=0?"獲得 ":"消耗 "))]),t._v(" "),n("option",[t._v("無故鬧事，"+t._s(t.point>=0?"獲得 ":"消耗 "))]),t._v(" "),n("option",[t._v("不知道為什麼 我就是想，故"+t._s(t.point>=0?"獲得 ":"消耗 "))]),t._v(" "),n("option",[t._v("活動認真參與，"+t._s(t.point>=0?"獲得 ":"消耗 "))]),t._v(" "),n("option",[t._v("自訂")])])]),t._v(" "),n("p",["自訂"===t.description?n("input",{directives:[{name:"model",rawName:"v-model",value:t.custom,expression:"custom"}],attrs:{type:"text"},domProps:{value:t.custom},on:{input:function(e){e.target.composing||(t.custom=e.target.value)}}}):t._e(),t._v(t._s(t.point>=0?"獲得 ":"消耗 ")+"\n    ")]),t._v(" "),n("button",{attrs:{type:"submit"},on:{click:t.generate}},[t._v("產生")])]:"admin-finish"===t.mode?[n("canvas",{attrs:{id:"qrcode",height:"240",width:"240"}}),t._v(" "),n("p",[n("button",{on:{click:t.back}},[t._v("返回")])])]:[n("table",{staticStyle:{margin:"0 auto"}},t._l(t.status,function(e){return n("tr",{key:e.group_id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.coin))])])}))]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("datalist",{attrs:{id:"defaultNumbers"}},[n("option",{attrs:{value:"10000"}}),t._v(" "),n("option",{attrs:{value:"1000"}}),t._v(" "),n("option",{attrs:{value:"200"}}),t._v(" "),n("option",{attrs:{value:"100"}}),t._v(" "),n("option",{attrs:{value:"-100"}}),t._v(" "),n("option",{attrs:{value:"-200"}}),t._v(" "),n("option",{attrs:{value:"-1000"}}),t._v(" "),n("option",{attrs:{value:"-10000"}})])}]}},42:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"QrcodeReader"}},[n("center",[""!=t.title?n("h2",{staticClass:"ma-0"},[t._v(t._s(t.title))]):t._e(),t._v(" "),""!==t.subTitle?n("p",{attrs:{role:"subTitle"}},[t._v(t._s(t.subTitle))]):t._e(),t._v(" "),t.webrtc?n("div",{attrs:{id:"camsource"}}):n("div",{attrs:{id:"uploadField"}},[n("label",{attrs:{id:"uploadButton",for:"upload"}}),t._v(" "),n("input",{attrs:{type:"file",id:"upload"},on:{change:t.uploadChange}})]),t._v(" "),t.noResult?t._e():n("h6",{staticClass:"ma-0"},[t._v(t._s(t.result))])])],1)},staticRenderFns:[]}}},[30]);
//# sourceMappingURL=app.68db7fb02ca88fb0f068.js.map