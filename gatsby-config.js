module.exports = {
   siteMetadata: {
    title: 'Srivatsan',
    description: 'This is my awesome blog I made from scratch!'  
  },
    plugins: [
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
          ],
        },
      },
        {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `post`,
          path: `${__dirname}/src/post`,
        },
      },
      `gatsby-plugin-react-head`,
    ]
}