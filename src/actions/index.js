import axios from 'axios';
import qs from 'qs';

const API_KEY = '0deff72883f867dbac3839664b7040b1'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`

	const request = axios.get(url)


	return {
		type: FETCH_WEATHER,
		payload: request
	}
}


