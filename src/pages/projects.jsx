import React from 'react'
import ProjectIndex from '../components/Projects';
import Wrapper from '../components/Wrapper';

const Projects = () => {
    return (
    <>
      <Wrapper title="Projects">
      <div className="container lg:px-32">
        <h1 className="dark:text-white text-4xl p-4">Projects</h1>
        <p className="dark:text-white p-4 text-lg">Most of my projects can be found at Github</p>
        {Content?.map((v) =>
        <ProjectIndex posts={v} />
        )}
       </div>
       </Wrapper>
    </>
  );
};


const Content = [
  {
    "id": "8294f3bc-3b0d-4264-adbd-fd7c85362d18",
    "Link": "https://github.com/kryptocodes/lireddit_backend",
    "Description": "LiReddit is similar to site like Reddit\nor HackerNews you subscribe to\nforums you re interested in, post\nlinks and discussions, then vote, and\ncomment on them.",
    "Image": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5aff90ee-afc4-4d8c-9ae2-4b3f1c13751a%2FSlide_4_3_-_1_(1).png?table=block&id=4083c3cd-b88e-445b-9388-b77b0a78d119&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",
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
    "Image": "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b0a1437-0d25-4f88-8f67-58dd1ba76a3c%2FSlide_4_3_-_2.png?table=block&id=92562b48-d99c-4bdf-b42d-b9eedfe6a808&spaceId=6cc22693-0a0e-4c5a-bd99-19a823ffd9a1&width=3070&userId=a9fac667-565f-44cb-a042-5b69e7b156df&cache=v2",
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