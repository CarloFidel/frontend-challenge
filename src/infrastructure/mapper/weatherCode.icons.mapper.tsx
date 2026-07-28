import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiFog,
  WiRain,
  WiShowers,
  WiSnow,
  WiThunderstorm,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltSnow,
  WiNightAltLightning,
} from "weather-icons-react";

export const getWeatherIcon = (code: number, isDay: boolean, size = 80) => {
  // Clear sky
  if (code === 0) {
    return isDay ? <WiDaySunny size={size} /> : <WiNightClear size={size} />;
  }

  // Mainly clear
  if (code === 1) {
    return isDay ? <WiDaySunny size={size} /> : <WiNightClear size={size} />;
  }

  // Partly cloudy
  if (code === 2) {
    return isDay ? (
      <WiDayCloudy size={size} />
    ) : (
      <WiNightAltCloudy size={size} />
    );
  }

  // Overcast
  if (code === 3) {
    return <WiCloudy size={size} />;
  }

  // Fog
  if (code === 45 || code === 48) {
    return <WiFog size={size} />;
  }

  // Drizzle
  if ([51, 53, 55].includes(code)) {
    return isDay ? <WiRain size={size} /> : <WiNightAltRain size={size} />;
  }

  // Rain
  if ([61, 63, 65].includes(code)) {
    return isDay ? <WiRain size={size} /> : <WiNightAltRain size={size} />;
  }

  // Snow
  if ([71, 73, 75].includes(code)) {
    return isDay ? <WiSnow size={size} /> : <WiNightAltSnow size={size} />;
  }

  // Showers
  if ([80, 81, 82].includes(code)) {
    return <WiShowers size={size} />;
  }

  // Thunderstorm
  if (code === 95) {
    return isDay ? (
      <WiThunderstorm size={size} />
    ) : (
      <WiNightAltLightning size={size} />
    );
  }

  return isDay ? <WiDayCloudy size={size} /> : <WiNightAltCloudy size={size} />;
};
