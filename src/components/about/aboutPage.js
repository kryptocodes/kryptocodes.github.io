import React from 'react'
import styled from '@emotion/styled'

const aboutPage = () => {
    const Content = () => (
        <div className="container px-5 pt-16 lg:w-2/4 mx-auto">
        <div className="w-full shadow-2xl subpixel-antialiased rounded h-auto  bg-white dark:bg-gray-700 bg-opacity-25  border-black mx-auto">
          <div className="flex items-center h-6 rounded-t p-4 bg-black  border-b border-black text-center text-black">
            <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="mx-auto pr-16">
              <p className="text-center text-white text-sm">Terminal</p>
            </div>
          </div>
          <div className="pl-1 pt-2 mx-2  pb-20 h-auto dark:text-white  font-mono">
            <p>srivatsan@MBP:~ kryptocodes$ cat about.txt</p>
            <p className="pt-2">
              Hello ! I am 19 year old Web Developer with more than 2 years of
              experience building webapps. I love working with JavaScript and
              have gotten familiar with TypeScript as well. Also, I enjoy
              creating things that live on internet whether it's a website or
              application or anything in between that. Most of my projects can
              be found at
              <a
                className="dark:text-yellow-500 px-1 text-blue-500"
                href="https://github.com/kryptocodes"
              >
                Github
              </a>
            </p>
            <p className="pt-2">
              The latest copy of my resume can be found here
              <br />
              <br />
              CONTACTING ME
              <br />I typically respond fastest to
              <a
                className="dark:text-yellow-500 px-1 text-blue-500"
                href="https://t.me/kryptocodes"
              >
                Telegram 
              </a>
              messages.For traditional email, use 
              <a
                className="dark:text-yellow-500 px-1 text-blue-500"
                href="mailto:srivatsantb@gmail.com"
              >
              srivatsantb[at]gmail[dot]com
              </a>
            </p>
          </div>
        </div>
      </div>
    )

    return (
        <>
           {Content()}
        </>
    )
}




export default aboutPage