/**
 *Current weather resource with the differents atributes
 * @author Mathias Acuache
 */
export interface CurrentWeatherResource {
  time: string;
  interval: number;
  temperature_2m: number;
}

export interface WeatherCurrentResource {
  time: string;
  interval: number;
  temperature_2m: number;
}

export interface  WeatherResponseResource {
  latitude: number;
  longitude: number;
  generation_time_ms: number;
  offset_seconds_ms: number;
  timezone: string;
  timezone_abbr: string;
  elevation: number;
  current_units: CurrentWeatherResource
  current: WeatherCurrentResource;
}
