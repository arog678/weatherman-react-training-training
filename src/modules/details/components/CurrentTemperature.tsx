import React from 'react'
import { Location } from '../../api/types'
import CurrentTemperatureItem from './CurrentTemperatureItem'
import '../styles/CurrentTemperature.scss'

interface CurrentTemperatureProp {
	location: Location
}

const CurrentTemperature = ({
	location
}: CurrentTemperatureProp): JSX.Element => {

	return (
		<div>
			<h4 className="temperatureDisplay">{location.main.temp}</h4>
			<div className='currentWeatherDetails'>
				<CurrentTemperatureItem 
					heading={'Temp min'}
					label={location.main.temp_min + ' °C'}
				/>
				<CurrentTemperatureItem 
					heading={'Temp max'}
					label={location.main.temp_max + ' °C'}
				/>
				<CurrentTemperatureItem 
					heading={'Humidity'}
					label={location.main.temp_max + ' %'}
				/>
				<CurrentTemperatureItem 
					heading={'Humidity'}
					label={location.main.pressure + ' hPa'}
				/>
			</div>
		</div>
	)
}

export default CurrentTemperature