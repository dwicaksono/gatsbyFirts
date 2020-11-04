import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'


function SinglePizza({pizza}) {
    return(
        <PizzaStyle>
            <Link to={`/pizza/${pizza.slug.current}`}>
                <h2>
                    <span className="mark">
                        {pizza.name}
                    </span>
                </h2>
            </Link>
                <p>
                    {pizza.toppings.map(topping =>(
                        topping.name
                    )).join(', ')}
                </p>
                <Img fluid={pizza.image.asset.fluid} alt={pizza.name}/>
        </PizzaStyle>
    )
}


 const PizzaList = ({pizzas}) => {
    return (
        <PizzaGridStyle>
            {pizzas.map(pizza =>(
                <SinglePizza pizza={pizza} key={pizza.id} />
            ))}
            
        </PizzaGridStyle>
    )
}
export default PizzaList

const PizzaGridStyle = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(300px,1fr));
    gap:4rem;
    grid-auto-rows:auto auto 500px;
`;

const PizzaStyle = styled.div`
    display:grid;
    @supports not (grid-template-columns:subgrid) {
        --rows:auto auto 1fr;
    }
    grid-template-rows: var(--rows,subgrid);
    grid-row: span 3;
    grid-gap:1rem;
    h2,
    p{
        margin:0;
    }
`;