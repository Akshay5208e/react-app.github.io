(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{499:function(e,t,a){e.exports=a(996)},728:function(e,t,a){},983:function(e,t,a){},996:function(e,t,a){"use strict";a.r(t);a(301),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(500),a(501),a(502),a(503),a(504),a(505),a(506),a(507),a(508),a(330),a(509),a(510),a(184),a(511),a(512),a(513),a(514),a(515),a(516),a(517),a(518),a(519),a(520),a(521),a(522),a(523),a(524),a(525),a(527),a(529),a(530),a(339),a(186),a(531),a(532),a(533),a(534),a(535),a(536),a(537),a(538),a(539),a(540),a(541),a(542),a(543),a(544),a(545),a(546),a(344),a(547),a(548),a(549),a(550),a(551),a(552),a(553),a(554),a(555),a(557),a(558),a(560),a(561),a(562),a(563),a(564),a(565),a(566),a(567),a(568),a(569),a(570),a(571),a(572),a(573),a(574),a(575),a(576),a(577),a(578),a(255),a(580),a(581),a(582),a(583),a(584),a(586),a(587),a(588),a(589),a(590),a(591),a(592),a(593),a(594),a(595),a(596),a(356),a(597),a(598),a(257),a(599),a(600),a(601),a(602),a(194),a(603),a(604),a(605),a(606),a(607),a(608),a(609),a(610),a(611),a(612),a(613),a(614),a(615),a(616),a(617),a(618),a(619),a(620),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(628),a(630),a(631),a(632),a(633),a(634),a(635),a(636),a(637),a(638),a(639),a(640),a(641),a(642),a(643),a(644),a(645),a(646),a(647),a(648),a(649),a(650),a(651),a(652),a(653),a(654),a(655),a(656),a(657),a(658),a(659),a(660),a(661),a(662),a(262),a(663),a(664),a(665),a(666),a(667),a(668),a(669),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(379),a(380),a(672),a(673),a(674),a(675),a(676),a(677),a(678),a(679),a(680),a(681),a(682),a(683),a(684),a(685),a(686),a(687),a(689),a(690),a(691),a(692),a(693),a(694),a(695),a(696),a(697),a(698),a(699),a(382),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(391),a(392),a(393),a(394),a(395),a(396),a(397),a(398),a(399),a(400),a(700),a(701),a(702),a(704),a(401),a(402),a(403),a(705),a(706),a(707),a(708),a(709),a(710),a(711),a(712),a(405),a(713),a(714),a(715),a(717),a(407),a(718),a(408);var r=a(0),n=a.n(r),l=a(7),c=a.n(l),i=(a(728),a(108)),o=a(34),s=a.n(o);function u(){return{type:"auth_user",payload:s.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var m=a(56),d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var c=Object(m.c)((function(e){return e.user})),i=Object(m.b)();return Object(r.useEffect)((function(){i(u()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&l.history.push("/"):t&&l.history.push("/login")}))}),[]),n.a.createElement(e,Object.assign({},l,{user:c}))}return l},p=a(60),E=a(98),f=a(18),h=a(76),y=a(998),g=a(21),b=a(140),v=a(997);var O=function(e){return n.a.createElement("div",null,n.a.createElement(v.a,{autoplay:!0},e.images.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("img",{style:{width:"100%",maxHeight:"150px"},src:"http://localhost:5000/".concat(e),alt:"productImage"}))}))))},j=a(1001),w=a(1007),x=j.a.Panel;var S=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(j.a,{defaultActiveKey:["0"]},n.a.createElement(x,{header:"Categories",key:"1"},e.list&&e.list.map((function(t,a){return n.a.createElement(n.a.Fragment,{key:a},n.a.createElement(w.a,{onChange:function(){return function(t){var a=l.indexOf(t),r=Object(E.a)(l);-1===a?r.push(t):r.splice(a,1),c(r),e.handleFilters(r)}(t._id)},type:"checkbox",checked:-1!==l.indexOf(t._id)}),n.a.createElement("span",null,t.name))})))))},_=a(1004),I=j.a.Panel;var k=function(e){var t=Object(r.useState)("0"),a=Object(f.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(j.a,{defaultActiveKey:["0"]},n.a.createElement(I,{header:"price",key:"1"},n.a.createElement(_.a.Group,{onChange:function(t){c(t.target.value),e.handleFilters(t.target.value)},value:l},e.list&&e.list.map((function(e){return n.a.createElement(_.a,{key:e._id,value:"".concat(e._id)},e.name)}))))))},C=[{_id:0,name:"Any",array:[]},{_id:1,name:"Rs.0 to Rs.99",array:[0,99]},{_id:2,name:"Rs.100 to Rs.199",array:[100,199]},{_id:3,name:"Rs.200 to Rs.299",array:[200,299]},{_id:4,name:"Rs.300 to Rs.399",array:[300,399]}],D=[{_id:1,name:"Shirt"},{_id:2,name:"Pants"},{_id:3,name:"Jeans"},{_id:4,name:"T-shirt"},{_id:5,name:"Shoes"},{_id:6,name:"Kurtas"}],P=a(1005),N=P.a.Search;var T=function(e){var t=Object(r.useState)(""),a=Object(f.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(N,{value:l,onChange:function(t){c(t.currentTarget.value),e.refreshFunction(t.currentTarget.value)},placeholder:"Search By Typing..."}))};var q=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),i=Object(f.a)(c,2),o=i[0],u=i[1],m=Object(r.useState)(8),d=Object(f.a)(m,2),v=d[0],j=(d[1],Object(r.useState)(0)),w=Object(f.a)(j,2),x=w[0],_=w[1],I=Object(r.useState)({categories:[],price:[]}),P=Object(f.a)(I,2),N=P[0],q=P[1],R=Object(r.useState)(""),B=Object(f.a)(R,2),F=(B[0],B[1]);Object(r.useEffect)((function(){A({skip:o,limit:v})}),[]);var A=function(e){s.a.post("/api/product/getProducts",e).then((function(t){t.data.success?(e.loadMore?l([].concat(Object(E.a)(a),Object(E.a)(t.data.products))):l(t.data.products),_(t.data.postSize),console.log(t.data.products)):alert("Failed to fetch Product Datas")}))},z=a.map((function(e,t){return n.a.createElement(h.a,{lg:6,md:8,xs:24},n.a.createElement(y.a,{hoverable:!0,cover:n.a.createElement("a",{href:"/product/".concat(e._id)},n.a.createElement(O,{images:e.images}))},n.a.createElement(y.a.Meta,{title:e.title,description:"Rs.".concat(e.price)})))})),L=function(e,t){console.log(e);var a=Object(p.a)({},N);if(a[t]=e,"price"===t){var r=function(e){var t=C,a=[];for(var r in t)console.log("key",r),console.log("value",e),t[r]._id===parseInt(e,10)&&(a=t[r].array);return console.log("array",a),a}(e);a[t]=r}!function(e){A({skip:0,limit:v,filters:e}),u(0)}(a),q(a)};return n.a.createElement("div",{style:{width:"75%",margin:"3rem auto"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"Let's Refresh Wardrobe ",n.a.createElement(g.a,{type:"rocket"}))),n.a.createElement(b.a,{gutter:[16,16]},n.a.createElement(h.a,{lg:12,xs:24},n.a.createElement(S,{list:D,handleFilters:function(e){return L(e,"categories")}})),n.a.createElement(h.a,{lg:12,xs:24},n.a.createElement(k,{list:C,handleFilters:function(e){return L(e,"price")}}))),n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1rem auto"}},n.a.createElement(T,{refreshFunction:function(e){var t={skip:0,limit:v,filters:N,searchTerm:e};u(0),F(e),A(t)}})),0==a.length?n.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,"No Product Like This")):n.a.createElement("div",null,n.a.createElement(b.a,{gutter:[16,16]},z)),n.a.createElement("br",null),n.a.createElement("br",null),x>=v&&n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{onClick:function(){var e=o+v;A({skip:e,limit:v,loadMore:!0}),u(e)}},"Load More")))},R=a(232),B=a(71),F=a(1e3),A=a(999),z=a(299),L=F.a.Title;var H=Object(i.f)((function(e){var t=Object(m.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(r.useState)(""),c=Object(f.a)(l,2),i=c[0],o=c[1],u=Object(r.useState)(a),d=Object(f.a)(u,2),p=d[0],E=d[1],h=function(){E(!p)},y=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(R.a,{initialValues:{email:y,password:""},validationSchema:B.object().shape({email:B.string().email("Email is invalid").required("Email is required"),password:B.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout((function(){var r={email:a.email,password:a.password};t(function(e){return{type:"login_user",payload:s.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(r)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===p?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):o("Check out your Account or Password again")})).catch((function(e){o("Check out your Account or Password again"),setTimeout((function(){o("")}),3e3)})),n(!1)}),500)}},(function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,o=e.handleBlur,s=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement(L,{level:2},"Log In"),n.a.createElement("form",{onSubmit:s,style:{width:"350px"}},n.a.createElement(A.a.Item,{required:!0},n.a.createElement(P.a,{id:"email",prefix:n.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:c,onBlur:o,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(A.a.Item,{required:!0},n.a.createElement(P.a,{id:"password",prefix:n.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:o,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),i&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),n.a.createElement(A.a.Item,null,n.a.createElement(w.a,{id:"rememberMe",onChange:h,checked:p},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement(z.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:s},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))}))})),M=a(175),U=a.n(M),W={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},J={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var K=function(e){var t=Object(m.b)();return n.a.createElement(R.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:B.object().shape({name:B.string().required("Name is required"),lastName:B.string().required("Last Name is required"),email:B.string().email("Email is invalid").required("Email is required"),password:B.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:B.string().oneOf([B.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout((function(){var r={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(U()().unix(),"?d=identicon")};t(function(e){return{type:"register_user",payload:s.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(r)).then((function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)})),n(!1)}),500)}},(function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,i=e.handleBlur,o=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(A.a,Object.assign({style:{minWidth:"375px"}},W,{onSubmit:o}),n.a.createElement(A.a.Item,{required:!0,label:"Name"},n.a.createElement(P.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:c,onBlur:i,className:r.name&&a.name?"text-input error":"text-input"}),r.name&&a.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(A.a.Item,{required:!0,label:"Last Name"},n.a.createElement(P.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:c,onBlur:i,className:r.lastName&&a.lastName?"text-input error":"text-input"}),r.lastName&&a.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(A.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&a.email?"error":"success"},n.a.createElement(P.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:c,onBlur:i,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(A.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&a.password?"error":"success"},n.a.createElement(P.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:i,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(A.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(P.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:c,onBlur:i,className:r.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&a.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(A.a.Item,J,n.a.createElement(z.a,{onClick:o,type:"primary",disabled:l},"Submit"))))}))},V=a(1002),X=V.a.SubMenu,G=V.a.ItemGroup;var Y=function(e){return n.a.createElement(V.a,{mode:e.mode},n.a.createElement(V.a.Item,{key:"mail"},n.a.createElement("a",{href:"/"},"Home")),n.a.createElement(X,{title:n.a.createElement("span",null,"Blogs")},n.a.createElement(G,{title:"Item 1"},n.a.createElement(V.a.Item,{key:"setting:1"},"Option 1"),n.a.createElement(V.a.Item,{key:"setting:2"},"Option 2")),n.a.createElement(G,{title:"Item 2"},n.a.createElement(V.a.Item,{key:"setting:3"},"Option 3"),n.a.createElement(V.a.Item,{key:"setting:4"},"Option 4"))))},Q=a(1008);var Z=Object(i.f)((function(e){var t=Object(m.c)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?n.a.createElement(V.a,{mode:e.mode},n.a.createElement(V.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(V.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(V.a,{mode:e.mode},n.a.createElement(V.a.Item,{key:"history"},n.a.createElement("a",{href:"/history"},"History")),n.a.createElement(V.a.Item,{key:"upload"},n.a.createElement("a",{href:"/product/upload"},"Upload")),n.a.createElement(V.a.Item,{key:"cart",style:{paddingBottom:3}},n.a.createElement(Q.a,{count:t.userData&&t.userData.cart.length},n.a.createElement("a",{href:"/user/cart",style:{marginRight:-22,color:"#667777"}},n.a.createElement(g.a,{type:"shopping-cart",style:{fontSize:30,marginBottom:3}})))),n.a.createElement(V.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){s.a.get("".concat("/api/users","/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),$=a(1003);a(983);var ee=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Logo")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(Y,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(Z,{mode:"horizontal"})),n.a.createElement(z.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},n.a.createElement(g.a,{type:"align-right"})),n.a.createElement($.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},n.a.createElement(Y,{mode:"inline"}),n.a.createElement(Z,{mode:"inline"}))))};var te=function(){return n.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},n.a.createElement("p",null," Happy Coding  ",n.a.createElement(g.a,{type:"smile"})))},ae=a(494);var re=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(ae.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),s.a.post("/api/product/uploadImage",a,{header:{"content-type":"multipart/form-data"}}).then((function(t){t.data.success?(c([].concat(Object(E.a)(l),[t.data.image])),e.refreshFunction([].concat(Object(E.a)(l),[t.data.image]))):alert("Failed to save the Image in Server")}))},multiple:!1,maxSize:1e7},(function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",dispaly:"flex",alignItems:"center",justifyContent:"center",paddingBlockStart:"6rem",paddingInlineStart:"7rem"}},t()),n.a.createElement("input",a()),n.a.createElement(g.a,{type:"plus",style:{fontSize:"3rem"}}))})),n.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map((function(t,a){return n.a.createElement("div",{onClick:function(){return function(t){var a=l.indexOf(t),r=Object(E.a)(l);r.splice(a,1),c(r),e.refreshFunction(r)}(t)}},n.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"http://localhost:5000/".concat(t),alt:"productImg-".concat(t)}))}))))},ne=F.a.Title,le=P.a.TextArea,ce=[{key:1,value:"Shirt"},{key:2,value:"Pants"},{key:3,value:"Jeans"},{key:4,value:"T-shirt"},{key:5,value:"Shoes"},{key:6,value:"Kurtas"}];var ie=function(e){var t=Object(r.useState)(" "),a=Object(f.a)(t,2),l=a[0],c=a[1],i=Object(r.useState)(" "),o=Object(f.a)(i,2),u=o[0],m=o[1],d=Object(r.useState)(0),p=Object(f.a)(d,2),E=p[0],h=p[1],y=Object(r.useState)([]),g=Object(f.a)(y,2),b=g[0],v=g[1],O=Object(r.useState)(1),j=Object(f.a)(O,2),w=j[0],x=j[1],S=function(t){t.preventDefault(),l&&u&&E&&b&&w||alert("Please fill all the required fields");var a={writer:e.user.userData._id,title:l,description:u,price:E,images:b};s.a.post("/api/product/uploadProduct",a).then((function(t){t.data.success?(alert("Product Successfully Uploaded"),e.history.push("/")):alert("Failed to upload Product")}))};return n.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},n.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},n.a.createElement(ne,{level:2},"Upload the product")),n.a.createElement(A.a,{onSubmit:S},n.a.createElement(re,{refreshFunction:function(e){v(e)}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Title"),n.a.createElement(P.a,{onChange:function(e){c(e.currentTarget.value)},value:l}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Description"),n.a.createElement(le,{onChange:function(e){m(e.currentTarget.value)},value:u}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",null,"Price"),n.a.createElement(P.a,{onChange:function(e){h(e.currentTarget.value)},value:E,type:"number"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("select",{onChange:function(e){x(e.currentTarget.value)}},ce.map((function(e){return n.a.createElement("option",{key:e.key,value:e.key},e.value)}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(z.a,{onClick:S},"Submit")))},oe=a(487),se=a.n(oe);var ue=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)((function(){if(e.detail.images&&e.detail.images.length>0){var t=[];e.detail.images&&e.detail.images.map((function(e){t.push({original:"http://localhost:5000/".concat(e),thumbnail:"http://localhost:5000/".concat(e)})})),c(t)}}),[e.detail]),n.a.createElement("div",null,n.a.createElement(se.a,{items:l}))},me=a(1009);var de=function(e){var t=Object(r.useState)({}),a=Object(f.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)((function(){c(e.detail)}),[e.detail]),n.a.createElement("div",null,n.a.createElement(me.a,{title:"Product Info"},n.a.createElement(me.a.Item,{label:"Price"}," ",l.price),n.a.createElement(me.a.Item,{label:"Sold"},l.sold),n.a.createElement(me.a.Item,{label:"View"}," ",l.views),n.a.createElement(me.a.Item,{label:"Description"}," ",l.description)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement(z.a,{size:"large",shape:"round",type:"danger",onClick:function(){e.addToCart(e.detail._id)}},"Add to Cart")))};var pe=function(e){var t=Object(m.b)(),a=e.match.params.productId,l=Object(r.useState)([]),c=Object(f.a)(l,2),i=c[0],o=c[1];return Object(r.useEffect)((function(){s.a.get("/api/product/products_by_id?id=".concat(a,"&type=single")).then((function(e){o(e.data[0])}))}),[]),n.a.createElement("div",{className:"postPage",style:{width:"100%",padding:"3rem 4rem"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("h1",null,i.title)),n.a.createElement("br",null),n.a.createElement(b.a,{gutter:[16,16]},n.a.createElement(h.a,{lg:12,xs:24},n.a.createElement(ue,{detail:i})),n.a.createElement(h.a,{lg:12,xs:24},n.a.createElement(de,{addToCart:function(e){var a;t((a=e,{type:"add_to_cart_user",payload:s.a.get("".concat("/api/users","/addToCart?productId=").concat(a)).then((function(e){return e.data}))}))},detail:i}))))};var Ee=function(e){var t=function(e){if(e.length>0){var t=e[0];return"http://localhost:5000/".concat(t)}};return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Image"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Remove from Cart"))),n.a.createElement("tbody",null,e.products&&e.products.map((function(a){return n.a.createElement("tr",{key:a._id},n.a.createElement("td",null,n.a.createElement("img",{style:{width:"70px"},alt:"product",src:t(a.images)})),n.a.createElement("td",null,a.quantity," EA"),n.a.createElement("td",null,"Rs. ",a.price," "),n.a.createElement("td",null,n.a.createElement("button",{onClick:function(){return e.removeItem(a._id)}},"Remove ")," "))})))))},fe=a(1006),he=a(141),ye=a(488),ge=a(489),be=a(493),ve=a(496),Oe=a(490),je=a.n(Oe),we=function(e){Object(ve.a)(a,e);var t=Object(be.a)(a);function a(){return Object(ye.a)(this,a),t.apply(this,arguments)}return Object(ge.a)(a,[{key:"render",value:function(){var e=this,t=this.props.toPay;return n.a.createElement(je.a,{env:"sandbox",client:{sandbox:"AeHihIJ2Gimz3hsFIR7OzR8czD0wqsfzBYfKqUmRAYZHEW1sTtJJ6RbkeAucP54WsPHVOHK7UEEA2B9N",production:"YOUR-PRODUCTION-APP-ID"},currency:"INR",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.onSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect",label:"checkout"}})}}]),a}(n.a.Component);var xe=function(e){var t=Object(m.b)(),a=Object(r.useState)(0),l=Object(f.a)(a,2),c=l[0],i=l[1],o=Object(r.useState)(!1),u=Object(f.a)(o,2),d=u[0],p=u[1],E=Object(r.useState)(!1),h=Object(f.a)(E,2),y=h[0],g=h[1];Object(r.useEffect)((function(){var a=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach((function(e){a.push(e.id)})),t(function(e,t){return{type:"get_cart_items_user",payload:s.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then((function(e){return t.forEach((function(t){e.data.forEach((function(a,r){t.id===a._id&&(e.data[r].quantity=t.quantity)}))})),e.data}))}}(a,e.user.userData.cart)))}),[e.user.userData]),Object(r.useEffect)((function(){e.user.cartDetail&&e.user.cartDetail.length>0&&(b(e.user.cartDetail),p(!0))}),[e.user.cartDetail]);var b=function(e){var t=0;e.map((function(e){t+=parseInt(e.price,10)*e.quantity})),i(t)};return n.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},n.a.createElement("h1",null,"My Cart"),n.a.createElement("div",null,n.a.createElement(Ee,{products:e.user.cartDetail,removeItem:function(e){var a;t((a=e,{type:"remove_cart_item_user",payload:s.a.get("/api/users/removeFromCart?_id=".concat(a)).then((function(e){return e.data.cart.forEach((function(t){e.data.cartDetail.forEach((function(a,r){t.id===a._id&&(e.data.cartDetail[r].quantity=t.quantity)}))})),e.data}))})).then((function(){s.a.get("/api/users/userCartInfo").then((function(e){e.data.success?e.data.cartDetail.length<=0?p(!1):b(e.data.cartDetail):alert("Failed to get cart info")}))}))}}),d?n.a.createElement("div",{style:{marginTop:"3rem"}},n.a.createElement("h2",null,"Total Amount: Rs.",c)):y?n.a.createElement(fe.a,{status:"success",title:"Successfully purchased Items"}):n.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(he.a,{description:!1}),n.a.createElement("p",null,"No Items In The Cart "))),d&&n.a.createElement(we,{toPay:c,onSuccess:function(a){var r={cartDetail:e.user.cartDetail,paymentData:a};s.a.post("/api/users/successBuy",r).then((function(r){r.payload.success?(g(!0),p(!1),t(function(e){return{type:"on_success_buy_user",payload:s.a.post("".concat("/api/users","/successBuy"),e).then((function(e){return e.data}))}}({cartDetail:e.user.cartDetail,paymentData:a}))):alert("failed to buy it")}))},transactionError:function(){console.log("Paypal error")},transactionCanceled:function(){console.log("Transaction canceled")}}))};var Se=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)((function(){s.a.get("/api/users/getHistory").then((function(e){e.data.success?c(e.data.history):alert("Failed to get History")}))}),[]),n.a.createElement("div",{style:{width:"80%",margin:"3rem auto"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h1",null,"History")),n.a.createElement("br",null),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Payment Id"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Date of Purchase"))),n.a.createElement("tbody",null,l.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.id),n.a.createElement("td",null,e.price),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.dateOfPurchase))})))))};var _e=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(ee,null),n.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:d(q,null)}),n.a.createElement(i.a,{exact:!0,path:"/login",component:d(H,!1)}),n.a.createElement(i.a,{exact:!0,path:"/register",component:d(K,!1)}),n.a.createElement(i.a,{exact:!0,path:"/product/upload",component:d(ie,!0)}),n.a.createElement(i.a,{exact:!0,path:"/product/:productId",component:d(pe,null)}),n.a.createElement(i.a,{exact:!0,path:"/user/cart",component:d(xe,!0)}),n.a.createElement(i.a,{exact:!0,path:"/history",component:d(Se,!0)}))),n.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(169),ke=a(123),Ce=Object(ke.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(p.a)({},e,{register:t.payload});case"login_user":return Object(p.a)({},e,{loginSucces:t.payload});case"auth_user":return Object(p.a)({},e,{userData:t.payload});case"logout_user":return Object(p.a)({},e);case"add_to_cart_user":return Object(p.a)({},e,{userData:Object(p.a)({},e.userData,{cart:t.payload})});case"get_cart_items_user":return Object(p.a)({},e,{cartDetail:t.payload});case"remove_cart_item_user":return Object(p.a)({},e,{cartDetail:t.payload.cartDetail,userData:Object(p.a)({},e.userData,{cart:t.payload.cart})});case"on_success_buy_user":return Object(p.a)({},e,{userData:Object(p.a)({},e.userData,{cart:t.payload.cart}),cartDetail:t.payload.cartDetail});default:return e}}}),De=a(491),Pe=a.n(De),Ne=a(492),Te=Object(ke.a)(Pe.a,Ne.a)(ke.d);c.a.render(n.a.createElement(m.a,{store:Te(Ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(Ie.a,null,n.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[499,1,2]]]);
//# sourceMappingURL=main.ce25c146.chunk.js.map