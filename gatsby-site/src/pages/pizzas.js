import React from 'react'
import {graphql} from 'gatsby'
import PizzaList  from '../components/PizzaList'
import ToppingsFilter from '../components/ToppingsFilter'


const PizzaPage = ({data}) => {
    const pizzas = data.pizzas.nodes
    
    return (
        <>
            <ToppingsFilter/>
            <PizzaList pizzas={pizzas}/>
        
        </>
    )
}

export default PizzaPage



export const query = graphql`
    query PizzasQuery{
     pizzas : allSanityPizza {
        nodes {
            name
            id
            price
            slug{
              current
            }
            toppings{
              id
              name
            }
            image{
              asset{
                fluid(maxWidth:400){
                  ...GatsbySanityImageFluid
                }
              }
            }
        }
     }  
    }
`