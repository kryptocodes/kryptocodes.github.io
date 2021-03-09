import React from "react";
import { Title, Link, Meta } from "react-head";

const Seo = ({title}) => {
    const defaultTitle = "Srivatsan Thumati Balaji"
    return (
        <React.Fragment>
        <Title>{title ? title + " | " + defaultTitle : defaultTitle }</Title>
        <Meta name="description" content="React Developer, JavaScript fanatic" />
        <Link rel="canonical" content="https://srivatsan.now.sh/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        </React.Fragment>
    )
}









export default Seo