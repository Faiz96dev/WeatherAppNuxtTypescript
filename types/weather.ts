type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type WeatherType = {
  coord: Coord;
  weather: Array<WeatherDetail>;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
} | undefined;

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Coord = {
  lon: number;
  lat: number;
};

type WeatherDetail = {
  id: number;
  main: string;
  description: string;
  icon: string;
};



type Rain = {
  "1h": number;
};

type Clouds = {
  all: number;
};


