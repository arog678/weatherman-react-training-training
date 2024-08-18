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
		<h4 className='currentTempHeading'>{heading}</h4>
		<label className='currentTempLabel'>{label}</label>
	</span>
}

export default CurrentTemperatureItem