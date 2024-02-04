import axios from 'axios';
import { PLATFORM_BASE_URLS, LOL_CHALLENGES_V1 } from '../helpers/constants';

export default class LolChallenges_V1 {
  #apiKey: string;
  public region: string;
  constructor(apiKey: string, region: string = 'EUW') {
    this.#apiKey = apiKey;
    this.region = region;
  }
  async getConfig(region: string): Promise<JSON | null> {
    const URL = PLATFORM_BASE_URLS[region] + LOL_CHALLENGES_V1.CONFIG;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
    return null;
  }
  async getPercentiles(region: string): Promise<JSON | null> {
    const URL = PLATFORM_BASE_URLS[region] + LOL_CHALLENGES_V1.PERCENTILES;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
    return null;
  }
  async getConfigByChallengeId(
    challengeId: number,
    region: string
  ): Promise<JSON | null> {
    const URL =
      PLATFORM_BASE_URLS[region] +
      LOL_CHALLENGES_V1.CHALLENGE_BY_ID +
      `${challengeId}/config`;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
    return null;
  }
  async getLeaderboardByChallengeId(
    challengeId: number,
    level: number,
    region: string
  ): Promise<JSON | null> {
    const URL =
      PLATFORM_BASE_URLS[region] +
      LOL_CHALLENGES_V1.CHALLENGE_BY_ID +
      `${challengeId}/leaderboard/by-level/${level}`;

    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
    return null;
  }
  async getPercentilesByChallengeId(
    challengeId: number,
    region: string
  ): Promise<JSON | null> {
    const URL =
      PLATFORM_BASE_URLS[region] +
      LOL_CHALLENGES_V1.CHALLENGE_BY_ID +
      `${challengeId}/percentiles`;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
    return null;
  }
  async getPlayerData(puuid: string): Promise<JSON | null> {
    const URL =
      PLATFORM_BASE_URLS[this.region] +
      LOL_CHALLENGES_V1.PLAYER_DATA_BY_PUUID +
      puuid;
    try {
      const response = await axios.get(URL, {
        headers: {
          'X-Riot-Token': this.#apiKey,
        },
      });
      return response.data as JSON;
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
    return null;
  }
}
