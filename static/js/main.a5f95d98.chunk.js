(this["webpackJsonptwtt-clone"]=this["webpackJsonptwtt-clone"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(10),c=n.n(i),r=(n(16),n(7)),o=n(8),l=n(3),s=n(4),u=n(2),d=n(6),b=n(5),j=(n(17),n(0)),h=function(t){var e=t.liked,n=t.allPosts;return Object(j.jsxs)("div",{className:"app-header d-flex",children:[Object(j.jsx)("h1",{children:"Yurii Petrenko"}),Object(j.jsxs)("h2",{children:[n," posts, liked: ",e]})]})},f=(n(19),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(j.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"Post searching",onChange:this.onUpdateSearch})}}]),n}(a.Component)),p=(n(20),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"all"},{name:"like",label:"Liked posts"}],a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterSelect,a=this.buttons.map((function(t){var a=t.name,i=t.label,c=e===a?"btn-info":"btn-outline-secondary";return Object(j.jsx)("button",{type:"button",className:"btn ".concat(c),onClick:function(){return n(a)},children:i},a)}));return Object(j.jsx)("div",{className:"btn-group",children:a})}}]),n}(a.Component)),m=n(11),O=(n(21),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c="app-list-item d-flex justify-content-between";return t.important&&(c+=" important"),t.like&&(c+=" like"),Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)("span",{className:"app-list-item-label",onClick:i,children:e}),Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(j.jsx)("button",{className:"btn-star btn-sm",onClick:a,children:Object(j.jsx)("i",{className:"fa fa-star"})}),Object(j.jsx)("button",{className:"btn-trash btn-sm",onClick:n,children:Object(j.jsx)("i",{className:"fa fa-trash-o"})}),Object(j.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(a.Component)),g=(n(22),function(t){var e=t.posts,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c=e.map((function(t){if("object"===typeof t&&function(t){for(var e in t)return!0;return!1}(t)){var e=t.id,c=Object(m.a)(t,["id"]);return Object(j.jsx)("li",{className:"list-group-item",children:Object(j.jsx)(O,Object(r.a)(Object(r.a)({},c),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleLiked:function(){return i(e)}}))},e)}}));return Object(j.jsx)("ul",{className:"app-list list-group",children:c})}),v=(n(23),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(j.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{type:"text",placeholder:"Write something",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-socondary",children:"Add"})]})}}]),n}(a.Component)),k=(n(24),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Learn React",important:!0,like:!1,id:1},{label:"Second",important:!1,like:!1,id:2},{label:"three",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(u.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(u.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(u.a)(a)),a.maxId=4,a}return Object(s.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n.slice(0,a),c=n.slice(a+1);return{data:[].concat(Object(o.a)(i),Object(o.a)(c))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(o.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{important:!i.important});return{data:[].concat(Object(o.a)(n.slice(0,a)),[c],Object(o.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{like:!i.like});return{data:[].concat(Object(o.a)(n.slice(0,a)),[c],Object(o.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"filteredPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,c=e.length,r=this.filteredPost(this.searchPost(e,n),a);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(h,{liked:i,allPosts:c}),Object(j.jsxs)("div",{className:"search-panel d-flex",children:[Object(j.jsx)(f,{onUpdateSearch:this.onUpdateSearch}),Object(j.jsx)(p,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(j.jsx)(g,{posts:r,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(j.jsx)(v,{onAdd:this.addItem})]})}}]),n}(a.Component));c.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.a5f95d98.chunk.js.map