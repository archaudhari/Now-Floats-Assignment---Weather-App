import React, { useState } from 'react';
import './style.css';
import styled from 'styled-components';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';
import axios from 'axios';

const API_KEY = 'b94ac897d3f376c4535bbff3c38bca1c';

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

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ? (
        <WeatherComponent />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      {/* <WeatherComponent/> */}
    </Container>
  );
}
export default App;
