import React from 'react';
import './style.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
font-family: Montserrat;
`;
const CityComponent = styled.div`
display: flex;
flex-direction: column;
`;
const WeatherComponent = styled.div`
display: flex;
flex-direction: column;
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;


function App() {
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      <CityComponent>CityComponent</CityComponent>
      <WeatherComponent>WeatherComponent</WeatherComponent>
    </Container>
  );
}
export default App;
