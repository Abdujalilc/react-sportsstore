(this.webpackJsonpsportsstore=this.webpackJsonpsportsstore||[]).push([[4],{110:function(e,t,n){"use strict";n.r(t);var r=n(21),c=n(23),a=n(22),i=n(0),s=n(1),o=n(107),d=n(86),l=n(6),u=n(30),b=n(2),j=n(109),p=n(98),h=n(7),O=n(34),m=function(e){var t=e.product,n=t.id,r=t.name,c=t.category,a=t.price;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{className:"text-right",children:a.toFixed(2)}),Object(i.jsxs)("td",{className:"text-center",children:[Object(i.jsx)("button",{className:"btn btn-sm btn-danger mx-1",onClick:function(){return e.deleteProduct(n)},children:"Delete"}),Object(i.jsx)(h.b,{className:"btn btn-sm btn-warning",to:"/admin/products/".concat(n),children:"Edit"})]})]})},x=function(e){var t=function(t){e.deleteProduct(t)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h4",{className:"bg-info text-white text-center p-2",children:[e.totalSize," Products"]}),Object(i.jsx)(O.a,Object(b.a)({keys:["ID","Name","Category"]},e)),Object(i.jsxs)("table",{className:"table table-sm table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Category"}),Object(i.jsx)("th",{className:"text-right",children:"Price"}),Object(i.jsx)("th",{className:"text-center"})]})}),Object(i.jsx)("tbody",{children:e.products.map((function(e){return Object(i.jsx)(m,{product:e,deleteProduct:t},e.id)}))})]}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(h.b,{className:"btn btn-primary",to:"/admin/products/create",children:"Create Product"})})]})},f=n(99),g=n(92),v=n.n(g);function S(){var e=Object(f.a)(["\n  query($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      category\n      price\n    }\n  }\n"]);return S=function(){return e},e}function N(){var e=Object(f.a)(["\n  query($page: Int, $pageSize: Int, $sort: String) {\n    products {\n      totalSize\n      products(page: $page, pageSize: $pageSize, sort: $sort) {\n        id\n        name\n        category\n        price\n      }\n    }\n  }\n"]);return N=function(){return e},e}function y(){var e=Object(f.a)(["\n  query($onlyShipped: Boolean, $page: Int, $pageSize: Int, $sort: String) {\n    orders(onlyUnshipped: $onlyShipped) {\n      totalSize\n      orders(page: $page, pageSize: $pageSize, sort: $sort) {\n        id\n        name\n        email\n        shipped\n        products {\n          quantity\n          product {\n            price\n          }\n        }\n      }\n    }\n  }\n"]);return y=function(){return e},e}var z=v()(y()),$=v()(N()),P=v()(S());function w(){var e=Object(f.a)(["\n  mutation($id: ID!, $shipped: Boolean!) {\n    shipOrder(id: $id, shipped: $shipped) {\n      id\n      shipped\n    }\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n    }\n  }\n"]);return C=function(){return e},e}function k(){var e=Object(f.a)(["\n  mutation($product: productUpdate) {\n    updateProduct(product: $product) {\n      id\n      name\n      category\n      description\n      price\n    }\n  }\n"]);return k=function(){return e},e}function I(){var e=Object(f.a)(["\n  mutation($product: productStore) {\n    storeProduct(product: $product) {\n      id\n      name\n      category\n      description\n      price\n    }\n  }\n"]);return I=function(){return e},e}var T=v()(I()),q=v()(k()),M=v()(C()),D=v()(w()),A={page:1,pageSize:10,sort:"id"},R=p(Object(j.a)($,{options:function(e){return{variables:A}},props:function(e){var t=e.data,n=t.loading,r=t.products,c=t.refetch;return{totalSize:n?0:r.totalSize,products:n?[]:r.products,currentPage:A.page,pageCount:n?0:Math.ceil(r.totalSize/A.pageSize),navigate:function(e){A.page=Number(e),c(A)},pageSize:A.pageSize,setPageSize:function(e){A.pageSize=Number(e),c(A)},sortKey:A.sort,setSortProperty:function(e){A.sort=e,c(A)}}}}),Object(j.a)(M,{options:{update:function(e,t){var n=t.data.deleteProduct.id,r={query:$,variables:A},c=e.readQuery(r);c.products.products=c.products.products.filter((function(e){return e.id!==n})),c.products.totalSize=c.products.totalSize-1,e.writeQuery(Object(b.a)(Object(b.a)({},r),{},{data:c}))}},props:function(e){var t=e.mutate;return{deleteProduct:function(e){return t({variables:{id:e}})}}}}))(x),E=n(108),U=n(15),B=n(35),L=function(e){var t={type:"text",required:!0},n=[{label:"Name"},{label:"Description"},{label:"Category"},{label:"Price",attrs:{type:"Number"}}],r=T;"edit"===e.mode&&(r=q,n=[{label:"Id",attrs:{disabled:!0}}].concat(Object(U.a)(n)).map((function(t){return Object(b.a)(Object(b.a)({},t),{},{attrs:Object(b.a)(Object(b.a)({},t.attrs),{},{defaultValue:e.product[t.label.toLowerCase()]})})})));var c=function(){return e.history.push("/admin/products")};return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col bg-dark text-white",children:Object(i.jsx)("div",{className:"navbar-brand",children:"SPORTS STORE"})})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col m-2",children:Object(i.jsx)(E.a,{mutation:r,children:function(r,a){var s=a.client;return Object(i.jsx)(B.a,{formModel:n,defaultAttrs:t,submitCallback:function(t){r({variables:{product:Object(b.a)(Object(b.a)({},t),{},{price:Number(t.price)})}}),"edit"!==e.mode&&s.resetStore(),c()},cancelCallback:c,submitText:"Save",cancelText:"Cancel"})}})})})]})},F=function(e){return Object(i.jsx)(E.b,{query:P,variables:{id:e.match.params.id},children:function(t){var n=t.loading,r=t.data;return n?null:Object(i.jsx)(L,Object(b.a)(Object(b.a)({},e),{},{product:r.product,mode:"edit"}))}})},J=n(20),K=function(e){var t,n=e.order,r=e.toggleShipped,c=n.id,a=n.name,s=n.email,o=n.products,d=n.shipped;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsxs)("td",{className:"text-right",children:["$",function(e){return e.reduce((function(e,t){return e+t.quantity*t.product.price}),0).toFixed(2)}(o)]}),Object(i.jsx)("td",{className:"text-center",children:Object(i.jsxs)("button",{className:"btn btn-sm btn-block bg-muted",onClick:function(){return r(n)},children:[(t=n,t.shipped?Object(i.jsx)("i",{className:"fa fa-shipping-fast text-success"}):Object(i.jsx)("i",{className:"fa fa-exclamation-circle text-danger"})),Object(i.jsx)("span",{children:d?"Shipped":"Pending"})]})})]})},Q=function(e){var t=function(t){var n=t.id,r=t.shipped;e.toggleShipped(n,!r)};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h4",{className:"bg-info text-white text-center p-2",children:[e.totalSize," Orders"]}),Object(i.jsx)(O.a,Object(b.a)({keys:["ID","Name"]},e)),Object(i.jsxs)("table",{className:"table table-sm table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{className:"text-right",children:"Total"}),Object(i.jsx)("th",{className:"text-center",children:"Shipped"})]})}),Object(i.jsx)("tbody",{children:e.orders.map((function(e){return Object(i.jsx)(K,{order:e,toggleShipped:t},e.id)}))})]})]})},V={onlyUnshipped:!1,page:1,pageSize:10,sort:"id"},G=p(Object(j.a)(z,{options:function(e){return{variables:V}},props:function(e){var t=e.data,n=t.loading,r=t.orders,c=t.refetch;return{totalSize:n?0:r.totalSize,orders:n?[]:r.orders,currentPage:V.page,pageCount:n?0:Math.ceil(r.totalSize/V.pageSize),navigate:function(e){V.page=Number(e),c(V)},pageSize:V.pageSize,setPageSize:function(e){V.pageSize=Number(e),c(V)},sortKey:V.sort,setSortProperty:function(e){V.sort=e,c(V)}}}}),Object(j.a)(D,{props:function(e){var t=e.mutate;return{toggleShipped:function(e,n){return t({variables:{id:e,shipped:n}})}}}}))(Q),H=n(44),W=function(e){return function(t){Object(c.a)(s,t);var n=Object(a.a)(s);function s(){var t;Object(r.a)(this,s);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).render=function(){return Object(i.jsx)(H.a.Consumer,{children:function(n){return Object(i.jsx)(e,Object(b.a)(Object(b.a)({},t.props),n))}})},t}return s}(s.Component)},X=Object(l.h)(W(function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).authenticate=function(e){c.props.authenticate(e).catch((function(e){return c.setState({errorMessage:e.message})})).then(c.props.history.push("/admin"))},c.render=function(){return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col bg-dark text-white",children:Object(i.jsx)("div",{className:"navbar-brand",children:"SPORTS STORE"})})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col m-2",children:[null!=c.state.errorMessage&&Object(i.jsx)("h4",{className:"bg-danger text-center text-white m-1 p-2",children:c.state.errorMessage}),Object(i.jsx)(B.a,{formModel:c.formModel,defaultAttrs:c.defaultAttrs,submitCallback:c.authenticate,submitText:"Login",cancelCallback:function(){return c.props.history.push("/")},cancelText:"Cancel"})]})})]})},c.state={errorMessage:null},c.defaultAttrs={required:!0},c.formModel=[{label:"Username",attrs:{defaultValue:"admin"}},{label:"Password",attrs:{type:"password"}}],c}return n}(s.Component))),Y=W(function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).render=function(){return Object(i.jsx)(d.b,{client:c.client,children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col bg-info text-white",children:Object(i.jsx)("div",{className:"navbar-brand",children:"SPORTS STORE"})})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-3 p-2",children:[Object(i.jsx)(u.a,{to:"/admin/orders",children:"Orders"}),Object(i.jsx)(u.a,{to:"/admin/products",children:"Products"}),c.props.isAuthenticated&&Object(i.jsx)("button",{onClick:c.props.signout,className:"btn btn-block btn-secondary m-2 fixed-bottom col-3",children:"Log Out"})]}),Object(i.jsx)("div",{className:"col-9 p-2",children:Object(i.jsxs)(l.d,{children:[!c.props.isAuthenticated&&Object(i.jsx)(l.b,{component:X}),Object(i.jsx)(l.b,{path:"/admin/orders",component:G}),Object(i.jsx)(l.b,{path:"/admin/products/create",component:L}),Object(i.jsx)(l.b,{path:"/admin/products/:id",component:F}),Object(i.jsx)(l.b,{path:"/admin/products",component:R}),Object(i.jsx)(l.a,{to:"/admin/orders"})]})})]})]})})},c.client=new o.a({uri:J.a,request:function(e){return e.setContext({headers:{Authorization:"Bearer<".concat(c.props.webToken,">")}})}}),c}return n}(s.Component));t.default=Y}}]);
//# sourceMappingURL=4.9b1659fd.chunk.js.map