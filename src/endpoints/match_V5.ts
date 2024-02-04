import axios from 'axios';
import { REGION_BASE_URLS, MATCH } from '../helpers/constants';
import { Match } from '../types';

export default class Match_V5 {
  private apiKey: string;
  public region: string;

  constructor(apiKey: string, region: string = 'EUW') {
    this.apiKey = apiKey;
    this.region = region;
  }
  async getMatchesByPuuid(
    puuid: string,
    count: number | 20,
    start: number | 0
  ): Promise<Match[] | null> {
    try {
      const response = await axios.get(
        REGION_BASE_URLS[this.region] +
          MATCH.BY_PUUID +
          puuid +
          `/ids?count=${count}&start=${start}`,
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
    return null;
  }
  async getMatchById(matchId: string): Promise<Match | null> {
    try {
      const response = await axios.get(
        REGION_BASE_URLS[this.region] + MATCH.BY_ID + matchId,
        {
          headers: {
            'X-Riot-Token': this.apiKey,
          },
        }
      );
      return response.data as Match;
    } catch (error) {
      console.error('Error fetching match:', error);
    }
    return null;
  }
  async getMatchTimelineById(matchId: string): Promise<Match | null> {
    try {
      const response = await axios.get(
        REGION_BASE_URLS[this.region] + MATCH.BY_ID + matchId + '/timeline'
      );
      return response.data as Match;
    } catch (error) {
      console.error('Error fetching match timeline:', error);
    }
    return null;
  }
}
