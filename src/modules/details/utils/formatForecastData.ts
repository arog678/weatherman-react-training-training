import {  FetchForecastResponse, Forecast, ForecastResponseItemRaw, ForecastResponseRaw } from '../../api/types'

const forecastFormatter = (forecastInput: ForecastResponseItemRaw): Forecast => {
	
	const dt_txt = new Date(forecastInput.dt *1000)
		.toLocaleDateString('en-us', { weekday: 'short' })

	return {
		dt: forecastInput.dt,
		dt_txt, 
		//Possible oversight in the design, see details.png
		//Will keep as is
		//dt_txt === 'Thu' ? 'Thur' : dt_txt,
		main: {
			temp: forecastInput.temp.day,
			humidity: forecastInput.humidity,
			pressure: forecastInput.pressure,
			temp_max: forecastInput.temp.max,
			temp_min: forecastInput.temp.min
		},
		weather: forecastInput.weather
	}
}

export const formatForecastData = (forecastResponseRaw: ForecastResponseRaw): FetchForecastResponse => {
	return {
		list: forecastResponseRaw.list.map(f => forecastFormatter(f)),
		count: forecastResponseRaw.cnt
	}
}