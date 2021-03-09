import React from 'react'
import styled from '@emotion/styled'

const aboutPage = () => {
    const Content = () => (
        <div className="terminal">
            <div className="headTab text-white p-2">
            <i style={{color:"#FF5F56"}} className="fas fa-circle"></i>
            <i style={{color:"#FFBD2E"}} className="fas fa-circle"></i>
            <i style={{color:"#27C93F"}} className="fas fa-circle"></i>
            </div>
            <div className="box">
                <div className="content">
                <p>srivatsan@MBP:~ kryptocodes$ cat about.txt</p>
                <p>
                 Hello !
                 <br/>
                 I am 19 year old  Web Developer with more than 2 years of experience building webapps.
                 I love working with JavaScript and have gotten familiar with TypeScript as well.
                 Also, I enjoy creating things that live on internet whether it's a website or application or anything in between that.
                Most of my projects can be found at <a href="https://github.com/kryptocodes">Github</a> 
                 </p>

                 <p className="pt-2">The latest copy of my resume can be found <a href={require("../Srivatsan_Thumati_Balaji.pdf")}>here</a></p>
                 
                 <p className="text-uppercase">Contacting me</p>

                 <p>I typically respond fastest to <a href="https://t.me/kryptocodes">Telegram</a> messages.
                  For traditional email, use <a href="mailto:srivatsantb@gmail.com">srivatsantb@gmail.com</a></p>
                 </div>
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
    .terminal {
        margin:2rem 5rem;
        box-shadow: 0px 0px 53px rgba(255, 255, 255, 0.25);
        font-family: 'Ubuntu Mono', monospace;
        font-size: 1.2rem;
    }

    .box {
        color: white;
    }
    
    .content {
        padding: 2rem; 2rem;
    }
    .headTab {
        background-color: #151718;
        padding-top:.2rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.54);
    }

    i {
        padding-left:5px;
        margin-right:5px;
    }
    

    @media screen and (max-width: 960px) {
        .terminal {
            margin:2rem 1rem;
        }
    }
`








export default aboutPage