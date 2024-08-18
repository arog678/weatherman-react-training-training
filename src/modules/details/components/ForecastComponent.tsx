import React from 'react'

import { useSelector } from 'react-redux'
import { FetchForecastResponse } from '../../api/types'
import { RootStoreState } from '../../root'
import ForecastRow from './ForecastRow'

const ForecastComponent = (): JSX.Element => {

	const forecast = useSelector<RootStoreState, FetchForecastResponse | undefined>(state => state.details.forecast)
	const loading = useSelector<RootStoreState, boolean>(state => state.details.loading)
	const error = useSelector<RootStoreState, Error | undefined>(state => state.details.error)

	if (loading) {
		return <p>Loading...</p>
	}

	if (error || forecast === undefined) {
		return <p>An error occurred while loading the forecast.</p>
	} 

	return <div>
		<h3>Forecast:</h3>
		{forecast.list.map(fc => 
			<ForecastRow 
				key={ fc.dt } 
				day={ fc.dt_txt + ' °C' } 
				temp={ fc.main.temp } 
				weatherDescription={ fc.weather[0].description } 
			/>
		)}
	</div>

}

export default ForecastComponent