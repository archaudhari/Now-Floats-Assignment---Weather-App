import styled from 'styled-components';
import React from 'react';

export const WeatherInfoIcons = {
  sunset: '/icon/temp.svg',
  sunrise: '/icon/temp.svg',
  humidity: '/icon/humidity.svg',
  wind: '/icon/wind.svg',
  pressure: '/icon/pressure.svg',
};

const WeatherCondition = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 width: 100%;
 justify-content: space-between;
 margin: 30px auto;
`;

const Condition = styled.span`
margin : 20px auto;
font-size: 14px;
& span {
  font-size: 28px
}
`;

const WeatherLogo = styled.img`
width: 100px;
height: 100px;
margin: 5px auto;
`;

const Location = styled.span`
font-size: 28px;
font-weight: bold;
`;
const WeatherInfoLabel = styled.span`
font-size: 14px;
font-weight: bold;
margin: 20px 25px 10px;
text-align: start;
width: 90%;
`;
const WeatherInfoContainer = styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;
const InfoIcon = styled.img`
width: 36px;
height: 36px;
`;
const InfoLabel = styled.span`
display: flex;
flex-direction: column;
font-size: 14px;
margin: 15px;
& span {
  font-size: 12px;
  text-transform: capatalize;
}
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>name</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d');
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>30℃</span> | Cloudy
        </Condition>
        <WeatherLogo src="/icon/perfect-day.svg" />
      </WeatherCondition>
      <Location>
        `${weather?.name}, ${weather?.sys?.country}`
      </Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name="sunrise" value="2332" />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};
export default WeatherComponent;
