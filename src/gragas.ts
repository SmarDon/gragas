import { Summoner } from './types';
import { SummonerAPI } from './endpoints/summoner';

export class Gragas {
  private apiKey: string;
  private summonerAPI: SummonerAPI;

  private initialize() {
    console.log(`initialized with api key: ${this.apiKey}`);
  }

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.initialize();

    // Endpoints
    this.summonerAPI = new SummonerAPI(apiKey);
  }

  async getSummonerByName(summonerName: string): Promise<Summoner | null> {
    return this.summonerAPI.getSummonerByName(summonerName);
  }
  async getSummonerByPuuid(puuid: string): Promise<Summoner | null> {
    return this.summonerAPI.getSummonerByPuuid(puuid);
  }
}
