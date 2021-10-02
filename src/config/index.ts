import axios from "axios";

// API - https://open-meteo.com/en/docs

export const http = axios.create({
	baseURL: "https://api.open-meteo.com/v1/forecast",
});
