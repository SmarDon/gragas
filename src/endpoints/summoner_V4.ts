import axios from 'axios';
import { Summoner } from '../types';
import { PLATFORM_BASE_URLS, SUMMONER_V4 } from '../helpers/constants';

export default class Summoner_V4 {
  #apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.#apiKey = apiKey;
    this.region = region;
  }
  async getSummonerByName(
    summonerName: string,
    region: string
  ): Promise<Summoner | null> {
    const URL =
      PLATFORM_BASE_URLS[region || this.region] +
      SUMMONER_V4.BY_NAME +
      summonerName;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
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
    const URL =
      PLATFORM_BASE_URLS[region || this.region] + SUMMONER_V4.BY_PUUID + puuid;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as Summoner;
    } catch (error) {
      console.error('Error fetching summoner:', error);
    }
    return null;
  }
}
