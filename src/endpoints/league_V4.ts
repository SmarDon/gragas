import axios from 'axios';
import { PLATFORM_BASE_URLS, LEAGUE } from '../helpers/constants';

export default class LeagueAPI {
  private apiKey: string;
  public region: string;
  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }
  async getChallengerLeague(region: string, queue: string): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[region || this.region] +
      LEAGUE.BY_QUEUE_CHALLENGER +
      queue;
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
  async getMasterLeague(region: string, queue: string): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[region || this.region] +
      LEAGUE.BY_QUEUE_MASTER +
      queue;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching master league:', error);
    }
    return null;
  }

  async getGrandmasterLeague(region: string, queue: string): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[region || this.region] +
      LEAGUE.BY_QUEUE_GRANDMASTER +
      queue;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching grandmaster league:', error);
    }
    return null;
  }
}
