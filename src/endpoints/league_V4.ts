import axios from 'axios';
import { PLATFORM_BASE_URLS, LEAGUE_V4 } from '../helpers/constants';

export default class League_V4 {
  #apiKey: string;
  public region: string;
  constructor(apiKey: string, region: string = 'EUW') {
    this.#apiKey = apiKey;
    this.region = region;
  }
  async getChallengerLeague(region: string, queue: string): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[region || this.region] +
      LEAGUE_V4.BY_QUEUE_CHALLENGER +
      queue;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
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
      LEAGUE_V4.BY_QUEUE_MASTER +
      queue;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
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
      LEAGUE_V4.BY_QUEUE_GRANDMASTER +
      queue;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching grandmaster league:', error);
    }
    return null;
  }
  async getEntriesBySummoner(summonerId: string): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[this.region] + LEAGUE_V4.BY_SUMMONER + summonerId;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching entries by summoner:', error);
    }
    return null;
  }

  async getEntriesByQueueTierDivision(
    queue: string,
    tier: string,
    division: string
  ): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[this.region] +
      `${LEAGUE_V4.ALL_ENTIRES}${queue}/${tier}/${division}`;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching entries by queue/tier/division:', error);
    }
    return null;
  }

  async getLeagueById(leagueId: string): Promise<any> {
    const URL =
      PLATFORM_BASE_URLS[this.region] + LEAGUE_V4.BY_LEAGUE + leagueId;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching league by ID:', error);
    }
    return null;
  }
}
