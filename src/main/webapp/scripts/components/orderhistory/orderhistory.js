webpackJsonp([8],{114:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(77),n=r.n(o);t.default={components:{UserBar:n.a},data:function(){return{sort:"create_at",order:"desc",limit:9999,offset:0,lang:"",listArray:[]}},mounted:function(){GaHelper.sendPageView();var e=this;$.get({url:"api/v1/orders/history?lang="+e.lang+"&sort="+e.sort+"&order="+e.order+"&limit="+e.limit+"&offset="+e.offset,contentType:"application/json;charset=utf-8",cache:!1,success:function(t){console.log(t),e.listArray=t.data.list},error:function(e){console.log(e)}})},filters:{currency:function(e){return"string"!=typeof e||e.length<4?e:e.length>4&&e.length<=7?e.slice(0,-3)+","+e.slice(-3):e.length>7?e.slice(0,-6)+","+e.slice(-6,-3)+","+e.slice(-3):void 0}},computed:{},methods:{direct:function(e,t){t&&GaHelper.sendEvent(GaHelper.Usercenter.buyDashboard,t.name),this.$router.push({name:e})},gostatus:function(e,t,r,o){"Succeed"==e?(this.$router.push({name:"order-finish"}),localStorage.setItem("price",t),localStorage.setItem("plan",r)):"Failed"==e?this.$router.push({name:"orderfailed"}):"Unconfirmed"==e?this.$router.push({name:"waitingconfirmationdown"}):"Unpaid"==e&&(this.$router.push({name:"orderInformation"}),localStorage.setItem("order_id",o))}}}},120:function(e,t,r){t=e.exports=r(72)(),t.push([e.i,".order-head[data-v-0084628c]{height:100px;color:#fff;background:#091f27;padding-top:15px}.order-head .item-1180 .order-title[data-v-0084628c]{font-size:40px;font-weight:400}.order-head .item-1180 .order-tips[data-v-0084628c]{margin-top:10px}.item-1180 .item_box[data-v-0084628c]{width:100%;height:60px;line-height:60px;margin-top:15px;text-align:center}.item-1180 .item-title[data-v-0084628c]{font-size:14px;font-weight:700;display:table;width:auto;height:36px;line-height:36px;text-indent:5px;margin:0 auto;background:#10a7d8;color:#fff}.order-nav-bar[data-v-0084628c]{height:70px;margin:0 60px}.logo[data-v-0084628c]{width:70px;height:70px;background-position:0 -546px;float:left}.form-wrapper[data-v-0084628c]{width:80%;margin:0 auto;margin-top:50px}.form-wrapper h2[data-v-0084628c]{width:300px;height:50px;line-height:50px;font-weight:700;font-size:32px;color:#000}.form-wrapper table[data-v-0084628c]{font-size:14px;margin:20px 0;width:80%;table-layout:fixed}.form-wrapper .first_tr[data-v-0084628c]{border-bottom:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none}.form-wrapper .first_tr td[data-v-0084628c]{font-weight:700;color:#000;border:1px solid #fff}.form-wrapper table tr[data-v-0084628c]{height:50px;line-height:50px}.form-wrapper table tr td[data-v-0084628c]{width:16.66%;height:50px;line-height:50px;text-align:center;text-overflow:ellipsis;-moz-text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.form-wrapper .last_td[data-v-0084628c]{cursor:pointer}.huang[data-v-0084628c]{text-overflow:ellipsis;-moz-text-overflow:ellipsis;white-space:nowrap;overflow:hidden}",""])},192:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"component-fade"}},[r("div",{staticClass:"order-wrap"},[r("div",{staticClass:"order-head"},[r("div",{staticClass:"order-nav-bar clearfix"},[r("div",{staticClass:"logo abcdata-icon pointer",on:{click:function(t){e.direct("introduction")}}}),e._v(" "),r("user-bar")],1)]),e._v(" "),r("div",{staticClass:"form-wrapper"},[r("h2",[e._v("Order History")]),e._v(" "),r("table",{attrs:{cellpadding:"1",cellspacing:"1"}},[r("tr",{staticClass:"first_tr",staticStyle:{background:"#E4E4E4"}},[r("td",[e._v("Time")]),e._v(" "),r("td",[e._v("Plan")]),e._v(" "),r("td",[e._v("Company")]),e._v(" "),r("td",[e._v("Deadline")]),e._v(" "),r("td",[e._v("Price")]),e._v(" "),r("td",[e._v("Status")])]),e._v(" "),e._l(e.listArray,function(t){return r("tr",{staticStyle:{"border-bottom":"1px solid #BCBCBC"}},[r("td",{domProps:{textContent:e._s(t.time)}}),e._v(" "),r("td",{domProps:{textContent:e._s(t.plan)}}),e._v(" "),r("td",[r("div",{staticClass:"huang",attrs:{title:t.company.join(",")},domProps:{textContent:e._s(t.company.join(","))}})]),e._v(" "),r("td",{domProps:{textContent:e._s(t.deadline)}}),e._v(" "),r("td",{domProps:{textContent:e._s("￥"+t.price)}}),e._v(" "),r("td",{staticClass:"last_td",domProps:{textContent:e._s(t.status)},on:{click:function(r){e.gostatus(t.status,t.price,t.plan,t.id)}}})])})],2)])])])},staticRenderFns:[]}},229:function(e,t,r){var o=r(120);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(73)("b7cbb700",o,!0)},67:function(e,t,r){r(229);var o=r(10)(r(114),r(192),"data-v-0084628c",null);e.exports=o.exports},72:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},73:function(e,t,r){function o(e){for(var t=0;t<e.length;t++){var r=e[t],o=c[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(a(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{for(var i=[],n=0;n<r.parts.length;n++)i.push(a(r.parts[n]));c[r.id]={id:r.id,refs:1,parts:i}}}}function n(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function a(e){var t,r,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(f)return m;o.parentNode.removeChild(o)}if(g){var a=u++;o=h||(h=n()),t=i.bind(null,o,a,!1),r=i.bind(null,o,a,!0)}else o=n(),t=s.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}function i(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(74),c={},p=d&&(document.head||document.getElementsByTagName("head")[0]),h=null,u=0,f=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){f=r;var n=l(e,t);return o(n),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a],s=c[i.id];s.refs--,r.push(s)}t?(n=l(e,t),o(n)):n=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var v=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},74:function(e,t){e.exports=function(e,t){for(var r=[],o={},n=0;n<t.length;n++){var a=t[n],i=a[0],s=a[1],d=a[2],l=a[3],c={id:e+":"+n,css:s,media:d,sourceMap:l};o[i]?o[i].parts.push(c):r.push(o[i]={id:i,parts:[c]})}return r}},75:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"userBar",props:{showDashboradEnter:!1},data:function(){return{username:"",isShowUserBar:!1,isLogin:!1,userEmail:"",isheadimg:!1,headimgpath:""}},computed:{lang:function(){return this.$store.state.my.lang},manager:function(){return localStorage.manager},plan_name:function(){return localStorage.plan_name},plan_name_zh_CN:function(){return localStorage.plan_name_zh_CN}},mounted:function(){$.cookie().token&&sessionStorage.getItem("uid")&&(this.isLogin=!0,this.$nextTick(this.setUserName)),localStorage.getItem("userheadimg")?(this.isheadimg=!0,this.headimgpath=localStorage.getItem("userheadimg")):sessionStorage.getItem("headimg")&&(this.isheadimg=!0,this.headimgpath=sessionStorage.getItem("headimg")),window.addEventListener("scroll",this.handleScroll,!0)},methods:{direct:function(e){this.$router.push({name:e})},showUserBar:function(){var e=this;e.isShowUserBar?e.isShowUserBar=!1:(e.isShowUserBar=!0,e.$nextTick(function(){$("html").click(function(){e.isShowUserBar&&(e.isShowUserBar=!1,$("html").unbind("click"))})}))},logOut:function(){U.logout()},setUserName:function(){this.username=sessionStorage.getItem("username"),this.userEmail=sessionStorage.getItem("email")},setting:function(){"https:"==document.location.protocol?location.href="https://"+location.hostname+"/view/bind/resetting.html":location.href="http://"+location.host+"/view/bind/resetting.html"},selecthistory:function(){this.$router.push({name:"orderhistory"})},handleScroll:function(){this.isShowUserBar=!1}}}},76:function(e,t,r){t=e.exports=r(72)(),t.push([e.i,'.userBar[data-v-bd656d34]{z-index:1;float:right;height:20px;line-height:20px;text-align:center;cursor:pointer;color:#fff;font-weight:700;margin-top:25px;position:relative;padding-right:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.userBar .headimg[data-v-bd656d34]{width:22px;height:22px;border-radius:50%}.userBar ._headimg[data-v-bd656d34]{width:40px;height:40px;border-radius:50%}.userBar[data-v-bd656d34]:after{content:"";width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid #fff;border-right:4px solid transparent;border-left:4px solid transparent;position:absolute;top:8px;right:0}.userBar .user-bar-dropdown[data-v-bd656d34]{width:285px;background-color:#fff;border:1px solid #e3e6e6;border-radius:3px;position:fixed;top:100px;right:5px;text-align:left;font-weight:400;cursor:default;font-size:14px}.userBar .user-bar-dropdown li[data-v-bd656d34]{text-align:center;height:36px;color:#000;line-height:36px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 12px;cursor:pointer;border-bottom:1px solid #ddd}.userBar .user-bar-dropdown li[data-v-bd656d34]:last-child{border-bottom:none}.userBar .user-bar-dropdown li[data-v-bd656d34]:hover{background-color:#d6dee1}.userInfo[data-v-bd656d34]{height:auto!important;min-height:85px;text-align:center;padding:14px 0;border-bottom:1px solid #ddd;cursor:default;position:relative}.userInfo .user-name[data-v-bd656d34]{font-size:14px;margin-top:6px;margin-bottom:6px;color:#000}.userInfo .user-mail[data-v-bd656d34],.userInfo .user-name[data-v-bd656d34]{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 12px;display:block;box-sizing:border-box}.userInfo .user-mail[data-v-bd656d34]{color:#999;font-size:12px}.userInfo .try_product[data-v-bd656d34]{text-align:center;height:25px;line-height:25px;font-size:10px;width:45px;border:1px solid red;color:red;position:absolute;top:20px;right:30px;display:table}',""])},77:function(e,t,r){r(79);var o=r(10)(r(75),r(78),"data-v-bd656d34",null);e.exports=o.exports},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLogin?r("div",{staticClass:"userBar",on:{click:function(t){t.stopPropagation(),e.showUserBar()}}},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.isheadimg,expression:"isheadimg"}],staticClass:"headimg",attrs:{src:e.headimgpath}}),e._v("\n    "+e._s(e.username)+"\n    "),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.isShowUserBar,expression:"isShowUserBar"}],staticClass:"user-bar-dropdown"},[r("div",{staticClass:"userInfo"},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.isheadimg,expression:"isheadimg"}],staticClass:"_headimg",attrs:{src:e.headimgpath}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isheadimg,expression:"isheadimg"}],staticClass:"try_product",domProps:{textContent:e._s("zh_CN"==e.lang?e.plan_name_zh_CN:e.plan_name)}}),e._v(" "),r("p",{staticClass:"user-name"},[e._v(e._s(e.username))]),e._v(" "),r("span",{staticClass:"user-mail"},[e._v(e._s(e.userEmail))])]),e._v(" "),e.showDashboradEnter?r("li",{on:{click:function(t){e.direct("my")}}},[e._v("Data日报")]):e._e(),e._v(" "),r("li",{domProps:{textContent:e._s("zh_CN"==e.lang?"订单历史":"Order History")},on:{click:function(t){e.selecthistory()}}}),e._v(" "),r("li",{domProps:{textContent:e._s("zh_CN"==e.lang?"账户设置":"Account Setting")},on:{click:function(t){e.setting()}}}),e._v(" "),r("li",{directives:[{name:"show",rawName:"v-show",value:0==e.manager||1==e.manager||2==e.manager,expression:"manager== 0 || manager == 1 || manager == 2"}],domProps:{textContent:e._s("zh_CN"==e.lang?"客户管理":"Client Management")},on:{click:function(t){e.direct("manager")}}}),e._v(" "),r("li",{domProps:{textContent:e._s("zh_CN"==e.lang?"退出登录":"Log out")},on:{click:e.logOut}})])]):e._e()},staticRenderFns:[]}},79:function(e,t,r){var o=r(76);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(73)("bb09d974",o,!0)}});