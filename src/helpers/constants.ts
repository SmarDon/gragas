export const PLATFORM_BASE_URLS: { [key: string]: string } = {
  EUW: 'https://euw1.api.riotgames.com',
  EUNE: 'https://eun1.api.riotgames.com',
  NA: 'https://na1.api.riotgames.com',
  BR: 'https://br1.api.riotgames.com',
  JP: 'https://jp1.api.riotgames.com',
  KR: 'https://kr.api.riotgames.com',
  LA1: 'https://la1.api.riotgames.com',
  LA2: 'https://la2.api.riotgames.com',
  OC1: 'https://oc1.api.riotgames.com',
  TR1: 'https://tr1.api.riotgames.com',
  RU: 'https://ru.api.riotgames.com',
};

export const REGION_BASE_URLS: { [key: string]: string } = {
  EUW: 'https://europe.api.riotgames.com',
  EUNE: 'https://europe.api.riotgames.com',
  RU: 'https://europe.api.riotgames.com',
  NA: 'https://americas.api.riotgames.com',
  BR: 'https://americas.api.riotgames.com',
  KR: 'https://asia.api.riotgames.com',
  JP: 'https://asia.api.riotgames.com',
  TR1: 'https://asia.api.riotgames.com',
  LA1: 'https://sea.api.riotgames.com',
  LA2: 'https://sea.api.riotgames.com',
  OC1: 'https://sea.api.riotgames.com',
};

export const STATUS = '/lol/status/v4/platform-data';

export const SUMMONER = {
  BY_PUUID: '/lol/summoner/v4/summoners/by-puuid/',
  BY_NAME: '/lol/summoner/v4/summoners/by-name/',
  BY_ACCOUNT_ID: '/lol/summoner/v4/summoners/by-account/',
};

export const MATCH = {
  BY_PUUID: '/lol/match/v5/matches/by-puuid/',
  BY_ID: '/lol/match/v5/matches/',
};

const puuid =
  'ZoX7ZzQeA9cgjPso_f-ohEVmvbtS8rpqzjEB2WfqbiJU3frkm_3ErMQurV8X8I7xBFOY5tJ9usy6HQ';
