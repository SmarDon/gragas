export interface Summoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
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
  participants: Array<string>;
}
