(this.webpackJsonpsportsstore=this.webpackJsonpsportsstore||[]).push([[0],{17:function(t,e,c){"use strict";c.d(e,"a",(function(){return a})),c.d(e,"b",(function(){return r}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?"btn btn-secondary m-1\n    ".concat(t&&0!==t?"":"disabled"):"btn btn-sm bg-dark text-white\n       ".concat(t&&0!==t?"":"disabled")},a=function(t){var e=[];return t.validity.valueMissing&&e.push("Value required"),t.validity.typeMismatch&&e.push("Invalid ".concat(t.type)),e}},20:function(t,e,c){"use strict";c.d(e,"b",(function(){return s})),c.d(e,"a",(function(){return i})),c.d(e,"c",(function(){return o}));var r,a=c(12),n=c(3),s=(r={},Object(a.a)(r,n.b.PRODUCTS,"/api/products"),Object(a.a)(r,n.b.CATEGORIES,"/api/categories"),Object(a.a)(r,n.b.ORDERS,"/api/orders"),r),i="/graphql",o="/login"},3:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return a}));var r={PRODUCTS:"products",CATEGORIES:"categories",ORDERS:"orders"},a={DATA_LOAD:"data_load",DATA_SET_SORT_PROPERTY:"data_set_sort",DATA_SET_PAGESIZE:"data_set_pagesize",DATA_STORE:"data_store",CART_ADD:"cart_add",CART_UPDATE:"cart_update",CART_REMOVE:"cart_delete",CART_CLEAR:"cart_clear"}},30:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var r=c(0),a=(c(1),c(6)),n=c(7),s=function(t){return Object(r.jsx)(a.b,{path:t.to,exact:t.exact,children:function(e){var c=t.className||"m-2 btn btn-block",a=t.activeClass||"btn-primary",s=t.inActiveClass||"btn-secondary",i="".concat(c," ").concat(e.match?a:s);return Object(r.jsx)(n.b,{to:t.to,className:i,children:t.children})}})}},34:function(t,e,c){"use strict";var r=c(0),a=c(1),n=c(5),s=c(6),i=c(15),o=function(t){var e=t.currentPage,c=t.pageCount,n=t.navigate;return Object(r.jsx)("div",{children:Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("button",{disabled:1===e,className:"btn btn-secondary mx-1",onClick:function(){return n(e-1)},children:"Previous"}),e>4&&Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("button",{className:"btn btn-secondary mx-1",onClick:function(){return n(1)},children:"1"}),Object(r.jsx)("span",{className:"h4",children:"..."})]}),(c<4?Object(i.a)(Array(c+1).keys()).slice(1):e<=4?[1,2,3,4,5]:e>c-4?Object(i.a)(Array(5).keys()).reverse().map((function(t){return c-t})):[e-1,e,e+1]).map((function(t){return Object(r.jsx)("button",{className:"btn mx-1 ".concat(t===e?"btn-primary":"btn-secondary"),onClick:function(){return n(t)},children:t},t)})),e<=c-4&&Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("span",{className:"h4",children:"..."}),Object(r.jsx)("button",{className:"btn btn-secondary mx-1",onClick:function(){return n(c)},children:c})]}),Object(r.jsx)("button",{disabled:e===c,className:"btn btn-secondary mx-1",onClick:function(){return n(e+1)},children:"Next"})]})})};e.a=function(t){var e=t.sizes||[5,10,25,100],c=t.keys||["Name","Price"],a=Object(n.c)((function(t){return t.shopReducer})),i=Object(s.g)(),l=i.page,u=i.category,d=Number(l),b=Math.ceil(a.products_total/(Number(a.pageSize)||e[0]));return Object(r.jsxs)("div",{className:"m-2",children:[Object(r.jsx)("div",{className:"text-center m-1",children:Object(r.jsx)(o,{currentPage:t.currentPage||d,pageCount:t.pageCount||b,navigate:t.navigate||function(e){return t.history.push("/shop/products/".concat(u,"/").concat(e))}})}),Object(r.jsxs)("div",{className:"form-inline justify-content-center",children:[Object(r.jsx)("select",{className:"form-control",onChange:function(e){return t.setPageSize(e.target.value)},value:a.pageSize||t.pageSize||e[0],children:e.map((function(t){return Object(r.jsxs)("option",{value:t,children:[t," per page"]},t)}))}),Object(r.jsx)("select",{className:"form-control",onChange:function(e){return t.setSortProperty(e.target.value)||function(e){return t.setSortProperty(e.target.value)}(e)},value:a.sortKey||t.sortKey||c[0],children:c.map((function(t){return Object(r.jsxs)("option",{value:t.toLowerCase(),children:["Sort By ",t]},t)}))})]})]})}},35:function(t,e,c){"use strict";c.d(e,"a",(function(){return p}));var r=c(12),a=c(15),n=c(2),s=c(21),i=c(47),o=c(23),l=c(22),u=c(0),d=c(1),b=function(t){return t.errors?t.errors.map((function(t){return Object(u.jsx)("h6",{className:"text-danger",children:t},t)})):null},j=c(17),p=function(t){Object(o.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(s.a)(this,c);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={validationErrors:{}},t.formElements={},t.handleSubmit=function(){t.setState((function(e){var c=Object(n.a)(Object(n.a)({},e),{},{validationErrors:{}});return Object.values(t.formElements).forEach((function(t){t.checkValidity()||(c.validationErrors[t.name]=Object(j.a)(t))})),c}),(function(){if(0===Object.keys(t.state.validationErrors).length){var e=Object.assign.apply(Object,Object(a.a)(Object.entries(t.formElements).map((function(t){return Object(r.a)({},t[0],t[1].value)}))));t.props.submitCallback(e)}}))},t.registerRef=function(e){null!==e&&(t.formElements[e.name]=e)},t.renderElement=function(e){var c=e.name||e.label.toLowerCase();return Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:e.label}),Object(u.jsx)(b,{errors:t.state.validationErrors[c]}),Object(u.jsx)("input",Object(n.a)(Object(n.a)({name:c,className:"form-control",ref:t.registerRef},t.props.defaultAttrs),e.attrs))]},e.label)},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this;return Object(u.jsxs)(d.Fragment,{children:[this.props.formModel.map((function(e){return t.renderElement(e)})),Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("button",{className:"btn btn-secondary m-1",onClick:this.props.cancelCallback,children:this.props.cancelText||"Cancel"}),Object(u.jsx)("button",{className:"btn btn-primary m-1",onClick:this.handleSubmit,children:this.props.submitText||"Submit"})]})]})}}]),c}(d.Component)},44:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var r=c(1),a=Object(r.createContext)({isAuthenticated:!1,webToken:null,authenticate:function(t,e){},signout:function(){}})},56:function(t,e,c){},85:function(t,e,c){"use strict";c.r(e);var r=c(0),a=c(1),n=c(24),s=c.n(n),i=(c(56),c(2)),o=c(7),l=c(6),u=c(5),d=c(18),b=c.n(d),j=c(25),p=c(3),O=c(26),h=c.n(O),m=c(20),x=function(t,e,c,r){return h()({method:t,url:e,params:c,data:r})},f=function(t,e){return x("get",m.b[t],e)},v=function(t,e){return x("post",m.b[t],{},e)},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var c=Object(j.a)(b.a.mark((function c(r){var a,n,s,o;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a={type:p.a.DATA_LOAD,payload:{dataType:t,total:0,params:e,data:[]}},c.prev=1,c.next=4,f(t,e);case 4:n=c.sent,s=n.data,o=n.headers,r(Object(i.a)(Object(i.a)({},a),{},{payload:Object(i.a)(Object(i.a)({},a.payload),{},{data:s,total:Number(o["x-total-count"])})})),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),console.log(c.t0);case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(t){return c.apply(this,arguments)}}()},g=c(30),T=function(t){var e=t.baseUrl,c=t.categories;return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(g.a,{to:"".concat(e,"/all"),exact:!1,children:"All"}),c&&c.map((function(t){return Object(r.jsx)(g.a,{to:"".concat(e,"/").concat(t.toLowerCase()),children:t},t)})),Object(r.jsx)(o.b,{className:"btn btn-block btn-secondary fixed-bottom m-2 col-3",to:"/admin",children:"Administration"})]})},A=function(t){var e=t.products,c=Object(u.b)(),a=function(t){var e,r;c((e=t,{type:p.a.CART_ADD,payload:{product:e,quantity:r||1}}))};return e&&0!==e.length?e.map((function(t){return Object(r.jsxs)("div",{className:"card m-1 p-1 bg-light",children:[Object(r.jsxs)("h4",{children:[t.name,Object(r.jsxs)("span",{className:"badge badge-pill badge-primary float-right",children:["$",t.price.toFixed(2)]})]}),Object(r.jsxs)("div",{className:"card-text bg-white p-1",children:[t.description,Object(r.jsx)("button",{className:"btn btn-success btn-sm float-right",onClick:function(){return a(t)},children:"Add To Cart"})]})]},t.id)})):Object(r.jsx)("h5",{className:"p-2",children:"No Products"})},R=c(17),N=function(t){var e=Object(u.c)((function(t){return t.cartReducer})),c=e.cartItems,a=e.cartPrice;return Object(r.jsx)("div",{className:"float-right",children:Object(r.jsxs)("small",{children:[c&&0!==c?Object(r.jsxs)("span",{children:[c," item(s), $",a.toFixed(2)]}):Object(r.jsx)("span",{children:"Your cart : (empty) "}),Object(r.jsx)(o.b,{className:Object(R.b)(c),to:"/shop/cart",children:Object(r.jsx)("i",{className:"fa fa-shopping-cart"})})]})})},E=c(34),S=function(t){var e=t.categories,c=t.products,a=t.history,n=Object(u.b)();return Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col bg-dark text-white",children:[Object(r.jsx)("div",{className:"navbar-brand",children:"SPORTS STORE"}),Object(r.jsx)(N,{})]})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3 p-2",children:Object(r.jsx)(T,{baseUrl:"/shop/products",categories:e})}),Object(r.jsxs)("div",{className:"col-9 p-2",children:[Object(r.jsx)(E.a,{setSortProperty:function(t){return n((e=t,{type:p.a.DATA_SET_SORT_PROPERTY,payload:e}));var e},setPageSize:function(t){return n((e=t,{type:p.a.DATA_SET_PAGESIZE,payload:e}));var e},history:a}),Object(r.jsx)(A,{products:c,history:a})]})]})]})},C=function(t){var e=Object(u.c)((function(t){return t.cartReducer})),c=e.cart,n=e.cartPrice,s=Object(u.b)();return c&&0!==c.length?Object(r.jsxs)(a.Fragment,{children:[c.map((function(t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"number",value:t.quantity,onChange:function(e){return s((c=t.product,r=parseInt(e.target.value),{type:p.a.CART_UPDATE,payload:{product:c,quantity:r}}));var c,r}})}),Object(r.jsxs)("td",{children:[" ",t.product.name," "]}),Object(r.jsxs)("td",{children:[" $",t.product.price.toFixed(2)," "]}),Object(r.jsxs)("td",{children:[" $",(t.quantity*t.product.price).toFixed(2)," "]}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return s((e=t.product,{type:p.a.CART_REMOVE,payload:e}));var e},children:"Remove"})})]},t.product.id)})),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{colSpan:"3",className:"text-right",children:"Total:"}),Object(r.jsxs)("th",{colSpan:"2",children:[" $",n.toFixed(2)," "]})]})]}):Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:"5",children:"Your cart is empty"})})},_=function(t){var e=Object(u.c)((function(t){return t.cartReducer})).cartItems;return Object(r.jsxs)("div",{className:"m-3",children:[Object(r.jsx)("h2",{className:"text-center",children:"Your Cart"}),Object(r.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Quantity"}),Object(r.jsx)("th",{children:"Product"}),Object(r.jsx)("th",{className:"text-right",children:"Price"}),Object(r.jsx)("th",{className:"text-right",children:"Subtotal"}),Object(r.jsx)("th",{})]})}),Object(r.jsx)("tbody",{children:Object(r.jsx)(C,{})})]}),Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)(o.b,{className:"btn btn-primary m-1",to:"/shop",children:"Continue Shopping"}),Object(r.jsx)(o.b,{className:Object(R.b)(e,!0),to:"/shop/checkout",children:"Checkout"})]})]})},k=function(t){var e=Object(u.b)();return Object(a.useEffect)((function(){!function(){var c=t.products_params||{},r={_limit:t.pageSize||5,_sort:t.sortKey||"name",_page:t.match.params.page||1,category_like:"all"===(t.match.params.category||"")?"":t.match.params.category};Object.keys(r).find((function(t){return c[t]!==r[t]}))&&e(y(p.b.PRODUCTS,r))}()})),Object(r.jsx)(a.Fragment,{children:t.children})},P=c(35),D=function(t){var e=Object(u.b)(),c=Object(u.c)((function(t){return t.cartReducer}));return Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col bg-dark text-white",children:Object(r.jsx)("div",{className:"navbar-brand",children:"SPORTS STORE"})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col m-2",children:Object(r.jsx)(P.a,{formModel:[{label:"Name"},{label:"Email",attrs:{type:"email"}},{label:"Address"},{label:"City"},{label:"Zip/Postal Code",name:"zip"},{label:"Country"}],defaultAttrs:{type:"text",required:!0},submitCallback:function(r){var a=Object(i.a)(Object(i.a)({},r),{},{products:c.cart.map((function(t){return{quantity:t.quantity,product_id:t.product.id}}))});e({type:p.a.CART_CLEAR}),e(function(t){return function(){var e=Object(j.a)(b.a.mark((function e(c){var r,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={type:p.a.DATA_STORE,payload:{dataType:p.b.ORDERS,data:{}}},e.prev=1,e.next=4,v(p.b.ORDERS,t);case 4:a=e.sent,n=a.data,c(Object(i.a)(Object(i.a)({},r),{},{payload:Object(i.a)(Object(i.a)({},r.payload),{},{data:n})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/shop/thanks")},cancelCallback:function(){t.history.push("/shop/cart")},submitText:"Place Order",cancelText:"Return to Cart"})})})]})},w=function(t){var e=Object(u.c)((function(t){return t.orders.order}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"col bg-dark text-white",children:Object(r.jsx)("div",{className:"navbar-brand",children:"SPORTS STORE"})}),Object(r.jsxs)("div",{className:"m-2 text-center",children:[Object(r.jsx)("h2",{children:"Thanks!"}),Object(r.jsx)("p",{children:"Thanks for placing your order"}),Object(r.jsxs)("p",{children:["Your order is #",e?e.id:0]}),Object(r.jsx)("p",{children:"We'll ship your goods as soon as possible."}),Object(r.jsx)(o.b,{to:"/shop",className:"btn btn-primary",children:"Return to Store"})]})]})},I=function(t){var e=Object(u.b)();Object(a.useEffect)((function(){e(y(p.b.CATEGORIES))}),[e]);var c=Object(u.c)((function(t){return t.shopReducer}));return Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.a,{from:"/shop/products/:category",to:"/shop/products/:category/1",exact:!0}),Object(r.jsx)(l.b,{path:"/shop/products/:category/:page",render:function(t){return Object(r.jsx)(k,Object(i.a)(Object(i.a)(Object(i.a)({loadData:y},t),c),{},{children:Object(r.jsx)(S,Object(i.a)(Object(i.a)({},c),t))}))}}),Object(r.jsx)(l.b,{path:"/shop/cart",render:function(t){return Object(r.jsx)(_,Object(i.a)({},t))}}),Object(r.jsx)(l.b,{path:"/shop/checkout",render:function(t){return Object(r.jsx)(D,Object(i.a)({},t))}}),Object(r.jsx)(l.b,{path:"/shop/thanks",render:function(t){return Object(r.jsx)(w,Object(i.a)({},t))}}),Object(r.jsx)(l.a,{to:"/shop/products/all/1"})]})},q=c(21),F=c(23),z=c(22),L=c(44),M=function(t){Object(F.a)(c,t);var e=Object(z.a)(c);function c(t){var a;return Object(q.a)(this,c),(a=e.call(this,t)).authenticate=function(t){return h.a.post(m.c,t).then((function(t){if(!0===t.data.success)return a.setState({isAuthenticated:!0,webToken:t.data.token}),!0;throw new Error("Invalid Credentials")}))},a.signout=function(){a.setState({isAuthenticated:!1,webToken:null})},a.render=function(){return Object(r.jsx)(L.a.Provider,{value:Object(i.a)(Object(i.a)({},a.state),{},{authenticate:a.authenticate,signout:a.signout}),children:a.props.children})},a.state={isAuthenticated:!1,webToken:null},a}return c}(a.Component),U=Object(a.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,110))})),Y=function(t){return Object(r.jsx)(M,{children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/shop",component:I}),Object(r.jsx)(l.b,{path:"/admin",render:function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("h3",{children:"Loading..."}),children:Object(r.jsx)(U,Object(i.a)({},t))})}}),Object(r.jsx)(l.a,{to:"/shop"})]})})})},G=(c(83),c(84),c(14)),V=c(12),$=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case p.a.DATA_LOAD:return Object(i.a)(Object(i.a)({},e),{},(t={},Object(V.a)(t,c.payload.dataType,c.payload.data),Object(V.a)(t,"".concat(c.payload.dataType,"_total"),c.payload.total),Object(V.a)(t,"".concat(c.payload.dataType,"_params"),c.payload.params),t));case p.a.DATA_SET_PAGESIZE:return Object(i.a)(Object(i.a)({},e),{},{pageSize:c.payload});case p.a.DATA_SET_SORT_PROPERTY:return Object(i.a)(Object(i.a)({},e),{},{sortKey:c.payload});default:return e}},K=c(15),Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,c=Object(i.a)({cart:[],cartItems:0,cartPrice:0},t);switch(e.type){case p.a.CART_ADD:var r=e.payload,a=r.product,n=r.quantity,s=c.cart.find((function(t){return t.product.id===a.id}));return s?s.quantity+=1:c.cart=[].concat(Object(K.a)(c.cart),[e.payload]),c.cartItems+=n,c.cartPrice+=a.price*n,c;case p.a.CART_UPDATE:return c.cart=c.cart.map((function(t){if(t.product.id===e.payload.product.id){var r=e.payload.quantity-t.quantity;return c.cartItems+=r,c.cartPrice+=t.product.price*r,e.payload}return t})),c;case p.a.CART_REMOVE:var o=c.cart.find((function(t){return t.product.id===e.payload.id}));return c.cartItems-=o.quantity,c.cartPrice-=o.quantity*o.product.price,c.cart=c.cart.filter((function(t){return t!==o})),c;case p.a.CART_CLEAR:return Object(i.a)(Object(i.a)({},t),{},{cart:[],cartItems:0,cartPrice:0});default:return t}},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p.a.DATA_STORE:if(e.payload.dataType===p.b.ORDERS)return Object(i.a)(Object(i.a)({},t),{},{order:e.payload.data});break;default:return t}},J=Object(G.combineReducers)({shopReducer:$,cartReducer:Z,orders:B}),W=c(48),Q=c(49),H=Object(G.createStore)(J,Object(Q.composeWithDevTools)(Object(G.applyMiddleware)(W.a)));s.a.render(Object(r.jsx)(u.a,{store:H,children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.ec8fbb12.chunk.js.map