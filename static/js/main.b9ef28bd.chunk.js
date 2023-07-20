(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(11),c=a.n(s),n=a(5),r=a(2),i=a(3),l=a.n(i),o=a(1),d=(a(18),a(19),a(20),a(4)),m=a.n(d),j=a(0),u=function(e){var t=e.posts,a=e.selectedPostId,s=void 0===a?0:a,c=e.setSelectedPost;return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id===s;return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:e.title}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:e.body}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:m()("button is-link",{"is-light":!t}),onClick:function(){return c(t?null:e)},children:t?"Close":"Open"})})]},e.id)}))})]})]})},b=a(12),h=(a(22),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),O=a(9),x=a(7),p={name:"",email:"",body:""},f={name:!1,email:!1,body:!1},v=function(e){var t=e.postId,a=e.addComment,s=Object(o.useState)(!1),c=Object(r.a)(s,2),i=c[0],d=c[1],u=Object(o.useState)(p),b=Object(r.a)(u,2),h=b[0],v=b[1],N=Object(o.useState)(f),y=Object(r.a)(N,2),g=y[0],w=y[1],k=function(){var e=Object(n.a)(l.a.mark((function e(s){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),e.prev=1,h.name&&h.email&&h.body){e.next=6;break}w({name:!h.name,email:!h.email,body:!h.body}),e.next=10;break;case 6:return d(!0),e.next=9,a(h.name,h.email,h.body,t);case 9:v((function(e){return Object(x.a)(Object(x.a)({},e),{},{body:""})}));case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),new Error("Unable to submit form");case 15:return e.prev=15,d(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){w(f),v((function(t){var a=e.target,s=a.value,c=a.name;return Object(x.a)(Object(x.a)({},t),{},Object(O.a)({},c,s))}))};return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:k,children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:m()("input",{"is-danger":g.name}),value:h.name,onChange:C}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),g.name&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),g.name&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:m()("input",{"is-danger":g.email}),value:h.email,onChange:C}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),g.email&&Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),g.email&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:m()("textarea",{"is-danger":g.email}),value:h.body,onChange:C})}),g.body&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:m()("button is-link",{"is-loading":i}),onClick:function(){return a},children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){w(f),v(p)},children:"Clear"})})]})]})},N="https://mate.academy/students-api";function y(e){return new Promise((function(t){setTimeout(t,e)}))}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return a&&(s.body=JSON.stringify(a),s.headers={"Content-Type":"application/json; charset=UTF-8"}),y(300).then((function(){return fetch(N+e,s)})).then((function(e){return e.json()}))}var w=function(e){return g(e)},k=function(e,t){return g(e,"POST",t)},C=function(e){return g(e,"DELETE")},S=function(e){return w("/posts?userId=".concat(e))},E=function(e){var t=e.selectedPost,a=e.comments,s=e.setComments,c=e.isLoading,i=e.isError,d=Object(o.useState)(!1),m=Object(r.a)(d,2),u=m[0],O=m[1],x=function(e){!function(e){C("/comments/".concat(e))}(e),s(a.filter((function(t){return t.id!==e})))},p=function(){var e=Object(n.a)(l.a.mark((function e(t,a,c,n){var r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={postId:n,name:t,email:a,body:c},e.prev=1,e.next=4,k("/comments",r);case 4:i=e.sent,s((function(e){return[].concat(Object(b.a)(e),[i])})),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Unable to create new comment");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a,s,c){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:t&&Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:"".concat(t.id,": ").concat(t.title)}),Object(j.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(j.jsxs)("div",{className:"block",children:[c&&Object(j.jsx)(h,{}),i&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!c&&!i&&0===a.length&&Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!!a.length&&Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),a.map((function(e){return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return x(e.id)},children:"Delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!u&&!i&&!c&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return O(!0)},children:"Write a comment"})]}),u&&Object(j.jsx)(v,{postId:t.id,addComment:p})]})})},P=function(e){var t=e.users,a=e.selectedUser,s=e.setSelectedUser,c=Object(o.useState)(!1),n=Object(r.a)(c,2),i=n[0],l=n[1];return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:m()("dropdown",{"is-active":i}),children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return l((function(e){return!e}))},children:[Object(j.jsx)("span",{children:a?a.name:"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(j.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(j.jsx)("a",{href:"#user-".concat(e.id),className:m()("dropdown-item",{"is-active":e.id===(null===a||void 0===a?void 0:a.id)}),onClick:function(){s(e),l(!1)},children:e.name},e.id)}))})})]})},I=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(o.useState)([]),i=Object(r.a)(c,2),d=i[0],b=i[1],O=Object(o.useState)([]),x=Object(r.a)(O,2),p=x[0],f=x[1],v=Object(o.useState)(null),N=Object(r.a)(v,2),y=N[0],g=N[1],k=Object(o.useState)(null),C=Object(r.a)(k,2),I=C[0],T=C[1],U=Object(o.useState)(!1),F=Object(r.a)(U,2),L=F[0],B=F[1],D=Object(o.useState)(!1),M=Object(r.a)(D,2),A=M[0],_=M[1];Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w("/users");case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),B(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(){var e=Object(n.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,S(t);case 4:a=e.sent,b(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),B(!0);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,a=I.id,w("/comments?postId=".concat(a));case 5:t=e.sent,f(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),B(!0);case 12:case"end":return e.stop()}var a}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[I]),Object(o.useEffect)((function(){T(null),y?J(y.id):b([])}),[null===y||void 0===y?void 0:y.id]),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(P,{users:a,selectedUser:y,setSelectedUser:g})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!y&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),y&&A&&Object(j.jsx)(h,{}),y&&L&&A&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),y&&0===d.length&&!L&&!A&&Object(j.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),y&&d.length>0&&!L&&!A&&Object(j.jsx)(u,{posts:d,setSelectedPost:T,selectedPostId:null===I||void 0===I?void 0:I.id})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:m()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":I}),children:I&&Object(j.jsx)("div",{className:"tile is-child box is-success ",children:Object(j.jsx)(E,{selectedPost:I,comments:p,setComments:f,isLoading:A,isError:L})})})]})})})};c.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b9ef28bd.chunk.js.map