(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"60zg":function(e,t,a){e.exports=a.p+"static/erp_dashboard-369a49d7ba6cb96aaad007edc663e577.png"},RDVA:function(e,t,a){},SgMy:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),i=function(){var e=Object(n.useState)("undefined"!=typeof window?void 0!==localStorage.theme?localStorage.theme:"dark":"light"),t=e[0],a=e[1],c="dark"===t?"light":"dark";return Object(n.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(c),e.classList.add(t),e.style.backgroundColor="dark"===t?"#1F2937":"#ffffff","undefined"!=typeof window&&localStorage.setItem("theme",t)}),[t,c]),[c,a]},s=a("Wbzz"),o=function(){var e=i(),t=e[0],a=e[1],o=Object(n.useState)(!1),r=o[0],l=o[1],d=[{name:"About",link:"/about"},{name:"Projects",link:"/projects"},{name:"Blog",link:"/posts"}],m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex justify-between pt-5 pb-5 px-8 items-center rounded-lg shadow-lg dark:bg-transparent bg-white"},c.a.createElement("div",{className:"flex justify-start lg:w-0 lg:flex-1"},c.a.createElement(s.a,{to:"/"},c.a.createElement("a",{className:"font-semibold lg:text-2xl md:px-6 lg:px-6 dark:text-white"},"Srivatsan"))),c.a.createElement("div",{className:"w-full block px-16 dark:text-white lg:items-center lg:w-auto hidden md:flex items-center justify-end md:flex-1 lg:w-0"},d.map((function(e,t){return c.a.createElement("span",{key:t},c.a.createElement(s.a,{to:null==e?void 0:e.link},c.a.createElement("a",{className:"px-5 hover:bg-gray-700 py-2 font-medium rounded-md hover:text-white"},null==e?void 0:e.name)))}))),c.a.createElement("button",{className:"dark:text-white",onClick:function(){return a(t)}},"dark"===t?c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})):c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}))),c.a.createElement("div",{className:"block md:hidden lg:hidden dark:text-white"},c.a.createElement("button",{onClick:function(){return l(!r)},className:"flex items-center mx-auto px-3 py-2 text-xl rounded text-teal-200 border-teal-400"},r?c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})):c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"}))))),r?c.a.createElement("div",{className:"md:hidden w-full z-50 bg-white dark:bg-gray-800 absolute text-left overflow-hidden shadow",id:"mobile-menu"},c.a.createElement("div",{className:"px-10 pt-8 pb-3 space-y-1 sm:px-3"},d.map((function(e,t){return c.a.createElement("span",{key:t},c.a.createElement(s.a,{to:null==e?void 0:e.link},c.a.createElement("a",{className:"dark:text-white block px-3 py-5 rounded-md text-lg font-medium"},null==e?void 0:e.name)))})))):"")};return c.a.createElement(m,null)},r=a("1zJl"),l=function(e){var t=e.title;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Title,null,t?t+" | Srivatsan Thumati Balaji":"Srivatsan Thumati Balaji"),c.a.createElement(r.Meta,{name:"description",content:"React Developer, JavaScript fanatic"}),c.a.createElement(r.Link,{rel:"canonical",content:"https://srivatsan.now.sh/"}),c.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),c.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),c.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),c.a.createElement("script",{async:!0,src:"https://cdn.splitbee.io/sb.js"}))};a("RDVA"),t.a=function(e){var t=e.title,a=e.children;return c.a.createElement("div",null,c.a.createElement(l,{title:t}),o(),a)}},hoZb:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),i=function(e){var t=e.posts,a=e.i;return c.a.createElement("div",null,c.a.createElement("div",{className:"lg:px-2 md:px-4 px-4 pb-5"},c.a.createElement("figure",{className:"md:flex dark:bg-gray-900 shadow-lg dark:text-white bg-gray-200 dark:bg-opacity-50 rounded-xl md:p-0"},null!=t&&t.Image?c.a.createElement("img",{loading:"lazy",className:"w-auto lg:w-1/2 "+(a%2==0?"order-first":"order-last")+" h-auto md:h-auto md:w-1/2 x-auto",src:null==t?void 0:t.Image,alt:"project"}):"",c.a.createElement("div",{className:"pt-6 p-4 md:p-8"},c.a.createElement("p",{className:"lg:text-4xl pb-6 md:text-2xl text-xl font-semibold"},null==t?void 0:t.Name),c.a.createElement("a",{className:"bg-blue-600  p-2 rounded-lg text-white"},"Tech Stack"),c.a.createElement("p",{className:"pt-4 text-sm lg:text-lg md:text-lg pb-2"},null==t?void 0:t.TechStack),c.a.createElement("p",{className:"text-xl font-semibold"},"Description"),c.a.createElement("p",{className:"text-sm pb-2 font-sans"},null==t?void 0:t.Description),c.a.createElement("a",{className:"text-blue-600 dark:text-yellow-300",href:null==t?void 0:t.Link},"Repository Link")))))},s=a("SgMy"),o=[{id:"8294f3bc-3b0d-4264-adbd-fd7c85362d18a",Link:"https://erpdashboard.vercel.app",Description:"ERP Management is a feature packed. ERP Management is built with Next JS,Firebase, Tailwind CSS.Implemented all the features you might need to start a new Web application.",Image:""+a("60zg"),TechStack:"Next JS,Firebase,Tailwind CSS",Name:"ERP Dashboard"},{id:"8294f3bc-3b0d-4264-adbd-fd7c85362d18b",Link:"https://github.com/kryptocodes/XLSX-Reader",Description:"XLSX Reader is an web app which is built top of SheetJS.Read, edit, and export spreadsheets Works in web browsers",Image:"https://user-images.githubusercontent.com/40030019/126058660-2069ad8d-0ec1-43b3-9630-300bc87e55e4.png",TechStack:"Vite,React JS,SheetJS,MongoDB",Name:"XLSX Reader"},{id:"8294f3bc-3b0d-4264-adbd-fd7c85362d18",Link:"https://github.com/kryptocodes/lireddit_backend",Description:"LiReddit is similar to site like Reddit\nor HackerNews you subscribe to\nforums you re interested in, post\nlinks and discussions, then vote, and\ncomment on them.",Image:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7ea701c-0073-49b3-b2cf-6bb3cacbb6c1%2FMacBook_-_1.png?table=block&id=852c9a6d-bf0e-4db6-9bfb-7d1265a8a8eb&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",TechStack:"TypeScript,GraphQL,URQL,Node JS,\nPostgreSQL,TypeORM,Redis,Next JS",Name:"LiReddit"},{id:"43bf58f3-3c3a-4676-ab4b-9ad94e98fe52",Link:"https://github.com/kryptocodes/screencap",Description:"ScreenCap is screen capture which can be used to capture audio and video from the desktop for windows/MacOS/Linux",Image:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffecbe99b-15d1-412f-b1be-57146a182c49%2Fscreencap.png?table=block&id=6093ab08-9ff5-445f-bf7b-18b2ecab30c5&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",TechStack:"React JS, Electron JS",Name:"ScreenCap"},{id:"2ab6ac37-8878-48ac-b309-fd4d57fde237",Link:"https://image-classifier.netlify.app/",Description:"Image classifier an simple webapp which is built top on pre-trained model for image classification (MobileNet)",Image:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd63a36fc-6575-4d61-9d4d-100b4f58b7c0%2FSlide_4_3.png?table=block&id=2837cfa6-dd7a-4935-95fe-3caa1ec11e65&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",TechStack:"React JS, Tensorflow JS",Name:"Image Classifier"},{id:"3446e964-52cc-4ed3-9df0-a2afcc865a6a",Link:"https://gpms.vercel.app",Description:"A Complete CMS System, which\nallows a resident student to apply\nfor his/her Gate Pass Online also\ngenerates QR Code when the\nconcerned authority approves the\npass. With Four different role\ndashboard integrated with\nnotification support and offline\nPWA.",Image:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7230c662-2972-4502-99a1-7e7e6a1c5c4c%2FSlide_4_3_-_2.png?table=block&id=a4ef5f46-3b97-4318-a07d-d6e35c618a5b&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",TechStack:"MongoDB,\nMongoose ODM,Express,\nNode JS, React",Name:"Gate Pass Management System "},{id:"60461d99-d103-4ad9-9a42-a4b93f2215ff",Description:"Krypton Kernel lite mod kernel for X00TD and Lettuce devices",TechStack:"C",Name:"Krypton kernel"}];t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:"Projects"},c.a.createElement("div",{className:"container mx-auto px-2 lg:px-32"},c.a.createElement("h1",{className:"dark:text-white text-4xl p-4"},"Projects"),c.a.createElement("p",{className:"dark:text-white p-4 text-lg"},"Most of my projects can be found at Github"),null==o?void 0:o.map((function(e,t){return c.a.createElement(i,{posts:e,i:t})})))))}}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-b0738be20073597e6419.js.map