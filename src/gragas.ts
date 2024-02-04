import {
  SummonerAPI,
  MatchAPI,
  StatusAPI,
  ChampionMasteryAPI,
  AccountAPI,
} from './endpoints/endpoints';

export default class Gragas {
  private apiKey: string;
  public region: string;
  public status: StatusAPI;
  public summoner: SummonerAPI;
  public match: MatchAPI;
  public championMastery: ChampionMasteryAPI;
  public account: AccountAPI;

  constructor(apiKey: string, region: string) {
    this.apiKey = apiKey;
    this.region = region;
    this.status = new StatusAPI(apiKey);
    this.summoner = new SummonerAPI(apiKey);
    this.match = new MatchAPI(apiKey);
    this.championMastery = new ChampionMasteryAPI(apiKey);
    this.account = new AccountAPI(apiKey);
  }
}
