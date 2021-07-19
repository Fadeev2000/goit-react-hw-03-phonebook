(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1mShx",form__label:"ContactForm_form__label__2Y5_B",form__input:"ContactForm_form__input__2dAh_",form__button:"ContactForm_form__button__13-vb"}},,,,,,,function(t,e,n){t.exports={label:"Filter_label__3rNHb",input:"Filter_input__T4cQW",form__button:"Filter_form__button__3J6dT"}},function(t,e,n){t.exports={li:"ContactList_li__3prhw",button:"ContactList_button__1nTZq"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(17),n(3)),i=n(12),u=n(4),l=n(5),b=n(7),m=n(6),h=(n(18),n(22)),d=n(2),f=n.n(d),j=n(0),_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInput=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,id:Object(h.a)(),number:t.state.number};t.isNewContact(n.name)?t.props.onSubmit(n):alert("".concat(n.name," is already in contacts")),t.resetInput("name"),t.resetInput("number")},t}return Object(l.a)(n,[{key:"isNewContact",value:function(t){return!this.props.onCheck.some((function(e){return e.name===t}))}},{key:"resetInput",value:function(t){this.setState(Object(s.a)({},t,""))}},{key:"render",value:function(){var t=""!==this.state.name&&""!==this.state.number;return Object(j.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:f.a.form__label,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",className:f.a.form__input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInput})]}),Object(j.jsxs)("label",{className:f.a.form__label,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",className:f.a.form__input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInput})]}),t?Object(j.jsx)("button",{type:"submit",className:f.a.form__button,children:"Add contact"}):Object(j.jsx)("button",{type:"submit",className:f.a.form__button,disabled:!0,children:"Add contact"})]})}}]),n}(a.Component),p=n(9),O=n.n(p);var v=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",className:O.a.input,value:e,onChange:n})]})},C=n(10),x=n.n(C);var g=function(t){var e=t.items,n=t.onDeleteContact;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsxs)("li",{className:x.a.li,children:[t.name,": ",t.number,Object(j.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},y=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){t.setState((function(t){return{contacts:[e].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=e.contacts,a=this.state.contacts;n!==a&&localStorage.setItem("contacts",JSON.stringify(a))}},{key:"getVisibleContacts",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=e.toLowerCase();return""===e?n:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Fhonebook"}),Object(j.jsx)(_,{onSubmit:this.addContact,onCheck:n}),Object(j.jsx)("h2",{children:"Contacts"}),0!==n.length&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{value:e,onChange:this.changeFilter}),Object(j.jsx)(g,{items:a,onDeleteContact:this.deleteContact})]})]})})}}]),n}(a.Component);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.00321c1a.chunk.js.map