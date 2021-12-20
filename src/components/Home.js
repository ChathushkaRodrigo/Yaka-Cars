import React from 'react'
import styled from 'styled-components';
import Section from './Section'
function Home() {
    return (
        <Container>
          <Section
            title="Model-S"
            description="Order online"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"        
          />
          <Section
          title="Model-Y"
          description="Order online"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"    
          
          /> 
          <Section
          title="Model-Z"
          description="Order online"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"    
          /> 
          <Section
          title="Model-X"
          description="Order online"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"    
          />
          <Section
          title="Lowest Cost "
          description="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="order now"
          rightBtnText="Learn More" 
          />
            <Section
          title="Solar for new Roofs "
          description="Money-back guarantee"
          backgroundImg="solar-roof.jpg"
          leftBtnText="order now"
          rightBtnText="Learn More" 
          />
               <Section
          title="Solar for new Roofs "
          description="Money-back guarantee"
          backgroundImg="accessories.jpg"
          leftBtnText="order now"
          rightBtnText="Learn More" 
          />
        </Container>
        
    )
}

export default Home
const Container=styled.div`
height:100vh;
`;
