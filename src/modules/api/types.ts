export interface FetchLocationsResponse {
    list: Location[]
    count: number
}

export interface Location {
    id: number
    name: string
    main: Weather
    sys: Country
}

export interface Weather {
    temp: number
    temp_max: number
    temp_min: number
    humidity: number
    pressure: number
}

export interface Country {
    country: string
}

export interface FetchForecastResponse {
    list: Forecast[]
    count: number
}

export interface Forecast {
    dt: number
    dt_txt: string
    main: Weather
    weather: WeatherDescription[]
}

export interface WeatherDescription {
    description: string
    icon: string
}

export interface ForecastResponseRaw {
    cnt: number
    list: ForecastResponseItemRaw[]
}

export interface ForecastResponseItemRaw {
    dt: number //NOTE: Will be given as a unix date number
    weather: WeatherRaw[]
    temp: tempRaw
    humidity: number
    pressure: number
}

export interface WeatherRaw {
    description: string
    icon: string
}

export interface tempRaw {
    day: number
    max: number
    min: number
}