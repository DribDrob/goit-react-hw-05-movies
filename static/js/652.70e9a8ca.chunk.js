"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[652],{6652:function(n,t,e){e.r(t),e.d(t,{default:function(){return X}});var r,a,i,c,o,s=e(885),u=e(6642),A=e(2791),f=e(6871),p=e(7596),l=(e(5462),e(6355)),h=e(168),d=e(3504),v=e(6031),x=(0,v.ZP)(d.rU)(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n\n  :hover {\n    color:  #5987c2;\n  }\n"]))),m=e(184),b=function(n){var t=n.to,e=n.children;return(0,m.jsxs)(x,{to:t,children:[(0,m.jsx)(l.x_l,{size:"12"}),e]})},g=e(367),j=e(5618),y=v.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 24px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]))),w=v.ZP.h2(i||(i=(0,h.Z)(["\n  margin-bottom: 8px;\n"]))),P=v.ZP.h3(c||(c=(0,h.Z)(["\n  margin-bottom: 8px;\n  font-weight: 700;\n  >span{\n    font-weight: 400;\n  }\n"]))),k=v.ZP.p(o||(o=(0,h.Z)(["\n  margin-bottom: 16px;\n"]))),Z=function(n){var t=n.data,e=t.poster_path,r=t.title,a=t.overview,i=t.genres,c=t.vote_average,o=Math.round(10*c),s=e?"https://image.tmdb.org/t/p/w500".concat(e):j;return(0,m.jsxs)(y,{children:[(0,m.jsx)("img",{src:s,alt:r,width:"240"}),(0,m.jsxs)("div",{children:[(0,m.jsx)(w,{children:r}),(0,m.jsxs)(P,{children:["User Score: ",(0,m.jsxs)("span",{children:[o,"%"]})]}),(0,m.jsx)(P,{children:"Overview"}),(0,m.jsx)(k,{children:a}),(0,m.jsx)(P,{children:"Genres"}),(0,m.jsx)(k,{children:i.map((function(n){return n.name})).join(" ")})]})]})},S=e(2050),X=function(){var n,t,e=(0,A.useState)(null),r=(0,s.Z)(e,2),a=r[0],i=r[1],c=(0,f.UO)().movieId,o=(0,f.TH)(),l=null!==(n=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,A.useEffect)((function(){(0,g.TP)(Number(c)).then(i).catch((function(n){return p.Am.error("Something went wrong. Please try again.")}))}),[c]),a?(0,m.jsxs)("main",{children:[(0,m.jsx)(b,{to:l,children:"Go back"}),(0,m.jsx)(Z,{data:a}),(0,m.jsx)(S.C,{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(x,{to:"cast",state:{from:o.state.from},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(x,{to:"reviews",state:{from:o.state.from},children:"Reviews"})})]}),(0,m.jsx)(A.Suspense,{fallback:(0,m.jsx)(u.a,{}),children:(0,m.jsx)(f.j3,{})})]}):null}},2050:function(n,t,e){e.d(t,{C:function(){return s},D:function(){return o}});var r,a,i=e(168),c=e(6031),o=c.ZP.h1(r||(r=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),s=c.ZP.h3(a||(a=(0,i.Z)(["\n  margin-bottom: 16px;\n"])))},367:function(n,t,e){e.d(t,{Df:function(){return u},M1:function(){return d},TP:function(){return l},gy:function(){return f},tx:function(){return x}});var r=e(5861),a=e(7757),i=e.n(a),c=e(4569),o=e.n(c);o().defaults.baseURL="https://api.themoviedb.org/3";var s="8f517ea939a3e5bbc59bc55f9e33cbf1";function u(){return A.apply(this,arguments)}function A(){return(A=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:s,query:t,language:"en-US",include_adult:!1}),n.next=3,o().get("/search/movie?".concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5618:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAG1BMVEXp6en////t7e36+vr5+fn19fXn5+fv7+/y8vKyQ6U8AAADOUlEQVR4nO3b23bbIBBGYYmD4P2fuDohGFRbRHE0JGt/N11RFfcPmQGE3WEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJ81TdoJbjDRjaPXTvE1JiyhF0Y7SjsT/B56FrXTNDLR27HgtAM1iS6Htj4sf2hHumRiro7RxqWwlwtBO9c7c0kXA+3i3o2h60KRJe1jnkLMfN0qJnvDlCW95i7/ttNCMbHIbF0q7XxDrH+QDojQS0lPJjXmUSqhs0J50YdDSGMe9is9FYroQ1v24ZCTuy2t76VQ6j60p9EMNiXffyv6M6FcWo58U32XnGGs7t7KeNmHUx7ZUzBf5lbcWr3qwzSyPpT3FqVknVcbbdGHzocySPol2D2e2MPOP6DaXFL34akmUjXPyY3cDkbFkS7Xw5TndJeo5v0mvYEOZZx1Ok4XzsmdCK040EEuLelyquYyWV3SerNeWaZVHx4L+R5Prp2aoavJ91QTeQsyVH0YlJ/dUwMe+SpB3qDch5nf+vDYlp6ST0FOHqrVkYWjPKLc3G3ymY5+SQvLU+F+fHBspFIdvN3Dais3+8fSMy/knfXhiXwqNDElFSXdW+hhPz4oc8mFvKOSroinwn7Ww0u5UHovaWk/HzNvFvw+rY+zxSbPLZmn/t/2qHfU1trxO546igjXUb7mqd/Ub85ts70/zxfc5R1biT2YWzwBrz1aVOm2VyzPGOo7th5ZXiQ+nLv4ch07n/9xc0rpqju2C+trPJ37GMxTyusLRWy13K8GN399vsPn2Fq5r2O/qe2FUu7G2GU7iNhKub/VkiuN3Hda0lfDr5C7OXYxkdexn849uteronNX66aTV9if/N3c9kMezj0/43yGfzj3p15LbV/1TeS+Rm5ytyA3uVv8idzhluPbtXKfPzbQxOo+X94/40xPRVrnEHePkNM7LVp1Evwtx8eqmE+ukZvcLchN7hbkJncLsc67W7TX+dv7qhRcK/fN2Nq5B3/vGFb5fanZzXPY9O3MJ9fITe4W5CZ3C3KTu8X4e9+/HN313qn5jW4+V/A3c8dP1cjmuf8a/aHPQlRbcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzXPzXpHvrRDAOVAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=652.70e9a8ca.chunk.js.map