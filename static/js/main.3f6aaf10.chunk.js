(this["webpackJsonpweb-social-ts"]=this["webpackJsonpweb-social-ts"]||[]).push([[0],{157:function(e,t,a){e.exports={avatar:"ProfileInfo_avatar__38kak",container:"ProfileInfo_container__11Am1"}},163:function(e,t,a){e.exports={navLinkStyle:"DialogItem_navLinkStyle__2vftY"}},164:function(e,t,a){e.exports={btn:"Header_btn__3Y7It",active:"Header_active__2MpfG"}},165:function(e,t,a){e.exports={links:"SideNav_links__2sbXd",activeLink:"SideNav_activeLink__2nzJU"}},180:function(e,t,a){e.exports=a(311)},185:function(e,t,a){},210:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(35),l=a.n(i),o=(a(185),a(23)),s=a(17),u=a(16),m=a(50),E=a.n(m),d=a(372),b=a(374),f=a(366),p=a(373),g=a(377),O=a(378),S=Object(r.memo)((function(e){var t=e.followUserCallBack,a=e.unfollowUserCallBack,n=Object(u.c)((function(e){return e.usersPage.users})),r=Object(u.c)((function(e){return e.usersPage.followInProgress})),i=n.map((function(e){var n=e.followed?c.a.createElement(d.a,{disabled:r.some((function(t){return t===e.id})),onClick:function(){return a(e.id)},size:"small",variant:"contained"},"Unfollow"):c.a.createElement(d.a,{disabled:r.some((function(t){return t===e.id})),onClick:function(){return t(e.id)},size:"small",variant:"contained"},"follow");return c.a.createElement(p.a,{item:!0,xs:8,key:e.id},c.a.createElement(g.a,{elevation:3,sx:{p:2,maxWidth:400,flexGrow:1,mt:2}},c.a.createElement(p.a,{container:!0,spacing:3},c.a.createElement(p.a,{item:!0},c.a.createElement(f.a,{sx:{width:80,height:80,position:"relative",top:10}},c.a.createElement(o.b,{to:"/profile/".concat(e.id)},c.a.createElement(b.a,{alt:e.name?e.name:void 0,src:e.photos.small?e.photos.small:E.a,sx:{width:80,height:80}})))),c.a.createElement(p.a,{item:!0,xs:12,sm:!0,container:!0},c.a.createElement(p.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},c.a.createElement(p.a,{item:!0,xs:!0},c.a.createElement(O.a,{gutterBottom:!0,variant:"subtitle1",component:"div",sx:{fontSize:"1.3rem"}},e.name),c.a.createElement(O.a,{variant:"body2"},e.status)),c.a.createElement(p.a,{item:!0},n))))))}));return c.a.createElement(c.a.Fragment,null,i)})),h=a(13),j=a(15),v=a(156),x=a.n(v).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"099be23b-024b-4d04-8aea-ded1a22de046"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(n||(n={}));var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return x.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},R=function(e){return x.post("follow/".concat(e)).then((function(e){return e.data}))},U=function(e){return x.delete("follow/".concat(e)).then((function(e){return e.data}))},T=function(e){return x.get("profile/".concat(e)).then((function(e){return e.data}))},C=function(e){return x.get("profile/status/".concat(e))},w=function(e){return x.put("profile/status",{status:e})},I=function(){return x.get("auth/me").then((function(e){return e.data}))},y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return x.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},A=function(){return x.delete("auth/login")},L={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!1,followInProgress:[]},k=function(e){return{type:"USERS/SET-IS-FETCHING",isFetching:e}},N=function(e){return{type:"USERS/SET-FOLLOW-PROGRESS-START",id:e}},F=function(e){return{type:"USERS/SET-FOLLOW-PROGRESS-END",id:e}},D=a(12),G=a(367),z=Object(r.memo)((function(e){var t=e.totalUsersCount,a=e.pageSize,n=e.currentPage,i=e.setCurrentPage,l=Object(r.useState)(n),o=Object(D.a)(l,2),s=o[0],u=o[1],m=Math.ceil(t/a);return c.a.createElement(G.a,{count:m,variant:"outlined",color:"secondary",page:s,onChange:function(e,t){u(t),i(t)}})})),_=(a(210),function(){return c.a.createElement("div",{className:"middle"},c.a.createElement("div",{className:"bar bar1"}),c.a.createElement("div",{className:"bar bar2"}),c.a.createElement("div",{className:"bar bar3"}),c.a.createElement("div",{className:"bar bar4"}),c.a.createElement("div",{className:"bar bar5"}),c.a.createElement("div",{className:"bar bar6"}),c.a.createElement("div",{className:"bar bar7"}),c.a.createElement("div",{className:"bar bar8"}))}),W=Object(r.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.usersPage.isFetching})),a=Object(u.c)((function(e){return e.usersPage.totalUsersCount})),i=Object(u.c)((function(e){return e.usersPage.pageSize})),l=Object(u.c)((function(e){return e.usersPage.currentPage})),o=Object(r.useCallback)((function(t){e(function(e){return{type:"USERS/SET-CURRENT-PAGE",currentPage:e}}(t))}),[e]);Object(r.useEffect)((function(){e(function(e,t){return function(a){a(k(!0)),P(e,t).then((function(e){a({type:"USERS/SET-USERS",users:e.items}),a({type:"USERS/SET-TOTAL-USERS-COUNT",totalUsersCount:e.totalCount}),a(k(!1))}))}}(l,i))}),[e,l,i]);var s=Object(r.useCallback)((function(t){e(function(e){return function(t){t(N(e)),R(e).then((function(a){a.resultCode===n.Success&&t(function(e){return{type:"USERS/FOLLOW",id:e}}(e)),t(F(e))}))}}(t))}),[e]),m=Object(r.useCallback)((function(t){e(function(e){return function(t){t(N(e)),U(e).then((function(a){a.resultCode===n.Success&&t(function(e){return{type:"USERS/UNFOLLOW",id:e}}(e)),t(F(e))}))}}(t))}),[e]);return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(_,null),c.a.createElement(z,{totalUsersCount:a,pageSize:i,currentPage:l,setCurrentPage:o}),c.a.createElement(p.a,{container:!0,spacing:2,columns:16},c.a.createElement(S,{followUserCallBack:s,unfollowUserCallBack:m})))})),H=a(157),B=a.n(H),M=a(364),V=a(369),q={initialised:!1,fetching:!1},J=function(e){return{type:"APP-REDUCER/IS-FETCHING",isFetching:e}},Y={user:{},status:"",postsData:[{id:Object(V.a)(),message:"Hello, Boy",likeCount:10},{id:Object(V.a)(),message:"Boy",likeCount:33},{id:Object(V.a)(),message:"Sup",likeCount:21}]},K=function(e){return{type:"PROFILE/SET-USER-STATUS",status:e}},X=function(e){return function(t){w(e).then((function(a){200===a.status&&t(K(e))}))}},Q=function(e){var t=e.user,a=Object(u.c)((function(e){return e.profilePage.status})),n=Object(u.c)((function(e){return e.authUser.id})),i=Object(r.useState)(!1),l=Object(D.a)(i,2),o=l[0],s=l[1],m=Object(r.useState)(a),E=Object(D.a)(m,2),d=E[0],b=E[1],f=Object(u.b)();return c.a.createElement(p.a,{container:!0},o?c.a.createElement(M.a,{autoFocus:!0,size:"small",variant:"outlined",onKeyPress:function(e){13===e.charCode&&(s(!1),f(X(d)))},onChange:function(e){b(e.currentTarget.value)},onBlur:function(){s(!1),f(X(d))}}):c.a.createElement(O.a,{onDoubleClick:function(){n===t.userId&&s(!0)},sx:{fontSize:"1.2rem"}},a))},Z=Object(r.memo)((function(e){var t=e.user;return c.a.createElement(p.a,{container:!0,sx:{border:"1px solid black",mb:"40px"}},c.a.createElement(p.a,{item:!0},c.a.createElement(b.a,{className:B.a.avatar,src:t.photos&&t.photos.small?t.photos.small:E.a,alt:t.fullName,sx:{width:"150px",height:"150px"}})),c.a.createElement(p.a,{item:!0,sx:{ml:"20px"}},c.a.createElement(O.a,{sx:{fontSize:"2.2rem",fontWeight:"300"}},t.fullName),c.a.createElement(Q,{user:t})))})),$=a(368),ee=a(359),te=a(360),ae=function(e){return c.a.createElement(g.a,{elevation:3,sx:{mt:"10px"}},c.a.createElement(p.a,{container:!0,sx:{padding:"15px",width:"500px"}},c.a.createElement(p.a,{item:!0},c.a.createElement(b.a,{src:E.a,alt:"avatar",sx:{height:"60px",width:"60px"}})),c.a.createElement(p.a,{item:!0},c.a.createElement(O.a,{variant:"body1",sx:{ml:"15px"}},"NAME"),c.a.createElement(O.a,{variant:"body1",sx:{ml:"15px"}},e.message)),c.a.createElement(p.a,{container:!0,sx:{position:"relative",left:"-15px",top:"18px"}},c.a.createElement($.a,{icon:c.a.createElement(ee.a,null),checkedIcon:c.a.createElement(te.a,null),sx:{color:"gray","&.Mui-checked":{color:"red"}}}),c.a.createElement(O.a,{sx:{position:"relative",left:"-8px",top:"8px"}},e.likeCount))))},ne=a(62),re=a(39),ce=Object(r.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.profilePage.postsData})),a=Object(ne.a)({initialValues:{newPost:""},validationSchema:re.a({newPost:re.b().max(5,"Max chars 5")}),onSubmit:function(t){var a;(a=t.newPost).trim()&&e({type:"PROFILE/ADD-NEW-POST",text:a.trim()})}}),n=t.map((function(e){return c.a.createElement(ae,{key:e.id,message:e.message,likeCount:e.likeCount})}));return c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0},c.a.createElement("form",{onSubmit:a.handleSubmit},c.a.createElement(M.a,{name:"newPost",error:!!a.errors.newPost,helperText:!!a.errors.newPost&&a.errors.newPost,multiline:!0,rows:4,onChange:a.handleChange,value:a.values.newPost}),c.a.createElement(d.a,{type:"submit",variant:"contained"},"Send"))),c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0},n)))})),ie=Object(r.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.authUser.id})),a=Object(u.c)((function(e){return e.profilePage.user})),n=Object(s.h)(),i=n.userId&&+n.userId;return Object(r.useEffect)((function(){var t;i&&(e((t=i,function(e){e(J(!0)),T(t).then((function(t){e({type:"PROFILE/SET-USER-TO-PROFILE-PAGE",user:t}),e(J(!1))}))})),e(function(e){return function(t){return C(e).then((function(e){200===e.status&&t(K(e.data))}))}}(i)))}),[e,i,t]),Object(u.c)((function(e){return e.app.fetching}))?c.a.createElement(_,null):c.a.createElement(g.a,null,c.a.createElement(p.a,{container:!0,sx:{padding:"20px"}},c.a.createElement(Z,{user:a}),c.a.createElement(ce,null)))})),le=a(376),oe=a(163),se=a.n(oe),ue=function(e){return c.a.createElement(g.a,{sx:{minWidth:"200px",mb:"15px"},elevation:3},c.a.createElement(p.a,{container:!0,sx:{padding:"10px"},spacing:1},c.a.createElement(p.a,{item:!0},c.a.createElement(b.a,{alt:e.name,src:E.a})),c.a.createElement(p.a,{item:!0},c.a.createElement(o.b,{className:se.a.navLinkStyle,to:"/dialogs/".concat(e.id)},e.name))))};var me,Ee=function(e){return c.a.createElement(p.a,{container:!0,sx:{mb:"7px",padding:"2px",maxWidth:"300px",wordWrap:"break-word"}},c.a.createElement(p.a,{item:!0},c.a.createElement(O.a,{variant:"body1",sx:{color:"white",backgroundColor:"#1976D2",padding:"7px",borderRadius:"5px"}},e.message)))},de={messages:[{id:Object(V.a)(),message:"Hi, bro!"},{id:Object(V.a)(),message:"GL!"},{id:Object(V.a)(),message:"Bye;)"}],users:[{id:Object(V.a)(),name:"Leon"},{id:Object(V.a)(),name:"Alex"},{id:Object(V.a)(),name:"Bob"}]},be=Object(r.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.dialogsPage.messages})).map((function(e){return c.a.createElement(Ee,{key:e.id,message:e.message})})),a=Object(ne.a)({initialValues:{message:""},validationSchema:re.a({message:re.b().max(10,"Max chars 10")}),onSubmit:function(t){var a;a=t.message,e({type:"DIALOGS/ADD-NEW-MESSAGE",text:a})}});return console.log("MessagesWindow"),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,sx:{padding:"20px",border:"2px solid gray",borderRadius:"5px",mb:"10px"}},t),c.a.createElement(p.a,{item:!0},c.a.createElement("form",{onSubmit:a.handleSubmit},c.a.createElement(M.a,{multiline:!0,name:"message",error:!!a.errors.message,helperText:!!a.errors.message&&a.errors.message,onChange:a.handleChange,rows:4,value:a.values.message}),c.a.createElement(d.a,{type:"submit",size:"small",variant:"contained"},"Send"))))})),fe=Object(r.memo)((me=function(){var e=Object(u.c)((function(e){return e.dialogsPage.users})).map((function(e){return c.a.createElement(ue,{key:e.id,name:e.name,id:e.id})}));return c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,sx:{margin:"8px 20px 0 10px"}},e),c.a.createElement(g.a,{elevation:3},c.a.createElement(p.a,{item:!0,sx:{width:"500px",padding:"20px"}},c.a.createElement(be,null))))},function(e){return Object(u.c)((function(e){return e.authUser.isAuth}))?c.a.createElement(me,e):c.a.createElement(s.a,{to:"/login"})})),pe={email:null,id:null,login:null,isAuth:!1,loginServerError:""},ge=function(e,t,a){return{type:"AUTH/SET-AUTH",email:e,id:t,login:a}},Oe=function(e){return{type:"AUTH/SET-IS-AUTH",isAuth:e}},Se=function(e){return{type:"AUTH/SET-LOGIN-SERVER-ERROR",error:e}},he=function(){return function(e){I().then((function(t){if(console.log(t),t.resultCode===n.Success){var a=t.data,r=a.email,c=a.id,i=a.login;e(ge(r,c,i)),e(Oe(!0))}})).finally((function(){e({type:"APP-REDUCER/IS-INITIALISED",isInitialised:!0})}))}},je=Object(r.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.authUser.isAuth})),a=Object(u.c)((function(e){return e.authUser.id})),r=Object(u.c)((function(e){return e.authUser.loginServerError})),i=Object(ne.a)({initialValues:{email:"",pass:""},validationSchema:re.a({email:re.b().email("Invalid email address").required("Required"),pass:re.b().required("Required")}),onSubmit:function(t){e(function(e,t){return function(a){y(e,t,!1).then((function(e){e.resultCode===n.Success?(a(he()),a(Se(""))):a(Se(e.messages))}))}}(t.email,t.pass,!1))}});return t?c.a.createElement(s.a,{to:"/profile/".concat(a)}):c.a.createElement("form",{onSubmit:i.handleSubmit},c.a.createElement(g.a,{sx:{width:"200px",padding:"30px",display:"grid",rowGap:"20px"}},c.a.createElement(M.a,{label:"Email",error:!!i.errors.email,value:i.values.email,onChange:i.handleChange,name:"email",variant:"outlined",size:"small",helperText:i.touched.email&&i.errors.email&&i.errors.email}),c.a.createElement(M.a,{label:"Pass",onChange:i.handleChange,name:"pass",variant:"outlined",size:"small",type:"password"}),c.a.createElement(d.a,{variant:"contained",type:"submit"},"login"),r&&c.a.createElement("div",null,r)))})),ve=a(164),xe=a.n(ve),Pe=a(379),Re=a(381),Ue=a(380),Te=a(166),Ce=a.n(Te),we=a(361),Ie=a(362),ye=a(363),Ae=a(165),Le=a.n(Ae),ke=a(375),Ne=a(382),Fe=a(370),De=a(383),Ge=function(e){var t=e.isOpen,a=e.close;return c.a.createElement(ke.a,{anchor:"left",open:t,onClose:a},c.a.createElement("div",{className:Le.a.links},c.a.createElement(Ne.a,{sx:{padding:"20px"},onClick:a},c.a.createElement(Fe.a,{sx:{mt:"40px"}},c.a.createElement(De.a,null,c.a.createElement(we.a,null)),c.a.createElement(o.b,{to:"/profile"},"Profile")),c.a.createElement(Fe.a,null,c.a.createElement(De.a,null,c.a.createElement(Ie.a,null)),c.a.createElement(o.b,{to:"/users"},"Users")),c.a.createElement(Fe.a,null,c.a.createElement(De.a,null,c.a.createElement(ye.a,null)),c.a.createElement(o.b,{to:"/dialogs"},"Dialogs")))))},ze=Object(r.memo)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.authUser.login})),a=Object(u.c)((function(e){return e.authUser.id})),n=Object(r.useState)(!1),i=Object(D.a)(n,2),l=i[0],s=i[1];return c.a.createElement("header",{className:xe.a.btn},c.a.createElement(Pe.a,null,c.a.createElement(Ue.a,null,c.a.createElement(Ge,{isOpen:l,close:function(){s(!1)}}),c.a.createElement(Re.a,{size:"large",edge:"start",color:"inherit",onClick:function(){s(!0)}},c.a.createElement(Ce.a,{fontSize:"large"})),c.a.createElement(O.a,{variant:"h6",component:"span",sx:{flexGrow:1}},"WebSocial"),c.a.createElement(p.a,{container:!0,sx:{ml:"30px"}},c.a.createElement(Re.a,null,a?c.a.createElement(o.b,{to:"/profile/".concat(a)},c.a.createElement(we.a,{fontSize:"large"})):c.a.createElement(o.b,{to:"/login"},c.a.createElement(we.a,{fontSize:"large"}))),c.a.createElement(Re.a,null,c.a.createElement(o.b,{to:"/users"},c.a.createElement(Ie.a,{fontSize:"large"}))),c.a.createElement(Re.a,null,c.a.createElement(o.b,{to:"/dialogs"},c.a.createElement(ye.a,{fontSize:"large"})))),t?c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{variant:"h6",component:"span"},t),c.a.createElement(d.a,{variant:"contained",size:"small",onClick:function(){e((function(e){A().then((function(t){e(ge(null,null,null)),e(Oe(!1))}))}))},sx:{border:"1px solid white",color:"white"}},"Out")):c.a.createElement(o.b,{to:"/login"},c.a.createElement(d.a,{variant:"contained",sx:{border:"1px solid white",color:"white"}},"Login")))))})),_e=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.app.initialised}));return Object(r.useEffect)((function(){e(he())}),[e]),t?(console.log("APP"),c.a.createElement(o.a,null,c.a.createElement(ze,null),c.a.createElement(le.a,{sx:{mt:"5.5rem"}},c.a.createElement("main",null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",element:c.a.createElement(s.a,{to:"/login"})}),c.a.createElement(s.b,{path:"/profile/:userId",element:c.a.createElement(ie,null)}),c.a.createElement(s.b,{path:"/dialogs",element:c.a.createElement(fe,null)}),c.a.createElement(s.b,{path:"/users",element:c.a.createElement(W,null)}),c.a.createElement(s.b,{path:"/login",element:c.a.createElement(je,null)})))))):c.a.createElement(_,null)},We=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,385)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},He=a(74),Be=a(168),Me=a(167),Ve=Object(He.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP-REDUCER/IS-INITIALISED":return Object(j.a)(Object(j.a)({},e),{},{initialised:t.isInitialised});case"APP-REDUCER/IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{fetching:t.isFetching});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD-NEW-POST":var a={id:Object(V.a)(),message:t.text,likeCount:0};return Object(j.a)(Object(j.a)({},e),{},{postsData:[].concat(Object(h.a)(e.postsData),[a])});case"PROFILE/SET-USER-TO-PROFILE-PAGE":return Object(j.a)(Object(j.a)({},e),{},{user:t.user});case"PROFILE/SET-USER-STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS/ADD-NEW-MESSAGE":var a={id:Object(V.a)(),message:t.text};return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[a])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"USERS/UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"USERS/SET-USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"USERS/SET-TOTAL-USERS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"USERS/SET-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"USERS/SET-IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"USERS/SET-FOLLOW-PROGRESS-START":return Object(j.a)(Object(j.a)({},e),{},{followInProgress:[].concat(Object(h.a)(e.followInProgress),[t.id])});case"USERS/SET-FOLLOW-PROGRESS-END":return Object(j.a)(Object(j.a)({},e),{},{followInProgress:e.followInProgress.filter((function(e){return e!==t.id}))});default:return e}},authUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-AUTH":return Object(j.a)(Object(j.a)({},e),{},{email:t.email,login:t.login,id:t.id});case"AUTH/SET-LOGIN-SERVER-ERROR":return Object(j.a)(Object(j.a)({},e),{},{loginServerError:t.error});case"AUTH/SET-IS-AUTH":return Object(j.a)(Object(j.a)({},e),{},{isAuth:t.isAuth});default:return e}}}),qe=Object(He.createStore)(Ve,Object(Me.composeWithDevTools)(Object(He.applyMiddleware)(Be.a)));window.store=qe;var Je=qe;l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:Je},c.a.createElement(_e,null))),document.getElementById("root")),We()},50:function(e,t,a){e.exports=a.p+"static/media/userDef.80d35342.png"}},[[180,1,2]]]);
//# sourceMappingURL=main.3f6aaf10.chunk.js.map