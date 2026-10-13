import {WeatherResponseResource} from './current-weather-resource';

/**
 *Current weather assembler
 * @author Mathias Acuache
 */
export class CurrentWeatherAssembler{

  public static toTemperature(resource: WeatherResponseResource):number {
    return resource.current.temperature_2m
  }

}
