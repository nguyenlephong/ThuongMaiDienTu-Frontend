(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a.p+"static/media/banner2.ed47e129.jpg"},164:function(e,t,a){e.exports=a.p+"static/media/banner3.edb1220f.jpg"},165:function(e,t,a){e.exports=a.p+"static/media/banner6.31bd98a7.png"},171:function(e,t,a){e.exports=a.p+"static/media/banner6.31bd98a7.png"},175:function(e,t,a){e.exports=a(346)},180:function(e,t,a){},195:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){},261:function(e,t,a){},336:function(e,t,a){},340:function(e,t,a){},342:function(e,t,a){},344:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(16),r=a(18),c=a(17),i=a(19),o=a(1),u=a.n(o),s=a(9),m=a.n(s);a(180),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(123),p=a(47),h=Object(p.c)({a:""}),b=a(156),f=a(351),E=a(68),y=a(359),O=(a(195),a(358)),j=a(10),g=a(349),v=[{key:"",label:"Home",leftIcon:"ion-pie-graph"},{key:"company",label:"About",leftIcon:"ion-pie-graph"},{key:"demoapi",label:"Login",leftIcon:"ion-pie-graph"},{key:"i18n",label:"Viet Nam",leftIcon:"ion-ios-people",children:[{key:"english",label:"English"},{key:"vietnam",label:"Viet Name"}]}],k=O.a.SubMenu,C=(O.a.ItemGroup,function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={current:"mail"},a.getMenuItem=function(e){var t=e.singleOption,a=t.key,n=t.label,l=t.leftIcon,r=t.children;return r?u.a.createElement(k,{key:a,title:u.a.createElement("span",null,u.a.createElement(j.a,{type:l}),u.a.createElement("span",null,n," "))},r.map(function(e){return u.a.createElement(O.a.Item,{key:e.key},u.a.createElement(g.a,{to:e.key},u.a.createElement("span",null,e.label," ")))})):u.a.createElement(O.a.Item,{key:a},u.a.createElement(g.a,{to:"/".concat(a)},u.a.createElement("span",null,u.a.createElement(j.a,{type:l}),u.a.createElement("span",null," ",n,"  "))))},a.handleClick=function(e){a.setState({current:e.key})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(O.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},v.map(function(t){return e.getMenuItem({singleOption:t})}))}}]),t}(o.Component)),w=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(C,null)}}]),t}(o.Component),S=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null)}}]),t}(o.Component),x=a(326),I=a(327),T=a(162),D=(a(254),a(163)),_=a.n(D),N=a(164),H=a.n(N),M=a(165),P=a.n(M),A=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={listParner:[{image:_.a},{image:H.a},{image:P.a}]},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(T.Carousel,{showThumbs:!1,showArrows:!1,infiniteLoop:!0,swipeScrollTolerance:6,autoPlay:!0,interval:5e3,showStatus:!1,onChange:this.onChange,onClickItem:this.onClickItem,onClickThumb:this.onClickThumb},this.state.listParner.map(function(e){return u.a.createElement("div",{id:"slider",key:e.image},u.a.createElement("div",{id:"slider-img"},u.a.createElement("li",null,u.a.createElement("img",{src:e.image,alt:e.image,className:"img-slider"}))))}))}}]),t}(o.Component),R=(a(256),a(258),a(352)),L=a(120),V=a(360),z=a(353),B=a(348),F=a(12),G=a.n(F),Y=(a(261),R.a.Item),X=L.a.Option,J=(V.a.Option,z.a.MonthPicker,z.a.RangePicker),K=function(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a},W=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Received values of form: ",t)})},a.disabledDate=function(e){return e&&e<G()().endOf("day")},a.disabledDateTime=function(){return{disabledHours:function(){return K(0,24).splice(4,20)},disabledMinutes:function(){return K(30,60)},disabledSeconds:function(){return[55,56]}}},a.disabledRangeTime=function(e,t){return"start"===t?{disabledHours:function(){return K(0,60).splice(4,20)},disabledMinutes:function(){return K(30,60)},disabledSeconds:function(){return[55,56]}}:{disabledHours:function(){return K(0,60).splice(20,4)},disabledMinutes:function(){return K(0,31)},disabledSeconds:function(){return[55,56]}}},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.form.getFieldDecorator;var e="horizontal"===this.state.formLayout?{labelCol:{span:4},wrapperCol:{span:14}}:null;return u.a.createElement(x.a,{className:"form_content"},u.a.createElement(I.a,{span:24},u.a.createElement(R.a,{layout:null,onSubmit:this.handleSubmit},u.a.createElement(Y,Object.assign({},e,{label:"Ch\u1ecdn T\u1ec9nh/ Th\xe0nh ph\u1ed1"}),u.a.createElement(L.a,{style:{width:"100%"}},u.a.createElement(X,{value:"BinhDuong"},"B\xecnh D\u01b0\u01a1ng"),u.a.createElement(X,{value:"ThuDuc"},"Th\u1ee7 \u0110\u1ee9c"))),u.a.createElement(Y,Object.assign({},e,{label:"Ch\u1ecdn ng\xe0y thu\xea v\xe0 ng\xe0y tr\u1ea3"}),u.a.createElement(J,{disabledDate:this.disabledDate,disabledTime:this.disabledRangeTime,showTime:{hideDisabledOptions:!0,defaultValue:[G()("00:00:00","HH:mm:ss"),G()("11:59:59","HH:mm:ss")]},style:{width:"100%"},format:"YYYY-MM-DD HH:mm:ss"})),u.a.createElement(Y,{style:{float:"right"}},u.a.createElement(g.a,{to:"tim-xe"},u.a.createElement(B.a,{type:"primary",htmlType:"submit"},"Ch\u1ecdn xe"))))))}}]),t}(u.a.Component),U=R.a.create()(W),$=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(x.a,{className:"silder_content"},u.a.createElement(A,null)),u.a.createElement(x.a,{className:"book_content"},u.a.createElement(I.a,{span:16,style:{width:"100%"}},u.a.createElement(U,null))))}}]),t}(o.Component),q=(a(328),y.a.Header),Q=y.a.Footer,Z=y.a.Content,ee=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"layout-theme",style:{backgroundColor:"#f5f5f5"}},u.a.createElement(y.a,null,u.a.createElement(q,{className:"header_content"},u.a.createElement(w,null)),u.a.createElement(Z,{className:"content_sites"},u.a.createElement($,null)),u.a.createElement(Q,{className:"footer_content"},u.a.createElement(S,null))))}}]),t}(o.Component),te=a(355),ae=y.a.Sider,ne=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).filterPrice=function(e){a.setState({priceStart:1e3*e[0],priceEnd:1e3*e[1]})},a.state={priceStart:0,priceEnd:1e6},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(ae,{trigger:null,collapsible:!0,collapsed:this.props.collapsed},u.a.createElement(x.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},u.a.createElement(I.a,{span:18},u.a.createElement(U,null)),u.a.createElement(I.a,{span:18},u.a.createElement(te.a,{onChange:this.filterPrice,range:!0,defaultValue:[this.state.priceStart,this.state.priceEnd],disabled:!1}),u.a.createElement("span",null,"T\u1ea7m gi\xe1 t\u1eeb ",this.state.priceStart," \u0111\u1ebfn ",this.state.priceEnd))))}}]),t}(o.Component),le=a(347),re=L.a.Option,ce=le.a.Search,ie=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={current:"mail"},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(O.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},u.a.createElement(O.a.Item,{key:"search"},u.a.createElement(ce,{placeholder:"Input search text",onSearch:function(e){return console.log(e)},style:{width:"100%"}})),u.a.createElement(O.a.Item,{key:"filter"},u.a.createElement(L.a,{labelInValue:!0,defaultValue:{key:"price-up"},style:{width:"120%"},onChange:this.handleChange},u.a.createElement(re,{value:"price-up"},"Gi\xe1 t\u0103ng d\u1ea7n"),u.a.createElement(re,{value:"price-down"},"Gi\xe1 gi\u1ea3m d\u1ea7n"))))}}]),t}(o.Component),oe=a(357),ue=(a(336),oe.a.Step),se=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(oe.a,{size:"small",current:1},u.a.createElement(ue,{title:"Ch\u1ecdn xe"}),u.a.createElement(ue,{title:"Xem th\xf4ng tin xe"}),u.a.createElement(ue,{title:"\u0110i\u1ec1n th\xf4ng tin c\u1ee7a b\u1ea1n"}),u.a.createElement(ue,{title:"Ho\xe0n t\u1ea5t"}))}}]),t}(o.Component),me=a(354),de=a(350),pe=a(171),he=a.n(pe),be=(a(340),me.a.Meta),fe=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(me.a,{style:{width:250},cover:u.a.createElement("img",{alt:"example",src:he.a}),actions:[u.a.createElement(j.a,{type:"eye",theme:"outlined"}),u.a.createElement(j.a,{type:"select",theme:"outlined"}),u.a.createElement(j.a,{type:"shopping-cart",theme:"outlined"})]},u.a.createElement(be,{avatar:u.a.createElement(de.a,{icon:"car"}),title:"Gi\xe1: 200 000",description:"Toyota"}))}}]),t}(o.Component),Ee={padding:"0 20px"},ye={display:"flex",flexDirection:"row",justifyContent:"flex-end",marginBottom:"10px"},Oe=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(x.a,{title:"List car",style:ye,gutter:16},u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null)),u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null)),u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null))),u.a.createElement(x.a,{title:"List car",style:ye,gutter:16},u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null)),u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null)),u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null))),u.a.createElement(x.a,{title:"List car",style:ye,gutter:16},u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null)),u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null)),u.a.createElement(I.a,{md:8,style:Ee},u.a.createElement(fe,null))))}}]),t}(o.Component),je=a(356);function ge(e,t){console.log(e,t)}var ve=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(x.a,null,u.a.createElement(I.a,null,u.a.createElement(je.a,{showSizeChanger:!0,onShowSizeChange:ge,defaultCurrent:3,total:500,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}})))}}]),t}(o.Component),ke=(a(342),a(344),y.a.Header),Ce=y.a.Content,we=y.a.Footer,Se=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(y.a,null,u.a.createElement(ke,{className:"header_content"},u.a.createElement(w,null)),u.a.createElement(Ce,null,u.a.createElement("div",{className:"step_content"},u.a.createElement(se,null)),u.a.createElement(y.a,null,u.a.createElement(ne,{className:"sidebar_content",collapsed:this.state.collapsed}),u.a.createElement(y.a,null,u.a.createElement(ie,{className:"function_filter"}),u.a.createElement(Ce,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},u.a.createElement(x.a,null,u.a.createElement(I.a,null,u.a.createElement(Oe,null))),u.a.createElement(x.a,null,u.a.createElement(I.a,{style:{float:"right"}},u.a.createElement(ve,null))))))),u.a.createElement(we,null,u.a.createElement(S,null)))}}]),t}(o.Component),xe=function(e){var t=e.history;return u.a.createElement(E.ConnectedRouter,{history:t},u.a.createElement("div",null,u.a.createElement(f.a,{exact:!0,path:"/",component:ee}),u.a.createElement(f.a,{exact:!0,path:"/tim-xe",component:Se})))},Ie=a(33),Te=Object(Ie.a)(),De=Object(E.routerMiddleware)(Te),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,Ne=[b.a,De],He=Object(p.e)(Object(E.connectRouter)(Te)(h),_e(p.a.apply(void 0,Ne))),Me=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement(d.Provider,{store:He},u.a.createElement(xe,{history:Te}))}}]),t}(u.a.Component);m.a.render(u.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[175,2,1]]]);
//# sourceMappingURL=main.9f06a375.chunk.js.map