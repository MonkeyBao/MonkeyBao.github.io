webpackJsonp([10],{"+skl":function(t,e){},"7XU5":function(t,e,n){t.exports=n.p+"static/img/logo1.4e4275c.png"},"Js+r":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),s=n.n(a),o=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("l/oV")},null,null).exports,u=n("mtWM"),c=n.n(u),l=n("mw3O"),m=n.n(l),v=n("/ocq"),p=n("Supk");o.default.use(v.a);var d,_=[{path:"*",redirect:"/404"},{path:"/",name:"index",meta:{requiresAuth:!0},component:p.default}];(d=n("x1nq")).keys().forEach(function(t){"/page"==t.split(".")[1]?_.push({path:t.split(".")[1]+"/:id",meta:{requiresAuth:!0},component:function(){return d(t)}}):"/login"==t.split(".")[1]?_.push({path:t.split(".")[1],component:function(){return d(t)}}):_.push({path:t.split(".")[1],meta:{requiresAuth:!0},component:function(){return d(t)}})});var f=new v.a({routes:_});f.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?(console.info(sessionStorage.getItem("token")),sessionStorage.getItem("token")?n():n({path:"/login",query:{redirect:t.fullPath}})):n()});var h=f,I=n("Au9i"),g=n.n(I),y=(n("d8/S"),n("BTaQ")),M=n.n(y),k=n("Y4FN"),S=n.n(k),b=(n("+skl"),n("OS1Z")),w=n.n(b),C=(n("pw1w"),n("mvHQ")),x=n.n(C),T={name:"pageTop",data:function(){return{accordion:!0,today_date:"",nowTime:"",weather:"",openItem:[],actionItem:"",userInfo:{}}},mounted:function(){var t=this,e=this.$route.fullPath;console.info(e),e&&(e=e.substring(1),this.actionItem=e,this.openItem=[""+e.substring(0,e.indexOf("/"))],console.info(e));var n=sessionStorage.getItem("userInfo");if(n)this.userInfo=JSON.parse(n);else{var a=sessionStorage.getItem("token");this.$axios.post("http://localhost:8099/admin/getUserInfo",{},{headers:{authorization:a}}).then(function(e){if(200===e.status)if(e.data.state)sessionStorage.setItem("userInfo",x()(e.data.userInfo)),t.userInfo=e.data.userInfo;else{console.info(x()(e.data));var n=t.$route.fullPath;t.$router.push({path:"/login",query:{redirect:n}})}else console.log("!=200",e)}).catch(function(t){console.log(t)})}var s=new Date;this.today_date=s.toLocaleDateString(),this.nowTime=s.toLocaleTimeString(),setInterval(function(){s=new Date,t.nowTime=s.toLocaleTimeString()},1e3)},methods:{selectMenu:function(t){this.actionItem=t,console.info(t),"logout"==t?this.logout(t):this.$router.push({path:"/"+t})},logout:function(t){var e=this;this.$axios.post("http://localhost:8099/logout").then(function(t){200===t.status?(console.info(x()(t)),t.data.state&&(sessionStorage.removeItem("token"),sessionStorage.removeItem("userInfo"),e.$router.push({path:"/login"}))):console.log("!=200",t)}).catch(function(t){console.log(t)})}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pageTop"},[a("Menu",{attrs:{mode:"horizontal",theme:"primary","active-name":t.actionItem},on:{"on-select":t.selectMenu}},[a("div",[a("MenuItem",{staticStyle:{height:"60px"},attrs:{name:"console"}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"logoImg",attrs:{src:n("7XU5")}})])],1)],1),t._v(" "),a("div",{staticClass:"top-date-lable"},[a("p",{staticClass:"today_datetime"},[a("Icon",{staticStyle:{"font-size":"1.5rem"},attrs:{type:"md-calendar"}}),t._v("\n                "+t._s(t.today_date)+" "+t._s(t.nowTime)+"\n              ")],1)]),t._v(" "),a("div",{staticClass:"NavMenu"},[a("router-link",{attrs:{to:"/mandatory/feedback"}},[a("MenuItem",{attrs:{name:"feedback"}},[a("Icon",{attrs:{type:"md-paper"}}),t._v(" 反馈\n                  ")],1)],1),t._v(" "),a("router-link",{attrs:{to:"/mandatory/helper"}},[a("MenuItem",{attrs:{name:"help"}},[a("Icon",{attrs:{type:"md-help-circle"}}),t._v(" 帮助\n                  ")],1)],1),t._v(" "),a("Submenu",{attrs:{name:"user"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"md-person"}}),t._v(" "+t._s(t.userInfo.chineseName)+"\n                    ")],1),t._v(" "),a("MenuItem",{attrs:{name:"user/center"}},[t._v("个人中心")]),t._v(" "),a("MenuItem",{attrs:{name:"user/modifypassword"}},[t._v("修改密码")]),t._v(" "),a("MenuItem",{attrs:{name:"logout"},on:{click:t.logout}},[t._v("退出登录")])],2)],1)])],1),t._v(" "),a("div",{staticClass:"pageLeft"},[a("Menu",{attrs:{mode:"vertical",theme:"dark","active-name":t.actionItem,accordion:t.accordion,"open-names":t.openItem,width:"200"},on:{"on-select":t.selectMenu}},[a("Submenu",{attrs:{name:"goods"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-shirt"}}),t._v("\n          商品管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"goods/add"}},[t._v("新增商品")]),t._v(" "),a("MenuItem",{attrs:{name:"goods/list"}},[t._v("商品列表")])],2),t._v(" "),a("Submenu",{attrs:{name:"orders"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-paper"}}),t._v("\n          订单管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"orders/list"}},[t._v("订单管理")]),t._v(" "),a("MenuItem",{attrs:{name:"orders/deliver"}},[t._v("发货管理")]),t._v(" "),a("MenuItem",{attrs:{name:"orders/postsale"}},[t._v("售后管理")])],2),t._v(" "),a("Submenu",{attrs:{name:"content"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-book"}}),t._v("\n          内容管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"content/add"}},[t._v("新增内容")]),t._v(" "),a("MenuItem",{attrs:{name:"content/list"}},[t._v("内容列表")]),t._v(" "),a("MenuItem",{attrs:{name:"content/draft"}},[t._v("草稿箱")]),t._v(" "),a("MenuItem",{attrs:{name:"content/recycle"}},[t._v("回收站")])],2),t._v(" "),a("Submenu",{attrs:{name:"classify"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"md-list-box"}}),t._v("\n          分类管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"classify/content"}},[t._v("内容分类")]),t._v(" "),a("MenuItem",{attrs:{name:"classify/goods"}},[t._v("商品分类")]),t._v(" "),a("MenuItem",{attrs:{name:"classify/orders"}},[t._v("订单分类")])],2),t._v(" "),a("Submenu",{attrs:{name:"tags"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-pricetags"}}),t._v("\n          标签管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"tags/add"}},[t._v("新增标签")]),t._v(" "),a("MenuItem",{attrs:{name:"tags/list"}},[t._v("标签列表")])],2),t._v(" "),a("Submenu",{attrs:{name:"resources"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-images"}}),t._v("\n          资源管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"resources/images"}},[t._v("图片管理")]),t._v(" "),a("MenuItem",{attrs:{name:"resources/videos"}},[t._v("视频管理")]),t._v(" "),a("MenuItem",{attrs:{name:"resources/docs"}},[t._v("文档管理")])],2),t._v(" "),a("Submenu",{attrs:{name:"users"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-people"}}),t._v("\n          用户管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"users/add"}},[t._v("新增用户")]),t._v(" "),a("MenuItem",{attrs:{name:"users/list"}},[t._v("用户列表")])],2),t._v(" "),a("Submenu",{attrs:{name:"statistics"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"md-pie"}}),t._v("\n          统计分析\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"statistics/goods"}},[t._v("商品统计")]),t._v(" "),a("MenuItem",{attrs:{name:"statistics/orders"}},[t._v("订单统计")]),t._v(" "),a("MenuItem",{attrs:{name:"statistics/customer"}},[t._v("客户统计")]),t._v(" "),a("MenuItem",{attrs:{name:"statistics/resources"}},[t._v("资源统计")])],2),t._v(" "),a("Submenu",{attrs:{name:"system"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-construct"}}),t._v("\n          系统管理\n        ")],1),t._v(" "),a("MenuItem",{attrs:{name:"system/setting"}},[t._v("\n          基本设置\n        ")]),t._v(" "),a("MenuItem",{attrs:{name:"system/menu"}},[t._v("\n          菜单设置\n        ")]),t._v(" "),a("MenuItem",{attrs:{name:"system/api"}},[t._v("\n          接口设置\n        ")]),t._v(" "),a("MenuItem",{attrs:{name:"system/authority"}},[t._v("\n          权限设置\n        ")]),t._v(" "),a("MenuItem",{attrs:{name:"system/log"}},[t._v("\n          操作日志\n        ")])],2)],1)],1)])},staticRenderFns:[]};var q=n("VU/8")(T,P,!1,function(t){n("W70O")},null,null).exports,$={install:function(t){t.component("pageTop",q)}},z={name:"pageFooter",data:function(){return{year:"",Corporate:"",ICP:""}},created:function(){this.year=(new Date).getFullYear(),this.Corporate="zolysoft.com",this.ICP="沪ICP备17054651号-1"},methods:{clickThisP:function(t){console.info("你点击了ICP备案信息"),this.$Message.info("你点击了ICP备案信息")}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blank-frame"}),t._v(" "),n("div",{staticClass:"footer"},[n("p",[n("router-link",{attrs:{to:"/mandatory/about"}},[t._v("关于我们")]),t._v("　|　\n            "),n("router-link",{attrs:{to:"/mandatory/contact"}},[t._v("联系我们")]),t._v("　|　\n            "),n("router-link",{attrs:{to:"/mandatory/statement"}},[t._v("法律声明")])],1),t._v(" "),n("p",[t._v("\n            Copyright © "+t._s(t.year)+" "+t._s(t.Corporate)+" All Rights Reserved. \n        ")]),t._v(" "),n("p",{on:{click:t.clickThisP}},[t._v("\n            "+t._s(t.ICP)+"  \n        ")])])])},staticRenderFns:[]};var F=n("VU/8")(z,A,!1,function(t){n("zVnx")},null,null).exports,O={install:function(t){t.component("pageFooter",F)}};c.a.defaults.timeout=1e4,c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o.default.prototype.$axios=c.a,o.default.prototype.$qs=m.a,o.default.prototype.$store=S.a,o.default.config.productionTip=!1,o.default.use(M.a),o.default.use(g.a),o.default.use($),o.default.use(O),o.default.use(w.a),new o.default({el:"#app",router:h,components:{App:i,pageTop:$,pageFooter:O},template:"<App/>"}),c.a.interceptors.request.use(function(t){var e=sessionStorage.getItem("token");return console.info("拿到的TOKEN",e),e&&(t.headers.authorization=e),t},function(t){return console.info("拦截器错误信息：",t),s.a.error(t)}),c.a.interceptors.response.use(function(t){return 200===t.status?(t.headers.authorization&&sessionStorage.setItem("token",t.headers.authorization),s.a.resolve(t)):s.a.reject(t)},function(t){if(t.response){switch(console.info(t),t.response.status){case 401:h.replace({path:"/login",query:{redirect:h.currentRoute.fullPath}});break;case 403:localStorage.removeItem("token"),S.a.commit("loginSuccess",null),setTimeout(function(){h.replace({path:"/login",query:{redirect:h.currentRoute.fullPath}})},1e3);break;case 404:M.a.Message.error("网络请求不存在");break;default:M.a.Message.error(t.response.data.message)}return s.a.reject(t.response)}})},Supk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("pageTop"),this._v(" "),e("div",{staticClass:"container"})],1)},staticRenderFns:[]};var s=n("VU/8")({name:"index",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(t){n("Js+r")},"data-v-6e3289c6",null);e.default=s.exports},W70O:function(t,e){},"d8/S":function(t,e){},"l/oV":function(t,e){},pw1w:function(t,e){},x1nq:function(t,e,n){var a={"./404.vue":["G0zN",1],"./index.vue":["Supk"],"./login.vue":["AvRI",0],"./mandatory/about.vue":["DgEk",8],"./mandatory/contact.vue":["W8na",7],"./mandatory/feedback.vue":["WlM6",4],"./mandatory/helper.vue":["Q+sH",3],"./mandatory/statement.vue":["kqbS",6],"./page.vue":["8kGv",5],"./system/log.vue":["UMrz",2]};function s(t){var e=a[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}s.keys=function(){return Object.keys(a)},s.id="x1nq",t.exports=s},zVnx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.01237469e05c865aa959.js.map