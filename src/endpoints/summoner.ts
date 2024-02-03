import axios from 'axios';
import { Summoner } from '../types';
import { PLATFORM_BASE_URLS, SUMMONER } from '../helpers/constants';

export default class SummonerAPI {
  private apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }
  async getSummonerByName(
    summonerName: string,
    region: string
  ): Promise<Summoner | void> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[region] + SUMMONER.BY_NAME + summonerName
      );
      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
    }
  }

  async getSummonerByPuuid(
    puuid: string,
    region: string
  ): Promise<Summoner | void> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[region] + SUMMONER.BY_PUUID + puuid
      );
      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
    }
  }
}
