webpackJsonp([1],{102:function(t,e,s){"use strict";e.a=function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}},103:function(t,e,s){"use strict";e.a={apiKey:"AIzaSyDW6wG6cUdjMZfDtCZFuw8rphd00TsotxA",authDomain:"drm-app-e6869.firebaseapp.com",databaseURL:"https://drm-app-e6869.firebaseio.com",projectId:"drm-app-e6869",storageBucket:"drm-app-e6869.appspot.com",messagingSenderId:"474362826095"}},104:function(t,e,s){"use strict";var r=s(32),i=s(259),a=s(239),n=s.n(a),o=s(242),l=s.n(o),u=s(240),c=s.n(u),d=s(243),p=s.n(d),v=s(245),f=s.n(v),m=s(244),g=s.n(m),h=s(241),_=s.n(h),x=s(188);r.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/meetups",name:"Meetups",component:l.a},{path:"/meetup/new",name:"CreateMeetup",component:c.a,beforeEnter:x.a},{path:"/meetups/:id",name:"Meetup",props:!0,component:_.a},{path:"/profile",name:"Profile",component:p.a,beforeEnter:x.a},{path:"/signup",name:"Signup",component:f.a},{path:"/signin",name:"Signin",component:g.a}],mode:"history"})},105:function(t,e,s){s(230);var r=s(5)(s(192),s(246),null,null);t.exports=r.exports},106:function(t,e,s){var r=s(5)(s(195),s(253),null,null);t.exports=r.exports},107:function(t,e,s){var r=s(5)(s(196),s(247),null,null);t.exports=r.exports},108:function(t,e,s){var r=s(5)(s(197),s(252),null,null);t.exports=r.exports},109:function(t,e,s){var r=s(5)(s(200),s(250),null,null);t.exports=r.exports},110:function(t,e,s){var r=s(5)(s(201),s(254),null,null);t.exports=r.exports},187:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(32),i=s(111),a=s.n(i),n=s(105),o=s.n(n),l=s(31),u=(s.n(l),s(104)),c=s(51),d=s(102),p=s(110),v=s.n(p),f=s(107),m=s.n(f),g=s(106),h=s.n(g),_=s(108),x=s.n(_),w=s(109),b=s.n(w),y=s(103);r.a.use(a.a),r.a.config.productionTip=!1,r.a.filter("date",d.a),r.a.component("app-alert",v.a),r.a.component("app-edit-meetup-details-dialog",m.a),r.a.component("app-edit-meetup-date-dialog",h.a),r.a.component("app-edit-meetup-time-dialog",x.a),r.a.component("app-meetup-register-dialog",b.a),new r.a({el:"#app",router:u.a,store:c.a,render:function(t){return t(o.a)},created:function(){var t=this;console.log("on the created app hook"+y.a),console.log({FirebaseConfig:y.a}),l.initializeApp({apiKey:"AIzaSyDW6wG6cUdjMZfDtCZFuw8rphd00TsotxA",authDomain:"drm-app-e6869.firebaseapp.com",databaseURL:"https://drm-app-e6869.firebaseio.com",projectId:"drm-app-e6869",storageBucket:"drm-app-e6869.appspot.com",messagingSenderId:"474362826095"}),l.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},188:function(t,e,s){"use strict";var r=s(51);e.a=function(t,e,s){r.a.getters.user?s():s("/signin")}},189:function(t,e,s){"use strict";var r=s(206),i=s.n(r),a=s(31);s.n(a);e.a={state:{loadedMeetups:[{imageUrl:"https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",id:"afajfjadfaadfa323",title:"Meetup in New York",date:new Date,location:"New York",description:"New York, New York!"},{imageUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg",id:"aadsfhbkhlk1241",title:"Meetup in Paris",date:new Date,location:"Paris",description:"It's Paris!"}]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetup:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date)}},actions:{loadMeetups:function(t){var e=t.commit;e("setLoading",!0),a.database().ref("meetups").once("value").then(function(t){var s=[],r=t.val();for(var i in r)s.push({id:i,title:r[i].title,description:r[i].description,imageUrl:r[i].imageUrl,date:r[i].date,location:r[i].location,creatorId:r[i].creatorId});e("setLoadedMeetups",s),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},createMeetup:function(t,e){var s=t.commit,r=t.getters,n={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:r.user.id},o=void 0,l=void 0;a.database().ref("meetups").push(n).then(function(t){return l=t.key}).then(function(t){var s=e.image.name,r=s.slice(s.lastIndexOf("."));return a.storage().ref("meetups/"+t+"."+r).put(e.image)}).then(function(t){return o=t.metadata.downloadURLs[0],a.database().ref("meetups").child(l).update({imageUrl:o})}).then(function(){s("createMeetup",i()({},n,{imageUrl:o,id:l}))}).catch(function(t){console.log(t)})},updateMeetupData:function(t,e){var s=t.commit;s("setLoading",!0);var r={};e.title&&(r.title=e.title),e.description&&(r.description=e.description),e.date&&(r.date=e.date),a.database().ref("meetups").child(e.id).update(r).then(function(){s("setLoading",!1),s("updateMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}}},190:function(t,e,s){"use strict";e.a={state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}},191:function(t,e,s){"use strict";var r=s(205),i=s.n(r),a=s(31);s.n(a);e.a={state:{user:null},mutations:{registerUserForMeetup:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===s})>=0||(t.user.registeredMeetups.push(s),t.user.fbKeys[s]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var s=t.user.registeredMeetups;s.splice(s.findIndex(function(t){return t.id===e}),1),i()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var i=r.user;a.database().ref("/users/"+i.id).child("/registrations/").push(e).then(function(t){s("setLoading",!1),s("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),s("setLoading",!1)})},unregisterUserFromMeetup:function(t,e){var s=t.commit,r=t.getters;s("setLoading",!0);var i=r.user;if(i.fbKeys){var n=i.fbKeys[e];a.database().ref("/users/"+i.id+"/registrations/").child(n).remove().then(function(){s("setLoading",!1),s("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("setLoading",!0),a.database().ref("/users/"+s.user.id+"/registrations/").once("value").then(function(t){var r=t.val(),i=[],a={};for(var n in r)i.push(r[n]),a[r[n]]=n;var o={id:s.user.id,registeredMeetups:i,fbKeys:a};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;a.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}}},192:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"supervisor_account",title:"View Assessments",link:"/meetups"},{icon:"room",title:"Create New Risk Assessment",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}}},193:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}}},194:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:new Date,time:new Date,image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},submittableDateTime:function(){var t=new Date(this.date);if("string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1],s=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submittableDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,s=t.target.files;if(s[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file!");var r=new FileReader;r.addEventListener("load",function(){e.imageUrl=r.result}),r.readAsDataURL(s[0]),this.image=s[0]}}}},195:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),s=new Date(this.editableDate).getUTCMonth(),r=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(s),t.setUTCFullYear(r),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){this.editableDate=new Date(this.meetup.date)}}},196:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}}},197:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[1],s=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){this.editableTime=new Date(this.meetup.date).toTimeString()}}},198:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}}},199:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{meetups:function(){return this.$store.getters.loadedMeetups}}}},200:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}}},201:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}}},202:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}}},203:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}}},230:function(t,e){},231:function(t,e){},239:function(t,e,s){s(231);var r=s(5)(s(193),s(248),"data-v-23899472",null);t.exports=r.exports},240:function(t,e,s){var r=s(5)(s(194),s(249),null,null);t.exports=r.exports},241:function(t,e,s){var r=s(5)(s(198),s(251),null,null);t.exports=r.exports},242:function(t,e,s){var r=s(5)(s(199),s(258),null,null);t.exports=r.exports},243:function(t,e,s){var r=s(5)(null,s(257),null,null);t.exports=r.exports},244:function(t,e,s){var r=s(5)(s(202),s(256),null,null);t.exports=r.exports},245:function(t,e,s){var r=s(5)(s(203),s(255),null,null);t.exports=r.exports},246:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userIsAuthenticated?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("exit_to_app")])],1),t._v(" "),s("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up ",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Dolomite Risk Web App")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n\n      ")],1)}),t._v(" "),t.userIsAuthenticated?s("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n\n      ")],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1)],1)},staticRenderFns:[]}},247:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",fab:"",accent:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Assessment")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},248:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetups"}},[t._v("Explore Assessments and Reports")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetup/new"}},[t._v("Create Dolomite Risk Assessment")])],1)],1),t._v(" "),s("v-layout",[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},on:{click:function(s){t.onLoadMeetup(e.id)}}},[s("div",{staticClass:"title"},[t._v("\n            "+t._s(e.title)+"\n          ")])])}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("p",[t._v("Create Your Dolomite Risk Assessment On Our App")])])],1)],1)},staticRenderFns:[]}},249:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Create a new Assessment ")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("form",{on:{submit:function(e){e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("img",{attrs:{src:t.imageUrl,height:"150"}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Choose a Data & Time")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-time-picker",{attrs:{format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create Assessment")])],1)],1)],1)])],1)],1)},staticRenderFns:[]}},250:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[s("v-btn",{attrs:{slot:"activator",primary:"",accent:""},slot:"activator"},[t._v("\n    "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?s("v-card-title",[t._v("Unregister from Assessment?")]):s("v-card-title",[t._v("Register for Assessment Notifications?")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[t._v("You can always change your decision later on.")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")]),t._v(" "),s("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgree}},[t._v("Confirm")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},251:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",width:7,size:70}})],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h6",{staticClass:"primary--text"},[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsCreator?[s("v-spacer"),t._v(" "),s("app-edit-meetup-details-dialog",{attrs:{meetup:t.meetup}})]:t._e()],2),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"info--text"},[t._v(t._s(t._f("date")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("div",[t.userIsCreator?s("app-edit-meetup-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator?s("app-edit-meetup-time-dialog",{attrs:{meetup:t.meetup}}):t._e()],1),t._v(" "),s("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?s("app-meetup-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]}},252:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{accent:"",scope:"activator"}},[t._v("\n    Edit Time\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Assessment Time")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-time-picker",{staticStyle:{width:"100%"},attrs:{actions:"",format:"24hr"},model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}},[[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("Save")])]],2)],1)],1)],1)],1)],1)},staticRenderFns:[]}},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    Edit Date\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Assessment Date")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-date-picker",{staticStyle:{width:"100%"},attrs:{actions:""},model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}},[[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("Save")])]],2)],1)],1)],1)],1)],1)},staticRenderFns:[]}},254:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:t.onClose}},[t._v("\n  "+t._s(t.text)+"\n")])},staticRenderFns:[]}},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                    Sign up\n                     "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}},256:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignin(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                    Sign in\n                     "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}},257:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("The User Page")])])}]}},258:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[s("v-card",{staticClass:"info"},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[s("v-card-media",{attrs:{src:e.imageUrl,height:"130px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h5",{staticClass:"white--text mb-0"},[t._v(t._s(e.title))]),t._v(" "),s("div",[t._v(t._s(t._f("date")(e.date)))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\n                  View Assessment\n                ")],1)],1)],1)],1)],1)],1)],1)],1)}))},staticRenderFns:[]}},51:function(t,e,s){"use strict";s.d(e,"a",function(){return l});var r=s(32),i=s(261),a=s(189),n=s(191),o=s(190);r.a.use(i.a);var l=new i.a.Store({modules:{meetup:a.a,user:n.a,shared:o.a}})}},[187]);
//# sourceMappingURL=app.6f94cd70a35ce32ee214.js.map