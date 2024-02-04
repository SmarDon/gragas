import axios from 'axios';
import { Summoner } from '../types';
import { PLATFORM_BASE_URLS, SUMMONER } from '../helpers/constants';

export default class Summoner_V4 {
  private apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }
  async getSummonerByName(
    summonerName: string,
    region: string
  ): Promise<Summoner | null> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[region] + SUMMONER.BY_NAME + summonerName,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
    }
    return null;
  }

  async getSummonerByPuuid(
    puuid: string,
    region: string
  ): Promise<Summoner | null> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[region] + SUMMONER.BY_PUUID + puuid,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
    }
    return null;
  }
}
