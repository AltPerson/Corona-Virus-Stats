(this["webpackJsonpcoronastats-app"]=this["webpackJsonpcoronastats-app"]||[]).push([[0],{54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(9),n=a.n(s),o=a(38),i=a.n(o),d=a(41),u=a(12),l=(a(54),a(111)),h=a(113),j=a(110),b=a(109),p=a(112),O=a(104),f=a(108),g=a(106),x=a(107),v=a(105),y=a(116),m=a(114),C=a(100),w=["Country Name","Total Cases","Today Cases","Total Deaths","Today Deaths","Total Recovered","Today Recovered"],k=a(6);var T=function(e){var t=e.countries,a=e.searchCountry,c=e.tableClass,s=e.imgClass,n=e.paperClass,o=Object(r.useState)("name"),i=Object(u.a)(o,2),d=i[0],l=i[1],h=Object(r.useState)("asc"),j=Object(u.a)(h,2),b=j[0],p=j[1],T=Object(r.useState)(5),R=Object(u.a)(T,2),N=R[0],S=R[1],D=Object(r.useState)(0),P=Object(u.a)(D,2),I=P[0],W=P[1];return Object(k.jsxs)(C.a,{className:n,variant:"outlined",children:[Object(k.jsxs)(O.a,{stickyHeader:!0,"aria-label":"sticky table",className:c,size:"small",children:[Object(k.jsx)(v.a,{children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(x.a,{}),w.map((function(e,t){return Object(k.jsx)(x.a,{children:Object(k.jsx)(y.a,{active:d===e,direction:d===e?b:"asc",onClick:function(){return function(e){var t=e===d&&"asc"===b;l(e),p(t?"desc":"asc")}(e)},children:e})},t)}))]})}),Object(k.jsx)(f.a,{children:t.filter((function(e){return a?e.country.includes(a):e})).slice(I*N,I*N+N).sort((function(e,t){return function(e,t,a,r){switch(a){case"Country Name":return"asc"===r?e.country<t.country?-1:1:e.country<t.country?1:-1;case"Total Cases":return"asc"===r?e.cases-t.cases:t.cases-e.cases;case"Today Cases":return"asc"===r?e.todayCases-t.todayCases:t.todayCases-e.todayCases;case"Total Deaths":return"asc"===r?e.deaths-t.deaths:t.deaths-e.deaths;case"Today Deaths":return"asc"===r?e.todayDeaths-t.todayDeaths:t.todayDeaths-e.todayDeaths;case"Total Recovered":return"asc"===r?e.recovered-t.recovered:t.recovered-e.recovered;case"Today Recovered":return"asc"===r?e.todayRecovered-t.todayRecovered:t.todayRecovered-e.todayRecovered;default:return 0}}(e,t,d,b)})).map((function(e){return Object(k.jsxs)(g.a,{children:[Object(k.jsx)(x.a,{children:Object(k.jsx)("img",{src:e.countryInfo.flag,alt:"flagImg",className:s})}),Object(k.jsx)(x.a,{children:e.country}),Object(k.jsx)(x.a,{children:e.cases}),Object(k.jsx)(x.a,{children:e.todayCases}),Object(k.jsx)(x.a,{children:e.deaths}),Object(k.jsx)(x.a,{children:e.todayDeaths}),Object(k.jsx)(x.a,{children:e.recovered}),Object(k.jsx)(x.a,{children:e.todayRecovered})]},e.countryInfo.id)}))})]}),a?"":Object(k.jsx)(m.a,{rowsPerPageOptions:[5,10,15,20,25,50,100,222],component:"div",count:t.length,rowsPerPage:N,page:I,onChangePage:function(e,t){W(t)},onChangeRowsPerPage:function(e){S(parseInt(e.target.value),10),W(0)}})]})},R=a.p+"static/media/bg.2218e7c5.jpg",N=Object(l.a)((function(e){return{root:{width:"100%",minHeight:"100vh",height:"100%",position:"fixed",overflow:"auto",padding:"10px 0 20px",textAlign:"center",backgroundImage:"url(".concat(R,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},title:{marginBottom:"40px",fontWeight:"400",color:"white"},input:{width:"100%",margin:"10px 0 20px",color:"white"},loader:{marginTop:"80px"},paper:{overflowX:"auto",width:"100%",border:"none"},table:{"& thead th:not(:first-child)":{fontWeight:"600",cursor:"pointer",transition:"all .5s ease",borderRadius:"25px"},"& thead th:first-child":{backgroundColor:"transparent",border:"none"},"& thead th:not(:first-child):hover":{backgroundColor:"#f3f3f3"},"& tbody td":{fontWeight:"300"},"& tbody tr":{transition:"all .5s ease"},"& tbody tr:hover":{backgroundColor:"#f3f3f3",cursor:"pointer"}},img:{width:"auto",height:"auto",objectFit:"cover"}}}));var S=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)([]),n=Object(u.a)(s,2),o=n[0],l=n[1],O=Object(r.useState)(""),f=Object(u.a)(O,2),g=f[0],x=f[1],v=N();function y(){return(y=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://disease.sh/v3/covid-19/countries/");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,c(!1),l(a),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),console.log("Error",e.t0),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),a?Object(k.jsx)("div",{className:v.root,children:Object(k.jsx)(p.a,{maxWidth:"lg",children:Object(k.jsx)(h.a,{className:v.loader})})}):Object(k.jsx)("div",{className:v.root,children:Object(k.jsxs)(p.a,{maxWidth:"lg",children:[Object(k.jsx)(b.a,{variant:"h2",className:v.title,children:"Coronavirus Statistics"}),Object(k.jsx)(j.a,{className:v.input,color:"white",placeholder:"Enter a country...",value:g,onChange:function(e){return x(e.target.value)}}),Object(k.jsx)(T,{countries:o,searchCountry:g,tableClass:v.table,imgClass:v.img,paperClass:v.paper})]})})};n.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(S,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.419fa974.chunk.js.map