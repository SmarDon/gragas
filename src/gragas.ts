import { Status, Summoner, Match } from './types';
import { SummonerAPI } from './endpoints/summoner';
import { StatusAPI } from './endpoints/lolStatus';
import { MatchAPI } from './endpoints/match';

export class Gragas {
  private apiKey: string;
  private summonerAPI: SummonerAPI;
  private statusAPI: StatusAPI;
  private matchAPI: MatchAPI;

  private async initialize() {
    const status = await this.statusAPI.getStatus();
    if (this.apiKey && status) console.log('Initialized');
  }

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    // Endpoints
    this.summonerAPI = new SummonerAPI(apiKey);
    this.statusAPI = new StatusAPI(apiKey);
    this.matchAPI = new MatchAPI(apiKey);

    this.initialize();
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

  // Match endpoint
  async getMatchesByPuuid(
    puuid: string,
    count: number,
    index: number
  ): Promise<Object | null> {
    return this.matchAPI.getMatchesByPuuid(puuid, count, index);
  }
  async getMatchById(matchId: string): Promise<Match | null> {
    return this.matchAPI.getMatchById(matchId);
  }
  async getMatchTimelineById(matchId: string): Promise<Object | null> {
    return this.matchAPI.getMatchTimelineById(matchId);
  }
}
