import { SagaIterator } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchLocationsAction, FetchLocationsPayload } from '../search/actions'
import { fetchForecast, fetchLocations } from '../api/functions'
import { ForecastResponseRaw, Location } from '../api/types'
import { fetchForecastAction, FetchForecastPayload } from '../details/actions'
import { formatForecastData } from '../details/utils/formatForecastData'

function* handleFetchLocations(action: FetchLocationsPayload): SagaIterator {
	const query: string = action.payload
	try {
		const result: Location[] | undefined = yield call(fetchLocations, query)
		if (result) {
			yield put(fetchLocationsAction.done({ params: action.payload, result }))
		}
	} catch (error) {
		yield put(fetchLocationsAction.failed({ params: action.payload, error: error as Error }))
	}
}

function* handleFetchForecast(action: FetchForecastPayload): SagaIterator {
	const query: number = action.payload
	try {
		const result: ForecastResponseRaw | undefined = yield call(fetchForecast, query)
		if (result) {
			const formattedForecastData = formatForecastData(result)
			yield put(fetchForecastAction.done({ 
				params: action.payload, 
				result: formattedForecastData 
			}))
		}
	} catch (error) {
		yield put(fetchForecastAction.failed({ params: action.payload, error: error as Error }))
	}
}

export default function* (): SagaIterator {
	yield takeEvery(fetchLocationsAction.started, handleFetchLocations)
	yield takeEvery(fetchForecastAction.started, handleFetchForecast)
}
