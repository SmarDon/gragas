import axios from 'axios';
import { PLATFORM_BASE_URLS, MATCH } from '../helpers/constants';
import { Match } from '../types';

export default class MatchAPI {
  private apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }
  async getMatchesByPuuid(
    puuid: string,
    count: number,
    index: number
  ): Promise<Match[] | void> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] + MATCH.BY_PUUID + puuid,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Match[];
    } catch (error) {
      console.error('Error fetching match ids:', error);
    }
  }
  async getMatchById(matchId: string): Promise<Match | void> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] + MATCH.BY_ID + matchId,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Match;
    } catch (error) {
      console.error('Error fetching match ids:', error);
    }
  }
  async getMatchTimelineById(matchId: string): Promise<Match | void> {
    try {
      const response = await axios.get(
        PLATFORM_BASE_URLS[this.region] + MATCH.BY_ID + matchId + '/timeline',
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Match;
    } catch (error) {
      console.error('Error fetching match ids:', error);
    }
  }
}
