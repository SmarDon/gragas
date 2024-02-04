// Riot API URL CONSTANTS
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

export const ACCOUNT_V1 = '/riot/account/v1/accounts/by-riot-id/';

export const STATUS_V4 = '/lol/status/v4/platform-data';

export const SUMMONER_V4 = {
  BY_PUUID: '/lol/summoner/v4/summoners/by-puuid/',
  BY_NAME: '/lol/summoner/v4/summoners/by-name/',
  BY_ACCOUNT_ID: '/lol/summoner/v4/summoners/by-account/',
};

export const MATCH_V5 = {
  BY_PUUID: '/lol/match/v5/matches/by-puuid/',
  BY_ID: '/lol/match/v5/matches/',
};

export const CHAMPION_MASTERY_V4 = {
  BY_PUUID: '/lol/champion-mastery/v4/champion-masteries/by-puuid/',
  SCORES: '/lol/champion-mastery/v4/scores/by-puuid/',
};

export const LEAGUE_V4 = {
  BY_QUEUE_CHALLENGER: '/lol/league/v4/challengerleagues/by-queue/',
  BY_QUEUE_GRANDMASTER: '/lol/league/v4/grandmasterleagues/by-queue/',
  BY_QUEUE_MASTER: '/lol/league/v4/masterleagues/by-queue/',
  BY_SUMMONER: '/lol/league/v4/entries/by-summoner/',
  ALL_ENTIRES: '/lol/league/v4/entries/',
  BY_LEAGUE: '/lol/league/v4/leagues/',
};

export const LEAGUE_EXP_V4 = '/lol/league-exp/v4/entries/';
