import {BaseEntity} from '../../../shared/domain/base-entity';
import {WeatherArea} from '../../../weather/domain/model/weather-area';

export class OutdoorCenters implements BaseEntity {

  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly activityType: WeatherArea,
    public readonly capacity: number,
    public readonly latitude: number,
    public readonly longitude: number,
  ){}

}
