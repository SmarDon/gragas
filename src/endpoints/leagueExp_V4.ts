import axios from 'axios';
import { PLATFORM_BASE_URLS, LEAGUE_EXP_V4 } from '../helpers/constants';

export default class LeagueExp_V4 {
  private apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }

  async getLeagueExp(
    queue: string,
    tier: string,
    division: string,
    region: string
  ): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[region || this.region] +
      LEAGUE_EXP_V4 +
      `${queue}/${tier}/${division}`;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching challenger league:', error);
    }
    return null;
  }
}
