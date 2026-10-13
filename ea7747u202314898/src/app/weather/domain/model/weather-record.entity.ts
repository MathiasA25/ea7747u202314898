/**
 * Weather Record entity for the collections
 *
 * @author Mathias Acuache
 */
export class WeatherRecord {
  constructor(
    public readonly _temperature: number,
    public readonly _temperatureUnit: string,
    public readonly _observedAt: string,
  ) {}

  get temperature(): number {return this._temperature}
  get temperatureUnit(): string {return this._temperatureUnit}
  get observedAt(): string {return this._observedAt}
}
