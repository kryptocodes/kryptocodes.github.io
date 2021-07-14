import React from 'react'
import Head from 'next/head'


//typescript interface props for handling the props
interface HeadProps {
    title?: string;
    description?: string;
}



const Header: React.FC<HeadProps>=  ({title,description}) => {
    const defaultTitle = "Srivatsan Thumati Balaji"

    const defaultDescription = "I am a Software Engineer. I love to design and build stuffs"
    
    return(
        <Head>
        <meta charSet='utf-8'/>
        <title>{title ? title+" - "+defaultTitle : defaultTitle } </title>
        <meta name="description" content={ description ? description : defaultDescription}/>
        <meta name="keywords" content=""/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <meta property="og:type" content="website"/>
      <meta property="og:title" content={title ? title+" - "+defaultTitle : defaultTitle}/>
      <meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1" />
      <meta property="og:description" content={description ? description : defaultDescription}/>
    <meta property="og:image" content="/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json"/>
      </Head>
    )
}





export default Header