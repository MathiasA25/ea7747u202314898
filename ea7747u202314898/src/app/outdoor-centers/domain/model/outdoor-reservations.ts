import {BaseEntity} from '../../../shared/domain/base-entity';
import {WeatherArea} from '../../../weather/domain/model/weather-area';


export class OutdoorReservation implements BaseEntity{

  constructor(
    public readonly id: number,
    public readonly outdoorCenterId: number,
    public readonly activityType: WeatherArea,
    public readonly participantName: string,
  ) { }

}
 participantName, participants,
  weatherTemperature, reservedAt
