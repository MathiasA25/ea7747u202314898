import {WeatherResponseResource} from './current-weather-resource';

/**
 *Current weather assembler in this
 * @author Mathias Acuache
 */
export class WeatherAssembler{

  public static toTemperature(resource: WeatherResponseResource):number {
    return resource.current.temperature_2m
  }

}

