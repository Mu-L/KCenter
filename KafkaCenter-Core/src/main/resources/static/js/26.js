(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1036:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(56),i=n.n(o),c=n(109),l=n(162),s=n(23),u=n(54),f=n(22),p=n(36),m=n(11),d=n(66),h=n(16),y=n(128),b=n(47),v=n(99),g=n(33),S=n(21),w=n(310),E=n(187),D=n(143),O=n(979),I=n(74),C=n(20),T=n(14);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function U(e){var t=V();return function n(){var r=N(e),a;if(t){var o=N(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return F(this,a)}}function F(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=g.a.Row,W=g.a.Col,z=function(e){R(n,e);var t=U(n);function n(e){var r;return k(this,n),L(B(r=t.call(this,e)),"onOk",(function(){r.form.validateAll((function(e){e||S.a.post("/team/upsert",r.state.teamInfoData).then((function(e){200===e.data.code?r.props.fetchData():h.a.error(e.data.message)})).catch((function(e){console.error(e)}))}))})),L(B(r),"hideTeamInfoDialog",(function(){r.props.hideTeamInfoDialog()})),L(B(r),"formChange",(function(e){r.setState({teamInfoData:e})})),L(B(r),"checkbland",(function(e,t,n){t?""===t.trim()?n("please input a vaild value"):n():n("required")})),r.state={title:r.props.title,teamInfoData:r.props.teamInfo,visible:r.props.visible},r}return j(n,[{key:"componentWillReceiveProps",value:function e(t){this.setState({title:t.title,teamInfoData:t.teamInfo,visible:t.visible})}},{key:"render",value:function e(){var t=this,n={children:"OK"},r={children:"Cancel"};return a.a.createElement(b.a,{className:"simple-form-dialog",onOk:this.onOk,onCancel:this.hideTeamInfoDialog,onClose:this.hideTeamInfoDialog,visible:this.state.visible,isFullScreen:!0,style:J.simpleFormDialog,okProps:n,cancelProps:r},a.a.createElement(T.FormBinderWrapper,{value:this.state.teamInfoData,onChange:this.formChange,ref:function e(n){t.form=n}},a.a.createElement("div",{style:J.formContent},a.a.createElement("h2",{style:J.formTitle},this.state.title),a.a.createElement(A,{style:J.formRow},a.a.createElement(W,{span:"6"},a.a.createElement("label",{style:J.formLabel},"Team Name: ")),a.a.createElement(W,{span:"18"},a.a.createElement(T.FormBinder,{name:"name",required:!0,validator:this.checkbland},a.a.createElement(C.a,{size:"medium",placeholder:"team name",style:J.input})),a.a.createElement(T.FormError,{name:"name"}))),a.a.createElement(A,{style:J.formRow},a.a.createElement(W,{span:"6"},a.a.createElement("label",{style:J.formLabel},"Alarm Group: ")),a.a.createElement(W,{span:"18"},a.a.createElement(T.FormBinder,{name:"alarmGroup",required:!0,validator:this.checkbland},a.a.createElement(C.a,{size:"medium",placeholder:"alarm group",style:J.input})),a.a.createElement(T.FormError,{name:"alarmGroup"}))))))}}]),n}(r.Component);L(z,"displayName","TeamInfo");var J={formContent:{width:"100%",position:"relative"},formTitle:{margin:"0 0 20px",paddingBottom:"10px",borderBottom:"1px solid #eee"},simpleFormDialog:{width:"500px"},formRow:{marginTop:20},input:{width:"100%"},formLabel:{lineHeight:"26px"}};function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t&&q(e.prototype,t),n&&q(e,n),e}function K(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}function Y(e,t){return(Y=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function Q(e){var t=$();return function n(){var r=ee(e),a;if(t){var o=ee(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return X(this,a)}}function X(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=g.a.Col,re={separator:{margin:"0 8px",display:"inline-block",height:"12px",width:"1px",verticalAlign:"middle",background:"#e8e8e8"},operBtn:{display:"inline-block",width:"24px",height:"24px",borderRadius:"999px",color:"#929292",background:"#f2f2f2",textAlign:"center",cursor:"pointer",lineHeight:"24px",marginRight:"6px"}},ae=function(e){K(n,e);var t=Q(n);function n(){var e;return M(this,n),te(Z(e=t.call(this)),"componentWillUnmount",(function(){e.mounted=!1})),te(Z(e),"handleEdit",(function(t){e.setState({teamInfoDialog:!0,teamInfoDialogTitle:"Edit Team",teamInfoData:Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t))})})),te(Z(e),"addNewTeam",(function(){e.setState({teamInfoDialog:!0,teamInfoDialogTitle:"New Team",teamInfoData:{}})})),te(Z(e),"hideTeamInfoDialog",(function(){e.setState({teamInfoDialog:!1,teamInfoData:{},teamInfoDialogTitle:""})})),te(Z(e),"handleDelete",(function(t){b.a.confirm({title:"Delete Team",content:"confirm delete this team: ".concat(t.name,"?"),onOk:function n(){return e.deleteTeam(t.id)},okProps:{children:"OK"},cancelProps:{children:"Cancel"}})})),te(Z(e),"handleAddUser",(function(t){e.props.showTeamUserInfo(t)})),te(Z(e),"deleteTeam",(function(t){S.a.delete("/team/del/".concat(t)).then((function(t){200===t.data.code?e.fetchData():h.a.error(t.data.message)})).catch((function(e){console.error(e)}))})),te(Z(e),"fetchData",(function(){e.setState({isLoading:!0,teamInfoDialog:!1},(function(){S.a.get("/team/").then((function(t){if(200===t.data.code){if(e.mounted){var n=Object(E.e)(t.data.data,"name");e.setState({dataSource:n,isLoading:!1,filterDataSource:n})}}else h.a.error(t.data.message),e.setState({isLoading:!1})})).catch((function(t){console.error(t),e.setState({isLoading:!1})}))}))})),te(Z(e),"refreshTableData",(function(t){e.setState({filterDataSource:t})})),te(Z(e),"redrawPageData",(function(t){e.setState({pageData:t})})),te(Z(e),"renderOper",(function(t,n,r){return a.a.createElement("div",{style:re.oper},a.a.createElement("span",{title:"AddUser",style:re.operBtn},a.a.createElement(m.a,{size:"xs",type:"account",onClick:function t(){e.handleAddUser(r)}})),a.a.createElement(w.a,{rolename:"admin"},a.a.createElement("span",{style:re.separator}),a.a.createElement("span",{title:"Edit",style:re.operBtn},a.a.createElement(m.a,{size:"xs",type:"edit",onClick:function t(){e.handleEdit(r)}})),a.a.createElement("span",{style:re.separator}),a.a.createElement("span",{title:"Delete",style:re.operBtn},a.a.createElement(m.a,{size:"xs",type:"close",onClick:function t(){e.handleDelete(r)}}))))})),e.state={isLoading:!1,dataSource:[],teamInfoDialog:!1,teamInfoData:{},teamInfoDialogTitle:"",filterDataSource:[],pageData:[]},e}return G(n,[{key:"componentWillMount",value:function e(){this.mounted=!0}},{key:"onSort",value:function e(t,n){var r=Object(E.f)(this.state.filterDataSource,t,n);this.refreshTableData(r)}},{key:"render",value:function e(){var t=this,n=this.state.isLoading,r=a.a.createElement(ne,{align:"center"},a.a.createElement(w.a,{rolename:"admin"},a.a.createElement(f.a,{type:"secondary",onClick:this.addNewTeam},a.a.createElement(m.a,{type:"add"}),"New Team")));return a.a.createElement("div",null,a.a.createElement(z,{title:this.state.teamInfoDialogTitle,teamInfo:this.state.teamInfoData,visible:this.state.teamInfoDialog,hideTeamInfoDialog:this.hideTeamInfoDialog,fetchData:this.fetchData}),a.a.createElement(O.a,{dataSource:this.state.dataSource,refreshTableData:this.refreshTableData,refreshDataSource:this.fetchData,searchTitle:"Filter",searchField:"name",searchPlaceholder:"Input team Name",otherComponent:r,id:"settingTeam"}),a.a.createElement(s.a,{loading:n,dataSource:this.state.pageData,hasBorder:!1,onSort:function e(n,r){return t.onSort(n,r)},primaryKey:"id"},a.a.createElement(s.a.Column,{title:"Name",dataIndex:"name",sortable:!0}),a.a.createElement(s.a.Column,{title:"Alarm Group",dataIndex:"alarmGroup"}),a.a.createElement(s.a.Column,{title:"Operation",cell:this.renderOper})),a.a.createElement(D.a,{dataSource:this.state.filterDataSource,redrawPageData:this.redrawPageData}))}}]),n}(r.Component),oe=n(68),ie=n.n(oe),ce=n(142),le=n(53);function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t,n){return t&&fe(e.prototype,t),n&&fe(e,n),e}function me(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}function de(e,t){return(de=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function he(e){var t=ve();return function n(){var r=ge(e),a;if(t){var o=ge(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return ye(this,a)}}function ye(e,t){if(t&&("object"===se(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return be(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var we=g.a.Row,Ee=g.a.Col,De=function(e){me(n,e);var t=he(n);function n(e){var r;return ue(this,n),Se(be(r=t.call(this,e)),"onClick",(function(){var e=r.state.selectUserId,t=r.state.teamId;S.a.post("/team/adduser",{userId:"".concat(e),teamId:"".concat(t)}).then((function(e){200===e.data.code?(h.a.success(e.data.message),r.refreshData(t),r.setState({selectValue:"",addUserButton:!0})):h.a.error(e.data.message)})).catch((function(e){console.error(e)}))})),Se(be(r),"refreshData",(function(e){r.props.refreshData(e)})),Se(be(r),"onSelectChange",(function(e,t,n){r.setState({selectUserId:e,selectValue:n.label,addUserButton:!1})})),r.state={selectUserDatas:r.props.selectUserDatas,teamId:r.props.teamId,selectValue:"",addUserButton:!0},r}return pe(n,[{key:"componentWillReceiveProps",value:function e(t){this.setState({selectUserDatas:t.selectUserDatas,teamId:t.teamId})}},{key:"render",value:function e(){var t=this.state.selectUserDatas;return a.a.createElement("div",null,a.a.createElement(we,{style:Oe.row},a.a.createElement(Ee,null,a.a.createElement(le.a,{showSearch:!0,dataSource:t,placeholder:"please select user",style:{width:300},onChange:this.onSelectChange,value:this.state.selectValue}),a.a.createElement(f.a,{type:"secondary",disabled:this.state.addUserButton,onClick:this.onClick},"Add User To Team"))))}}]),n}(r.Component),Oe={row:{margin:"4px 0 20px"}};function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function Ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e,t,n){return t&&Te(e.prototype,t),n&&Te(e,n),e}function ke(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}function xe(e,t){return(xe=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function je(e){var t=Ue();return function n(){var r=Fe(e),a;if(t){var o=Fe(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return Re(this,a)}}function Re(e,t){if(t&&("object"===Ie(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _e(e)}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ve=function(e){ke(n,e);var t=je(n);function n(e){var r;return Ce(this,n),Be(_e(r=t.call(this,e)),"handleDelete",(function(e){b.a.confirm({title:"Delete User",content:"confirm remove this User: ".concat(e.name,"?"),onOk:function t(){return r.deleteUser(e.id)},okProps:{children:"OK"},cancelProps:{children:"Cancel"}})})),Be(_e(r),"refreshData",(function(e){r.fetchNotExistInTeamUsers(e),r.fetchUserInfoByTeamId(e)})),Be(_e(r),"fetchNotExistInTeamUsers",(function(e){S.a.get("/users/all/".concat(e)).then((function(e){200===e.data.code?r.mounted&&r.setState({selectUserDatas:e.data.data}):h.a.error(e.data.message)})).catch((function(e){console.error(e)}))})),Be(_e(r),"deleteUser",(function(e){var t=r.state.teamInfoData.id;S.a.delete("/team/del/user?userId=".concat(e,"&teamId=").concat(t)).then((function(e){200===e.data.code?r.refreshData(t):h.a.error(e.data.message)})).catch((function(e){h.a.error("server error!"),console.error(e)}))})),Be(_e(r),"componentWillUnmount",(function(){r.mounted=!1})),Be(_e(r),"fetchUserInfoByTeamId",(function(e){r.setState({isLoading:!0},(function(){S.a.get("/team/userinfos/".concat(e)).then((function(e){200===e.data.code?r.mounted&&r.setState({userInfoDataList:e.data.data,isLoading:!1}):h.a.error(e.data.message)})).catch((function(e){h.a.error("server error!"),console.error(e)}))}))})),Be(_e(r),"backward",(function(){r.props.teamUserShow()})),Be(_e(r),"renderOper",(function(e,t,n){var o=n.name,i=JSON.parse(sessionStorage.getItem("user")),c=i.name,l;return"ADMIN"===i.role||o===c?a.a.createElement("div",{style:Ne.oper},a.a.createElement("span",{title:"Delete",style:Ne.operBtn},a.a.createElement(m.a,{size:"xs",type:"close",onClick:function e(){r.handleDelete(n)}}))):void 0})),r.state={isLoading:!1,teamInfoData:r.props.teamInfoData,userInfoDataList:[],selectUserDatas:[]},r}return Pe(n,[{key:"componentDidMount",value:function e(){this.refreshData(this.state.teamInfoData.id)}},{key:"componentWillMount",value:function e(){this.mounted=!0}},{key:"componentWillReceiveProps",value:function e(t){this.setState({teamInfoData:t.teamInfoData})}},{key:"onSort",value:function e(t,n){var r=[];r=this.state.userInfoDataList.sort((function(e,r){return e=e[t],r=r[t],"asc"===n?e.localeCompare(r):r.localeCompare(e)})),this.setState({userInfoDataList:r})}},{key:"render",value:function e(){var t=this,n=this.state.isLoading,r=this.state.userInfoDataList,o=this.state.teamInfoData.id,i=this.state.selectUserDatas;return a.a.createElement("div",null,a.a.createElement(ie.a,{onClick:function e(){return t.backward()},style:Ne.backward,size:"large",type:"backward"}),a.a.createElement("span",{style:{fontSize:"16px",fontWeight:"500"}},this.props.teamInfoData.name),a.a.createElement(De,{teamId:o,selectUserDatas:i,refreshData:this.refreshData}),a.a.createElement(s.a,{loading:n,dataSource:r,hasBorder:!1,onSort:function e(n,r){return t.onSort(n,r)},primaryKey:"id"},a.a.createElement(s.a.Column,{title:"Name",dataIndex:"name",sortable:!0}),a.a.createElement(s.a.Column,{title:"Email",dataIndex:"email"}),a.a.createElement(s.a.Column,{title:"Operation",cell:this.renderOper})))}}]),n}(r.Component),Ne={operBtn:{display:"inline-block",width:"24px",height:"24px",borderRadius:"999px",color:"#929292",background:"#f2f2f2",textAlign:"center",cursor:"pointer",lineHeight:"24px",marginRight:"6px"},backward:{display:"inline-block",minWidth:"40px",marginBottom:"15px",cursor:"pointer",color:"#0066FF"}};function Le(e){return(Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function Ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function We(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ze(e,t,n){return t&&We(e.prototype,t),n&&We(e,n),e}function Je(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&He(e,t)}function He(e,t){return(He=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function Me(e){var t=Ke();return function n(){var r=Ye(e),a;if(t){var o=Ye(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return qe(this,a)}}function qe(e,t){if(t&&("object"===Le(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Ge(e)}function Ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Ye(e){return(Ye=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Xe={container:{margin:"20px",padding:"10px 20px 20px",minHeight:"600px"}},Ze=function(e){Je(n,e);var t=Me(n);function n(){var e;return Ae(this,n),Qe(Ge(e=t.call(this)),"showTeamUserInfo",(function(t){e.setState({teamInfoData:t,teamUserShow:!0})})),Qe(Ge(e),"transform",(function(){e.setState((function(e){return{teamUserShow:!e.teamUserShow}}))})),e.state={teamUserShow:!1,teamInfoData:{}},e}return ze(n,[{key:"render",value:function e(){var t=[{link:"",text:"Setting"},{link:"",text:"Team"}],n=this.state.teamUserShow;return n&&t.push({link:"",text:"User"}),a.a.createElement("div",null,a.a.createElement(c.a,{items:t,title:"Team"}),a.a.createElement(i.a,{style:Xe.container},n?a.a.createElement(Ve,{teamInfoData:this.state.teamInfoData,teamUserShow:this.transform}):a.a.createElement(ae,{showTeamUserInfo:this.showTeamUserInfo})))}}]),n}(r.Component),$e=t.default=Ze},979:function(e,t,n){"use strict";var r=n(434),a=n(309),o=n(36),i=n(11),c=n(74),l=n(20),s=n(142),u=n(53),f=n(66),p=n(16),m=n(99),d=n(33),h=n(1),y=n.n(h),b=n(21),v=n(108);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),e}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function O(e,t){return(O=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function I(e){var t=P();return function n(){var r=k(e),a;if(t){var o=k(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return C(this,a)}}function C(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=d.a.Row,R=d.a.Col,_=function(e){D(n,e);var t=I(n);function n(e){var r;S(this,n),x(T(r=t.call(this,e)),"componentWillUnmount",(function(){r.mounted=!1})),x(T(r),"arrayIsEqual",(function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1){var r=JSON.stringify(e[n]),a=JSON.stringify(t[n]);if(0!==r.localeCompare(a))return!1}return!0})),x(T(r),"refreshTableData",(function(e){r.props.refreshTableData(e)})),x(T(r),"getCluster",(function(){var e=[{value:"-1",label:"ALL"}];b.a.get("/cluster").then((function(t){if(200===t.data.code){var n=t.data.data[0].id,a=t.data.data[0].name,o=r.state.clusterValue;t.data.data.forEach((function(t){t.id<n&&(n=t.id,a=t.name),e.push({value:t.id,label:t.name})}));var i=Object(v.a)(r.props.id).id;if(null!=i?r.props.refreshDataSource(i):r.props.refreshDataSource(n),void 0===o&&"settingUser"!==r.props.id&&"settingTeam"!==r.props.id){var c={id:n,cluster:a,isAll:!1};Object(v.d)(r.props.id,c),o=a}r.setState({clusterSelectData:e,clusterValue:o})}})).catch((function(e){console.error("error",e),void 0!==e.response&&void 0!==e.response.status&&""!==e.response.status&&null!=e.response.status&&null!=e.response.status&&(401===e.response.status?p.a.error({content:"Please login!",closeable:!0}):p.a.error({content:"get cluster faily!",duration:1e4,closeable:!0}))}))})),x(T(r),"handleClusterFilterChange",(function(e,t){r.props.refreshDataSource(t.value);var n=r.state.dataSource;e=t.label.toString();var a={id:t.value,cluster:t.label,isAll:!1};"-1"===t.value&&(a.isAll=!0),Object(v.d)(r.props.id,a);var o=r.filterByPara(n,r.state.clusterField,e,r.state.searchField,r.state.searchValue,r.state.switchField,r.state.switchValue);r.setState({clusterValue:e}),r.refreshTableData(o)})),x(T(r),"handleFilterChange",(function(e){e=e.toString();var t=r.state.dataSource,n=r.filterByPara(t,r.state.clusterField,r.state.clusterValue,r.state.searchField,e,r.state.switchField,r.state.switchValue);r.setState({searchValue:e}),r.refreshTableData(n),r.setSesion("".concat(r.props.id,"Search"),e)})),x(T(r),"onSwitchChange",(function(e){var t=r.state.dataSource,n=r.filterByPara(t,r.state.clusterField,r.state.clusterValue,r.state.searchField,r.state.searchValue,r.state.switchField,e);r.setState({switchValue:e}),r.refreshTableData(n),r.setSesion("".concat(r.props.id,"Switch"),e)})),x(T(r),"setSesion",(function(e,t){void 0!==e&&sessionStorage.setItem(e,t)})),x(T(r),"initData",(function(e){var t=JSON.parse(JSON.stringify(e)),n=r.filterByPara(t,r.state.clusterField,r.state.clusterValue,r.state.searchField,r.state.searchValue,r.state.switchField,r.state.switchValue);r.setState({dataSource:t}),r.refreshTableData(n)})),x(T(r),"filterByPara",(function(e,t,n,a,o,i,c){var l=JSON.parse(JSON.stringify(e));return r.isNullOrEmptyStr(i)||c&&"false"!==c||(l=l.filter((function(e){return!e[i].startsWith("_")}))),r.isNullOrEmptyStr(t)||r.isNullOrEmptyStr(n)||"ALL"===n||(l=r.searchdata(l,t,n)),r.isNullOrEmptyStr(o)||(l=r.searchdata(l,a,o)),l})),x(T(r),"searchdata",(function(e,t,n){var r=t.split(",");return e.filter((function(e){for(var t=!1,a=0,o=r.length;a<o;a+=1){for(var i=r[a].split("."),c=e,l=0,s=i.length;l<s;l+=1)c=c[i[l]];if(-1!==c.toLocaleLowerCase().search(n.toLocaleLowerCase())){t=!0;break}}return t}))})),x(T(r),"isNullOrEmptyStr",(function(e){return null==e||""===e})),x(T(r),"selectView",(function(e){return y.a.createElement(R,{align:"center"},y.a.createElement("span",{style:{fontWeight:"600"}},e,":\xa0\xa0\xa0"),y.a.createElement(u.a,{showSearch:!0,dataSource:r.state.clusterSelectData,placeholder:"please select cluster",style:{width:"300px"},onChange:function e(t,n,a){r.handleClusterFilterChange(t,a)},value:r.state.clusterValue}))})),x(T(r),"filterView",(function(e,t){return y.a.createElement(R,{align:"center"},y.a.createElement("span",{style:{fontWeight:"600"}},e,":\xa0\xa0\xa0"),y.a.createElement(l.a,{placeholder:r.isNullOrEmptyStr(t)?"Input filter value":t,hasClear:!0,onChange:r.handleFilterChange,style:{width:"300px"},value:r.state.searchValue}))})),x(T(r),"parseBoolean",(function(e){return"true"===e||"TRUE"===e||"True"===e||"false"!==e&&"FALSE"!==e&&"False"!==e&&void 0})),x(T(r),"getFilterData",(function(e){var t=JSON.parse(JSON.stringify(e)),n;return r.filterByPara(t,r.state.clusterField,r.state.clusterValue,r.state.searchField,r.state.searchValue,r.state.switchField,r.state.switchValue)})),x(T(r),"switchView",(function(){var e=r.state.switchValue;return"string"==typeof r.state.switchValue&&(e=r.parseBoolean(r.state.switchValue.trim())),y.a.createElement(R,{align:"center"},y.a.createElement("div",{style:{display:"flex"}},y.a.createElement("span",{style:U.special},"Include special topic:\xa0\xa0"),y.a.createElement(a.a,{onChange:r.onSwitchChange,checked:e,defaultChecked:e,checkedChildren:y.a.createElement(i.a,{type:"select",size:"xs"}),unCheckedChildren:y.a.createElement(i.a,{type:"close",size:"xs"})})))})),void 0!==r.props.onRef&&r.props.onRef(T(r));var o=sessionStorage.getItem("".concat(r.props.id,"Search")),c=sessionStorage.getItem("".concat(r.props.id,"Switch"));return r.state={dataSource:r.props.dataSource,clusterSelectData:[],clusterValue:Object(v.a)(r.props.id).cluster,clusterField:r.props.selectField,searchValue:null===o?"":o,searchField:r.props.searchField,switchField:r.props.switchField,switchValue:null!==c&&""!==c&&c},r}return E(n,[{key:"componentWillMount",value:function e(){this.mounted=!0}},{key:"componentDidMount",value:function e(){this.getCluster()}},{key:"componentWillReceiveProps",value:function e(t){this.validateCondition(this.state.dataSource,t.dataSource)&&(this.setState({dataSource:t.dataSource}),this.initData(t.dataSource))}},{key:"validateCondition",value:function e(t,n){return(null!=t||null!=n)&&((void 0!==t||void 0!==n)&&((0!==t.length||0!==n.length)&&(!this.arrayIsEqual(t,n)&&t!==n)))}},{key:"render",value:function e(){var t=this.props.selectTitle,n=this.props.searchTitle,r=this.props.searchPlaceholder,a=this.isNullOrEmptyStr(t)?"":this.selectView(t),o=this.isNullOrEmptyStr(n)?"":this.filterView(n,r),i=this.isNullOrEmptyStr(this.props.otherComponent)?"":this.props.otherComponent,c=this.isNullOrEmptyStr(this.props.switchField)?"":this.switchView();return y.a.createElement(j,{style:U.row},a,o,i,c)}}]),n}(h.Component),U={row:{margin:"20px 4px 20px"},special:{fontFamily:'Roboto, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Microsoft YaHei"',fontSize:"12px",lineHeight:"1.28571",color:"#333333",alignSelf:"center",fontWeight:"600"}},F=t.a=_}}]);