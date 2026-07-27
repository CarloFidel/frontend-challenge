import axios from "axios";

export const searchCityUrl = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});

export const forecastMeteoUrl = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

