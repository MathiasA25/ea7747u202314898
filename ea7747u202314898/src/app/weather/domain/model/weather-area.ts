
export const WEATHER_AREAS = [
  'hiking',
  'running',
  'cycling',
  'trekking'
] as const;

export type WeatherArea = (typeof WEATHER_AREAS)[number];

export function isWeatherArea(value: string): value is WeatherArea {
  return (WEATHER_AREAS as readonly string[]).includes(value);
}
