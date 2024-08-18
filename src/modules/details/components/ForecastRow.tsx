import React from 'react'
import '../styles/ForecastRow.scss'

interface ForecastRowProps {
	day: string;
	temp: number;
	weatherDescription: string;
}

const ForecastRow = ({
	day, 
	temp, 
	weatherDescription
}: ForecastRowProps): JSX.Element => {

	return (
		<div className='rowContainer'>
			<label className='rowLabelDay'>{day}</label>
			<label className='rowLabelTemp'>{temp}</label>
			<label>{weatherDescription}</label>
		</div>
	)

}

export default ForecastRow