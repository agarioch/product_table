(this.webpackJsonpproduct_table=this.webpackJsonpproduct_table||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=n(1),s=n(2),i=n(4),u=n(3),m=n(5);function p(e){var t=e.filterText,n=e.inStockOnly,a=e.onCheck,r=e.onInput;return c.a.createElement("form",{className:"form-group"},c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"Search",value:t,onChange:function(e){r(e.target.value)}})),c.a.createElement("div",{className:"form-check mt-3"},c.a.createElement("input",{type:"checkbox",name:"inStock",className:"form-check-input mr-3",value:n,onChange:function(){a()}}),c.a.createElement("label",{className:"form-check-label",for:"inStock"},"Only show products in stock")))}var h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.category;return c.a.createElement("tr",{className:"h6"},c.a.createElement("td",{colSpan:"3"},e))}}]),n}(a.Component),d=n(8),k=n.n(d),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.product,t=e.name,n=e.price,a=e.stocked,r=k()({"alert-warning":!a});return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,n),c.a.createElement("td",{className:r},a?"Yes":"No"))}}]),n}(a.Component);function y(e){var t,n=e.filterText,a=e.inStockOnly,r=[];return e.products.forEach((function(e){-1!==e.name.toUpperCase().indexOf(n.toUpperCase())&&(a&&!e.stocked||(e.category!==t&&(r.push(c.a.createElement(h,{category:e.category,key:e.category})),t=e.category),r.push(c.a.createElement(f,{product:e,key:e.name}))))})),c.a.createElement("table",{className:"table table-responsive-sm mt-3"},c.a.createElement("thead",{className:"thead-light"},c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"In Stock"))),c.a.createElement("tbody",null,r))}var b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={filterText:"",inStockOnly:!1},a.onCheck=a.onCheck.bind(Object(m.a)(a)),a.onInput=a.onInput.bind(Object(m.a)(a)),a}return Object(s.a)(n,[{key:"onInput",value:function(e){console.log(e),this.setState({filterText:e})}},{key:"onCheck",value:function(){this.setState((function(e){return{inStockOnly:!e.inStockOnly}}))}},{key:"render",value:function(){var e=this.props.products;return console.log(this.props),c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onCheck:this.onCheck,onInput:this.onInput}),c.a.createElement(y,{products:e,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,SearchBar:this.state.inStockOnly}))}}]),n}(a.Component),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={products:[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}]},a}return Object(s.a)(n,[{key:"render",value:function(){return console.log(this.state.products),c.a.createElement("div",{className:"container-lg"},c.a.createElement("h1",{className:"display-4"},"Product Table"),c.a.createElement(b,{products:this.state.products}))}}]),n}(a.Component);o.a.render(c.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.7ea8e4c9.chunk.js.map