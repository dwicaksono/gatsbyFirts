// import dotenv from 'dotenv'
  

// console.log( process.env.SANITY_TOKEN)
export default {

  siteMetadata: {
    title: `slice pizza`,
    siteUrl:'https://gatsby.pizza',
    description: `latihan gatsby`,
  },
  plugins: [
     'gatsby-plugin-styled-components',
    {
      resolve:`gatsby-source-sanity`,
      options:{
        projectId:'4pqnmtut',
        dataset:'production',
        watchMode:true,
        token: process.env.SANITY_TOKEN,
      }
    }
  ],
}
