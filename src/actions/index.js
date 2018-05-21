import axios from 'axios';
import qs from 'qs';

const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	// const opts = {
	// 	method: 'GET',
	// 	headers: {'Access-Control-Allow-Origin': '*'},
	// 	url
	// }
	// const request = axios.get(opts)
	const request = axios.get(url, {
			// headers: {'Access-Control-Allow-Origin': '*'},
			mode: 'no-cors'
		}
	)

	console.log('request', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
