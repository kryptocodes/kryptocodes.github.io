import React from 'react'
import styled from '@emotion/styled'

const Home = () => {

    const data = [
        {
            href:"https://github.com/kryptocodes",
            className:"fab fa-github fa-2x"
        },
        {
            href:"https://twitter.com/srivatsantb",
            className:"fab fa-twitter fa-2x"
        },
        {
            href:"https://www.instagram.com/krypto.zip",
            className:"fab fa-instagram fa-2x"
        },
        {
            href:"https://github.com/kryptocodes",
            className:"fab fa-linkedin-in fa-2x"
        },
        {
            href:"mailto:srivatsantb@gmail.com",
            className:"far fa-envelope fa-2x"
        }
    ]

    const Content = () => (
        <div>
        <div className="container about mt-4 mx-auto row text-white">
            <div className="image shadow col-md-4 order-xl-2 order-lg-2">
                <img src={require("../../images/srivatsan.png")} alt=""/>
            </div>
            <div className="info justify-content-left  col-md order-xl-1 order-lg-1">
                <hr/>
                <h1>Hi <span className="wave">👋</span> I'm <span style={{color:"#0099FF"}}>Srivatsan Thumati Balaji</span></h1>
                <h3>Developer | Technologist </h3>
                <h2>Building <a href="https://pickcast.vercel.app/">@PickCast</a></h2>   
                <h2>Co-Founder <a href="https://agfoss.netlify.app/">@agfoss</a></h2>
                <a href={require("../Srivatsan_Thumati_Balaji.pdf")} className="btn41-43 btn-43">Resume</a>
            </div>
        </div>
        <div className="social_links text-center justify-content-around">
            {data.map((value,id) => 
            <a href={value.href}><i className={value.className}></i></a>
            )}
            </div>
            </div>
    )
    return (
        <Style>
        {Content()}
        </Style>
    )
}




const Style = styled.div`
    margin-top: calc(2rem + 2vw);
    margin-bottom: 2rem;

    img {
        padding-top:2rem;
        width: 250px;
    }
    .wave {
        animation-name: wave-animation; 
        animation-duration: 2s;      
        animation-iteration-count: infinite;  
        transform-origin: 70% 70%;      
        display: inline-block;
        font-style: normal;
      }

      @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
       10% { transform: rotate(14.0deg) }  
       20% { transform: rotate(-8.0deg) }
       30% { transform: rotate(14.0deg) }
       40% { transform: rotate(-4.0deg) }
       50% { transform: rotate(10.0deg) }
       60% { transform: rotate( 0.0deg) }  
      100% { transform: rotate( 0.0deg) }
      }
      
    h1 {
        padding-top:1rem;
        font-size:calc(1.5rem + .5vw);
        font-weight:700;
    }

    h2 {
        padding-top:0.5rem;
        font-size: 1.2rem;
        font-weight:600;

        a {
            color:#F0860C;
            padding-right:5px;
        }
    
    }

    .info {
        margin: 2rem 0 0 0;
    }

    hr {
        width:25%;
        background:#0082FF;
        border: 5px solid #0082FF;
        margin-left:0;
    }

    h3 {
        padding-top:0.5rem;
        font-size: 1.5rem;
        padding-bottom:0.5rem;
    }

    
    .social_links {
        margin-top:2.5rem;
    }

    a {
        color:white;
        padding-right:5px;
        i {
            padding-right:1.5rem;
        }

        &:hover {
            color:#0082FF;
        }
    }

    .btn41-43 {
        text-decoration:none;
        margin-top:1rem;
        padding: 5px 20px;
        font-weight: 500;
        background: transparent;
        outline: none !important;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
      }
      
      .btn-43 {
        border: 2px solid #0082FF;
        z-index: 1;
        color: white;
      }
      
      .btn-43:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        z-index: -1;
        background: #0082FF;
        transition: all 0.3s ease;
      }
      
      .btn-43:hover {
        color: white;
      }
      
      .btn-43:hover:after {
        top: auto;
        bottom: 0;
        height: 100%;
      }

   

    @media screen and (max-width: 960px) {
        margin-top:2rem;
        img {
            width:60vw;
        }
    }
`





export default Home