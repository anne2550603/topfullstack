(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"08f0":function(e,t){},"22de":function(e,t,r){"use strict";r("8319")},"38c8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o=(r("034f"),r("2877")),i={},l=Object(o["a"])(i,a,s,!1,null,null,null),c=l.exports,u=r("5c96"),m=r.n(u);r("0fae");n["default"].use(m.a);var p=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},f=[],h=(r("96cf"),r("1da1")),v={data:function(){return{model:{}}},methods:{login:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,console.log(r.data.token),sessionStorage.token=r.data.token,e.$router.push("/"),e.$message({type:"success",message:"登录成功"});case 7:case"end":return t.stop()}}),t)})))()}}},b=v,g=(r("d6db"),Object(o["a"])(b,d,f,!1,null,null,null)),x=g.exports,w=r("cd56"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},k=[],y={props:{id:{}},data:function(){return{model:{},parents:[]}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/categories/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/categories",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/categories/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchParents:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.parents=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchParents(),this.id&&this.fetch()}},$=y,R=Object(o["a"])($,_,k,!1,null,null,null),O=R.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},C=[],S=(r("b0c0"),{data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/categories/".concat(e._id));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}}),T=S,z=Object(o["a"])(T,j,C,!1,null,null,null),E=z.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},P=[],A={props:{id:{}},data:function(){return{model:{}}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(sessionStorage.token||"")}},afterUpload:function(e){this.$set(this.model,"icon",e.url)},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/items/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/items",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/items/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},D=A,U=Object(o["a"])(D,B,P,!1,null,null,null),I=U.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:""}}),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),r("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},L=[],M={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/items/".concat(e._id));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},V=M,q=Object(o["a"])(V,H,L,!1,null,null,null),J=q.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:""}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},F=[],G={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/heroes/".concat(e._id));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},K=G,Q=Object(o["a"])(K,N,F,!1,null,null,null),W=Q.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{type:"border-card",value:"basic"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"avatar",t.url)}}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"Banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加技能")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:t.delay,callback:function(r){e.$set(t,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加英雄 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"英雄"}},[r("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(r){e.$set(t,"hero",r)},expression:"item.hero"}},e._l(e.heroes,(function(e){return r("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Y=[],Z={props:{id:{}},data:function(){return{categories:[],items:[],model:{name:"",avatar:"",skills:[],partners:[],scores:{difficult:0}}}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/heroes/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/heroes",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/heroes/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchHeroes:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.heroes=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchItems(),this.fetchCategories(),this.fetchHeroes(),this.id&&this.fetch()}},ee=Z,te=Object(o["a"])(ee,X,Y,!1,null,null,null),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHanler:""},on:{imageAdded:e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ae=[],se=r("5873"),oe={props:{id:{}},components:{VueEditor:se["a"]},data:function(){return{model:{},categories:[]}},methods:{handleImageAdded:function(e,t,r,n){var a=this;return Object(h["a"])(regeneratorRuntime.mark((function s(){var o,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return o=new FormData,o.append("file",e),s.next=4,a.$http.post("upload",o);case 4:i=s.sent,t.insertEmbed(r,"image",i.data.url),n();case 7:case"end":return s.stop()}}),s)})))()},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/articles/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/articles",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/articles/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCatgories:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCatgories(),this.id&&this.fetch()}},ie=oe,le=Object(o["a"])(ie,ne,ae,!1,null,null,null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},me=[],pe={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除分类 "'.concat(e.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/articles/".concat(e._id));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},de=pe,fe=Object(o["a"])(de,ue,me,!1,null,null,null),he=fe.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"广告"}},[r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v("添加广告")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return r("el-col",{key:n,attrs:{md:24}},[r("el-form-item",{attrs:{label:"跳转链接(URL)"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.5rem"},attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)}}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},be=[],ge={props:{id:{}},data:function(){return{model:{items:[]},parents:[]}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/ads/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/ads",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/ads/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},xe=ge,we=Object(o["a"])(xe,ve,be,!1,null,null,null),_e=we.exports,ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("广告位列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ye=[],$e={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/ads/".concat(e._id));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Re=$e,Oe=Object(o["a"])(Re,ke,ye,!1,null,null,null),je=Oe.exports,Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Se=[],Te={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("rest/admin_users/".concat(e.id),e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("rest/admin_users",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},ze=Te,Ee=Object(o["a"])(ze,Ce,Se,!1,null,null,null),Be=Ee.exports,Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),r("el-table-column",{attrs:{prop:"username",label:"用户名"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Ae=[],De={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('是否确定要删除分类 "'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_users/".concat(e._id));case 2:n=r.sent,console.log(n),t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Ue=De,Ie=Object(o["a"])(Ue,Pe,Ae,!1,null,null,null),He=Ie.exports;n["default"].use(p["a"]);var Le=new p["a"]({routes:[{path:"/login",name:"login",component:x,meta:{isPublic:!0}},{path:"/",name:"main",component:w["default"],children:[{path:"/categories/create",component:O},{path:"/categories/list",component:E},{path:"/categories/edit/:id",component:O,props:!0},{path:"/items/create",component:I},{path:"/items/list",component:J},{path:"/items/edit/:id",component:I,props:!0},{path:"/heroes/create",component:re},{path:"/heroes/list",component:W},{path:"/heroes/edit/:id",component:re,props:!0},{path:"/articles/create",component:ce},{path:"/articles/list",component:he},{path:"/articles/edit/:id",component:ce,props:!0},{path:"/ads/create",component:_e},{path:"/ads/list",component:je},{path:"/ads/edit/:id",component:_e,props:!0},{path:"/admin_users/create",component:Be},{path:"/admin_users/list",component:He},{path:"/admin_users/edit/:id",component:Be,props:!0}]}]});Le.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!sessionStorage.token)return r("/login");r()}));var Me=Le,Ve=(r("38c8"),r("d3b7"),r("bc3a")),qe=r.n(Ve),Je=qe.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Je.interceptors.request.use((function(e){return sessionStorage.token&&(e.headers.Authorization="Bearer "+sessionStorage.token),e}),(function(e){return Promise.reject(e)})),Je.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&Me.push("/login")),Promise.reject(e)}));var Ne=Je;n["default"].config.productionTip=!1,n["default"].prototype.$http=Ne,n["default"].mixin({computed:{uploadUrl:function(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(sessionStorage.token||"")}}}}),new n["default"]({router:Me,render:function(e){return e(c)}}).$mount("#app")},8319:function(e,t,r){},"85ec":function(e,t,r){},cd56:function(e,t,r){"use strict";var n=r("dee9"),a=r("eca4"),s=(r("22de"),r("2877")),o=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},d6db:function(e,t,r){"use strict";r("e67a")},dee9:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","default-openeds":["3"],"unique-opened":"","default-active":"$route.path"}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",[e._v("新增")]),r("el-dropdown-item",[e._v("删除")])],1)],1)],1),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},a=[]},e67a:function(e,t,r){},eca4:function(e,t,r){"use strict";var n=r("08f0"),a=r.n(n);t["default"]=a.a}});
//# sourceMappingURL=app.419d09f8.js.map