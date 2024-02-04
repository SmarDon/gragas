import axios from 'axios';
import { PLATFORM_BASE_URLS, SPECTATOR_V4 } from '../helpers/constants';

export class Spectator_V4 {
  #apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.#apiKey = apiKey;
    this.region = region;
  }
  async getGamesBySummonerId(summonerId: string): Promise<JSON | null> {
    const URL =
      PLATFORM_BASE_URLS[this.region] +
      SPECTATOR_V4.BY_ENCRYPTED_SUMMONER_ID +
      summonerId;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching games:', error);
    }
    return null;
  }
  async getFeaturedGames(): Promise<JSON | null> {
    const URL = PLATFORM_BASE_URLS[this.region] + SPECTATOR_V4.FEATURED_GAMES;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching games:', error);
    }
    return null;
  }
}
