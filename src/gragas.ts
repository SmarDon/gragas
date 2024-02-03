import { SummonerAPI, MatchAPI, StatusAPI } from './endpoints/endpoints';

export default class Gragas {
  private apiKey: string;
  public region: string;
  public status: StatusAPI;
  public summoner: SummonerAPI;
  public match: MatchAPI;

  constructor(apiKey: string, region: string) {
    this.apiKey = apiKey;
    this.region = region;
    this.status = new StatusAPI(apiKey);
    this.summoner = new SummonerAPI(apiKey);
    this.match = new MatchAPI(apiKey);
  }
}
