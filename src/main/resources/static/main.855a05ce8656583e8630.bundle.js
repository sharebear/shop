webpackJsonp([0,3],{1113:function(t,n,e){t.exports=e(528)},188:function(t,n,e){"use strict";var i=e(0),o=e(124),a=e(858);e.n(a);e.d(n,"a",function(){return c});var r=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},d=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=function(){function t(t){this.http=t,this.userUrl="/rest/user",this.userLogin="login.htm"}return t.prototype.getUser=function(){return this.http.get(this.userUrl).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){return console.log("An error occurred",t),a.Observable.throw(t.json().error||"Server error")},t=r([e.i(i.R)(),d("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.a&&o.a)&&n||Object])],t);var n}()},449:function(t,n,e){"use strict";var i=e(0);e.d(n,"a",function(){return r});var o=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){}return t.prototype.ngOnInit=function(){},t.prototype.openCode=function(){window.location.href="https://github.com/reflexdemon/shop"},t=o([e.i(i.G)({selector:"app-home",template:e(852),styles:[e(846)]}),a("design:paramtypes",[])],t)}()},450:function(t,n,e){"use strict";var i=e(0),o=e(188);e.d(n,"a",function(){return d});var a=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},r=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},d=function(){function t(t){this.userService=t}return t.prototype.ngOnInit=function(){},t.prototype.login=function(t,n){console.log("Login clicked!")},t=a([e.i(i.G)({selector:"app-login",template:e(853),styles:[e(847)]}),r("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.a&&o.a)&&n||Object])],t);var n}()},451:function(t,n,e){"use strict";var i=e(0),o=e(262);e.d(n,"a",function(){return c}),e.d(n,"b",function(){return s});var a=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},r=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},d=this&&this.__param||function(t,n){return function(e,i){n(e,i,t)}},c=function(){function t(t,n){var e=this;this._dialog=t,this._snackbar=n,this.foods=[{name:"Pizza",rating:"Excellent"},{name:"Burritos",rating:"Great"},{name:"French fries",rating:"Pretty good"}],this.progress=0,setInterval(function(){e.progress=(e.progress+Math.floor(4*Math.random())+1)%100},200)}return t.prototype.ngOnInit=function(){},t.prototype.openDialog=function(){var t=this,n=this._dialog.open(s);n.afterClosed().subscribe(function(n){t.lastDialogResult=n})},t.prototype.showSnackbar=function(){this._snackbar.open("YUM SNACKS","CHEW")},t=a([e.i(i.G)({selector:"app-lost",template:e(854),styles:[e(848)]}),r("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.MdDialog&&o.MdDialog)&&n||Object,"function"==typeof(d="undefined"!=typeof o.MdSnackBar&&o.MdSnackBar)&&d||Object])],t);var n,d}(),s=function(){function t(t){this.dialogRef=t}return t=a([e.i(i.G)({template:'\n    <p>This is a dialog</p>\n    <p>\n      <label>\n        This is a text box inside of a dialog.\n        <input #dialogInput>\n      </label>\n    </p>\n    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>\n  '}),d(0,e.i(i.x)()),r("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.MdDialogRef&&o.MdDialogRef)&&n||Object])],t);var n}()},452:function(t,n,e){"use strict";var i=e(0);e.d(n,"a",function(){return r});var o=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){}return t.prototype.ngOnInit=function(){this.gotoAPI()},t.prototype.gotoAPI=function(){console.log("Click tot API received.",window.location),window.location.href="/swagger-ui.html"},t=o([e.i(i.G)({selector:"redirect",template:"redirecting..."}),a("design:paramtypes",[])],t)}()},453:function(t,n,e){"use strict";var i=e(0),o=e(188);e.d(n,"a",function(){return d});var a=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},r=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},d=function(){function t(t){var n=this;t.getUser().subscribe(function(t){return console.log("User:",t),n.user=t},function(t){console.log("Problem!!!",t)})}return t.prototype.ngOnInit=function(){},t=a([e.i(i.G)({selector:"app-profile",template:e(855),styles:[e(849)]}),r("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.a&&o.a)&&n||Object])],t);var n}()},454:function(t,n,e){"use strict";var i=e(0);e.d(n,"a",function(){return r});var o=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},r=function(){function t(){this.tags=["Gold","Silver","Bronze"]}return t.prototype.ngOnInit=function(){},t=o([e.i(i.G)({selector:"app-sign-up",template:e(856),styles:[e(850)]}),a("design:paramtypes",[])],t)}()},527:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=527},528:function(t,n,e){"use strict";var i=e(692),o=(e.n(i),e(657)),a=e(0),r=e(691),d=e(688);r.a.production&&e.i(a._40)(),e.i(o.a)().bootstrapModule(d.a)},687:function(t,n,e){"use strict";var i=e(0),o=e(188);e.d(n,"a",function(){return d});var a=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},r=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},d=function(){function t(t){var n=this;this.title="Shop",this.isDarkTheme=!1,this.user={id:"9439842e-8fb3-42d5-af5c-b0f74cc74c0c",firstName:"anonymous",lastName:"anonymous",organization:null,email:null,phone:null,mobile:null,pricingTag:null,username:"anonymousUser",password:null,authorities:null,accountNonExpired:!0,accountNonLocked:!0,credentialsNonExpired:!0,enabled:!0},this.dummy={id:"9439842e-8fb3-42d5-af5c-b0f74cc74c0c",firstName:"anonymous",lastName:"anonymous",organization:null,email:null,phone:null,mobile:null,pricingTag:null,username:"anonymousUser",password:null,authorities:null,accountNonExpired:!0,accountNonLocked:!0,credentialsNonExpired:!0,enabled:!0},t.getUser().subscribe(function(t){return console.log("User:",t),n.user=t},function(t){return console.log("Problem!!!",t),n.dummy})}return t.prototype.isAnonymous=function(){return"anonymous"===this.user.firstName},t.prototype.ngOnInit=function(){},t=a([e.i(i.G)({selector:"app-root",template:e(851),styles:[e(845)]}),r("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.a&&o.a)&&n||Object])],t);var n}()},688:function(t,n,e){"use strict";var i=e(55),o=e(0),a=e(46),r=e(124),d=e(262),c=e(492),s=(e.n(c),e(687)),p=e(690),l=e(449),u=e(451),m=e(452),f=e(450),g=e(454),h=e(188),b=e(689);e.d(n,"a",function(){return v});var y=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},x=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},v=function(){function t(){}return t=y([e.i(o.I)({declarations:[s.a,u.b,l.a,u.a,m.a,f.a,g.a],imports:[i.e,a.b,r.b,d.MaterialModule.forRoot(),p.a,b.a],entryComponents:[u.b],providers:[h.a],bootstrap:[s.a]}),x("design:paramtypes",[])],t)}()},689:function(t,n,e){"use strict";var i=e(55),o=e(0),a=e(46),r=e(124),d=e(262),c=e(492),s=(e.n(c),e(22)),p=e(453);e.d(n,"a",function(){return m});var l=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},u=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},m=function(){function t(){}return t=l([e.i(o.I)({imports:[i.e,a.b,r.b,s.b,d.MaterialModule],declarations:[p.a]}),u("design:paramtypes",[])],t)}()},690:function(t,n,e){"use strict";var i=e(0),o=e(677),a=e(449),r=e(451),d=e(450),c=e(452),s=e(454),p=e(453);e.d(n,"a",function(){return f});var l=this&&this.__decorate||function(t,n,e,i){var o,a=arguments.length,r=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(r=(a<3?o(r):a>3?o(n,e,r):o(n,e))||r);return a>3&&r&&Object.defineProperty(n,e,r),r},u=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},m=[{path:"",component:a.a},{path:"page",component:c.a},{path:"loginpage",component:d.a},{path:"signup",component:s.a},{path:"profile",component:p.a},{path:"**",component:r.a}],f=function(){function t(){}return t=l([e.i(i.I)({imports:[o.a.forRoot(m,{useHash:!1})],exports:[o.a]}),u("design:paramtypes",[])],t)}()},691:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i={production:!0}},692:function(t,n,e){"use strict";var i=e(706),o=(e.n(i),e(699)),a=(e.n(o),e(695)),r=(e.n(a),e(701)),d=(e.n(r),e(700)),c=(e.n(d),e(698)),s=(e.n(c),e(697)),p=(e.n(s),e(705)),l=(e.n(p),e(694)),u=(e.n(l),e(693)),m=(e.n(u),e(703)),f=(e.n(m),e(696)),g=(e.n(f),e(704)),h=(e.n(g),e(702)),b=(e.n(h),e(707)),y=(e.n(b),e(1112));e.n(y)},845:function(t,n){t.exports="html,body,app-root,.md-sidenav-container{height:100%;margin:0px;padding:0px}.app-container,.md-sidenav-container{width:100%;height:100vh}md-sidenav-layout.m2app-dark{background:black}.app-content{padding:20px}.app-sidenav{padding:10px;min-width:100px}.app-toolbar-menu{padding:0 14px 0 14px;color:white}.app-toolbar-filler{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.app-icon-button{box-shadow:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:none;border:none;cursor:pointer;-webkit-filter:none;filter:none;font-weight:normal;height:auto;line-height:inherit;margin:0;min-width:0;padding:0;text-align:left;text-decoration:none}.app-action{display:inline-block;position:fixed;bottom:20px;right:20px}.app-spinner{height:30px;width:30px;display:inline-block}.app-input-icon{font-size:16px}.app-list{border:1px solid rgba(0,0,0,0.12);width:350px;margin:20px}.app-progress{margin:20px}\n"},846:function(t,n){t.exports=""},847:function(t,n){t.exports="html,body,app-root,.md-sidenav-container{height:100%;margin:0px;padding:0px}.app-container,.md-sidenav-container{width:100%;height:100vh}md-sidenav-layout.m2app-dark{background:black}.app-content{padding:20px}.app-sidenav{padding:10px;min-width:100px}.app-toolbar-menu{padding:0 14px 0 14px;color:white}.app-toolbar-filler{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.app-icon-button{box-shadow:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:none;border:none;cursor:pointer;-webkit-filter:none;filter:none;font-weight:normal;height:auto;line-height:inherit;margin:0;min-width:0;padding:0;text-align:left;text-decoration:none}.app-action{display:inline-block;position:fixed;bottom:20px;right:20px}.app-spinner{height:30px;width:30px;display:inline-block}.app-input-icon{font-size:16px}.app-list{border:1px solid rgba(0,0,0,0.12);width:350px;margin:20px}.app-progress{margin:20px}.login-card{width:300px}.login-form{-ms-flex-line-pack:center;align-content:center}\n"},848:function(t,n){t.exports="html,body,app-root,.md-sidenav-container{height:100%;margin:0px;padding:0px}.app-container,.md-sidenav-container{width:100%;height:100vh}md-sidenav-layout.m2app-dark{background:black}.app-content{padding:20px}.app-sidenav{padding:10px;min-width:100px}.app-toolbar-menu{padding:0 14px 0 14px;color:white}.app-toolbar-filler{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.app-icon-button{box-shadow:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:none;border:none;cursor:pointer;-webkit-filter:none;filter:none;font-weight:normal;height:auto;line-height:inherit;margin:0;min-width:0;padding:0;text-align:left;text-decoration:none}.app-action{display:inline-block;position:fixed;bottom:20px;right:20px}.app-spinner{height:30px;width:30px;display:inline-block}.app-input-icon{font-size:16px}.app-list{border:1px solid rgba(0,0,0,0.12);width:350px;margin:20px}.app-progress{margin:20px}md-card{margin:20px}md-checkbox{margin:10px}\n"},849:function(t,n){t.exports=""},850:function(t,n){t.exports="html,body,app-root,.md-sidenav-container{height:100%;margin:0px;padding:0px}.app-container,.md-sidenav-container{width:100%;height:100vh}md-sidenav-layout.m2app-dark{background:black}.app-content{padding:20px}.app-sidenav{padding:10px;min-width:100px}.app-toolbar-menu{padding:0 14px 0 14px;color:white}.app-toolbar-filler{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.app-icon-button{box-shadow:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:none;border:none;cursor:pointer;-webkit-filter:none;filter:none;font-weight:normal;height:auto;line-height:inherit;margin:0;min-width:0;padding:0;text-align:left;text-decoration:none}.app-action{display:inline-block;position:fixed;bottom:20px;right:20px}.app-spinner{height:30px;width:30px;display:inline-block}.app-input-icon{font-size:16px}.app-list{border:1px solid rgba(0,0,0,0.12);width:350px;margin:20px}.app-progress{margin:20px}md-card{margin:20px}md-checkbox{margin:10px}.signup-radio-group{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.signup-radio-button{margin:5px}.signup-selected-value{margin:15px 0}.signup-form{width:500px}.signup-full-width{width:100%}\n"},851:function(t,n){t.exports='<md-sidenav-layout [class.m2app-dark]="isDarkTheme">\n\n  <md-sidenav #sidenav mode="over" class="app-sidenav">\n    <!-- sidenav content -->\n    <h2>Menu</h2>\n    <md-list>\n      <md-list-item><a (click)="sidenav.toggle()" routerLink="/" routerLinkActive="active">Home</a></md-list-item>\n      <md-list-item><a (click)="sidenav.toggle()" routerLink="/lost" routerLinkActive="active">404</a></md-list-item>\n      <md-list-item *ngIf="isAnonymous()"><a (click)="sidenav.toggle()" routerLink="/loginpage" routerLinkActive="active">Sign In</a></md-list-item>\n      <md-list-item><a (click)="sidenav.toggle()" href="https://github.com/reflexdemon/shop">Git Hub</a></md-list-item>\n\n      <md-list-item *ngIf="!isAnonymous()"><a (click)="sidenav.toggle()" routerLink="/profile" routerLinkActive="active">View Profile</a></md-list-item>\n      <md-list-item *ngIf="!isAnonymous()"><a (click)="sidenav.toggle()" href="/swagger-ui.html">API Access</a></md-list-item>\n      <md-list-item *ngIf="!isAnonymous()"><a (click)="sidenav.toggle()" href="/logout">Sign Out</a></md-list-item>\n    </md-list>\n  </md-sidenav>\n\n  <md-toolbar color="primary">\n    <button class="app-icon-button" (click)="sidenav.toggle()">\n      <i class="material-icons app-toolbar-menu">menu</i>\n    </button>\n    {{title}}\n    <span class="app-toolbar-filler"></span>\n    <button md-icon-button [mdMenuTriggerFor]="menu">\n      <md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #menu="mdMenu">\n      <button md-menu-item>\n        <md-icon>dialpad</md-icon>\n        <span>Redial</span>\n      </button>\n      <button md-menu-item disabled>\n        <md-icon>voicemail</md-icon>\n        <span>Check voicemail</span>\n      </button>\n      <button md-menu-item>\n        <md-icon>notifications_off</md-icon>\n        <span>Disable alerts</span>\n      </button>\n    </md-menu>\n\n    <!-- <button md-button (click)="isDarkTheme = !isDarkTheme">TOGGLE DARK THEME</button> -->\n    <!-- Anonymous  User-->\n    <p *ngIf="isAnonymous()">\n      <a routerLink="/loginpage" routerLinkActive="active" md-button>Sign In</a>\n      <a routerLink="/signup" routerLinkActive="active" md-button>Sign Up</a>\n    </p>\n\n    <!-- Logged In User-->\n    <p *ngIf="!isAnonymous()">Welcome, {{user.firstName}} <a href="/logout" md-button>Sign Out</a></p>\n  </md-toolbar>\n\n  <div class="app-content">\n    <router-outlet></router-outlet>\n  </div>\n\n</md-sidenav-layout>\n\n<!-- <span class="app-action" [class.m2app-dark]="isDarkTheme">\n  <button md-fab><md-icon>check circle</md-icon></button>\n</span> -->\n'},852:function(t,n){t.exports='<p>\n  <md-card>\n    <h1>Shop API Demo</h1>\n    <p>\n      This is an example project to demo the usage of one of te most popular Java Framwork and my favorite Java Script framwork.\n    </p>\n    <p>The tech stack for this is as follows,</p>\n    <md-tab-group>\n      <md-tab label="Frontend">\n        <h2>Frontend</h2>\n        <p>\n      <md-list>\n       <md-list-item> Angular 2 </md-list-item>\n       <md-list-item> Yarn </md-list-item>\n       <md-list-item> Angular Materials </md-list-item>\n       <md-list-item> ... </md-list-item>\n      </md-list>\n    </p>\n      </md-tab>\n      <md-tab label="Backend">\n        <h2>Backend</h2>\n        <p>\n      <md-list>\n       <md-list-item> Java </md-list-item>\n       <md-list-item> Spring Framework </md-list-item>\n       <md-list-item> Spring Boot </md-list-item>\n       <md-list-item> Spring Security </md-list-item>\n       <md-list-item> Spring Data / Mango </md-list-item>\n       <md-list-item> ... </md-list-item>\n      </md-list>\n    </p>\n      </md-tab>\n    </md-tab-group>\n\n\n\n\n    <div class="button-row">\n        <button md-raised-button (click)="openCode()">Code</button>\n    </div>\n  </md-card>\n</p>\n'},853:function(t,n){t.exports='<p class="login-form" align="center">\n    <md-card class="app-input-section login-card" align="start">\n        <md-card-header>\n            <md-card-title>Login to Nandhini\'s Healthcare Shop</md-card-title>\n            <md-card-subtitle>Please enter your credentials</md-card-subtitle>\n        </md-card-header>\n        <form ngNoForm action="/login.htm" method="POST">\n        <p>\n            <md-input name="username">\n                <md-placeholder>\n                    <i class="material-icons app-input-icon">perm_identity</i> User\n                    Name\n                </md-placeholder>\n            </md-input>\n        </p>\n        <p>\n            <md-input type="password" name="password">\n                <md-placeholder>\n                    Password\n                </md-placeholder>\n            </md-input>\n        </p>\n\n          <md-card-actions align="end">\n            <button md-button md-raised-button color="primary" type="submit">Sign In</button>\n            <a routerLink="/signup" routerLinkActive="active" md-button>Sign Up</a>\n          </md-card-actions>\n\n      </form>\n\n    </md-card>\n</p>\n'},854:function(t,n){t.exports='<p>\n  lost works!\n</p>\n\n<md-card>\n  <button md-button>FLAT</button>\n  <button md-raised-button md-tooltip="This is a tooltip!">RAISED</button>\n  <button md-raised-button color="primary">PRIMARY RAISED</button>\n  <button md-raised-button color="accent">ACCENT RAISED</button>\n</md-card>\n\n<md-card>\n  <md-checkbox>Unchecked</md-checkbox>\n  <md-checkbox [checked]="true">Checked</md-checkbox>\n  <md-checkbox [indeterminate]="true">Indeterminate</md-checkbox>\n  <md-checkbox [disabled]="true">Disabled</md-checkbox>\n</md-card>\n\n<md-card>\n  <md-radio-button name="symbol">Alpha</md-radio-button>\n  <md-radio-button name="symbol">Beta</md-radio-button>\n  <md-radio-button name="symbol" disabled>Gamma</md-radio-button>\n</md-card>\n\n<md-card class="app-input-section">\n  <md-input placeholder="First name"></md-input>\n\n  <md-input #nickname placeholder="Nickname" maxlength="50">\n    <md-hint align="end">\n      {{nickname.characterCount}} / 50\n    </md-hint>\n  </md-input>\n\n  <md-input>\n    <md-placeholder>\n        <i class="material-icons app-input-icon">perm_identity</i> User Name\n    </md-placeholder>\n  </md-input>\n\n  <md-input placeholder="Motorcycle model">\n    <span md-prefix>\n      <i class="material-icons app-input-icon">motorcycle</i>\n      &nbsp;\n    </span>\n  </md-input>\n</md-card>\n\n<md-card>\n  <md-list class="app-list">\n    <md-list-item *ngFor="let food of foods">\n      <h3 md-line>{{food.name}}</h3>\n      <p md-line class="demo-secondary-text">{{food.rating}}</p>\n    </md-list-item>\n  </md-list>\n</md-card>\n\n<md-card>\n  <md-spinner class="app-spinner"></md-spinner>\n  <md-spinner color="accent" class="app-spinner"></md-spinner>\n</md-card>\n\n<md-card>\n  <label>\n    Indeterminate progress-bar\n    <md-progress-bar\n        class="app-progress"\n        mode="indeterminate"\n        aria-label="Indeterminate progress-bar example"></md-progress-bar>\n  </label>\n\n  <label>\n    Determinate progress bar - {{progress}}%\n    <md-progress-bar\n        class="app-progress"\n        color="accent"\n        mode="determinate"\n        [value]="progress"\n        aria-label="Determinate progress-bar example"></md-progress-bar>\n  </label>\n</md-card>\n\n<md-card>\n  <md-tab-group>\n    <md-tab label="Earth">\n      <p>EARTH</p>\n    </md-tab>\n    <md-tab label="Fire">\n      <p>FIRE</p>\n    </md-tab>\n  </md-tab-group>\n</md-card>\n\n<md-card>\n  <md-icon>build</md-icon>\n</md-card>\n\n<md-card>\n  <button md-button [md-menu-trigger-for]="menu">\n    MENU\n  </button>\n</md-card>\n\n<md-menu #menu="mdMenu">\n  <button md-menu-item>Lemon</button>\n  <button md-menu-item>Lime</button>\n  <button md-menu-item>Banana</button>\n</md-menu>\n\n<md-card>\n  <p>Last dialog result: {{lastDialogResult}}</p>\n  <button md-raised-button (click)="openDialog()">DIALOG</button>\n  <button md-raised-button (click)="showSnackbar()">SNACKBAR</button>\n</md-card>\n'},855:function(t,n){t.exports='  <h2>Profile</h2>\n  <md-card *ngIf="user">\n  <md-card-header>\n    <md-card-title>User Profile</md-card-title>\n    <md-card-subtitle>{{user.username}}</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <table>\n      <tr>\n          <th align="right">Id</th>\n          <td>{{user.id}}</td>\n      </tr>\n      <tr>\n          <th align="right">Name</th>\n          <td>{{user.firstName}} {{user.lastName}}</td>\n      </tr>\n      <tr>\n          <th align="right">Login ID</th>\n          <td>{{user.username}}</td>\n      </tr>\n      <tr>\n          <th align="right">Organization</th>\n          <td>{{user.organization}}</td>\n      </tr>\n      <tr>\n          <th align="right">Email</th>\n          <td>{{user.email}}</td>\n      </tr>\n      <tr>\n          <th align="right">Phone</th>\n          <td>{{user.phone}}</td>\n      </tr>\n      <tr>\n          <th align="right">Mobile</th>\n          <td>{{user.mobile}}</td>\n      </tr>\n      <tr>\n          <th align="right">Pricing Tag</th>\n          <td>{{user.pricingTag}}</td>\n      </tr>\n    </table>\n  </md-card-content>\n  <md-card-actions>\n    <a routerLink="/" routerLinkActive="active" md-button>Back</a>\n  </md-card-actions>\n</md-card>\n'},856:function(t,n){t.exports='<p>\n  <md-card>\n  <md-card-header>\n    <md-card-title><i class="material-icons app-input-icon" style="font-size: 48px;">account_circle</i> Sign Up</md-card-title>\n    <md-card-subtitle>Please create a profile to gain access to the API</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n\n\n\n    <table class="signup-full-width" cellspacing="0">\n      <tr>\n          <td><md-input class="signup-full-width" placeholder="First name"></md-input></td>\n          <td><md-input class="signup-full-width" placeholder="Last name"></md-input></td>\n      </tr>\n      <tr>\n          <td>\n            <md-input class="signup-full-width">\n              <md-placeholder>\n                  <i class="material-icons app-input-icon">perm_identity</i> User Name\n              </md-placeholder>\n            </md-input>\n          </td>\n      </tr>\n      <tr>\n          <td>\n            <md-input class="signup-full-width" placeholder="Organization"></md-input>\n          </td>\n      </tr>\n      <tr>\n          <td>\n            <md-input type="email" class="signup-full-width" placeholder="Email Address"></md-input>\n          </td>\n      </tr>\n      <tr>\n        <td>\n          <md-input type="tel" class="signup-full-width" placeholder="Phone"></md-input>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <md-input type="tel" class="signup-full-width" placeholder="Mobile"></md-input>\n        </td>\n      </tr>\n      <tr>\n          <td colspan="2">\n            <p>\n              Please choose the tag that you wish to sign up for.\n          </p>\n             <md-radio-group class="signup-radio-group" [(ngModel)]="userTag">\n            <md-radio-button class="signup-radio-button" *ngFor="let tag of tags" [value]="tag">\n              {{tag}}\n            </md-radio-button>\n          </md-radio-group>\n          </td>\n      </tr>\n    </table>\n  </md-card-content>\n  <md-card-actions>\n    <a routerLink="/" routerLinkActive="active" md-button>Back</a>\n  </md-card-actions>\n</md-card>\n</p>\n'}},[1113]);
//# sourceMappingURL=main.855a05ce8656583e8630.bundle.map