(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[882],{5281:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/booking",function(){return n(7043)}])},7043:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var s=n(6042),a=n(9396),r=n(603),o=n(5893),i=n(381),l=n.n(i),d=n(1664),c=n.n(d),u=n(8475);const m=function(e){for(var t=function(e){a.push((0,o.jsx)(u.Z.Option,{className:"month-item ".concat(e<r?"month-before":e===r?"month-current":"month-after"),children:c[e]},"".concat(e)))},n=e.value,s=(e.type,e.onChange),a=(e.onTypeChange,[]),r=l()().month(),i=n.clone(),d=n.localeData(),c=[],m=0;m<12;m++)i.month(m),c.push(d.months(i));for(var h=0;h<12;h++)t(h);var f=n.month();return(0,o.jsx)(u.Z,{dropdownMatchSelectWidth:!1,value:String(f),className:"select-pick-a-date",dropdownClassName:"select-on-bookingpage",listItemHeight:10,listHeight:250,onChange:function(e){var t=n.clone();t.month(parseInt(e,10)),s(t)},children:a})};var h=n(5617),f=n(7294),x=n(7937),v=n(8429),g=n(8751),p=n(1602),b=n(3256),j=n(5957),N=n(1577),k=n(2688),y=n(7207),Z=n(1448),w=n(2797),S=u.Z.Option,D="YYYY-MM-DD";const _=function(){var e=(0,f.useRef)(),t=(0,h.I0)(),n=(0,r.Z)(p.Z.useForm(),1)[0],i=(0,f.useState)(!1),d=i[0],_=i[1],Y=(0,f.useState)({email:"",name:"",phone:""}),E=Y[0],P=Y[1],C=(0,f.useState)(""),I=C[0],T=C[1],M=(0,f.useState)(),F=M[0],O=M[1],B=(0,f.useState)(l()(new Date,"DD/MM/YYYY")),A=B[0],q=B[1],R=(0,f.useState)(),V=R[0],H=R[1],L=(0,f.useState)([]),$=L[0],W=L[1],K=(0,f.useState)([]),X=K[0],z=K[1],G=(0,f.useState)(),U=G[0],J=G[1],Q=(0,f.useState)(!1),ee=Q[0],te=Q[1],ne=(0,f.useState)(0),se=ne[0],ae=ne[1],re=(0,f.useState)({status:!1,order_id:null}),oe=re[0],ie=re[1],le=(0,f.useState)({list:[],selected:null}),de=le[0],ce=le[1],ue=(0,f.useState)({list:[],selected:null}),me=ue[0],he=ue[1],fe=(0,h.v9)((function(e){return e.FicReducers})),xe=fe.loading,ve=fe.DataListStudio,ge=fe.DataBooking,pe=fe.DataListDuration,be=fe.DataCalendar,je=fe.DataListStartTime,Ne=fe.DataCheckPaymentStatus,ke=fe.DataTotalPrice,ye=(0,f.forwardRef)((function(e,t){return(0,o.jsx)("div",{ref:t,className:"CalendarRef",children:(0,o.jsx)(b.Z,{fullscreen:!1,dateCellRender:Ze,value:A,onSelect:_e,disabledDate:function(e){return e&&e<l()(l()(new Date,"DD/MM/YYYY").format(D),D)},headerRender:function(e,t,n,s){return m(e,t,n,s)}})})})),Ze=function(e){var t=function(e){var t=[],n=e.format("yyyy/MM/DD");if(U)for(var s=0;s<U.length;s++){var a,r,o=null===(a=U[s])||void 0===a?void 0:a.full_day,i=null===(r=U[s])||void 0===r?void 0:r.can_book;if(l()(o,"DD/MM/YYYY").endOf("days").valueOf()==l()(n,"DD/MM/YYYY").endOf("days").valueOf()&&!1===i){t=[{type:"error"}];break}}return t||[]}(e);return(0,o.jsx)("span",{ref:function(e){if((null===t||void 0===t?void 0:t.length)>0&&e){var n=null===e||void 0===e?void 0:e.closest(".ant-picker-cell-in-view");null===n||void 0===n||n.classList.add("cannot-book")}},className:"has-event"})};(0,f.useEffect)((function(){if(oe.order_id&&!1===oe.status){var e=window.setInterval((function(){t((0,Z._l)({order_id:oe.order_id}))}),6e4);return function(){window.clearInterval(e)}}}),[oe,oe.order_id]),(0,f.useEffect)((function(){ke&&!0===ke.status&&ae(ke.total_price)}),[ke]),(0,f.useEffect)((function(){X&&X.length>0&&t((0,Z.OO)({bookings:X}))}),[X]),(0,f.useEffect)((function(){A&&V&&function(e){var n=e.month,s=e.roomId,a=l()(n).month()+1,r=l()(n).year();t((0,Z.Af)({month:a,year:r,room:s}))}({month:A,roomId:V.id})}),[A,V]),(0,f.useEffect)((function(){A&&V&&me.selected&&function(e){var n=e.date,s=e.roomId,a=e.duration;t((0,Z.Yy)({date:l()(n).format("YYYY-MM-DD"),room:s,duration:a}))}({date:A,roomId:V.id,duration:me.selected})}),[A,V,me.selected]),(0,f.useEffect)((function(){t((0,Z.$c)()),t((0,Z.Kt)())}),[t]),(0,f.useEffect)((function(){ve&&!0===ve.status&&(O(ve.result),n.setFieldsValue({studio:ve.result[0].id}),H(ve.result[0]))}),[ve]),(0,f.useEffect)((function(){pe?he((0,a.Z)((0,s.Z)({},me),{selected:pe.duration[0],list:pe.duration})):t((0,Z.Mz)())}),[pe]),(0,f.useEffect)((function(){void 0!=xe&&_(xe)}),[xe]);var we=[].concat($);(0,f.useEffect)((function(){if(ge)if(_(!1),ie((0,a.Z)((0,s.Z)({},oe),{status:!1})),!0===ge.status)te(!0),T(ge.payment_link),n.resetFields(),t((0,Z.OV)()),P({email:"",name:"",phone:""}),ie((0,a.Z)((0,s.Z)({},oe),{order_id:ge.order_id,status:!1}));else{var e,r;j.Z.error({message:null===(e=ge.error)||void 0===e?void 0:e.bookings,description:"Please select other one!"});for(var o=null===(r=ge.error)||void 0===r?void 0:r.id_invalid,i=0;i<we.length;i++)for(var l=we[i],d=0;d<o.length;d++){var c=o[d];l.id===c&&(l.invalidBooking=!0)}W(we),t((0,Z.OV)())}}),[ge]),(0,f.useEffect)((function(){Ne&&!0===Ne.status&&(ie((0,a.Z)((0,s.Z)({},oe),{status:Ne.order_status})),!0===Ne.order_status&&W([]))}),[Ne]),(0,f.useEffect)((function(){be&&J(be.dates)}),[be]),(0,f.useEffect)((function(){var e;je&&(je.times&&ce((0,a.Z)((0,s.Z)({},de),{list:je.times})),0==je.status&&(ce((0,a.Z)((0,s.Z)({},de),{list:[]})),j.Z.error({message:"Error",description:null===(e=je.error)||void 0===e?void 0:e.room})))}),[je]);var Se=[].concat($),De=[].concat(X),_e=function(e){e&&(q(e),n.setFieldsValue({timeslot:null}),V||j.Z.info({message:"Error",description:"Please choose Studio"}))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w.WT,{title:"Fiction SG | Booking"}),(0,o.jsxs)("section",{className:"BookStudioPage container",children:[d&&(0,o.jsx)(w.gb,{}),(0,o.jsxs)("div",{className:"grid grid-cols sm:grid-cols-2 mb-[3.375rem]",children:[(0,o.jsxs)("div",{className:"mb-[3.125rem] max-w-[100%] lg:max-w-[90%]",children:[(0,o.jsx)("h1",{className:"child-heading text-[2.5rem] mb-[1.1rem]",children:"BOOK A STUDIO"}),(0,o.jsxs)("div",{className:"text-[1.375rem] leading-7",children:[(0,o.jsxs)("p",{className:"mb-3",children:["Before finalising your reservation, check out our ",(0,o.jsx)(c(),{href:"equipment/",children:(0,o.jsx)("a",{target:"_blank",className:"font-RanuaTrialsBold underline",children:"Equipment"})})," here for any additional tools you might need."]}),(0,o.jsx)("p",{className:"mb-3",children:"A minimum booking of 2 hours is required, which can be enjoyed with complimentary use of basic production equipment."}),(0,o.jsx)("p",{className:"mb-3",children:"The allocated booking time is inclusive of set-up, test shoot, makeup and post-shoot clean up."}),(0,o.jsx)("p",{className:"mb-3",children:"We value your time, your stories and your patronage, and we hope we can expect the same courtesy."}),(0,o.jsx)("p",{className:"mb-3",children:"At the end of your session, kindly leave the studio in the same condition you found it."}),(0,o.jsx)("p",{className:"mb-3",children:"Extension of booking session is subjected to availability."}),(0,o.jsx)("p",{className:"mb-3",children:"As of now, our system does not allow tentative bookings or cancellations."}),(0,o.jsxs)("p",{className:"mb-3",children:["Please read our ",(0,o.jsx)(c(),{href:"/terms",children:(0,o.jsx)("a",{target:"_blank",className:"font-RanuaTrialsBold underline",children:"Terms and Conditions"})})," carefully for more information."]}),(0,o.jsx)(w.PN,{})]})]}),(0,o.jsx)("div",{children:(0,o.jsxs)(p.Z.Provider,{onFormFinish:function(e,n){n.values;var a=n.forms;if("formBooking"===e){for(var r=[],o=0;o<$.length;o++){var i=$[o];r.push({id:i.id,date:i.date,room_id:i.studio.id,duration:me.selected,time:i.time})}var l={email:a.formBooking.getFieldsValue().email,name:a.formBooking.getFieldsValue().name,phone:a.formBooking.getFieldsValue().phone},d={bookings:r},c=(0,s.Z)({},d,l);_(!1),t((0,Z.t$)(c))}},children:[(0,o.jsxs)(p.Z,{name:"formSelect",form:n,layout:"vertical",className:"form-booking mx-auto max-w-[280px] md:max-w-[350px] flex flex-col justify-center",children:[(0,o.jsx)(p.Z.Item,{name:"studio",rules:[{required:!0,message:"Please choose Studio!"}],className:"mb-2 typeAndDate",label:"Studio Type",children:(0,o.jsx)(u.Z,{placeholder:"Select Studio",dropdownClassName:"select-on-bookingpage",onChange:function(e){var t=F.filter((function(t){return t.id==e}));H(t[0]),q(l()())},value:V,children:F&&F.length>0&&F.map((function(e,t){return(0,o.jsx)(S,{value:e.id,children:e.name},t)}))})}),(0,o.jsx)(p.Z.Item,{name:"duration",rules:[{required:!0,message:"Please choose Duration!"}],className:"mb-2 typeAndDate",label:"Duration",children:(0,o.jsx)(u.Z,{dropdownClassName:"select-on-bookingpage",placeholder:"Select Duration",onChange:function(e){he((0,a.Z)((0,s.Z)({},me),{selected:e}))},value:me.selected,listItemHeight:10,listHeight:250,children:me.list&&me.list.length>0&&me.list.map((function(e,t){return(0,o.jsx)(S,{value:e.id,children:e.time},t)}))})}),(0,o.jsx)("div",{className:"text-[1.375rem] font-RanuaTrialsMedium underline mb-[1.7rem]",title:"Studio Type",children:"Pick a date"}),(0,o.jsx)(p.Z.Item,{rules:[{required:!0,message:"Please choose month!"}],className:"mb-2 calendar",children:(0,o.jsx)(ye,{ref:e})}),(0,o.jsx)(p.Z.Item,{rules:[{required:!0,message:"Please choose time slot!"}],name:"timeslot",className:"mb-6 calendar",children:(0,o.jsx)(u.Z,{dropdownClassName:"select-on-bookingpage",placeholder:"Select timeslot",className:"timeslot",onChange:function(e){return t=e,void ce((0,a.Z)((0,s.Z)({},de),{selected:t}));var t},value:de.selected,listItemHeight:10,listHeight:250,children:de.list&&de.list.length>0&&de.list.map((function(e,t){return(0,o.jsx)(S,{value:e.code,disabled:!e.can_book,children:e.name},t)}))})}),(0,o.jsx)(p.Z.Item,{children:(0,o.jsx)(N.Z,{type:"primary",onClick:function(e){n.submit();var t=me.list&&me.list.length&&me.list.filter((function(e){return e.id===me.selected}))[0],s=de.list&&de.list.length&&de.list.filter((function(e){return e.code===de.selected}))[0],a=l()(A).format(D),r=n.getFieldValue("timeslot");if(V&&a&&t&&r){var o=a+"-"+V.id+"-"+t.id+r,i={id:o,studio:V,date:a,duration:t,time:s.code,timesSelected:s},d={id:o,date:a,duration:t.id,room_id:V.id,time:s.code};-1===Se.findIndex((function(e){return e.id===i.id}))?(Se.push(i),De.push(d)):j.Z.error({message:"The product has been selected! Please choose other "}),W(Se),z(De)}},className:"text-white border bg-green-dark border-solid text-[1.25rem] rounded-[3rem] w-[10rem] h-[3rem] hover:shadow-none hover:underline hover:bg-green-dark",children:"Add To Cart"})})]}),(0,o.jsx)(p.Z,{name:"formBooking",layout:"vertical",className:"form-booking mx-auto max-w-[280px] md:max-w-[350px] flex flex-col justify-center",initialValues:E,children:(0,o.jsxs)("div",{className:"cart-summary w-full mx-auto pt-3 mt-4 ".concat($.length>0?"border-t-2":""," "),children:[$&&$.length>0&&(0,o.jsx)("div",{className:"w-full my-3 max-h-[25.4rem] overflow-y-auto",children:$.map((function(e,t){var n,s,a;return(0,o.jsxs)("div",{className:"".concat(e.invalidBooking?"bg-[darkgray]":""," relative flex shadow mb-2 bg-[#ddd] rounded-[0.3rem] items-center py-2 leading-normal"),children:[(0,o.jsx)("div",{className:"w-[2rem] text-center",children:t+1}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("b",{children:null===(n=e.studio)||void 0===n?void 0:n.name}),(0,o.jsx)("br",{})," ",l()(e.date).format("LL"),(0,o.jsx)("br",{})," ",null===(s=e.duration)||void 0===s?void 0:s.time,(0,o.jsx)("br",{})," ",null===(a=e.timesSelected)||void 0===a?void 0:a.name]}),(0,o.jsx)("div",{className:"absolute top-0 right-0",children:(0,o.jsx)(x.Z,{className:"cursor-pointer cart-del-icon p-1 bg-green-dark text-[#fff] rounded text-[1.2rem]",onClick:function(t){return function(e){var t=$.filter((function(t){return t.id!==e})),n=X.filter((function(t){return t.id!==e}));W(t),z(n)}(e.id)}})})]},t)}))}),$&&$.length>0&&(0,o.jsxs)("div",{className:"mb-5",children:[(0,o.jsxs)("h1",{className:"font-bold text-xl",children:["Total: $",se]}),(0,o.jsx)("small",{children:"A refundable security deposit of $300 will be charged upon booking"})]}),(0,o.jsx)("div",{className:"mt-2",children:$.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.Z.Item,{rules:[{required:!0,message:"Please input your name!"}],name:"name",className:"mb-2 nameAndEmail",children:(0,o.jsx)(k.Z,{placeholder:"Full Name",className:""})}),(0,o.jsx)(p.Z.Item,{rules:[{required:!0,message:"Please input your email!"},{type:"email"}],name:"email",className:"mb-2 nameAndEmail",children:(0,o.jsx)(k.Z,{placeholder:"Email",className:""})}),(0,o.jsx)(p.Z.Item,{rules:[{required:!0,message:"Please input your phone!"}],name:"phone",className:"mb-2 nameAndEmail",children:(0,o.jsx)(k.Z,{type:"number",placeholder:"Phone Number",className:""})}),(0,o.jsx)(N.Z,{htmlType:"submit",type:"primary",className:"text-white border bg-green-dark border-solid text-[1.25rem] rounded-[3rem] w-[10rem] h-[3rem] mt-5 hover:shadow-none hover:underline hover:bg-green-dark",children:"Payment"})]})})]})})]})}),(0,o.jsxs)(y.Z,{footer:null,visible:ee,className:"booking-modal-success text-center",children:[oe.status&&(0,o.jsx)(v.Z,{onClick:function(){return te(!1)},className:"text-[2rem] cursor-pointer bg-fic-white rounded-[50%] absolute -top-[13px] -right-[15px]"}),(0,o.jsx)("div",{className:"p-5",children:oe.status?(0,o.jsxs)("div",{className:"order-completed",children:[(0,o.jsx)(g.Z,{className:"text-[3rem] text-[green]"}),(0,o.jsx)("h1",{className:"text-[1.5rem] mt-2",children:"Your booking is completed."})]}):(0,o.jsxs)("div",{className:"order-created",children:[(0,o.jsx)("h1",{className:"text-[1.5rem]",children:"Your booking is created."}),(0,o.jsx)("p",{children:"Please click the button below to finish your booking."}),(0,o.jsx)("div",{className:"text-center p-5 pt-0 pb-7",children:(0,o.jsx)("a",{onClick:function(){I&&window.open(I)},className:"text-[#fff] border bg-green-dark border-solid inline-block text-[1.25rem] rounded-[3rem] mx-auto mt-5 px-10 py-2 hover:shadow-none hover:underline hover:bg-green-dark hover:text-[#fff]",children:"Payment"})})]})})]})]})]})]})}}},e=>{e.O(0,[33,747,86,774,888,179],(()=>{return t=5281,e(e.s=t);var t}));var t=e.O();_N_E=t}]);