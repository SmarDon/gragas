import axios from 'axios';
import { RIOT_API_BASE_URL, MATCH_URL } from '../constants';
import { Match } from '../types';

export class MatchAPI {
  private apiKey: string;
  private url: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.url = RIOT_API_BASE_URL + MATCH_URL;
  }

  async getMatchesByPuuid(
    puuid: string,
    count: number,
    index: number
  ): Promise<Object | null> {
    try {
      const response = await axios.get(
        `${this.url}/by-puuid/${puuid}/ids?${index ? index : 0}&count=` + count,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );

      return response.data as Object;
    } catch (error) {
      console.error('Error fetching match ids:', error);
      return null;
    }
  }
  async getMatchById(matchId: string): Promise<Match | null> {
    try {
      const response = await axios.get(`${this.url}/` + matchId, {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });

      return response.data as Match;
    } catch (error) {
      console.error('Error fetching match:', error);
      return null;
    }
  }

  async getMatchTimelineById(matchId: string): Promise<Match | null> {
    try {
      const response = await axios.get(`${this.url}/` + matchId + '/timeline', {
        headers: {
          'X-Riot-Token': this.apiKey,
        },
      });

      return response.data as Match;
    } catch (error) {
      console.error('Error fetching match timeline:', error);
      return null;
    }
  }
}
