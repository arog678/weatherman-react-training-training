import React from 'react'
import '../styles/CurrentTemperatureItem.scss'

interface CurrentTemperatureItemProps {
	heading: string
	label: string
}

const CurrentTemperatureItem = ({
	heading,
	label
}: CurrentTemperatureItemProps): JSX.Element => {

	return <span className='currentTempBox'>
		<h3>{heading}</h3>
		<label>{label}</label>
	</span>
}

export default CurrentTemperatureItem