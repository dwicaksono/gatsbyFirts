import dotenv from 'dotenv'

dotenv.config({path:'.env'})

export default {
    siteMetadata:{
    title:`Slice pizza`,
    siteUrl:`https://gatsby.pizza`,
    description:'learn gatsby',
  },
  plugins:[
    'gatsby-plugin-styled-components',
    {
      //this is the name of the plugin you are adding.
      resolve:'gatsby-source-sanity',
      options:{
        projectId:'4pqnmtut',
        dataset:'production',
        watchmode:true,
        token: process.env.SANITY_TOKEN
      } 
    }
  ]
}