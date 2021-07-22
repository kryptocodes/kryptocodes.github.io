import React from 'react'
import ProjectIndex from '../components/Projects';
import Wrapper from '../components/Wrapper';

const Projects = () => {
    return (
    <>
      <Wrapper title="Projects">
      <div className="container mx-auto px-2 lg:px-32">
        <h1 className="dark:text-white text-4xl p-4">Projects</h1>
        <p className="dark:text-white p-4 text-lg">Most of my projects can be found at Github</p>
        {Content?.map((v,i) =>
        <ProjectIndex posts={v} i={i} />
        )}
       </div>
       </Wrapper>
    </>
  );
};


const Content = [
  {
    "id": "8294f3bc-3b0d-4264-adbd-fd7c85362d18b",
    "Link": "https://github.com/kryptocodes/XLSX-Reader",
    "Description": "XLSX Reader is an web app which is built top of SheetJS.Read, edit, and export spreadsheets Works in web browsers",
    "Image": "https://user-images.githubusercontent.com/40030019/126058660-2069ad8d-0ec1-43b3-9630-300bc87e55e4.png",
    "TechStack": "Vite,React JS,SheetJS,MongoDB",
    "Name": "XLSX Reader"
  },
  {
    "id": "8294f3bc-3b0d-4264-adbd-fd7c85362d18",
    "Link": "https://github.com/kryptocodes/lireddit_backend",
    "Description": "LiReddit is similar to site like Reddit\nor HackerNews you subscribe to\nforums you re interested in, post\nlinks and discussions, then vote, and\ncomment on them.",
    "Image": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7ea701c-0073-49b3-b2cf-6bb3cacbb6c1%2FMacBook_-_1.png?table=block&id=852c9a6d-bf0e-4db6-9bfb-7d1265a8a8eb&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",
    "TechStack": "TypeScript,GraphQL,URQL,Node JS,\nPostgreSQL,TypeORM,Redis,Next JS",
    "Name": "LiReddit"
  },
  {
    "id": "43bf58f3-3c3a-4676-ab4b-9ad94e98fe52",
    "Link": "https://github.com/kryptocodes/screencap",
    "Description": "ScreenCap is screen capture which can be used to capture audio and video from the desktop for windows/MacOS/Linux",
    "Image": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffecbe99b-15d1-412f-b1be-57146a182c49%2Fscreencap.png?table=block&id=6093ab08-9ff5-445f-bf7b-18b2ecab30c5&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",
    "TechStack": "React JS, Electron JS",
    "Name": "ScreenCap"
  },
  {
    "id": "2ab6ac37-8878-48ac-b309-fd4d57fde237",
    "Link": "https://image-classifier.netlify.app/",
    "Description": "Image classifier an simple webapp which is built top on pre-trained model for image classification (MobileNet)",
    "Image": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd63a36fc-6575-4d61-9d4d-100b4f58b7c0%2FSlide_4_3.png?table=block&id=2837cfa6-dd7a-4935-95fe-3caa1ec11e65&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",
    "TechStack": "React JS, Tensorflow JS",
    "Name": "Image Classifier"
  },
  {
    "id": "3446e964-52cc-4ed3-9df0-a2afcc865a6a",
    "Link": "https://gpms.vercel.app",
    "Description": "A Complete CMS System, which\nallows a resident student to apply\nfor his/her Gate Pass Online also\ngenerates QR Code when the\nconcerned authority approves the\npass. With Four different role\ndashboard integrated with\nnotification support and offline\nPWA.",
    "Image": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7230c662-2972-4502-99a1-7e7e6a1c5c4c%2FSlide_4_3_-_2.png?table=block&id=a4ef5f46-3b97-4318-a07d-d6e35c618a5b&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",
    "TechStack": "MongoDB,\nMongoose ODM,Express,\nNode JS, React",
    "Name": "Gate Pass Management System "
  },
  {
    "id": "60461d99-d103-4ad9-9a42-a4b93f2215ff",
    "Description": "Krypton Kernel lite mod kernel for X00TD and Lettuce devices",
    "TechStack": "C",
    "Name": "Krypton kernel"
  }
]



export default Projects