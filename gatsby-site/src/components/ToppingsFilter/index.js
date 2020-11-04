import React from 'react';
import {useStaticQuery,graphql, Link} from 'gatsby'
import styled from 'styled-components';


function countPizzaInTopping(pizzas) {
    
    const counts = pizzas.map(pizza => pizza.toppings).flat()
    .reduce((acc,topping)=>{
    // cek kalu ada toping tambah 1, kalau tidak ada create
    let existingTopping = acc[topping.id]
    if (existingTopping){
        existingTopping.count +=1
    }else{
        acc[topping.id] = {
            id:topping.id,
            name: topping.name,
            count: 1
        }
    }
    return acc
    },{});

    const sortedToppings = Object.values(counts).sort((a,b)=> b.count - a.count)

    return sortedToppings

}

function ToppingsFilter(props) {
    const {toppings,pizzas} = useStaticQuery(graphql`
        query{
            toppings: allSanityTopping {
                nodes{
                  id,
                  name,
                  vegetarian
                }
            }
            pizzas: allSanityPizza{
                nodes{
                  toppings{
                    id
                    name
                  }
                }
            }
        }
    `);
    
    const toppingWithCounts = countPizzaInTopping(pizzas.nodes)
    
    
    return (
        <ToppingStyle>
            {toppingWithCounts.map(topping =>(
                <Link to={`/topping/${topping.name}`} key={topping.id}>
                    <span>{topping.name}</span>
                    <span>{topping.count}</span>
                </Link>
            ))}
        </ToppingStyle>
    );
}

export default ToppingsFilter;

const ToppingStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap: 1rem;
    margin-bottom:4rem;
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 2px;
        text-decoration: none;
        font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .count {
        background: white;
        padding: 2px 5px;
    }
    &[aria-current='page'] {
        background: var(--yellow);
    }
  }
`