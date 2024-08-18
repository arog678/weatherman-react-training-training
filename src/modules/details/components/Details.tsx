import '../styles/Details.scss'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootStoreState } from '../../root'
import { Location } from '../../api/types'
import { fetchForecastAction } from '../actions'
import ForecastComponent from './ForecastComponent'
import CurrentTemperature from './CurrentTemperature'

const DetailsScreen = (): JSX.Element | null => {

	/**
	 * Dependency Hooks
	 */

	const dispatch = useDispatch()

	/**
	 * Store State
	 */

	const location = useSelector<RootStoreState, Location | undefined>(state => state.details.selectedLocation)

	/**
	 * Effects/Subscriptions
	 */

	useEffect(() => {
		if (location) {
			dispatch(fetchForecastAction.started(location.id))
		}
	}, [location, dispatch])

	/**
	 * Local Functions
	 */

	//AT THIS TIME KEEPING STATE ON REFRESH IS BEYOND SCOPE
	if (!location) {
		return null
	}

	return (
		<div className='details'>
			<h2 className="weatherHeading">Weather Details:</h2>
			<h3 className="weathSubHeading">{location.name}, {location.sys.country}</h3>			

			<CurrentTemperature location={location}/>
			<ForecastComponent />

		</div>
	)
}

export default DetailsScreen