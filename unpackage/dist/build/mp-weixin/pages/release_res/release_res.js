(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_res/release_res"],{"3a77":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("6bed"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){n.e("components/t-dialog").then(function(){return resolve(n("4b8a"))}.bind(null,n)).catch(n.oe)},r=requirePlugin("chooseLocation"),s={name:"releaseRes",components:{tDialog:a},data:function(){return{resTitle:"",resTypeValue:0,resTypeRange:[{value:0,text:"学习",apiPath:"/learning"},{value:1,text:"运动",apiPath:"/sport"},{value:2,text:"玩乐",apiPath:"/amuse"}],resPersonNum:2,resPersonNumArrIndex:0,resPersonNumArr:[2,3,4,5,6,7,8,9,10,11,12],resDateText:"2021-06-01",resSTimeText:"08:00",resETimeText:"10:00",joinDeadLineText:"2021-05-31",resSTime:"",resETime:"",joinDeadLine:"",hasLoca:!1,resLoca:{},resLocaName:"",resLocaDet:"",resRemark:"",userProfile:{realName:"",phoneNum:"",wxid:"",avatar:""},ownerUserInfo:"",ownerOpenid:"",dialogShow:!1}},onShow:function(){this.dialogShow=!1;var e=getCurrentPages(),t=e[e.length-1],n=r.getLocation();n&&t.$vm.chooseLocation(n)},computed:{},methods:{resTitleInput:function(e){this.resTitle=e.detail.value},changeResType:function(e){},resPersonNumInput:function(e){this.resPersonNumArrIndex=e.target.value,this.resPersonNum=this.resPersonNumArr[this.resPersonNumArrIndex]},resLocaDetInput:function(e){this.resLocaDet=e.detail.value},resRemarkInput:function(e){this.resRemark=e.detail.value},realNameInput:function(e){this.userProfile.realName=e.detail.value},phoneNumInput:function(e){this.userProfile.phoneNum=e.detail.value},wxidInput:function(e){this.userProfile.wxid=e.detail.value},getResDate:function(e){this.resDateText=e.target.value},getresSTime:function(e){this.resSTimeText=e.target.value},getresETime:function(e){this.resETimeText=e.target.value},getJoinDeadLine:function(e){this.joinDeadLineText=e.target.value},chooseLoca:function(){var e="L6WBZ-SLZRO-RPOWQ-S4VCD-XB2MJ-4CB2O",t="lichees-mp",n=JSON.stringify({latitude:22.532742,longitude:113.936699}),o="生活服务,娱乐休闲";wx.navigateTo({url:"plugin://chooseLocation/index?key=".concat(e,"&referer=").concat(t,"&location=").concat(n,"&category=").concat(o)})},saveRes:function(){},sendPost:function(){var t={openid:this.ownerOpenid,detail:{loca_geo:this.resLoca,loca_text:this.resLocaName+this.resLocaDet,owner:{openid:this.ownerOpenid,name:this.userProfile.realName,nickName:this.userProfile.realName,phone_number:this.userProfile.phoneNum,wxid:this.userProfile.wxid,avatar:"cloud://cloud1-0gcmjje1d9bf828c.636c-cloud1-0gcmjje1d9bf828c-1305469619/avatar/avatar.jpg"},members:[],person_num:this.resPersonNum,remarks:this.resRemark},brief:{title:this.resTitle,loca_text:this.resLocaName+" "+this.resLocaDet,res_starttime:this.resSTime.toISOString(),res_endtime:this.resETime.toISOString(),person_num:this.resPersonNum,joined_num:1,join_deadline:this.joinDeadLine.toISOString()}};try{var n=e.getStorageSync("userInfo");n&&(t.detail.owner.avatar=n.avatarUrl,t.detail.owner.nickName=n.nickName),this.postNewData(this.resTypeRange[this.resTypeValue].apiPath,t).then((function(t){"501"===t.data.code?(e.showToast({title:"发布成功",duration:2e3,position:"bottom",icon:"none"}),setTimeout((function(){e.navigateTo({url:"/pages/home/home"})}),2e3)):e.showToast({title:"发布失败",duration:2e3,position:"bottom",icon:"none"})}))}catch(o){this.postNewData(this.resTypeRange[this.resTypeValue].apiPath,t).then((function(t){"501"===t.data.code?(e.showToast({title:"发布成功",duration:2e3,position:"bottom",icon:"none"}),setTimeout((function(){e.navigateTo({url:"/pages/home/home"})}),2e3)):e.showToast({title:"发布失败",duration:2e3,position:"bottom",icon:"none"})}))}},postNewData:function(e,t){return new Promise((function(n,i){o.default.postCloud(e,t).then((function(e){n(e)})).catch((function(e){i(e)}))}))},comfireBtn:function(){var t=this.dateHelper(this.resDateText),n=this.dateHelper(this.joinDeadLineText),i=this.timeHelper(this.resSTimeText),a=this.timeHelper(this.resETimeText);this.resSTime=new Date(t.year,t.month-1,t.day,i.hour,i.minute),this.resETime=new Date(t.year,t.month-1,t.day,a.hour,a.minute),this.joinDeadLine=new Date(n.year,n.month-1,n.day);var r=this.checkFormData();if(""==r){e.showLoading({title:"加载中"});try{if(this.ownerOpenid=e.getStorageSync("openid"),this.ownerUserInfo=e.getStorageSync("userInfo"),this.ownerOpenid&&this.ownerUserInfo)e.hideLoading(),this.sendPost();else{var s=this;wx.login({success:function(t){o.default.getCloud("/wxuser/code/"+t.code).then((function(t){var n=t.data;if("101"==n.code){s.ownerUserInfo=n.userInfo,s.ownerOpenid=n.openid;try{e.setStorageSync("userInfo",s.ownerUserInfo),e.setStorageSync("openid",s.ownerOpenid),s.sendPost(),e.hideLoading()}catch(o){}}else"-101"==n.code&&(s.ownerOpenid=n.openid,e.setStorageSync("openid",s.ownerOpenid),e.hideLoading(),s.dialogShow=!0)})).catch((function(e){}))}})}}catch(u){}}else e.showToast({title:r,duration:2e3,position:"bottom",icon:"none"})},dialogCancel:function(){this.dialogShow=!1},dateHelper:function(e){var t=e.split("-"),n=t[0]-0,o=t[1]-0,i=t[2]-0,a={year:n,month:o,day:i};return a},timeHelper:function(e){var t=e.split(":"),n=t[0]-0,o=t[1]-0,i={hour:n,minute:o};return i},checkFormData:function(){var e=[this.resTitle,this.hasLoca,this.userProfile.realName,this.userProfile.phoneNum,this.userProfile.wxid],t=/^[0-9]+.?[0-9]*$/,n=/^1[3-9]\d{9}$/;function o(e){return e.replace(/\s+/g,"")}var i="";return t.test(o(e[0]))?(i="局子标题不可为纯数字",i):""===o(e[0])?(i="局子标题不可为空",i):e[1]?""===o(e[2])?(i="请输入姓名",i):""===o(e[3])?(i="请输入手机号码",i):n.test(e[3])?""===o(e[4])?(i="请输入微信号",i):i:(i="手机号码格式错误",i):(i="请选择集合地点",i)},confirmLogin:function(t){var n=this;this.dialogShow=!1,wx.getUserProfile({desc:"用于发布信息",success:function(t){n.ownerUserInfo=t.rawData,e.setStorage({key:"userInfo",data:t.rawData,success:function(){var n=e.getStorageSync("openid");n&&o.default.postCloud("/wxuser/openid/"+n,t.userInfo).then((function(t){e.showToast({title:"登陆成功，请再次点击发布",duration:2e3,position:"bottom",icon:"none"})}))}})},fail:function(e){}})},chooseLocation:function(e){this.resLoca={type:"Point",coordinates:[e.longitude,e.latitude]},this.resLocaName=e.name,this.hasLoca=!0}}};t.default=s}).call(this,n("543d")["default"])},"3ed4":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uniDataCheckbox:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-data-checkbox/uni-data-checkbox")]).then(n.bind(null,"d15a"))}},i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},7015:function(e,t,n){"use strict";var o=n("b8da"),i=n.n(o);i.a},7485:function(e,t,n){"use strict";n.r(t);var o=n("3a77"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},b8da:function(e,t,n){},c5f6:function(e,t,n){"use strict";(function(e){n("6f72");o(n("66fd"));var t=o(n("ef56"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ef56:function(e,t,n){"use strict";n.r(t);var o=n("3ed4"),i=n("7485");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("7015");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=u.exports}},[["c5f6","common/runtime","common/vendor"]]]);