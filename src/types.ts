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
