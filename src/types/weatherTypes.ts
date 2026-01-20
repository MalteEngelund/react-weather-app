
// jeg bruger <any> pt.
export interface WeatherTypes {
  latitude:              number;
  longitude:             number;
  generationtime_ms:     number;
  utc_offset_seconds:    number;
  timezone:              string;
  timezone_abbreviation: string;
  elevation:             number;
  daily_units:           DailyUnits;
  daily:                 Daily;
}

export interface Daily {
  time:               Date[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode:        number[];
}

export interface DailyUnits {
  time:               string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  weathercode:        string;
}
