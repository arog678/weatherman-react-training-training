import React from 'react'

import { useSelector } from 'react-redux'
import { FetchForecastResponse } from '../../api/types'
import { RootStoreState } from '../../root'
import ForecastRow from './ForecastRow'
import '../styles/ForecastComponent.scss'

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
		<h4 className='forecastHeader'>Forecast:</h4>
		{forecast.list.map(fc => 
			<ForecastRow 
				key={ fc.dt } 
				day={ fc.dt_txt} 
				temp={ fc.main.temp + ' °C' } 
				weatherDescription={ fc.weather[0].description } 
			/>
		)}
	</div>

}

export default ForecastComponent