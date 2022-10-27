type Clouds = {
  all: number;
};

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
  list: Array<ListItem>
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
} | undefined;

type ListItem = {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  weather: Array<WeatherDetail>;
  wind: Wind;
}

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




