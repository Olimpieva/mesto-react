(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),r=(n(14),n(9)),i=n(2),u=n(7),l=n(8),p=new(function(){function e(t){Object(u.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(l.a)(e,[{key:"_sendRequest",value:function(e,t){return fetch("".concat(this._url,"/").concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return this._sendRequest("cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._sendRequest("users/me",{headers:this._headers})}},{key:"updateUserInfo",value:function(e){return this._sendRequest("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"updateAvatar",value:function(e){return this._sendRequest("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"addCard",value:function(e){return this._sendRequest("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"removeCard",value:function(e){return this._sendRequest("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._sendRequest("cards/likes/".concat(e),{method:"DELETE",headers:this._headers}):this._sendRequest("cards/likes/".concat(e),{method:"PUT",headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"e0a0481d-9fe7-4aea-8a7b-5b74aae0ea67","Content-Type":"application/json"}}),d=n.p+"static/media/logo.03b78ada.svg",j=n(0);var _=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("img",{src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})})};var b=function(e){var t=e.userName,n=e.userDescription,a=e.userAvatar,c=e.onEditAvatar,o=e.onEditProfile,s=e.onAddPlace;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"profile__avatar-overlay",onClick:c,children:Object(j.jsx)("img",{className:"profile__avatar",src:a,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__info-name",children:t}),Object(j.jsx)("button",{className:"profile__button profile__button_action_edit",type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:o}),Object(j.jsx)("p",{className:"profile__info-caption",children:n})]}),Object(j.jsx)("button",{className:"profile__button profile__button_action_add",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",onClick:s})]})},m=c.a.createContext();function f(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,s=Object(a.useContext)(m),r=t.likes.some((function(e){return e._id===s._id}));return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(j.jsxs)("div",{className:"card__info",children:[Object(j.jsx)("h2",{className:"card__title",children:t.name}),Object(j.jsxs)("div",{className:"card__like-info",children:[Object(j.jsx)("button",{className:"card__like ".concat(r&&"card__like_active"),type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){c(t)}}),Object(j.jsx)("span",{className:"card__like-counter",children:t.likes.length})]})]}),t.owner._id===s._id&&Object(j.jsx)("button",{className:"card__remove",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",onClick:function(){o(t)}})]})}var h=Object(a.memo)(f);var O=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,o=e.cards,s=e.onCardClick,r=e.onCardLike,i=e.onCardDelete,u=Object(a.useContext)(m);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsx)("section",{className:"profile content__profile",children:Object(j.jsx)(b,{userName:u.name,userDescription:u.about,userAvatar:u.avatar,onEditAvatar:t,onEditProfile:n,onAddPlace:c})}),Object(j.jsx)("section",{className:"gallery content__gallery",children:Object(j.jsx)("ul",{className:"cards",children:o.map((function(e){return Object(j.jsx)(h,{card:e,onCardClick:s,onCardLike:r,onCardDelete:i},e._id)}))})})]})};var v=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:" 2020 Mesto Russia"})})};var x=function(e){var t=e.card,n=e.onClose,c=Object(a.useRef)(null);return Object(j.jsx)("div",{className:"popup popup-image ".concat(t.link&&"popup_is-opened"),ref:c,onClick:function(e){e.target===c.current&&n()},children:Object(j.jsxs)("div",{className:"popup-image__container",children:[Object(j.jsx)("button",{className:"popup__button popup__button_action_close",type:"button",onClick:n}),Object(j.jsx)("img",{className:"popup-image__image",src:t.link,alt:t.name}),Object(j.jsx)("h2",{className:"popup-image__title",children:t.name})]})})};var C=function(e){var t=e.name,n=e.title,c=e.buttonText,o=e.isOpen,s=e.onClose,r=e.onSubmit,i=Object(a.useRef)(null);return Object(j.jsx)("div",{className:"popup popup-".concat(t," ").concat(o&&"popup_is-opened"),ref:i,onClick:function(e){e.target===i.current&&s()},children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsxs)("form",{className:"popup__form popup__form-".concat(t),name:"popup-".concat(t),onSubmit:r,children:[Object(j.jsx)("h2",{className:"popup__title",children:n}),e.children,Object(j.jsx)("button",{className:"popup__button popup__button_action_save",type:"submit",children:c})]}),Object(j.jsx)("button",{className:"popup__button popup__button_action_close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:s})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,s=Object(a.useContext)(m),r=Object(a.useState)(""),u=Object(i.a)(r,2),l=u[0],p=u[1],d=Object(a.useState)(""),_=Object(i.a)(d,2),b=_[0],f=_[1];c.a.useEffect((function(){p(s.name),f(s.about)}),[s,t]);var h=function(e){"name"===e.target.name?p(e.target.value):f(e.target.value)};return Object(j.jsxs)(C,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:l,about:b})},children:[Object(j.jsxs)("fieldset",{className:"popup__input-fieldset",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_name",id:"profile-name",name:"name",type:"text",minLength:"2",maxLength:"40",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:l||"",onChange:h,required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"profile-name-error"})]}),Object(j.jsxs)("fieldset",{className:"popup__input-fieldset",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_caption",id:"profile-caption",name:"description",type:"text",minLength:"2",maxLength:"200",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:b||"",onChange:h,required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"profile-caption-error"})]})]})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,o=Object(a.useRef)();return Object(j.jsx)(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:o.current.value})},children:Object(j.jsxs)("fieldset",{className:"popup__input-fieldset",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_link",id:"avatar-link",name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:o||"",required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"avatar-link-error"})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,o=Object(a.useState)(""),s=Object(i.a)(o,2),r=s[0],u=s[1],l=Object(a.useState)(""),p=Object(i.a)(l,2),d=p[0],_=p[1],b=function(e){"name"===e.target.name?u(e.target.value):_(e.target.value)};return Object(j.jsxs)(C,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,link:d})},children:[Object(j.jsxs)("fieldset",{className:"popup__input-fieldset",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_caption",id:"card-name",name:"name",type:"text",minLength:"2",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:r||"",onChange:b,required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"card-name-error"})]}),Object(j.jsxs)("fieldset",{className:"popup__input-fieldset",children:[Object(j.jsx)("input",{className:"popup__input popup__input_type_link",id:"card-link",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:d||"",onChange:b,required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"card-link-error"})]})]})};var y=function(e){var t=e.data,n=e.onClose,a=e.onSubmit;return Object(j.jsx)(C,{name:"confirmation",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(t)}})};var S=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(i.a)(o,2),u=s[0],l=s[1],d=Object(a.useState)(!1),b=Object(i.a)(d,2),f=b[0],h=b[1],C=Object(a.useState)(!1),S=Object(i.a)(C,2),A=S[0],E=S[1],P=Object(a.useState)([]),L=Object(i.a)(P,2),q=L[0],T=L[1],D=Object(a.useState)(null),R=Object(i.a)(D,2),U=R[0],I=R[1],F=Object(a.useState)(null),J=Object(i.a)(F,2),w=J[0],B=J[1];function H(){h(!1),l(!1),E(!1),I(null),B(null)}return Object(a.useEffect)((function(){p.getUserInfo().then((function(e){c(e)})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),Object(a.useEffect)((function(){p.getInitialCards().then((function(e){T(e)})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),Object(j.jsx)(m.Provider,{value:n,children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(_,{}),Object(j.jsx)(O,{onEditAvatar:function(){h(!0)},onEditProfile:function(){l(!0)},onAddPlace:function(){E(!0)},cards:q,onCardClick:function(e){I(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));p.changeLikeCardStatus(e._id,t).then((function(t){T((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){B(e)}}),Object(j.jsx)(v,{}),Object(j.jsx)(N,{isOpen:f,onClose:H,onUpdateAvatar:function(e){var t=e.avatar;p.updateAvatar(t).then((function(e){c(e),H()})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(j.jsx)(g,{isOpen:u,onClose:H,onUpdateUser:function(e){p.updateUserInfo(e).then((function(e){c(e),H()})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(j.jsx)(k,{isOpen:A,onClose:H,onAddPlace:function(e){p.addCard(e).then((function(e){T([e].concat(Object(r.a)(q))),H()})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(j.jsx)(x,{card:U||{},onClose:H}),Object(j.jsx)(y,{data:w,onClose:H,onSubmit:function(e){p.removeCard(e._id).then((function(){T((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})),H()}})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),A()}},[[16,1,2]]]);
//# sourceMappingURL=main.d5320505.chunk.js.map