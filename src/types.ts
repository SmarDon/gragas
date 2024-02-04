export interface RiotId {
  name: string;
  tag: string;
  puuid: string;
}

export interface Summoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface ChampionMastery {
  puuid: string;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  tokensEarned: number;
  summonerId: string;
}

export interface Status {
  id: string;
  name: string;
  locales: ReadonlyArray<any>;
  maintenances: ReadonlyArray<any>;
  incidents: ReadonlyArray<any>;
}

export interface Match {
  metadata: Metadata;
  info: object;
}

export interface Metadata {
  dataversion: string;
  matchId: string;
  participants: string[];
}

export type regionBaseUrls = {
  [key: string]: string;
};
