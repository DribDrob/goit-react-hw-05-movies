"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4146:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,u=e(7425),c=e(3504),i=e(168),s=e(6031),o=s.ZP.ul(r||(r=(0,i.Z)(["\n  padding-left: 20px;\n"]))),p=s.ZP.li(a||(a=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n"]))),f=e(184),l=function(n){var t=n.data,e=n.url,r=n.location;return(0,f.jsx)(o,{children:t.map((function(n){var t=n.id,a=n.title;return(0,f.jsxs)(p,{children:[(0,f.jsx)(u.MGh,{}),(0,f.jsx)(c.rU,{to:"".concat(e).concat(t),state:{from:r},children:a})]},t)}))})}},5415:function(n,t,e){e.r(t);var r=e(885),a=e(2791),u=e(6871),c=e(367),i=e(7596),s=e(6642),o=e(4146),p=e(2050),f=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],l=t[1],h=(0,u.TH)();return(0,a.useEffect)((function(){(0,c.Df)().then(l).catch((function(n){return i.Am.error("Something went wrong. Please try again.")}))}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(p.D,{children:"Trending today"}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)(s.a,{}),children:e&&(0,f.jsx)(o.Z,{data:e,url:"movies/",location:h})})]})}},2050:function(n,t,e){e.d(t,{C:function(){return s},D:function(){return i}});var r,a,u=e(168),c=e(6031),i=c.ZP.h1(r||(r=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),s=c.ZP.h3(a||(a=(0,u.Z)(["\n  margin-bottom: 16px;\n"])))},367:function(n,t,e){e.d(t,{Df:function(){return o},M1:function(){return g},TP:function(){return h},gy:function(){return f},tx:function(){return m}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var s="8f517ea939a3e5bbc59bc55f9e33cbf1";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:s,query:t,language:"en-US",include_adult:!1}),n.next=3,i().get("/search/movie?".concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.4c3a2bd5.chunk.js.map