(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{2589:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"4a4b":function(t,n,o){"use strict";o.r(n);var e=o("2589"),i=o("78ad");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("83f3");var r=o("2877"),c=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=c.exports},"783f":function(t,n,o){"use strict";(function(t){o("5b49"),o("921b");e(o("66fd"));var n=e(o("4a4b"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},"78ad":function(t,n,o){"use strict";o.r(n);var e=o("f9d0"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a},"83f3":function(t,n,o){"use strict";var e=o("ddf9"),i=o.n(e);i.a},ddf9:function(t,n,o){},f9d0:function(t,n,o){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return o.e("components/toTop/toTop").then(o.bind(null,"3253"))},a={data:function(){return{isTop:!1,title:"Hello",bgImg:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg",nowIndex:1,bannerArr:[],articleListArr:[],pageSize:0,loadingConfig:{status:"more",contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}},reload:!1}},components:{backtop:i},onReady:function(){this.getBannerData(),this.getArticleData(this.pageSize)},onLoad:function(){t.$on("login",function(){t.startPullDownRefresh()}),t.$on("logout",function(){t.startPullDownRefresh()}),t.$on("backtop",function(){t.pageScrollTo({scrollTop:0,duration:300})})},onUnload:function(){t.$off()},onPageScroll:function(t){t.scrollTop>=200?this.isTop=!0:this.isTop=!1},methods:{collect:function(n,o,i){n.stopPropagation(),this.$store.state.userName.length>0?this.articleListArr[i].collect?(this.articleListArr[i].collect=!1,this.$ajax("https://www.wanandroid.com/lg/uncollect_originId/"+o+"/json",{},"POST",function(t){})):(this.articleListArr[i].collect=!0,this.$ajax("https://www.wanandroid.com/lg/collect/"+o+"/json",{},"POST",function(n){t.showToast({title:"收藏成功",duration:2e3,position:"bottom"})})):t.showModal({title:"提示",content:"您还未登录，去登录查看更多功能",success:function(n){n.confirm?t.navigateTo({url:"../login/login"}):n.cancel&&console.log(e("用户点击取消"," at pages\\home\\home.vue:143"))}})},getBannerData:function(){var t=this;this.$ajax(this.$urls._url_home_banner,{},"GET",function(n){n&&(t.bannerArr=n.data)})},getArticleData:function(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$ajax(this.$urls._url_home_article(o),{},"GET",function(o){n.reload?n.articleListArr=o.data.datas:(n.loadingConfig.status="loading",n.articleListArr=n.articleListArr.concat(o.data.datas)),t.stopPullDownRefresh()})},toMine:function(){t.navigateTo({url:"../mine/mine",animationType:"slide-in-left"})},changeSwiper:function(t){this.nowIndex=t.detail.current+1},toSearch:function(){t.navigateTo({url:"../search/search"})},jump:function(n){t.navigateTo({url:"../article_detail/article_detail?url="+n,animationType:"slide-in-bottom"})}},onPullDownRefresh:function(){this.reload=!0,this.pageSize=0,this.getArticleData(this.pageSize)},onReachBottom:function(){this.reload=!1,this.pageSize++,this.getArticleData(this.pageSize)}};n.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["783f","common/runtime","common/vendor"]]]);