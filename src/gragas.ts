import { Status, Summoner } from './types';
import { SummonerAPI } from './endpoints/summoner';
import { StatusAPI } from './endpoints/lolStatus';

export class Gragas {
  private apiKey: string;
  private summonerAPI: SummonerAPI;
  private statusAPI: StatusAPI;

  private async initialize() {
    if (this.apiKey) console.log('Initialized');
  }

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.initialize();

    // Endpoints
    this.summonerAPI = new SummonerAPI(apiKey);
    this.statusAPI = new StatusAPI(apiKey);
  }

  // Status endpoint
  async getStatus(): Promise<Status | null> {
    return this.statusAPI.getStatus();
  }
  // Summoner endpoint
  async getSummonerByName(summonerName: string): Promise<Summoner | null> {
    return this.summonerAPI.getSummonerByName(summonerName);
  }
  async getSummonerByPuuid(puuid: string): Promise<Summoner | null> {
    return this.summonerAPI.getSummonerByPuuid(puuid);
  }
}
